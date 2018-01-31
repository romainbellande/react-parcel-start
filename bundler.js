const proxy = require('http-proxy-middleware')
const Bundler = require('parcel-bundler')
const express = require('express')

let bundler = new Bundler('src/index.html')
let app = express()
const PORT = 4200;
console.log('listen to http://127.0.0.1:' + Number(process.env.PORT || PORT))

app.use(
  '/api',
  proxy({
    target: 'http://localhost:3000'
  })
)

app.use(bundler.middleware())
app.listen(Number(process.env.PORT || PORT))
