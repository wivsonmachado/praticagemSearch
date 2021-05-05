function returnSwitch(i){
    let divPai = document.querySelector('#res')
    let divFilho = document.createElement('div')
    let divNeto = document.createElement('p')
    let texto
    switch (i.manobra) {            
        case 'ENTRADA':
            texto = document.createTextNode(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} para ${i.para}.`)
            
            divNeto.appendChild(texto)
            divFilho.appendChild(divNeto)
            divPai.appendChild(divFilho)
            //console.log(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} para ${i.para}.`)
            break
        case 'MUDANÇA':
            texto = document.createTextNode(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de} para ${i.para}.`)
            
            divNeto.appendChild(texto)
            divFilho.appendChild(divNeto)
            divPai.appendChild(divFilho)
            //console.log(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de} para ${i.para}.`)
            break
        case 'SAÍDA':
            texto = document.createTextNode(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de}.`)
            
            divNeto.appendChild(texto)
            divFilho.appendChild(divNeto)
            divPai.appendChild(divFilho)
            //console.log(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de}.`)
            break
    }
    document.querySelector('#navio').value = ''
}



function vessel(shipName) {
    let divTotal = document.getElementsByTagName('div').length
    for(let i = divTotal; i >= 4; i--){
        let el = document.getElementsByTagName('div')[i]
        if(el){
        el.parentNode.removeChild(el)
        }
    }
    shipName = document.querySelector('#navio').value
    ship = shipName.toUpperCase()
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
                            returnSwitch(i)                        
                        }
                        dataHoraAtual = i.dataHora
                    })
                }else{
                    navioEncontrado.forEach((i) => {
                        returnSwitch(i)
                    })
                }
            } else {
                document.querySelector('#navio').value = ''
                alert('Navio não encontrado') 
                //console.log('Navio não encontrado')
            }
        }).catch((error) => console.log(error.message))
    

}