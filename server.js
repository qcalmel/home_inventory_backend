const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000
const mountRoutes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
        extended: true,
    })
)

mountRoutes(app)

app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`)
})
