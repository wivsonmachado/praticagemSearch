import cheerio from 'cheerio'
import navio from './objRaw.js'

const getLista = html => {
    const arrayNavios = []
    var $ = cheerio.load(html)
            $('.quadro')
                .eq(0)
                .find('table')
                .eq(2)
                .find('tr')
                .each(function(i){
                    var dataHora = $(this)
                            .find('td')
                            .eq(0)
                            .text()
                            .trim()
                    var nomeNavio = $(this)
                            .find('td')
                            .eq(1)
                            .text()
                            .trim()
                    var manobra = $(this)
                            .find('td')
                            .eq(6)
                            .text()
                            .trim()
                    var de = $(this)
                            .find('td')
                            .eq(7)
                            .text()
                            .trim()
                    var para = $(this)
                            .find('td')
                            .eq(8)
                            .text()
                            .trim()
                    arrayNavios.push(new navio(dataHora, nomeNavio, manobra, de, para))                
                })
    //onsole.log(arrayNavios)
    return arrayNavios           
}

export default getLista