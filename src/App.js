import React from 'react';
import logo from './logo.svg';
import ColorNavBar from "./components/ColorNavbar"
import './App.css';

function App() {
  return (
    <div className="App">
      <ColorNavBar component={ColorNavBar}></ColorNavBar>
    </div>
  );
}

export default App;
