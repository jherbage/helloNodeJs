const express = require('express')
const app = express()
const os = os()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000 and host '+os.hostname()+'!'))
