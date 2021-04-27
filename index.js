import axios from 'axios'
import { load } from 'cheerio'

const url = 'https://www.newpilots.com.br/'

function navio(dataHora, nomeNavio, manobra, de, para){
    this.dataHora = dataHora
    this.nomeNavio = nomeNavio
    this.manobra = manobra
    this.de = de
    this.para = para
}

const getLista = html => {
    const arrayNavios = []
    var $ = load(html)
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
    console.log(arrayNavios)
    //return arrayNavios           
}

axios.get(url)
    .then(res =>{
        getLista(res.data)
    })
    .catch(error => {
        console.log(error)
    })