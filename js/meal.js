
const axios = require('axios');
const cheerio = require('cheerio');

async function getHTML() {
    try {
        return await axios.get('https://school.busanedu.net/bsnamil-h/main.do');
    } catch (error) {
        console.error(error);
    }
}

export { getHTML };
