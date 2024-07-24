const express = require('express');
const app = express();
const people = require('./routes/people')
const auth = require('./routes/auth')

// Middlewares
app.use(express.static('./method_public'));
// Parse form data
app.use(express.urlencoded({ extended: false }));
// Parse JSON data
app.use(express.json());

// Routers
app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
