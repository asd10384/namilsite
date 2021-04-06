
var classnum = localStorage.getItem('classnum');
if (classnum == undefined || classnum == '0') {
    alert('반설정을 먼저 한뒤 다시 시도해주세요.');
    location.href = '../index.html?page=classset';
}

$().ajax({
    type: "POST",
    url: "../file/zoomid.json",
    success: function(data) {
        $.each(JSON.parse(data), function(index, entry) {
            console.log(index, entry);
        });
    }
});
$().load(`../file/zoomid.json`, function (txt, status) {
    if (status == 'error') {
        $(`#${id}`).html(`<link rel="stylesheet" href="./css/err.css" />
        <div id="err">
            <p>파일을 찾을수 없습니다.</p>
        </div>`);
    } else {
        console.log(JSON.parse(txt));
    }
});