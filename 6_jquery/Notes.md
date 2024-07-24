## What is jQuery?
* A fact, concise, Javascript library that simplifies how to travers HTML documents, handle events, perform animations, and AJAX for web development

## What is need of jQuery?
* jQuery is a Javascript library designed to simplify the clint-side scripting of HTML
* jQuery helps to create powerful dynamic web pages and web applications 

## HTML Document Type
* Document Type is HTML is a DOCTYPE, this informs the validator which cersion of (X)HTML you're using, and it must appear at the very beginning of every weeb page.

* DOCTYPE are a key component of compliant web pages: your markup and CSS won't validate without them

> HTML5 = DOCTYPE
> <!DOCTYPE html>

## jQuery Object($)
* jQuery(<code>): It is a jQuery Function
* $$(<code>): Is also an alternative name of jQuery function
* $$(document): jQuer function usually takes a single argument, in this example "document"
* A jQuery Object is like an array, which contains zero or more indexs. it also contains object methods like: 
    * Length
    * Context
    * Selector

## jQuery Function
* $(document).ready(): This is called DocumentReady, which is executed as soon as the document is ready for DOM manipulation 
* We assign our function to the ready event, to tell jQuery that as soon as the document is ready , we want it to call our function 

>>  <div id = "readyDemo"></div>
>>  <script type = "text/javascript">
>>  $(document).ready(function()
>>  {
>>      $("#readyDemo").text("Hello, world!");
>>  })
>> </script>