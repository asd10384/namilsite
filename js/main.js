window.onload = function() {
    var list = [
        'err',
        'html',
        'zoomid',
        'classtime'
    ];
    var name = [
        '에러',
        '사이트 모음',
        '줌번호',
        '시간표 모음'
    ];
    var dis = [
        'page error',
        '남일고 사이트 모음',
        '남일고 줌번호 확인',
        '남일고 시간표 확인'
    ];
    var parmas = query();
    var text;
    text = parmas.page;
    if (text == undefined) {
        text = 'html';
    }
    var n = list.indexOf(text);
    if (n > -1) {
        var title = `ㆍ${name[n]}ㆍ`;
        var discription = dis[n];
    } else {
        text = err;
        var title = name[0];
        var discription = dis[0];
    }
    document.getElementById("main_title").innerHTML = title;
    // ElementID , file URL
    openfile(list, 'main', title, discription, text, `../html/${text}.html`);
}
