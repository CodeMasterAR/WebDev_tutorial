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
