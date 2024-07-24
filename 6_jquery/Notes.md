# jQuery Overview

## What is jQuery?
- A fast, concise JavaScript library that simplifies how to traverse HTML documents, handle events, perform animations, and use AJAX for web development.

## Need for jQuery
- jQuery is a JavaScript library designed to simplify client-side scripting of HTML.
- It helps create powerful, dynamic web pages and web applications.

# HTML Document Type

## Document Type in HTML
- The Document Type (DOCTYPE) in HTML informs the validator which version of (X)HTML you're using and must appear at the very beginning of every web page.
- DOCTYPEs are key components of compliant web pages: your markup and CSS won't validate without them.

### HTML5 DOCTYPE
```html
<!DOCTYPE html>
```

# jQuery Object ($)

## jQuery Function
- `jQuery(<code>)`: A jQuery function.
- `$(<code>)`: An alternative name for the jQuery function.
- `$(document)`: The jQuery function usually takes a single argument; in this example, "document".

## jQuery Object
- A jQuery Object is like an array, which contains zero or more indices. It also contains object methods like:
  - `length`
  - `context`
  - `selector`

# jQuery Function

## $(document).ready()
- This is called `DocumentReady`, which is executed as soon as the document is ready for DOM manipulation.
- We assign our function to the ready event to tell jQuery that as soon as the document is ready, we want it to call our function.

```html
<div id="readyDemo"></div>
<script type="text/javascript">
  $(document).ready(function() {
    $("#readyDemo").text("Hello, world!");
  });
</script>
```
## jQuery function Chaining
- Chaining is one of the most powerful feature of jQuery where it can perform multiple methods on the same set of elements, it saves us and the browser from having to find the same elements more than once.

- Eg.
```html
<div id="readyDemo"></div>
<script type = "text/javascript">
    $(document).ready(function(){
        $('#readyDemo').text('Edureka! jQuery').css('color', 'red').fadeIn('slow');
    });
</script>
```
## Custom Function:
- There are several different ways to declare functions using JacaScript/jQuery

Basic Function Declaration:
```html
function multiply(x, y){
    return (x*y);
}
console.log(multiply(2,2));
```

Custome jQuery Function:
```html
(function ($){
    $.fn.myCustomFunction = function() {
    // add your code here,

    //you can use the object that is using this function with the word 'this',

    //example: this.attr('id')
    };
})(jQuery)

$('#Selector).myCustomFunction();
```

# Querying DOM
- Selecting one or more elements from your document object model (DOM) to work with them
- In jQuery we query the DOM using the CSS selectors

# jQuery Selectors
- A jQuery Selector is a function which uses power of Cascading style sheet (CSS) selector find out matching elements from a DOM
- jQuery Selector let us quickly and easily access HTML elements or groups of elements
- **Types of Selectors**:
    * **ID Selector**:
    - This uses the ID attribute of a HTML tag to select the desired element from DOM. An ID should be unique, so you should only use this selector when you want to select a single and unique element

    Eg. 
    ```html
    <div id = "idDemo"></div>
    <script type = "text/javascript">
        $(function() {
            $('#idDemo').text("Edureka, i am Selected");
        });
    </script>
    ```

    * **Class Selector**:
    - This uses class attribute to select elements with a specific class be matched by writting a character followed by the name of the class

    Eg.
    ```html
    <div class="clasDemo">Edureka, Demo Text</div>
    <script>
        $(function()
        {
            $(".clsDemo").style("color", "green");
        });
    </script>
    ```     

    * **Attribute Selectors**:
    - With this you can select elements using elements attribute

    Eg.
    ```html
    <h2>jQuery Selectors</h2>
    <a href="http://www.google.com" targeet="_blank">Link 1</a><br/>
    <a href="http://www.google.com" targeet="_self">Link 2</a><br/>
    <a href="http://www.google.com" targeet="_blank">Link 3</a><br/>
    <input type="text" name="username" />
    <script type = "text/javascript">
        $(function(){
            $("input[type]").style("border", "1px solid #ff9900");
            $("a[target='_blank']").append("[new window]");
        });
    </script>
    ```

    * **Universal Selecotr**:
    Eg

    ```html
    <script type = "text/javascript">
        $("*").css('color', 'red');
    </script>
    ```

    * **Position Selectors & Psuedo-classes Selectors**:
    Eg.

    ```html
    <div>
        <b>Bold text</b>
        <i>Italic text</i>
        <div>
            <b>Bold text 2</b>
            <i>Italic text 2</i>
            <div>
                <b>Bold text 3</b>
            </div>
        </div>
    </div>
    <input type="text" name="username" />
    <br />
    <a href="http://www.google.com" targeet="_blank">Link 1</a><br/>
    <a href="http://www.google.com" targeet="_self">Link 2</a><br/>
    <a href="http://www.google.com" targeet="_blank">Link 3</a><br/>
    
    <script type="text/javascript">
        $("i:first").css('color', "red");
        $("a:not([target=_self])").css("color", "green");
    </script>
    ```

# Traversing the DOM

## Overview
- In jQuery, "Traversing" allows us to move through the DOM/HTML elements in the web page.
- With "Query Selectors," we make an initial selection and then move using Traversing functions.
- Having a strong command of the most common traversal functions will speed up your development time.

## Most Common Traversal Functions
- `find()`: Finds all matching elements.
- `children()`: It is the same as find but moves only one level down.
- `closest()`: Moves up the DOM tree until it finds the matching element.
- `parent()`: Moves up the DOM tree but to a single level.
- `next()`: Moves down and targets the immediately following sibling.
- `prev()`: Moves just like .next(), but moves up, targeting the immediately preceding sibling.
- `siblings()`: Moves up and down, targeting all siblings.
- `first()`: Gets the first element from the selected set.
- `last()`: Gets the last element from the selected set.

