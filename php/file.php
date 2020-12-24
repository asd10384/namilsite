<?php
    $result = '';
    $lines = @file('../file/room.txt') or $result = '파일을 읽을 수 없습니다.';
    if ($lines != null) {
        for ($i=0;$i<count($lines);$i++) {
            $result .= ($i + 1) . ': ' . $lines[$i] . '<br>';
        }
    }
?>

<!doctype html>
<html lang='ko'>
    <head>
        <meta charset='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <!-- CSS 설정 -->
        <link rel="stylesheet" href="../css/file.css" />
        <script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>

        <!-- meta 설정 -->
        <title>ㆍ사이트 모음ㆍ</title>
        <meta name="title" content="사이트 모음" />
        <meta name="description" content="남일고 관련 사이트" />
        <meta name="author" content="1326 허승한" />
        <meta name="other Agent" content="1326 허승한" />
        <meta name="email" content="tmdgks0466@naver.com" />

        <meta name="image" content="https://namilsite.netlify.app/images/namil_logo.png" />
        <meta property="url" content="https://namilsite.netlify.app" />

        <meta property="og:title" content="사이트 모음" />
        <meta property="og:site_name" content="www.namilsite.kro.kr" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />

        <meta property="og:url" content="https://namilsite.netlify.app" />
        
        <meta property="og:image" content="https://namilsite.netlify.app/images/namil_logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="남일고 관련 사이트 모음" />

        <meta property="og:description" content="남일고 관련 사이트" />

        
        <script type="text/javascript">
            function addzero(num) {
                if (num < 10) {
                    num = '0' + num;
                }
                return num;
            }
            function dday() {
                const nowDate = new Date();
                const year = nowDate.getFullYear();
                const month = nowDate.getMonth() + 1;
                alert(`${year}년 ${month}월 급식표를 확인합니다.`);
                window.open(`https://stu.pen.go.kr/sts_sci_md00_001.do?schulCode=C100000440&schulCrseScCode=4&schulKndScCode=04&schYm=${year}${addzero(month)}`, '_blank');
            }
        </script>

    </head>

    <body>
        <div id="logo">
            <a href="../index.html"><img src="../images/logo.png" /></a>
        </div>
        <div id="clock">
            <script type="text/javascript">
                document.addEventListener('DOMContentLoaded', function() {
                    // 시간을 딜레이 없이 나타내기 위한 선 실행
                    // 이후 0.5초에 한번씩 시간을 갱신
                    setInterval(realTimer, 500);
                });
                function realTimer() {
                    const nowDate = new Date();
                    const year = nowDate.getFullYear();
                    const month = nowDate.getMonth() + 1;
                    const date = nowDate.getDate();
                    const hour = nowDate.getHours();
                    const min = nowDate.getMinutes();
                    const sec = nowDate.getSeconds();
                    document.getElementById('realtime').innerHTML = 
                        `${year}-${addzero(month)}-${addzero(date)} ${addzero(hour)}:${addzero(min)}:${addzero(sec)}`;
                }
            </script>
            <span id="nowTimes"><a href="../html/clock.html" id="realtime"></a></span>
        </div>
        <div id='menu'>
            <ul>
                <li class='sub'><a href='../index.html' title="홈으로 이동"><span>Home</span></a></li>
                <li class='sub'><a href='https://hcs.eduro.go.kr' target="_blank" title="자가진단 사이트로 이동"><span>자가진단</span></a></li>
                <li class='has-sub'><a href='#'><span>온라인수업</span></a>
                    <ul>
                        <li><a href='../html/zoomid.html'><span>ㆍ ZOOM 번호</span></a></li>
                        <li><a href='https://hoc3.ebssw.kr/onlineClass/search/onlineClassSearchView.do?schulCcode=01395&schCssTyp=online_high' target="_blank"><span>ㆍ 온라인클래스</span></a></li>
                        <li><a href='https://www.classting.com/news' target="_blank"><span>ㆍ 클래스팅</span></a></li>
                        <li class='last'><a href='https://classroom.google.com' target="_blank"><span>ㆍ 클래스룸</span></a></li>
                    </ul>
                </li>
                <li class='has-sub'><a href='#'><span>사이트모음</span></a>
                    <ul>
                        <li><a href='http://school.busanedu.net/bsnamil-h/main.do' target="_blank"><span>ㆍ 학교홈페이지</span></a></li>
                        <li><a href="../html/classtime.html"><span>ㆍ 학교시간표</span></a></li>
                        <li><a href="https://www.hscredit.kr"><span>ㆍ 고교학점제</span></a></li>
                        <li><a href="https://www.hscredit.net"><span>ㆍ 고교학점제<br/>&ensp;&ensp;&nbsp;(수강신청)</span></a></li>
                        <li class='last'><a href='#' onclick="dday();"><span>ㆍ 학교급식</span></a></li>
                    </ul>
                </li>
                <li class='has-sub'><a href='#'><span>예전사이트</span></a>
                    <ul>
                        <li><a href='https://namilfirstsite.netlify.app' target="_blank"><span>ㆍ 초기사이트</span></a></li>
                        <li><a href='https://namilsimplesite.netlify.app' target="_blank"><span>ㆍ 두번째사이트</span></a></li>
                        <li class='last'><a href='https://namilsite.netlify.app' target="_blank"><span>ㆍ 현재사이트</span></a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div id="main">
            <div id='time'>
                <p><?php echo $result; ?></p>
            </div>
        </div>
    </body>
</html>
