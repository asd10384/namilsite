const axios = require('axios');
const cheerio = require('cheerio');

getHTML('pen.go.kr', 'C100000440', '4', `202011`);

async function getHTML(city, schulCode, schulCrseScCode, schYm) {
    try {
        let url2 = 'https://stu.pen.go.kr/sts_sci_md00_001.do?schulCode=C100000440&schulCrseScCode=4&schulKndScCode=04&schYm=202011'
        let url = 'https://stu.' + city + '/sts_sci_md00_001.do?schulCode=' + schulCode + '&schulCrseScCode=' + schulCrseScCode + '&schulKndScCode=0' + schulCrseScCode + '&schYm=' + schYm;
        return await axios.get(url2);
    } catch (error) {
        console.error(error);
    }
}

getHTML()
    .then(html => {
        let HTMLList = [];
        const $ = cheerio.load(html.data);
        const bodyList = $('div.sub_con tbody').children('tr');

        bodyList.each(function(i, elem) {
            HTMLList[i] = $(this).find('div').text();
        });
        return HTMLList;
    })
    .then(res => {
        let meal = res[0].split(/\[중식\]|\[석식\]/);

        text = '';
        for (i = 1; i <= meal.length; i++) {
            if (meal[i-1].isInteger) {
                text += meal[i-1] + '\n';
                i--;
                continue;
            }
            text += meal[i-1] + '\n';
            if (i % 3 == 0) {
                text += '\n\n';
            }
        }
        return console.log(text);
    });