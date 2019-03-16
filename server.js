require('dotenv').config()
const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname, 'public')
const staticMiddleware = express.static(publicPath)
const PORT = process.env.PORT

app.use(staticMiddleware)
app.listen(PORT, () => {
  console.log('Listening on port', PORT, '!')
})