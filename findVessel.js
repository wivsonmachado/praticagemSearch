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

vessel('LOG-IN PANTANAL')