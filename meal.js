function mealjs() {
    
    import { get } from './node_modules/axios/lib/axios.js';
    import { load } from './node_modules/cheerio/lib/cheerio.js';

    async function getHTML() {
        try {
            return await get('http://school.busanedu.net/bsnamil-h/main.do');
        } catch (error) {
            console.error(error);
        }
    }

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
            return meallist = [kcal, meal];
        });
        return alert('12');
}