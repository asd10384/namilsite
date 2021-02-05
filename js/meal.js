import { get } from '../node_modules/axios/index';
import { load } from '../node_modules/cheerio/index';

async function getHTML() {
    try {
        var url = `http://school.busanedu.net/bsnamil-h/main.do`;
        return await get(url, {
            headers: {
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'GET'
            }
        });
    } catch (error) {
        console.error(error);
    }
}
async function serHTML() {
    getHTML()
        .then(html => {
            let HTMLList = [];
            const $ = load(html.data);
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
            
            document.getElementById('kcal').innerHTML = kcal;
            document.getElementById('meal').innerHTML = meal;
        });
}
