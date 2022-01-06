function returnSwitch(i) {
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
    var vesselName = document.querySelector('#navio').value
    if (vesselName !== "") {
        let divRes = document.querySelector('#res')
        divRes.innerHTML = '<div class="spinner-border text-danger" role="status"><span class="sr-only">Searching...</span></div>'
        let divTotal = document.getElementsByClassName('resultado').length
        for (let i = divTotal; i > -1; i--) {
            let el = document.getElementsByClassName('resultado')[i]
            if (el) {
                el.remove()
            }
        }
        shipName = document.querySelector('#navio').value
        ship = shipName.toUpperCase().trim()
        let url = 'https://shielded-springs-02765.herokuapp.com/json'
        let buscaIndex
        fetch(url).then((res) => res.json())
            .then(json => {
                divRes.innerHTML = ''
                buscaIndex = json
                function retornaTrueOrFalse() {
                    if (buscaIndex.findIndex(i => i.nomeNavio === ship) < 0) {
                        return false
                    } else {
                        return true
                    }
                }
                if (retornaTrueOrFalse()) {
                    const navioEncontrado = buscaIndex.filter((i) => i.nomeNavio === ship)
                    //console.log(navioEncontrado)
                    if (navioEncontrado.length > 1) {
                        let dataHoraAtual = ''
                        navioEncontrado.forEach((i) => {
                            if (dataHoraAtual !== i.dataHora) {
                                returnSwitch(i)
                            }
                            dataHoraAtual = i.dataHora
                        })
                    } else {
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
    } else {
        alert("Insira o nome de um navio")
    }


}

let url = 'https://shielded-springs-02765.herokuapp.com/json'
let arrFull
const nameVesselArray = fetch(url).then((res) => res.json())
    .then(json => {
        arrFull = json.map(e => {
            return { "nomeNavio": e.nomeNavio }
        })
        let arrFiltered = new Set()
        const newArrFull = arrFull.filter(i => {
            const isPresentInSet = arrFiltered.has(i.nomeNavio)
            arrFiltered.add(i.nomeNavio)
            return !isPresentInSet
        })

        return newArrFull.sort((a, b) => a.nomeNavio < b.nomeNavio ? -1 : 1) //Ordem alfabética

    }).catch(err => console.log(err))

function firedSearch() {
    vessel()
    str = ''
}

let input1 = document.getElementById('navio')
let str = ''

function getArray(){
    Promise.all([nameVesselArray]).then(res => {
        let arrTypedChar = res[0].filter(i => i.nomeNavio.indexOf(str.toUpperCase()) == 0) //Novo array apenas com letra iniciada
        let arrUnTypedChar = res[0].filter(i => i.nomeNavio.indexOf(str.toUpperCase())) //Array completo ordenado com nomes com letra digitada na frente
        arrUnTypedChar.forEach(i => arrTypedChar.push(i))
        //console.log(res[0])
        $('#navio').autocomplete({
            source: arrTypedChar,
            highlightClass: 'text-danger',
            label: "nomeNavio",
            treshold: 1,
            onSelectItem: firedSearch,
            maximumItems: 0
        });
    })
}

input1.addEventListener('keydown', (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        str = str + e.key
        getArray()
        //console.log(str)
    }
    if (e.keyCode == 8) {
        str = str.slice(0, -1)
    }
    if(e.key == 'Enter'){
        vessel()
        str = ''
    }
})