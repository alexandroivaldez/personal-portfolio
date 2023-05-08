import React from 'react'
import { Icon } from '@iconify/react';

import "./TopBar.css";

function TopBar({name, username}) {
  return (
    <div className='top-bar-container'>
        <Icon id="arrow-icon" icon="material-symbols:arrow-back-rounded" color="#ccc" width="25" height="25" />
        <div>
            <div className='username-container'>
                <h3>{name}</h3>
                <Icon icon="emojione-monotone:white-heavy-check-mark" color="#2393fa" />
            </div>
            <h5 style={{color: "#ccc"}}>14.4K Beeps</h5>
        </div>
    </div>
  )
}

export default TopBar