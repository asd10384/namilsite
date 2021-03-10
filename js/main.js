
window.location = 'http://namilsite.netlify.app';

document.addEventListener('DOMContentLoaded', function() {
    var list = [
        'html',
        'clock',
        'zoomid',
        'classtime',
        'meal',
        'selecttime',
    ];
    var name = [
        '사이트 모음',
        '시계',
        '줌번호',
        '시간표 모음',
        '급식',
        '선택&합반 시간표',
    ];
    var page = query().page;
    var cl = query().class;
    if (page == undefined) {
        page = 'html';
    }
    var n = list.indexOf(page);
    if (n > -1) {
        var title = `ㆍ${name[n]}ㆍ`;
        if (page == 'classtime') {
            if (cl > 0) {
                title = `ㆍ${cl}반 시간표ㆍ`;
            }
        }
    } else {
        page = 'err';
        var title = `에러`;
    }
    document.getElementById("main_title").innerHTML = title;
    openfile('main', page, `../html/${page}.html`);
});
