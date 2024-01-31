const express = require('express')
const router = require('./router')
const port = 3000

const app = express()
app.use(express.json())

//routes
app.use('/', router)

app.listen(port, () => console.log(`Server has started on port: ${port}`))