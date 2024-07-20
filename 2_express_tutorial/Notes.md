## Express JS

* res object methods
    + res.writeHead: contain the http status code and MIME types
    + res.write: In res.write we can wrtie the content according to MIME type
    + res.url: take the request from client
    + res.end: After create the server the must be end

#### Note the 2_http_app.js folder
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

# Revision Notes for Placement

## Node.js HTTP Server (`http-app.js`)

### Key Concepts:
1. **Modules**:
   - `http`: For creating an HTTP server.
   - `fs`: For reading files from the filesystem.

2. **Reading Files**:
   - Use `readFileSync` to synchronously read HTML, CSS, image, and JS files.

3. **Creating Server**:
   - Use `http.createServer` to create the server.
   - Handle different routes and set appropriate `Content-Type` headers:
     - `/`: Serve `index.html`.
     - `/about`: Serve a simple HTML string.
     - `/styles.css`: Serve CSS file.
     - `/logo.svg`: Serve image file.
     - `/browser-app.js`: Serve JavaScript file.
   - Handle 404 errors by responding with a custom message.

4. **Starting Server**:
   - Use `server.listen` to start the server on port 5000.

### Example Workflow:
- Create server.
- Define routes.
- Set content types.
- Serve files or custom responses.
- Handle 404 errors.
- Start server on specified port.

---

## Express.js Server (`express-app.js`)

### Key Concepts:
1. **Modules**:
   - `express`: For creating an Express application.
   - `path`: For handling file paths.

2. **Serving Static Files**:
   - Use `express.static` to serve static assets (CSS, JS, images) from a directory (e.g., `public`).

3. **Handling Routes**:
   - Use `app.get` to serve the root route (optional if `index.html` is in `public`).
   - Use `app.all` to handle all other routes and respond with a 404 status.

4. **Starting Server**:
   - Use `app.listen` to start the server on port 5000.

### Example Workflow:
- Set up static middleware to serve static files.
- Define routes using `app.get` or other HTTP methods.
- Handle 404 errors with `app.all`.
- Start server on specified port.

### Comparison:
- **Static Files**: `http` requires manual file reading and serving; `express` handles it with `express.static`.
- **Routing**: `http` handles routing manually; `express` simplifies it with middleware.
- **Error Handling**: Both can handle 404 errors, but `express` provides a cleaner approach.

---

### Summary:
- **Node.js HTTP Server**: Basic setup for handling requests, serving files, and managing routes manually.
- **Express.js Server**: Efficient setup for serving static files, handling routes, and using middleware for enhanced functionality.


### API vs. SSR

### JSON

### Route parameter vs Query parameter

### Midleware

### npm morgan