
window.onload = function () {
    console.log(1);
    setInterval(function() {
        console.log(2);
        if (window.Notification) {
            Notification.requestPermission();
        }
        console.log(3);
        var d = new Date();
        var week = d.getDay(); // 일요일부터 0~6
        var hour = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();

        var ctl = {
            8: 40,
            9: 40,
            10: 40,
            11: 40,
            13: 30,
            14: 30,
            15: 40,
        };

        // 토일요일 제거
        if (week !== 0 || week !== 6) {
            // 반목문 사용
            for (i in ctl) {
                if (hour === i) {
                    if (min === ctl[i]-5 && sec === 0) {
                        notify(hour, min);
                    }
                }
            }
        }
    }, 1000);
}

function notify(hour = 0, min = 0) {
    var ctl_n = Object.keys(ctl);
    var t = ctl_n.indexOf(hour.toString()) + 1;
    if (Notification.permission === 'granted') {
        var n = new Notification(`수업 들어갈 시간입니다.`, {
            icon: './images/logo.png',
            body: `${t}교시 시작 5분전입니다.\n현재시간 : ${hour}시 ${min}분\n\n클릭시 줌번호 사이트로 이동`,
        });
        n.onclick = function () {
            window.open('https://namilsite.netlify.app?page=zoomid');
        };
    }
}