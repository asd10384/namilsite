
// 제작된 반 리스트
var slist = [
    '1',
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
        if (slist.includes(clnum)) {
            classtime(clnum);
        } else {
            $('#classtime').html(`
            ${clnum}반 시간표가 아직 추가되지 않았습니다.
            <br/><br/>
            (시간표추가를 원하시면 '2-5허승한'에게 연락해주세요.)
            `);
        }
    }
}

function classtime(s) {
    // txt 파일 가져오기 (load)
    // 읽어올문서의 파일명, 확인용 함수(완료여부)
    $('#classtime').load(`../file/room${s}.json`, function(txt, status) {
        if (status == 'error') {
            $('#classtime').text('파일을 찾을 수 없습니다.');
        } else {
            const week = ['월','화','수','목','금'];
            var classhtml = `
                <table class='ttitle'>
                    <tbody>
                        <tr>
                            <th>${s}반 시간표</th>
                        </tr>
                    </tbody>
                </table>
            `;
    
            var chtml = `
                <table class='tchild'>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1교시</td>
                            <td>2교시</td>
                            <td>3교시</td>
                            <td>4교시</td>
                            <td>5교시</td>
                            <td>6교시</td>
                            <td>7교시</td>
                        </tr>
            `;
            
            const cltxt = JSON.parse(txt);
            const cltxt_name1 = Object.keys(cltxt);
            for (i in cltxt_name1) {
                const cltxt_name2 = Object.keys(cltxt[cltxt_name1[i]]);
                chtml += `<tr><td>${week[i]}요일</td>`;
                for (j in cltxt_name2) {
                    chtml += `<td>${cltxt[cltxt_name1[i]][cltxt_name2[j]].replace(/ /g,'<br/>')}</td>`;
                }
                chtml += `</tr>`;
            }
            chtml += `</tbody></table>`;
    
            var cstyle = `
            <style>
                table {
                    border-collapse: collapse;
                    margin: auto;
                    width: 90%;
                    max-width: 750px;
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
                    padding: 1.5% 1%;
                    height: 50px;
                    font-size: 100%;
                }
                td:first-child,
                td:nth-child(1) {
                    font-weight: bold;
                }
            </style>`;
    
            $('main_title').html(`ㆍ${s}반 시간표ㆍ`);
            $('#classtime').html(cstyle + classhtml + chtml);
        }
    });
}
