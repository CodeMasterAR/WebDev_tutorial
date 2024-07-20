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



## API vs. SSR

### API (Application Programming Interface)
**Definition:**  
A set of protocols and tools that allow different software applications to communicate with each other.

**Usage:**  
- Used for building client-side applications that interact with servers to fetch and send data.
- Commonly used in Single Page Applications (SPA) and mobile apps.

**Advantages:**  
- Decouples client and server development, allowing for more flexibility.
- Better performance on the client side as only data is sent, not entire HTML pages.
- Easier to create a consistent experience across different platforms (web, mobile).

**Disadvantages:**  
- Requires more client-side coding.
- Initial load might be slower due to multiple API calls.

### SSR (Server-Side Rendering)
**Definition:**  
The process of rendering web pages on the server before sending them to the client.

**Usage:**  
- Used in traditional web applications where the server generates the full HTML for the client.
- Commonly used in multi-page applications (MPA).

**Advantages:**  
- Better for SEO as search engines can crawl the fully rendered HTML.
- Faster initial load times as the full page is rendered on the server.
- Less client-side JavaScript needed, which can improve performance on slower devices.

**Disadvantages:**  
- Can be less interactive compared to client-side rendered applications.
- More load on the server as it has to render every page request.

## JSON (JavaScript Object Notation)
**Definition:**  
A lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.

**Usage:**  
- Used for transmitting data between a server and a web application.
- Commonly used in APIs to send and receive data.

**Advantages:**  
- Simple and easy to understand.
- Language-independent, supported by most programming languages.
- Can represent complex data structures.

**Disadvantages:**  
- No support for functions or methods.
- Can become large and verbose for very complex data.

## Route Parameter vs Query Parameter

### Route Parameter
**Definition:**  
Part of the URL path used to capture dynamic values at specific positions.

**Usage:**  
- Used to capture values directly from the URL path.
- Typically used for required values that identify a specific resource.

**Example:**  
`/users/:id` where `:id` is a route parameter that can be accessed via `req.params.id`.

**Advantages:**  
- Clean and readable URLs.
- Easier to understand and manage routes for resources.

**Disadvantages:**  
- Limited to simple key-value pairs.
- Not suitable for optional or multiple values.

### Query Parameter
**Definition:**  
Key-value pairs appended to the end of a URL after a question mark (?).

**Usage:**  
- Used to send additional information or optional parameters to the server.
- Can be used to filter, sort, or paginate data.

**Example:**  
`/search?query=javascript&page=2` where `query` and `page` are query parameters accessed via `req.query.query` and `req.query.page`.

**Advantages:**  
- Flexible and can handle multiple optional parameters.
- Suitable for filtering and sorting data.

**Disadvantages:**  
- Can make URLs longer and more complex.
- Less intuitive compared to route parameters for identifying resources.

# Middleware in Express.js

## Middleware Basics
**Definition:**  
Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. These functions can execute code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function.

## Using Middleware in Express

### Applying Middleware
1. **Globally:** Middleware applied to all routes.
   - Use `app.use(logger);` to apply the logger middleware globally.
   
2. **Route-specific:** Middleware applied to specific routes.
   - Use `app.get('/api/items', [logger, authorize], (req, res) => { ... });` to apply the logger and authorize middleware to the `/api/items` route.

3. **Path-specific:** Middleware applied to all routes under a specific path.
   - Use `app.use('/api', logger);` to apply the logger middleware to all routes under `/api`.

### Order Matters
- The order in which middleware is defined is important. Middleware functions that are defined first will execute first.

### `app.use()` vs `app.get()`
- **`app.use()`** is used to bind middleware to the application.
- **`app.get()`** is used to define route handlers for GET requests.

# HTTP Methods

## Overview
HTTP methods are used to perform actions on resources identified by URLs. They are an essential part of RESTful APIs, defining the operations that can be performed.

