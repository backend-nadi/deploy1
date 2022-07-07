const express = require('express')
const http = require('http')

const app = express()
const port = 4040

app.get('/', (req,res) => {
    res.send("hellow")
})

app.get('/api/users', (req,res) => {
    const data = [
        {
            nama: 'bambino',
            umur: 11,
            hobi:['cat', 'memukul', 'memaki']
        },
        {
            nama: 'jacky',
            umur: 10,
            hobi:['nonton', 'eeq', 'kang pukul']
        },
        {
            nama: 'diana',
            umur: 19,
            hobi:['hah', 'babi', 'memaki']
        },
        {
            nama: 'kambing',
            umur: 18,
            hobi:['es', 'api', 'udara']
        },
        {
            nama: 'maria',
            umur: 19,
            hobi:['he', 'ho', 'pa']
        },
        {
            nama: 'facu',
            umur: 7,
            hobi:['cat', 'test', 'babi']
        },
        {
            nama: 'janaro',
            umur: 16,
            hobi:['eeq', 'memukul', 'memaki']
        },
    ]

    res.status(200).json({
        status: 'success',
        data: data
    })
})

app.listen(port, () => console.log(`lister port ${port}`))