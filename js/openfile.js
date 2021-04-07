
function openfile(id, page, par) {
    $(function () {
        // txt 파일 가져오기 (load)
        // 읽어올문서의 파일명, 확인용 함수(완료여부)
        $(`#${id}`).load(`${par}`, function (txt, status) {
            if (status == 'error') {
                $(`#${id}`).html(`<link rel="stylesheet" href="./css/err.css" />
                <div id="err">
                    <p>파일을 찾을수 없습니다.</p>
                </div>`);
            } else {
                txt = `<link rel="stylesheet" href="./css/${page}.css" />

                ${txt}`;
                $(`#${id}`).html(txt);
            }
        });
    });

    // 내정보 -> 몇반정보로 변경
    myac();
}
