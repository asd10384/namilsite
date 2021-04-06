
var classnum = localStorage.getItem('classnum');
if (classnum == undefined || classnum == '0') {
    alert('반설정을 먼저 한뒤 다시 시도해주세요.');
    location.href = '../index.html?page=classset';
}

$(function () {
    $(`#zoom`).load(`../file/zoomid.json`, function (txt, status) {
        console.log(1);
        if (status == 'error') {
            $(`#zoom`).html(`<link rel="stylesheet" href="./css/err.css" />
            <div id="err">
                <p>파일을 찾을수 없습니다.</p>
            </div>`);
        } else {
            var zoomid = JSON.parse(txt);
            console.log(zoomid);
        }
    });
});