
window.onload = function () {

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

        const ctl = {
            8: 40,
            9: 40,
            10: 40,
            11: 40,
            13: 30,
            14: 30,
            15: 40,
        };
        const ctl_n = Object.keys(ctl);

        // 몇분전에 알림을 보낼지 설정

        // 토일요일 제거
        if (week !== 0 || week !== 6) {
            // 반목문 사용
            for (i in ctl) {
                if (hour === i) {
                    for (j in at) {
                        if (min === (ctl[i]-at[j]) && sec === 0) {
                            var t = ctl_n.indexOf(hour) + 1;
                            return notify({hour: hour, min: min, at: at[j], t: t});
                        }
                    }
                }
            }
        }
    }, 1000);
}

function notify({hour = '8', min = 37, at = 3, t = 1, audio = "./sound/notice.mp3", test = false}) {
    var audioMap = new Map();
    toastr.options = {
        "positionClass": "toast-top-right",
        "newestOnTop": false,
        "debug": false,
        "preventDuplicates": false,
        "preventDuplicates": false,
        "onclick": null,
        "progressBar": true,
        "closeButton": true,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "10000",
        "extendedTimeOut": "8000",
        "onHidden": function() {
            audioMap.forEach((ado) => {
                ado.pause();
                ado.currentTime = 0;
            });
        }
    };
    try {
        var text = (test) ? '<br/>(이 알림은<br/>테스트 알림 입니다.)' : '';
        var ado = new Audio(audio);
        audioMap.set('audio', ado);
        ado.play();
        toastr.success(
            `현재시간 : ${hour}시 ${min}분${text}`,
            `${t}교시 시작 ${at}분전입니다.`,
        );
        return {
            check: true, 
            option: {
                hour: hour,
                min: min,
                at: at,
                t: t,
                test: test,
                audio: audio
            }
        };
    } catch(err) {
        console.log(err);
        return {
            check: false, 
            option: {
                hour: hour,
                min: min,
                at: at,
                t: t,
                test: test,
                audio: audio
            }
        };
    }
}
