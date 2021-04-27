import express from 'express'
import htmlData from './index.js'
import getLista from './getList.js'

const app = express()

app.get('/', async (req, res) =>{
    res.json(getLista(await htmlData()))
})

app.listen(8000, ()=>{
    console.log('Servidor rodando na porta 8000')
})