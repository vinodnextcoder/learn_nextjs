import React from 'react';

function MyButton() {

  const sayHello = () => {
    alert("Hello!")
  };

  return (
    <button onClick={sayHello} >
      I'm a button
    </button>
  );
}

export default MyButton;