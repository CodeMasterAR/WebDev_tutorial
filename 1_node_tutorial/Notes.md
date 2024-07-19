
## Browser
*	DOM
*	Window
*	Interactive Apps
*	No Filesystem
*	Fragmentation
*	ES6 Modules

## Node.js
*	No DOM
*	No Window
*	Server Side Apps
*	Filesystem
*	Versions
*	CommonJS


## Globals
* __dirname    - path to current directory
* __filename   - file name
* require      - function to use modules (CommonJS)
* module       - info about current module (file)
* process      - info about env where the program is being executed

## Module
module.exports: return the export object to the CommonJS which contain the variables, function.

require: call the module object from verious modules

* Built-in Module
    - OS
    - PATH
    - FS
    - HTTP

### PATH Module
    - In the path module we can store the path in variable.
    - We can access both path (1) Relative (2) Absolute

### FS Module
    - In the fs module we can read the content from the file and also append the content into the file.
    - The is also concept of sync and async.

### HTTP Module
    - It is the most important module to create a server.
    - Basically this module is manage the request and response query between server and client.
    - Client request to the HTTP server and HTTP response to client.

## NPM
    npm - global command, comes with node
    npm --version

    local dependency - use it only in this particular project
    npm i <packageName>

    global dependency - use it in any project
    npm install -g <pakageName>
    sudo npm install -g <packageName> (mac)

    package.json - manifest file (Stores important info about project/package)
    nmanual approach (create package.json in the root, create properties etc)
    npm init (Step by step, press enter to skip)
    npm init -y (everything default)

* In the NPM there are lot of module written by so many develper. We can just install it and use it in our project. As per our need.

### Most important modules:
    + nodemon: Which is use for continuously update the broweser with the changes. We do not need to run 'node app.js' every time
    + npm i nodemon -D (-D for devDependencies)

## Event Loop

    + Event loop is a concept where node.js enable the non-blocking and asyncronous operations.
    + It allows node.js to perform I/O operations without blocking the main thread, making it highly efficient and scalable.

## Event Emitter

    + EventEmitter class is a core module that provides a mechanism for implementing event-driven programming. It allows objects (called emitters) to emit named events and allows functions (called listeners) to be attached to handle these events.
    
* Key Concepts of EventEmitter
    1. Emitter: An object that emits named events.
    2. Listener: A function that listens for specific events and is executed when the event is emitted.
    3. Emit: The process of triggering an event and calling all attached listeners for that event.

## Stream