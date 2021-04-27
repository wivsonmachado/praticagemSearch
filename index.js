/*import express from 'express'
import htmlData from './htmlData.js'
import getLista from './getList.js'*/
const express = require('express')
const htmlData = require('./htmlData.js')
const getLista = require('./getList.js')

const app = express()

app.get('/json', async (req, res) =>{
    res.json(getLista(await htmlData()))
})

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
})