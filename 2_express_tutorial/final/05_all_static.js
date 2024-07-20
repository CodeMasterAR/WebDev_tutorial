const express = require('express');
const path = require('path')
const app = express();


// setup static and middleware
// Below command the handle all the static files like images, javascript file
// We don't need to all individually
app.use(express.static('./public'))

// app.get('/', (req, res) => { 
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
//     We can also have option to call index.html publicly using this two method
//     1) adding to static assets (in the public folder it become a root file and automatically called)
//     2) SSR
// })

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})