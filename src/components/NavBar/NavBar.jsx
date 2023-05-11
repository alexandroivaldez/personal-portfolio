import React from 'react'

import "./NavBar.css"

import BeepsContainer from '../BeepsContainer/BeepsContainer';

function NavBar(props) {

  const beepData = [
    [
      {bioText: "Hello world!", imgSrc: "beep1.jpg"},
      {bioText: "Test!", imgSrc: "cookingSchool.png"}
    ]
  ]

  const buttonClicked = (e) => {
    alert(e.currentTarget.getAttribute("data-value"));
  }

  return (
    <div>
      <div className='nav-container'>
          <button className='nav-btn' data-value="work" onClick={buttonClicked}>Work</button>
          <button className='nav-btn' data-value="aboutMe" onClick={buttonClicked}>About Me</button>
          <button className='nav-btn' data-value="contact" onClick={buttonClicked}>Contact</button>
          <button className='nav-btn' data-value="extra" onClick={buttonClicked}>Extra</button>
      </div>
      <BeepsContainer beepData={beepData} />
    </div>
  )
}

export default NavBar