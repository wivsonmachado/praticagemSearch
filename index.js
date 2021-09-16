/*import express from 'express'
import htmlData from './htmlData.js'
import getLista from './getList.js'*/
const express = require('express')
const htmlData = require('./htmlData.js')
const getLista = require('./getList.js')
const cors = require('cors')
const path = require('path')

const app = express()

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(cors())

app.get('/json', async (req, res) =>{
    res.json(getLista(await htmlData()))
})

app.get('/', (req, res)=>{
    res.render('index')
})


app.set('port', process.env.PORT || 3000)
