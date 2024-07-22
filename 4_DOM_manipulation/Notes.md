# JavaScript DOM

### 1. What is DOM
* DOM is API for manipulating HTML document.

### 2. What is nodes and type of nodes
* Type of Nodes
    * document type nodes
    * element type nodes
    * text type nodes

### 3. Selection element using DOM

>1. getElementByID()
>2. getElementsByName()
>3. getElementsByTagName()
>4. getElementsByClassName()
>5. querySelector() and querySelectorAll()

### 4. Traversing elements

>1. selecting parent element
>2. selecting child element
>3. selecting sibling elements

### 5. Manipulating HTML elements

>1. createElement()
>2. appendChild()
>3. textContent
>4. innerHTML
>5. after()
>6. append()
>7. prepend()
>8. insertAdjacentHTML()
>9. replaceChild()
>10. cloneNode()
>11. removeChild()
>12. insertBefore()


### 6. Attribute methods

>1. getAttribute()
>2. setAttribute()
>3. hasAttribute()
>4. removeAttribute()

### 7. manipulating Element's styles

>1. style property
>2. cssText
>3. getComputedStyle()
>4. className property
>5. classList property

### 8. JavaScript Events

>1. What is event
* Event is an action that occure in the browser
*   Ex. Click, hovering, load etc

>2. Event Bubbling & Event Capturing
* There are two event model
    1. Event Bubbling
        * Event starts at the most specific element and flows towards least specific element.
    2. Event Capturing
        * Event start at the least specific element and flows towards the most specific element.

>3. Event Handler in HTML Attributes
* An event handler is a piece of code that will be executed when the event occurs.
* When the event occurs, the web browser passed an Event object to the event handler
* "this" keyword inside the event handler refers to target element.

>4. DOM Level 0 event handlers

>5. addEventListener()
* addEventListener() method will register an event handler

>6. removeEventListener()
* removeEventListener() method will remove an event handler

>7. Event Object

>8. Different Types of Event
1. mousemove: Event fires repeatedly when you move the mouse cursor aroung the element.
2. mousedown: Event fires when you press the mouse button on the element.
3. mouseup: Event fires when you release the mouse button on the element.
4. moouseover: Event fires when the curse move from outside to inside the boundaries of the element.
5. mouseout: Event fires when the curse is ever an element and then moves to another element.
6. keydown: Event fires when you press a key on the keyboard & fires repeatedly while you're holding down the key.
7. keyup: Event fires when you release a key on the keyboard.
8. keypress: Event fires when you press a character on keyboard like a, b, c ... it fires repeatedly while you hold down the key on the keyboard.
9. scroll: Event fires when you scroll a document or an element, the scroll events fire.