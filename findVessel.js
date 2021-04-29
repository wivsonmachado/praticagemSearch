const fetch = require('node-fetch')

function vessel(ship) {
    let url = 'http://praticagemsearch.app.br/json'
    let buscaIndex
    fetch(url).then((res) => res.json())
        .then(json => {
            buscaIndex = json
            function retornaTrueOrFalse() {
                if (buscaIndex.findIndex(i => i.nomeNavio === ship) < 0) {
                    return -1
                } else {
                    return 1
                }
            }
            if (retornaTrueOrFalse() === 1) {
                function busca(i) {
                    if (i.nomeNavio === ship) {
                        //return `O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} para ${i.para}`
                        console.log(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} para ${i.para}`)
                    }
                }
                buscaIndex.forEach(busca)
            } else {
                //return'Navio não encontrado'
                console.log('Navio não encontrado')
            }
        }).catch((error) => console.log(error.message))

}

vessel('LINCOLN PARK')

/*
CASE 1
lista mostra o mesmo navio com manobras diferentes:

O navio LINCOLN PARK está com prático marcado para 29/04 16:30hs, realizará uma MUDANÇA para WPT 64
O navio LINCOLN PARK está com prático marcado para 30/04 06:30hs, realizará uma MUDANÇA para SHELL

desenvolver código para tratar caso com manobras diferentes e retornar as duas.

CASE 2
lista mostra o mesmo navio com a mesma manobra mais de uma vez:

O navio MSC SOFIA CELESTE está com prático marcado para 02/05 15:00hs, realizará uma ENTRADA para TECONT3
O navio MSC SOFIA CELESTE está com prático marcado para 02/05 15:00hs, realizará uma ENTRADA para TECONT3

desenvolver código para comparar e retornar somente uma manobra

CASE 3
O navio MSC SOFIA CELESTE está com prático marcado para 03/05 06:00hs, realizará uma SAÍDA para

tratar código para que retorne de forma correta manobras de entrada(para), saída(de) e mudança(de -> para)
primeira idéia é fazer com switch
*/
