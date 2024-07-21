const express = require('express');
const mongoose = require('mongoose');
const Product = require('./routers/products.route.js');
const app = express();

// Middleware
// Parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello from Node API');
});

// Router
app.use('/api/products', Product);

// Connect to MongoDB
mongoose.connect("mongodb+srv://CodeMasterAR:FGuxWJ36mvaVS1nj@backenddb.7uks3mk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
