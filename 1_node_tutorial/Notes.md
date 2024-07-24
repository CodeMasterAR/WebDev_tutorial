# Node.js Tutorial Notes


## Browser
* **DOM**: Document Object Model for manipulating HTML and XML documents.
* **Window**: Represents the browser window.
* **Interactive Apps**: Used for building interactive web applications.
* **No Filesystem**: Browsers do not have access to the file system.
* **Fragmentation**: Different browsers may behave differently.
* **ES6 Modules**: Supports JavaScript ES6 modules.

## Node.js
* **No DOM**: Does not have a Document Object Model.
* **No Window**: No browser window object.
* **Server Side Apps**: Used for building server-side applications.
* **Filesystem**: Has access to the file system.
* **Versions**: Different versions of Node.js may introduce changes.
* **CommonJS**: Uses CommonJS module system.

## Globals
- `__dirname` - path to current directory
- `__filename` - file name
- `require` - function to use modules (CommonJS)
- `module` - info about current module (file)
- `process` - info about env where the program is being executed

## Module
- `module.exports`: Return the export object to the CommonJS which contains the variables, functions.
- `require`: Call the module object from various modules.

### Built-in Modules
- **OS**
- **PATH**
- **FS**
- **HTTP**

### PATH Module
- In the path module, we can store the path in a variable.
- We can access both paths: (1) Relative (2) Absolute.

### FS Module
- In the fs module, we can read the content from the file and also append the content into the file.
- There is also a concept of sync and async.

### HTTP Module
- It is the most important module to create a server.
- This module manages the request and response queries between server and client.
- Client requests to the HTTP server and HTTP responds to the client.

## NPM
- `npm` - global command, comes with node
- `npm --version`

### Dependency Installation
- **Local dependency** - use it only in this particular project:
- **Global dependency** - use it in any project:
    npm install -g <packageName>
    sudo npm install -g <packageName> (mac)

### package.json
- Manifest file (Stores important info about project/package)
- **Manual approach** (create package.json in the root, create properties etc)
- `npm init` (Step by step, press enter to skip)
- `npm init -y` (everything default)

- In NPM, there are many modules written by various developers. We can install and use them in our project as per our need.

### Most Important Modules
- **nodemon**: Continuously updates the browser with changes. No need to run `node app.js` every time.
    npm i nodemon -D (-D for devDependencies)


## Event Loop
- Event loop is a concept where Node.js enables non-blocking and asynchronous operations.
- It allows Node.js to perform I/O operations without blocking the main thread, making it highly efficient and scalable.

## Event Emitter
- `EventEmitter` class is a core module that provides a mechanism for implementing event-driven programming. It allows objects (called emitters) to emit named events and allows functions (called listeners) to be attached to handle these events.

### Key Concepts of EventEmitter
1. **Emitter**: An object that emits named events.
2. **Listener**: A function that listens for specific events and is executed when the event is emitted.
3. **Emit**: The process of triggering an event and calling all attached listeners for that event.

## Stream
- Streams are used to handle reading or writing data in a continuous flow. They are an instance of the EventEmitter class.

### Types of Streams
1. **Readable Streams**: Used for reading data sequentially.
2. **Writable Streams**: Used for writing data sequentially.
3. **Duplex Streams**: Can be used for both reading and writing.
4. **Transform Streams**: Can modify or transform data as it is read or written.
