## Express JS

* res object methods
    + res.writeHead: contain the http status code and MIME types
    + res.write: In res.write we can wrtie the content according to MIME type
    + res.url: take the request from client
    + res.end: After create the server the must be end

### Note the 2_http_app.js folder
* This is so messy to handle the requets
* So that to write the code attractively there is a frame work called express.js

## HTTP method

* GET: Read Data
* POST: Insert Data
* PUT: Update Data
* DELETE: Delete Data

+ GET       www.store.com/api/orders        get all orsers
+ POST      www.store.com/api/orders        Place an order (Send data)
+ GET       www.store.com/api/orders:id     get single order (path parameter)
+ PUT       www.store.com/api/orders:id     update specific order (params + send data)
+ DELETE    www.store.com/api/orders:id     delete order (path parameter)