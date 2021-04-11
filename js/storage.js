
var page = query().page;
var classnum = localStorage.getItem('classnum');
if (page != 'classset') {
    if (classnum == '0' || classnum == undefined) {
        location.href = './index.html?page=classset';
    }
}

function text() {
    if (classnum == '0' || classnum == undefined) {
        $(`#text`).html(`
            반을 설정하신뒤<br/>사이트를 자유롭게<br/>이용하실수 있습니다.
        `);
    } else {
        $(`#text`).html(`
            변경할 반을 입력해주세요.
        `);
    }
}

function setclassnum() {
    var num = Number(document.getElementById('classnum').value);
    if (num == '' || isNaN(num)) {
        return alert('숫자를 입력해주세요.');
    }
    if (num < 0 || num > 8 || classnum == undefined) {
        return alert('반은 1~8반까지 있습니다.');
    }
    alert(`반을 ${num}반으로 설정합니다.\n'내정보'->'반변경' 에서 반을 변경하실수 있습니다.`);
    localStorage.setItem('classnum', num);
    location.href = './index.html';
}

function getclassnum() {
    var classnum = localStorage.getItem('classnum');
    if (classnum == 0 || classnum == undefined) return undefined;
    return classnum;
}

function myac() {
    var classnum = localStorage.getItem('classnum');
    if (!(classnum == undefined || classnum == '0' || classnum == null)) {
        $('#myac').html(`${classnum}반정보`);
        $('#classtimeurl').attr(`href`, `./index.html?page=classtime&class=${classnum}`);
    }
}