## Common HTTP Methods
### GET
- **Purpose:** Retrieve data from the server.
- **Usage:** Used to request data from a specified resource.
- **Characteristics:**
  - Requests can be cached.
  - Requests remain in the browser history.
  - Can be bookmarked.
  - Should never be used when dealing with sensitive data.
  - Parameters are visible in the URL.
- **Example:** `GET /api/people`

### POST
- **Purpose:** Send data to the server to create a new resource.
- **Usage:** Used to submit data to be processed to a specified resource.
- **Characteristics:**
  - Requests are not cached.
  - Requests do not remain in the browser history.
  - Cannot be bookmarked.
  - Parameters are not visible in the URL.
- **Example:** `POST /api/people`

### PUT
- **Purpose:** Update an existing resource on the server.
- **Usage:** Used to send data to update a resource.
- **Characteristics:**
  - Idempotent (making multiple identical requests should have the same effect as making a single request).
  - Requests are not cached.
  - Requests do not remain in the browser history.
  - Cannot be bookmarked.
- **Example:** `PUT /api/people/:id`

### DELETE
- **Purpose:** Delete a resource from the server.
- **Usage:** Used to delete the specified resource.
- **Characteristics:**
  - Idempotent.
  - Requests are not cached.
  - Requests do not remain in the browser history.
  - Cannot be bookmarked.
- **Example:** `DELETE /api/people/:id`

## Additional HTTP Methods
### PATCH
- **Purpose:** Apply partial modifications to a resource.
- **Usage:** Used to update a resource with partial data.
- **Characteristics:**
  - Not idempotent.
  - Requests are not cached.
  - Requests do not remain in the browser history.
  - Cannot be bookmarked.
- **Example:** `PATCH /api/people/:id`

### OPTIONS
- **Purpose:** Describe the communication options for the target resource.
- **Usage:** Used to determine the HTTP methods and other options supported by a web server.
- **Characteristics:**
  - Safe and idempotent.
- **Example:** `OPTIONS /api/people`

### HEAD
- **Purpose:** Retrieve the headers of a resource.
- **Usage:** Similar to GET, but it transfers the status line and header section only.
- **Characteristics:**
  - Requests can be cached.
  - Requests remain in the browser history.
  - Can be bookmarked.
  - Does not return the response body.
- **Example:** `HEAD /api/people`

# Routers in Express.js

## Overview
Routers in Express.js are used to create modular, mountable route handlers. A Router instance is essentially a mini-app, capable of performing middleware and routing functions.

## Benefits of Using Routers
1. **Modularity**: Organizes routes and middleware into smaller, manageable modules.
2. **Reusability**: Enables the creation of reusable route modules for different parts of the application.
3. **Separation of Concerns**: Promotes the separation of application logic into distinct files for better organization.

## Creating and Using Routers
- **Router Creation**: Routers are created using `express.Router()`.
- **Route Definition**: Routes are defined on the router instance.
- **Middleware Application**: Middleware can be applied to the router to execute before any route handler.
- **Nested Routers**: Routers can be nested, allowing for a hierarchical structure of routes.
- **Route Parameters**: Routers can handle dynamic routes with parameters accessed via `req.params`.

## Using the Router in the Main Application
Routers are integrated into the main application using the `app.use()` method. This method mounts the router at a specific path, allowing the defined routes to be accessible.

## Middleware with Routers
Middleware functions can be applied to routers to perform tasks before route handlers are executed. This can include logging, authentication, or any other preprocessing required.

## Nested Routers
Nested routers allow for a hierarchical organization of routes. This is useful for structuring large applications with multiple sub-modules, each having its own set of routes.

## Route Parameters
Dynamic route parameters enable capturing values from the URL path. These parameters can be used to identify specific resources and can be accessed within route handlers.

## Summary
- Routers provide a modular approach to managing route handlers in Express.js.
- They help in organizing code, promoting reusability, and maintaining separation of concerns.
- Routers can have their own middleware, be nested, and handle dynamic routes with parameters, making them essential for building scalable and maintainable Express.js applications.