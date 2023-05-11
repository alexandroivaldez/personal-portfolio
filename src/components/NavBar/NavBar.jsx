import React, { useState , useRef, useEffect} from 'react';

import "./NavBar.css"

import BeepsContainer from '../BeepsContainer/BeepsContainer';

function NavBar(props) {

  const [count, setCount] = useState(0);
  let btns = [];

  useEffect(() => {
    btns = document.querySelectorAll(".nav-container > button")
  })
  

  const beepData = [
    [
      {bioText: "Hello world!", imgSrc: "beep1.jpg"},
      {bioText: "Test!", imgSrc: "cookingSchool.png"}
    ],
    [
      {bioText: "My name is Alexandro Valdez and I'm a front-end developer for hire. I'm currently a coding instructor at Mimo, one of the largest learn to code platforms in the world!", imgSrc: "beep1.jpg"},
      {bioText: "Test!", imgSrc: "cookingSchool.png"}
    ],
    [
      {bioText: "If you're interested in reaching out to me", imgSrc: "beep1.jpg"},
      {bioText: "Test!", imgSrc: "cookingSchool.png"}
    ],
    [
      {bioText: "When I'm not coding I spend my time painting Warhammer 40k minuatures!", imgSrc: "beep1.jpg"},
      {bioText: "Test!", imgSrc: "cookingSchool.png"}
    ]
  ]

  const classList = [

  ]

  const updateActive = (num) => {
    for(let i = 0; i < btns.length; i++){
      if(i == num){
        btns[i].classList = ("nav-btn active");
      } else {
        btns[i].classList = ("nav-btn");
      }
    }
  }

  const buttonClicked = (e) => {
    //if work clicked change state to 
    if(e.currentTarget.getAttribute("data-value") == "work"){
      setCount(0);
      updateActive(0);
      // e.currentTarget.classList.toggle("active");
    } else if (e.currentTarget.getAttribute("data-value") == "aboutMe") {
      setCount(1);
      updateActive(1);
    } else if (e.currentTarget.getAttribute("data-value") == "contact") {
      setCount(2);
      updateActive(2);
    } else {
      setCount(3);
      updateActive(3);
    }
  }

  return (
    <div>
      <div className='nav-container'>
          <button className='nav-btn active' data-value="work" onClick={buttonClicked}>Work</button>
          <button className='nav-btn' data-value="aboutMe" onClick={buttonClicked}>About Me</button>
          <button className='nav-btn' data-value="contact" onClick={buttonClicked}>Contact</button>
          <button className='nav-btn' data-value="extra" onClick={buttonClicked}>Extra</button>
      </div>
      <BeepsContainer beepData={beepData[count]} />
    </div>
  )
}

export default NavBar