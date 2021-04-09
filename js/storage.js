
var page = query().page;
if (page != 'classset') {
    var classnum = localStorage.getItem('classnum');
    if (classnum == undefined) {
        location.href = './index.html?page=classset';
    }
}

function setclassnum() {
    var num = Number(document.getElementById('classnum').value);
    if (num == '' || isNaN(num)) {
        return alert('숫자를 입력해주세요.');
    }
    if (num < 0 || num > 8) {
        return alert('반은 1~8반까지 있습니다.');
    }
    alert(`반을 ${num}반으로 설정합니다.\n'내정보'->'반변경' 에서 반을 변경하실수 있습니다.`);
    localStorage.setItem('classnum', num);
    location.href = './index.html';
}

function getclassnum() {
    var classnum = localStorage.getItem('classnum');
    if (classnum == 0) return undefined;
    return classnum;
}

function myac() {
    var classnum = localStorage.getItem('classnum');
    if (classnum != undefined || classnum != '0') {
        $('#myac').html(`${classnum}반정보`);
        $('#classtime').attr(`href`, `./index.html?page=classtime&class=${classnum}`);
    }
}
