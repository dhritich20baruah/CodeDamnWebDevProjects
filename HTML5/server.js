// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('Hello clients')
//     res.end()
// })

// server.listen()

// console.log(processe.env.PUBLIC_PORT)

// server.listen(process.env.PUBLIC_PORT, () => {
//     console.log('server on')
// })

// const http = require('http')

// const requestListener = function (req, res) {
// 	res.writeHead(200)
// 	res.end('Hello, World!')
// }

// const server = http.createServer(requestListener)
// server.listen(process.env.PUBLIC_PORT)

const express = require('express');
const path = require('path')
const app = express()
const parser = require('body-parser');
const bodyParser = require('body-parser');

app.use(express.static(path.resolve(__dirnamr, 'public')))
app.use(bodyParser.json())
app.get('/', (req, res)=>{
    res.sendFile(
        path.resolve(__dirname, '/webpage/codedamntuts/HTML5/index.html')
    )
})

app.get('/something', (req, res)=>{
    res.send('Hey! world')
})

app.post('/something', (req, res)=>{
    res.send('This is usually not visible')
})

// await fetch('/something',{method: 'post'}).then(res=>res.text())

app.post('/data', (req, res)=>{
    console.log(req.body)
    res.json({ status: 'OK' })
})

app.listen(2500)