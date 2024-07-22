require('dotenv').config()

const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")

// Middleware
app.use(express.json())
const authenticateToken = require('./middleware/authenticateToken.js')

const posts = [
    {
        username: 'Arpit',
        title: "Post 1"
    },
    {
        username: 'Saurabh',
        title: "Post 2"
    },
    {
        username: 'Darsh',
        title: "Post 3"
    },
]

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})


app.listen(3000, () => {
    console.log("Server is listening on port 3000...")
})
