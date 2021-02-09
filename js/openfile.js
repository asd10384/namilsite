function openfile(list, id, title, discription, page, par) {
    $(function () {
        if (list.indexOf(par) > -1) {
            // txt 파일 가져오기 (load)
            // 읽어올문서의 파일명, 확인용 함수(완료여부)
            $(`#${id}`).load(`${par}`, function (txt, status) {
                if (status == 'error') {
                    $(`#${id}`).html(`<link rel="stylesheet" href="./csss/err.css" />
                    <div id="err">
                        <p>파일을 찾을수 없습니다.</p>
                    </div>`);
                } else {
                    txt = `<link rel="stylesheet" href="./csss/${page}.css" />
                    <meta name="image" content="https://namilsite.netlify.app/images/${page}.png" />
                    <meta property="url" content="https://namilsite.netlify.app/indexcopy.html?page=${page}" />
                    
                    <meta property="og:url" content="https://namilsite.netlify.app/indexcopy.html?page=${page}" />
                    <meta property="og:image" content="https://namilsite.netlify.app/images/${page}.png" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:alt" content="${title}" />
                    <meta property="og:description" content="${discription}" />

                    ${txt}`;
                    $(`#${id}`).html(txt);
                }
            });
        } else {
            $(`#${id}`).html(`<link rel="stylesheet" href="./csss/err.css" />
            <div id="err">
                <p>파일을 찾을수 없습니다.</p>
            </div>`);
        }
    });
}
