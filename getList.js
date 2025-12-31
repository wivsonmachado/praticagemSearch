/*import cheerio from 'cheerio'
import navio from './objRaw.js'*/
const cheerio = require('cheerio')
const navio = require('./objRaw.js')

const getLista = html => {
    const arrayNavios = []
    var $ = cheerio.load(html)
            $('.tbManobrasArea')
                .find('tbody')
                .find('tr')
                .has('td')
                .has('.tdManobraArea')
                .each(function(i){
                    var dataHora = $(this)
                            .find('td')
                            .eq(0)
                            .text()
                            .trim()
                    var nomeNavio = $(this)
                            .find('#NM_NAVIO')
                            .text()
                            .trim()
                    var manobra = $(this)
                            .find('td')
                            .eq(25)
                            .text()
                            .trim()
                    var de = $(this)
                            .find('td')
                            .eq(26)
                            .text()
                            .trim()
                    var para = $(this)
                            .find('td')
                            .eq(29)
                            .text()
                            .trim()
                    arrayNavios.push(new navio(dataHora, nomeNavio, manobra, de, para))                
                })
    //console.log(arrayNavios)
    return arrayNavios           
}

module.exports = getLista