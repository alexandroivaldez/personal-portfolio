import React from 'react'
import { Icon } from '@iconify/react';

import "./TopBar.css";

function TopBar({name, username, currentBackgroundColor}) {

  let randomNum = Math.floor(Math.random() * 100);

  return (
    <div className='top-bar-container' style={{backgroundColor: currentBackgroundColor}}>
        <Icon id="arrow-icon" icon="material-symbols:arrow-back-rounded" color="#ccc" width="25" height="25" />
        <div>
            <div className='username-container'>
                <h3>{name}</h3>
                <Icon icon="mdi:check-decagram" color="#1da1f2" width="20" height="20" />
            </div>
            <h5 style={{color: "#ccc"}}>{randomNum}k Beeps</h5>
        </div>
    </div>
  )
}

export default TopBar