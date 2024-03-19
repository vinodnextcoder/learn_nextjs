import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div>
      <Navbar/>    
      <ShoppingList/> 
    </div>
  );
}

export default App;
