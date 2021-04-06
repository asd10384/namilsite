
var classnum = localStorage.getItem('classnum');
if (classnum == undefined || classnum == '0') {
    alert('반설정을 먼저 한뒤 다시 시도해주세요.');
    location.href = '../index.html?page=classset';
}

$(function () {
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
            var zoomid = JSON.parse(txt);
            $(`#classtime`).load(`../file/room${classnum}.txt`, function (txt, status) {
                console.log(1);
                if (status == 'error') {
                    $(`#classtime`).show();
                    $(`#classtime`).html(`
                        <p>${classnum}반 시간표가 아직 추가되지 않았습니다.</p>
                    `);
                } else {
                    $(`#classtime`).hide();
                    var chtml = ``;
                    
                    var text = txt.split(`\n`);
                    for (i=0;i<text.length-1;i++) {
                        var args = text[i].split(/  /g);
                        chtml += `ㄱ`;
                        for (j=0;j<args.length;j++) {
                            chtml += `ㄴ${args[j]}ㄴ`;
                        }
                    }
                    chtml += `ㄷ`;
                    console.log(chtml);
                }
            });
        }
    });
});