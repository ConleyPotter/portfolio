import React from 'react';
import ColorNavBar from "./components/ColorNavbar"
import { HashRouter } from 'react-router-dom';
import './App.css';
import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-pro-react.scss"

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800"
        rel="stylesheet"
      />
      <link
        href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"
        rel="stylesheet"
      />
      <HashRouter>
        <ColorNavBar component={ColorNavBar}></ColorNavBar>
      </HashRouter>
    </div>
  );
}

export default App;
