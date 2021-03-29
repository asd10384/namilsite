
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
    
    var at = [3, 1];
    $('#notice_msg').html(`
        사이트를 열어두시면<br/>
        수업시간 ${at}분전마다<br/>
        알림을 받을 수 있습니다.`
    );
    
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

        // 토일요일 제거
        if (week !== 0 || week !== 6) {
            // 반목문 사용
            for (i in ctl) {
                if (hour === i) {
                    for (j in at) {
                        if (min === (Number(ctl[i])-Number(j)) && sec === 0) {
                            var ctl_n = Object.keys(ctl);
                            var t = ctl_n.indexOf(hour) + 1;
                            return notify(hour, min, at[0], t);
                        }
                        if (min === (Number(ctl[i])-Number(j)) && sec === 0) {
                            var ctl_n = Object.keys(ctl);
                            var t = ctl_n.indexOf(hour) + 1;
                            return notify(hour, min, at[1], t);
                        }
                    }
                }
            }
        }
    }, 1000);
}

function notify({hour = '8', min = 37, at = 3, t = 1, test = false}) {
    var text = (test) ? '테스트 알림 입니다.' : ''
    toastr.success(
        `현재시간 : ${hour}시 ${min}분`,
        `${t}교시 시작 ${at}분전입니다.`,
        `${text}`
    );
}
