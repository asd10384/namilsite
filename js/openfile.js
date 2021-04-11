
function openfile(id, par) {
    $(function () {
        // txt 파일 가져오기 (load)
        // 읽어올문서의 파일명, 확인용 함수(완료여부)
        $(`#${id}`).load(`${par}`, function (txt, status) {
            if (status == 'error') {
                $(`#${id}`).html(`
                    <div id="err">
                        <p>파일을 찾을수 없습니다.</p>
                    </div>
                `);
            } else {
                $(`#${id}`).html(txt);
            }
        });
    });
}
