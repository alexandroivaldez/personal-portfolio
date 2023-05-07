import React from 'react'

import "./TopBar.css";

function TopBar({name, username}) {
  return (
    <div className='top-bar-container'>
        <img src="" />
        <div>
            <h3>{name}</h3>
            <p>14.4K Beeps</p>
        </div>
    </div>
  )
}

export default TopBar