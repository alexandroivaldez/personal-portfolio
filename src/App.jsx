import React, { useState , useRef, useEffect} from 'react';
import './App.css'
import LeftMenu from './components/LeftMenu/LeftMenu';
import MainArea from './components/MainArea/MainArea';
import RightMenu from './components/RightMenu/RightMenu';

function App() {

  const name = "Alexandro Valdez";
  const username = "@alexandroivaldez";

  const [backgroundColor, setBackgroundColor] = useState("black");

  const alertStyle = {
    textAlign: "center",
    backgroundColor: "#e8a20c",
    padding: "5px"
  }

  return (
    <div>
      <header style={alertStyle}>THIS SITE IS CURRENTLY UNDER CONSTRUCTION. 80% FINISHED</header>
      <div className="app-container" style={{backgroundColor: backgroundColor}}>
        
        <LeftMenu setBackgroundColor={setBackgroundColor} currentBackgroundColor={backgroundColor} />
        <MainArea name={name} username={username} currentBackgroundColor={backgroundColor} />
        <RightMenu currentBackgroundColor={backgroundColor} />
      </div>
    </div>
      
  )
}

export default App
