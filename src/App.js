
import React from 'react';
import WordCard from './WordCard';
import logo from './cow.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div> 
          <WordCard value="hello"/>
        </div>
        <img src={logo} className="App-logo"/>
        <p>
          Sruangsuree Paksapanth 6135512058
        </p>
      </header>
    </div>
  );
}
export default App;