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
