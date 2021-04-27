import axios from 'axios'
import getLista from './getList.js'


const fAll = () =>{
    const url = 'https://www.newpilots.com.br/'

axios.get(url)
    .then(res =>{
        getLista(res.data)
    })
    .catch(error => {
        console.log(error)
    })
}

export default fAll