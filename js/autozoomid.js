
const weeklist = ['일','월','화','수','목','금','토'];

var classnum = localStorage.getItem('classnum');
if (classnum == undefined || classnum == '0') {
    alert('반설정을 먼저 한뒤 다시 시도해주세요.');
    location.href = '../index.html?page=classset';
}

// 시작
loadzoomid({});

function loadzoomid({hourset = -1, weekset = 'x'}) {
    $(function () {
        const newdate = new Date();
        var hour = (hourset === -1) ? newdate.getHours() : hourset;
        var week = (weekset === 'x') ? weeklist[newdate.getDay()] : weekset;
        var nowweek = week;
        var hourtext = false;
        var weekendtext = false;
        if (hour >= 22) {
            week = weeklist[newdate.getDay()+1];
            hourtext = true;
        }
        if (['토','일'].includes(week)) {
            week = '월';
            weekendtext = true;
        }
        $(`#zoomid`).load(`../file/zoomid.json`, function (txt, status) {
            if (status == 'error') {
                $(`#zoomid`).show();
                $(`#zoomid`).html(`
                    <link rel="stylesheet" href="./css/err.css" />
                    <div id="err">
                        <p>파일을 찾을수 없습니다.</p>
                    </div>
                `);
            } else {
                $(`#zoomcode`).hide();
                $(`#zoomid`).hide();
                const zoomid = JSON.parse(txt);
                $(`#classtime`).load(`../file/room${classnum}.json`, function (rtxt, status) {
                    if (status == 'error') {
                        $(`#zoom`).html(`
                            <p>
                                ${classnum}반 시간표가 아직
                                <br/>
                                추가되지 않았습니다.
                            </p>
                        `);
                    } else {
                        $(`#classtime`).hide();
                        const classtime = JSON.parse(rtxt);
                        const classtime_name1 = Object.keys(classtime);
                        var chtml = '';
                        var zoomidtxt;

                        if (hourtext) {
                            chtml += `<div id="msg1">10시 이후에는<br/>다음날 시간표 표시</div>`;
                        }
                        if (weekendtext) {
                            chtml += `<div id="msg1">${nowweek}요일은 ${week}요일 시간표를<br/>미리 볼수있습니다.</div>`;
                        }
                        if (classtime_name1.indexOf(week) > -1) {
                            chtml += `<div id="msg2">${week}요일 시간표</div>`;
                        }
                        const classtime_name2 = Object.keys(classtime[week]);
                        for (i in classtime_name2) {
                            var cltxtlist = classtime[week][classtime_name2[i]];
                            chtml += `<div id="clt"><a id="clt1">${Number(i)+1}교시 </a>`;
                            for (j in cltxtlist) {
                                var cltxt = cltxtlist[j];
                                var cllist = cltxt.replace('(','').replace(')','').split(' ');
                                if (cllist[0] == undefined || cllist[0] == '') continue;
                                try {
                                    zoomidtxt = zoomid[cllist[0]][cllist[1]];
                                } catch(err) {
                                    zoomidtxt = undefined;
                                }
                                chtml += `<a id="clt2">${cltxt}</a><br/><a id="clt3"`;
                                if (zoomidtxt == undefined || zoomidtxt == '-') {
                                    zoomidtxt = `
                                        zoom번호 사이트에서<br/>직접 입력해주세요.`;
                                    chtml += `href="./index.html?page=zoomid"`;
                                } else {
                                    chtml += `href="#" onclick="gozoom('${zoomidtxt}')"`;
                                }
                                chtml += `>${zoomidtxt}</a><br/>`;
                            }
                            chtml += `</div>`;
                        }
                        $(`#zoom`).html(chtml);
                    }
                });
            }
        });
    });
}

function gozoom(url = '000-000-0000') {
    var code = url.split('-');
    var urlid = url.replace(/-/gi, '').replace(/ /gi, '');
    const element = document.createElement('textarea');
    element.value = code[2];
    element.setAttribute('readonly', '');
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
    
    const zoompage = window.open('https://us04web.zoom.us/j/' + urlid, '_blank');
    setTimeout(() => {
        try {
            zoompage.close();
        } catch(err) {}
    }, 5000);
}
