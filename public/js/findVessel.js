function returnSwitch(i){
    let divPai = document.querySelector('#res')
    let divFilho = document.createElement('div')
    let divNeto = document.createElement('p')
    let texto
    switch (i.manobra) {            
        case 'ENTRADA':
            texto = document.createTextNode(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} para ${i.para}.`)
            
            divFilho.className = 'resultado'
            divNeto.appendChild(texto)
            divFilho.appendChild(divNeto)
            divPai.appendChild(divFilho)
            //console.log(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} para ${i.para}.`)
            break
        case 'MUDANÇA':
            texto = document.createTextNode(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de} para ${i.para}.`)
            
            divFilho.className = 'resultado'
            divNeto.appendChild(texto)
            divFilho.appendChild(divNeto)
            divPai.appendChild(divFilho)
            //console.log(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de} para ${i.para}.`)
            break
        case 'SAÍDA':
            texto = document.createTextNode(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de}.`)
            
            divFilho.className = 'resultado'
            divNeto.appendChild(texto)
            divFilho.appendChild(divNeto)
            divPai.appendChild(divFilho)
            //console.log(`O navio ${i.nomeNavio} está com prático marcado para ${i.dataHora}hs, realizará uma ${i.manobra} de ${i.de}.`)
            break
    }
    document.querySelector('#navio').value = ''
}



function vessel(shipName) {
    let divRes = document.querySelector('#res')
    divRes.innerHTML = '<div class="spinner-border text-danger" role="status"><span class="sr-only">Searching...</span></div>'
    let divTotal = document.getElementsByClassName('resultado').length
    for(let i = divTotal; i > -1 ; i--){
        let el = document.getElementsByClassName('resultado')[i]
        if(el){
        el.remove()
        }
    }
    shipName = document.querySelector('#navio').value
    ship = shipName.toUpperCase().trim()
    let url = 'http://shielded-springs-02765.herokuapp.com/json'
    let buscaIndex
    fetch(url).then((res) => res.json())
        .then(json => {
            divRes.innerHTML = ''
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
                let divPai = document.querySelector('#res')
                let divFilho = document.createElement('div')
                let divNeto = document.createElement('p')
                let texto
                texto = document.createTextNode(`Até o momento o navio ${ship} não foi adicionado à lista da praticagem-rj.`)
            
                divFilho.className = 'resultado'
                divNeto.appendChild(texto)
                divFilho.appendChild(divNeto)
                divPai.appendChild(divFilho)
                //alert('Navio não encontrado') 
                //console.log('Navio não encontrado')
            }
        }).catch((error) => console.log(error.message))
    

}