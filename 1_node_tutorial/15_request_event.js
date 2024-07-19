const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subscribe to it / listen for it / respond to it

server.on('request', (req, res) => {
  if(req.url === '/'){
    res.end('Home Page')
  }
  else if (req.url === '/about'){
    res.end('About Page')
  }
  else if (req.url === '/contact'){
    res.end('Contact Us')
  }
  else{
    res.end(
      `<H1>Oops!</H1>
      <p>Something went wrong</p>
      <a href = '/'>Go To Home<a>`
    )
  }
})

server.listen(5000, () =>{
  console.log('Server is listinning on port 5000....')
})