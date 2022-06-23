const express = require('express')

const app = express()
const port = 3000

app.set('views', 'src/views')
app.set('view engine', 'ejs')

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Constnium started on port ${port}.`)
})
