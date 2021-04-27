import express from 'express'

const app = express()

app.get('/',(req, res) =>{
    res.json({nome: 'wivson'})
})

app.listen(8000, ()=>{
    console.log('Servidor rodando na porta 8000')
})