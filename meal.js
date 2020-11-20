const axios = require('axios');
const cheerio = require('cheerio');

async function getHTML() {
    try {
        return await axios.get('http://school.busanedu.net/bsnamil-h/main.do');
    } catch (error) {
        console.error(error);
    }
}

getHTML()
    .then(html => {
        let HTMLList = [];
        const $ = cheerio.load(html.data);
        const bodyList = $('div.widgDiv.meal_menu1095 ul').children('li');

        bodyList.each(function(i, elem) {
            HTMLList[i] = {
                kcal: $(this)
                    .find('dt.kcal span')
                    .text(),
                meal: $(this)
                    .find('dd.meal_list')
                    .text()
            };
        });
        return HTMLList;
    })
    .then(res => {
        let kcal = res[0].kcal.slice(0, -4);
        let meal = res[0].meal;
        console.log(`\n% 점심 %\n\n칼로리 : ${kcal}\n\n${meal}`);
        document.getElementById('kcal').innerHTML = `${kcal}`;
        document.getElementById('meal').innerHTML = `${meal}`;
    });
