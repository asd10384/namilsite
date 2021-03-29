
window.onload = function () {
    toastr.options = {
        "closeButton": true,
        "onclick": null,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "10000",
        "extendedTimeOut": "8000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        "progressBar": true,
        "preventDuplicates": false,
        "onShown": function() {
            new Audio("./sound/notice.mp3").play();
        }
    }

    setInterval(function() {
        var d = new Date();
        var week = d.getDay(); // 일요일부터 0~6
        var hour = d.getHours().toString();
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

        // 몇분전에 알림을 보낼지 설정
        var at = [3, 5];

        // 토일요일 제거
        if (week !== 0 || week !== 6) {
            // 반목문 사용
            for (i in ctl) {
                if (hour === i) {
                    if (min === (ctl[i]-at[0]) && sec === 0) {
                        var ctl_n = Object.keys(ctl);
                        var t = ctl_n.indexOf(hour) + 1;
                        return notify(hour, min, at[0], t);
                    }
                    if (min === (ctl[i]-at[1]) && sec === 0) {
                        var ctl_n = Object.keys(ctl);
                        var t = ctl_n.indexOf(hour) + 1;
                        return notify(hour, min, at[1], t);
                    }
                }
            }
        }
    }, 1000);
}

function notify(hour = '0', min = 0, at = 5, t = 1) {
    toastr.success(
        `현재시간 : ${hour}시 ${min}분`,
        `${t}교시 시작 ${at}분전입니다.`
    );
}
