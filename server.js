import express from 'express'

const app = express()

app.get('/',(req, res) =>{
    res.end('<h1>Ola, mundo!</h1>')
})

app.listen(8000, ()=>{
    console.log('Servidor rodando na porta 8000')
})