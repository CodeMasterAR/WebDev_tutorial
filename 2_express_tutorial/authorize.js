const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === 'Arpit'){
        req.user = {name: 'Arpit', id: 118}
        next()
    }
    else{
        res.status(401).send('Unauthorize')
    }
    // console.log('authorize')
    // next()
}

module.exports = authorize