
const weeklist = ['월','화','수','목','금','토','일'];

var classnum = localStorage.getItem('classnum');
if (classnum == undefined || classnum == '0') {
    alert('반설정을 먼저 한뒤 다시 시도해주세요.');
    location.href = '../index.html?page=classset';
}

$(function () {
    const week = weeklist[new Date().getDay()];
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
                    var chtml = '';
                    var zoomidtxt;

                    if (weeklist.indexOf(week) > -1) {
                        var weektxt = weeklist[weeklist.indexOf(week)];
                        if (['토','일'].includes(weektxt)) weektxt = `월`;
                        chtml += `${weektxt}요일 시간표`;
                        const classtime_name = Object.keys(classtime[weektxt]);
                        for (i in classtime_name) {
                            var cltxt = classtime[weektxt][classtime_name[i]];
                            var cllist = cltxt.replace('(','').replace(')','').split(' ');
                            if (cllist[0] == undefined || cllist[0] == '') continue;
                            try {
                                zoomidtxt = zoomid[cllist[0]][cllist[1]];
                            } catch(err) {
                                zoomidtxt = undefined;
                            }
                            chtml += `<div id="clt"><a id="clt1">${Number(j)+1}교시 </a><a id="clt2">${cltxt}</a><br/><a id="clt3"`;
                            if (zoomidtxt == undefined || zoomidtxt == '-') {
                                zoomidtxt = `
                                    zoom번호 사이트에서<br/>직접 입력해주세요.`;
                            } else {
                                chtml += `href="#" onclick="gozoom('${zoomidtxt}')"`;
                            }
                            chtml += `>${zoomidtxt}</a></div>`;
                        }
                    }
                    $(`#zoom`).html(chtml);
                }
            });
        }
    });
});
