const express = require('express')
const http = require('http')

const app = express()
const port = 4040

app.get('/', (req,res) => {
    res.send("hellow")
})

app.listen(port, () => console.log(`lister port ${port}`))