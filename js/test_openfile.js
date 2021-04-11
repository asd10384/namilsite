
function openfile(id, page, par) {
    var xhttp = new XMLHttpRequest();
    if (!(this.readyState == 4 && this.status == 200)) {
        $(`#pagecss`).attr(`href`, `./css/${page}.css`);
    } else {
        $(`#pagecss`).attr(`href`, `./css/err.css`);
        $(`#${id}`).html(`
            <div id="err">
                <p>파일을 찾을수 없습니다.</p>
            </div>
        `);
    }
    xhttp.open('GET', par, true);
    xhttp.send();
    document.getElementById('#main').innerHTML = 'tse1';
    // var allElements = document.getElementsByTagName('*');
    // Array.prototype.forEach.call(allElements, (el) => {
    //     console.log(el);
    //     if (par) {
    //         xhttp.onreadystatechange = function () {
    //             if (this.readyState == 4 && this.status == 200) {
    //                 el.outerHTML = this.responseText;
    //                 $(`#pagecss`).attr(`href`, `./css/${page}.css`);
    //             } else {
    //                 $(`#pagecss`).attr(`href`, `./css/err.css`);
    //                 $(`#${id}`).html(`
    //                     <div id="err">
    //                         <p>파일을 찾을수 없습니다.</p>
    //                     </div>
    //                 `);
    //             }
    //         };
    //         xhttp.open('GET', par, true);
    //         xhttp.send();
    //     }
    // });
}
