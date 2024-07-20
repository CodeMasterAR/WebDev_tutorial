const express = require('express')
const app = express()

// req => middleware => res
const logger = require('./logger')
const authorize = require('./authorize')

// app.use(logger) //Order Metters
// app.use('/api', logger)
// app.use([logger, authorize])

// 1. use vs route
// 2. options - our own/express/third party

app.get('/',(req, res) => {
    // const method = req.method
    // const url = req.url;
    // const time = new Date().getFullYear()
    // console.log(method, url, time)
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', [logger, authorize], (req, res) => {
    console.log(req.user)
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})