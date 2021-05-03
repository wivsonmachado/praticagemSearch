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
                const navioEncontrado = buscaIndex.filter((i) => i.nomeNavio === ship)
                //console.log(navioEncontrado)
                if(navioEncontrado.length > 1){
                    let dataHoraAtual = ''
                    navioEncontrado.forEach((i) => {
                        if(dataHoraAtual !== i.dataHora){
                            switch (i.manobra) {
                                case 'ENTRADA':
                                    //return `O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} para ${i.para}.`
                                    console.log(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} para ${i.para}.`)
                                    break
                                case 'MUDANÇA':
                                    //return `O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de} para ${i.para}.`
                                    console.log(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de} para ${i.para}.`)
                                    break
                                case 'SAÍDA':
                                    //return `O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de}.`
                                    console.log(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de}.`)
                                    break
                            }                           
                        }
                        dataHoraAtual = i.dataHora
                    })
                }else{
                    navioEncontrado.forEach((i) => {
                        switch (i.manobra) {
                        case 'ENTRADA':
                            //return `O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} para ${i.para}.`
                            console.log(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} para ${i.para}.`)
                            break
                        case 'MUDANÇA':
                            //return `O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de} para ${i.para}.`
                            console.log(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de} para ${i.para}.`)
                            break
                        case 'SAÍDA':
                            //return `O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de}.`
                            console.log(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de}.`)
                            break
                    }
                    })
                }
            } else {
                //return'Navio não encontrado'
                console.log('Navio não encontrado')
            }
        }).catch((error) => console.log(error.message))

}

vessel('BBC AQUAMARINE') // 1 vez só, retorna 1
vessel('NORTHERN MAJESTIC') // 4 vezes, retorna 2
vessel('UASC ZAMZAM') // 2 vezes, retorna 1
vessel('LOG-IN PANTANAL') // 2 vezes, retorna 2