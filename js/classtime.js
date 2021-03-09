
document.addEventListener('DOMContentLoaded', function() {
    // 제작된 반 리스트
    var slist = [
        '3', 
        '5', 
        '6', 
        '7'
    ];
    
    var page = query().page;
    var clnum = query().class;
    if (page == 'classtime') {
        if (clnum == undefined || clnum == '0') {
            $('main_title').html(`ㆍ시간표 모음ㆍ`);
            $('#classtime').html(`
            자신의 반을 선택한 뒤,
            <br/>
            시간표를 확인하세요.
            <br/><br/>
            현재 추가된 반
            <br/>
            ${slist}
            `);
        } else {
            $('main_title').html(`ㆍ${clnum}반 시간표ㆍ`);
            if (slist.includes(clnum)) {
                cl(clnum);
            } else {
                $('#classtime').html(`
                ${clnum}반 시간표가 아직 추가되지 않았습니다.
                <br/><br/>
                (시간표추가를 원하시면 '2-5허승한'에게 연락해주세요.)
                `);
            }
        }
    }
});

function cl(s) {
    // txt 파일 가져오기 (load)
    // 읽어올문서의 파일명, 확인용 함수(완료여부)
    $('#classtime').load(`./file/room${s}.txt`, function(txt, status) {
        if (status == 'error') {
            $('#classtime').text('파일을 찾을 수 없습니다.');
        } else {
            var classhtml = `
            <table class='ttitle'>
                <tr>
                    <th>${s}반 시간표</th>
                </tr>
            </table>`;
    
            var chtml = `<table class='tchild'>`;
            
            var text = txt.split(`\n`);
            for (i=0;i<text.length-1;i++) {
                var args = text[i].split(/  /g);
                chtml += `<tr>`;
                for (j=0;j<args.length;j++) {
                    chtml += `<td>${args[j]}</td>`;
                }
                chtml += `</tr>`;
            }
            chtml += `</table>`;
    
            var cstyle = `
            <style>
                table {
                    border-collapse: collapse;
                    margin: auto;
                    width: 90%;
                }
                .ttitle {
                    border: 3.5px solid white;
                }
                .ttitle > th {
                    font-weight: 1000;
                }
                .tchild {
                    border: 2.5px solid white;
                }
                th, td {
                    border-collapse: collapse;
                    border: 1.5px solid white;
                    padding: 5px;
                    height: 40px;
                    font-size: 100%;
                }
                td:first-child,
                td:nth-child(1) {
                    font-weight: bold;
                }
            </style>`;
    
            $('#classtime').html(cstyle + classhtml + chtml);
        }
    });
}