
document.addEventListener('DOMContentLoaded', function() {
    var list = [
        'html',
        'clock',
        'zoomid',
        'autozoomid',
        'classtime',
        'meal',
        'selecttime',
        'classset',
    ];
    var name = [
        '사이트 모음',
        '시계',
        '줌번호',
        '줌번호',
        '시간표 모음',
        '급식',
        '선택&합반 시간표',
        '반설정',
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
    $(`#main`).attr(`pagehtml`, `../html/${page}.html`);

    // 파일 import
    openfile();
    
    // 내정보 -> 몇반정보로 변경
    myac();
});
