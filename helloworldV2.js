const express = require('express')
const app = express()
const os = require('os')

app.get('/', (req, res) => res.send('Hello World from host '+os.hostname()+' - now seeing version 2!'))

app.listen(3000, () => console.log('Example app listening on port 3000 and host '+os.hostname()+'!'))
