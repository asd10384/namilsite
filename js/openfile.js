
function openfile() {
    var allelmnt, elmnt, file, xhttp;
    allelmnt = document.getElementsByTagName("*");
    for (i = 0; i < allelmnt.length; i++) {
        elmnt = allelmnt[i];
        file = elmnt.getAttribute("pagehtml");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200 || this.status == 202) {
                            elmnt.innerHTML = this.responseText;
                        }
                    else { // (this.status == 404)
                            elmnt.innerHTML = "페이지를 찾을수 없습니다. ㅎㅅㅎ";
                        }
                    elmnt.removeAttribute("pagehtml");
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
        }
    }
}
