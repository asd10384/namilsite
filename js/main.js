
document.addEventListener('DOMContentLoaded', function() {
    var list = [
        'err',
        'html',
        'clock',
        'zoomid',
        'classtime',
        'selecttime'
    ];
    var name = [
        '에러',
        '사이트 모음',
        '시계',
        '줌번호',
        '시간표 모음',
        '선택&합반 시간표'
    ];
    var text = query().page;
    if (text == undefined) {
        text = 'html';
    }
    var n = list.indexOf(text);
    if (n > -1) {
        var title = `ㆍ${name[n]}ㆍ`;
    } else {
        text = 'err';
        var title = name[0];
    }
    document.getElementById("main_title").innerHTML = title;
    openfile(list, 'main', title, '남일고 사이트 모음', text, `../html/${text}.html`);
});
