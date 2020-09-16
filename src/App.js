
import React from 'react';
import './App.css';
import WordCard from './WordCard';
function App() {
  const word = "Hello";
  return (
    <div>
      <img src = '4262326.jpg'>
      <div>
    <div className="App">
      <div>
        {
          <WordCard value="hello"/>
        }
      </div>
    </div>
  );
}
export default App;