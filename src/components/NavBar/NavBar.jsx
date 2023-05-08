import React from 'react'

import "./NavBar.css"

function NavBar() {
  return (
    <div className='nav-container'>
        <button className='nav-btn'>Work</button>
        <button className='nav-btn'>About Me</button>
        <button className='nav-btn'>Contact</button>
        <button className='nav-btn'>Extra</button>
    </div>
  )
}

export default NavBar