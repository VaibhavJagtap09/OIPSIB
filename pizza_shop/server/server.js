const express = require('express')
const morgan  = require('morgan')
require('colors')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send("<h1>Hello from node server</h1>")
})

app.listen(8080, () => {
    console.log(`Server is running on port ${'8080'.green}`.bold)
})