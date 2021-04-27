//import axios from 'axios'
const axios = require('axios')


const htmlData = async () =>{
    try{
        const url = 'https://www.newpilots.com.br/'
        const html = axios.get(url)
        return (await html).data  
    }catch(e){
        console.log(e)
    }
    
}

module.exports = htmlData