const weeklist = ['일','월','화','수','목','금','토'];

var classnum = localStorage.getItem('classnum');
if (classnum == undefined || classnum == '0') {
    alert('반설정을 먼저 한뒤 다시 시도해주세요.');
    location.href = '../index.html?page=classset';
}

$(function () {
    const week = weeklist[new Date().getDay()];
    $(`#zoomid`).load(`../file/zoomid.json`, function (txt, status) {
        console.log(1);
        if (status == 'error') {
            $(`#zoomid`).show();
            $(`#zoomid`).html(`
                <link rel="stylesheet" href="./css/err.css" />
                <div id="err">
                    <p>파일을 찾을수 없습니다.</p>
                </div>
            `);
        } else {
            $(`#zoomid`).hide();
            const zoomid = JSON.parse(txt);
            $(`#classtime`).load(`../file/room${classnum}.json`, function (rtxt, status) {
                if (status == 'error') {
                    $(`#classtime`).show();
                    $(`#classtime`).html(`
                        <p>${classnum}반 시간표가 아직 추가되지 않았습니다.</p>
                    `);
                } else {
                    $(`#classtime`).hide();
                    const classtime = JSON.parse(rtxt);
                    const classtime_name1 = Object.keys(classtime);

                    var chtml = ``;
                    for (i in classtime_name1) {
                        if (week == classtime_name1[i]) {
                            const classtime_name2 = Object.keys(classtime[classtime_name1[i]]);
                            for (j in classtime_name2) {
                                var cltxt = classtime[classtime_name1[i]][classtime_name2[j]];
                                var cllist = cltxt.replace('(','').replace(')','').split(' ');
                                var zoomidtxt = zoomid[cllist[0]][cllist[1]];
                                chtml += `<div id="clt">${cltxt}<a onclick='gozoom(${zoomidtxt})'>${zoomidtxt}</a></div>`;
                            }
                        }
                    }
                    $(`#zoom`).html(chtml);
                }
            });
        }
    });
});