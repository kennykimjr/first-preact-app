require('dotenv')
require('next-preactx-plugin/alias')()

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const express = require('express')

const { parse } = require('url')
const next = require('next')
const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(port, err => {
    if (err) throw err
    console.log('Listening on port', port)
  })
})
