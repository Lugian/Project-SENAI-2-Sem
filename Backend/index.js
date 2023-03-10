const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', router)

app.listen(2222, () => {
    console.info('[Server] running')
})


