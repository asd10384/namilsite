
function openfile(id, page, par) {
    var xhttp = new XMLHttpRequest();
    var allElements = document.getElementsByTagName('*');
    console.log(allElements);
    Array.prototype.forEach.call(allElements, (el) => {
        if (par) {
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                } else {
                    $(`#pagecss`).attr(`href`, `./css/err.css`);
                    $(`#${id}`).html(`
                        <div id="err">
                            <p>파일을 찾을수 없습니다.</p>
                        </div>
                    `);
                }
            };
            $(`#pagecss`).attr(`href`, `./css/${page}.css`);
            xhttp.open('GET', par, true);
            xhttp.send();
        }
    });
}
