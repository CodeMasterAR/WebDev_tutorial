import React from 'react';
import ReactDom from 'react-dom';


// ******************************
// stateless functional component
// always return JSX

// function Greeting() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// const Greeting = () => {
// return React.createElement(
//   'div',
//   {},
//   React.createElement('h1', {}, 'Hello World')
// )
// }

// ************** JSX Rules ******************
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// function Greeting() {
//   return (
//     <>
//       <div>
//         <h1>hello people</h1>
//       </div>
//     </>
//   );
// }


// ******************************
// Nested Components, React Tools
// const Person = () => {
//   return <h2>Arpit Patel</h2>;
// }

// const Message = () => {
//   return <p>This is my message</p>;
// }

// function Greeting() {
//   return (
//     <div>
//       {/* <h2>Arpit Patel</h2>
//       <p>This is my message</p> */}
//       <Person />
//       <Message />
//     </div>
//   );
// }

// **************************************
// CSS
import './main.css'
import {data} from './books'
import Book from './Book.jsx'

function BookList() {
  return (
  <>
    <section className="booklist">
      {/* *************************************** */}
      {/* <Book 
        img={firstBook.img} 
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam soluta mollitia illo a porro voluptatem obcaecati quaerat ex consequuntur, sequi hic amet temporibus excepturi debitis quas repellendus recusandae consectetur eos.</p>
      </Book>
      <Book 
        img={secondBook.img} 
        title={secondBook.title}
        author={secondBook.author}
      /> */}

      {data.map((book) => {
        // const {img, title, author} = book;
        // return <Book book = {book}></Book>
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  </>
  );
}




ReactDom.render(<BookList />, document.getElementById('root'));