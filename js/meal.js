
var day_list = {
    '0': '일',
    '1': '월',
    '2': '화',
    '3': '수',
    '4': '목',
    '5': '금',
    '6': '토',
};
var md = new Date();
$("#date").html(`${
    md.getMonth() + 1
}월 ${
    md.getDate()
}일 ${
    md.getDay().toString().replace(/[0-9]/, (daynum) => day_list[daynum])
}요일 급식 (중식)`);
const headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded', //text/xml
});
fetch('https://cors-anywhere.herokuapp.com/http://school.busanedu.net/bsnamil-h/main.do', { headers }).then((response) => {
    response.text().then((text) => {
        console.log(text);
        text = text.replace(/\s/g, '').split(/>/);
        var kcal = text[1228].slice(0,-9);
        var meal_list = text[1231].slice(0,-4)
            .replace(/[0-9]/g,'')
            .replace(/\.+$/g,'')
            .split(/\.+/g);
        var mealtext = '';
        for (i in meal_list) {
            mealtext += `${meal_list[i]}<br/>`;
        }
        $("#kcal").html(`${kcal}kcal`);
        $("#meal_list").html(`${mealtext}`);
    });
});
