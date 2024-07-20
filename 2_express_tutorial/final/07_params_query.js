const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1><a href = "/api/products">Products</a>')
})
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image}
    })
    res.send(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const {productID} = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID))

    if (!singleProduct){
        return res.status(404).send('Product does not exists')
    }
    console.log(singleProduct)

    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(res.params)
    res.send('Hello World')
})

app.get('/api/v1/query',(req, res)=>{
    // console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1){
        // res.status(200).send('No product matched your search')
        return res.status(200).json({sucess: true, data: []})
    }

    res.status(200).json(sortedProducts)
    res.send('Hello World')

})
app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})