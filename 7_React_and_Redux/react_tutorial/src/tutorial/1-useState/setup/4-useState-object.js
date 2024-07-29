import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Arpit', 
    age: 22, 
    message: 'random'
  });

  const [name, setName] = useState('Arpit')
  const [age, setAge] = useState(22)
  const [message, setMessage] = useState('Random')

  const changeMessage = () => {
    // setPerson({...person, message: 'hello world'})
    setMessage('hello world')
  }
  return (
    <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={changeMessage}>change Message</button>
    </>
  );
};

export default UseStateObject;

