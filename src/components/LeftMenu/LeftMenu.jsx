import React from 'react'

import { Icon } from '@iconify/react';
import "./LeftMenu.css";

function LeftMenu() {
  return (
    <div className='left-menu-container' >
      <h1>AV</h1>
      <div className='menu-container'>
        <Icon icon="mdi:hashtag" color="#ccc" width="25" height="25" />
        <h3>Explore</h3>
      </div>
      <div className='menu-container'>
        <Icon icon="material-symbols:settings" color="#ccc" width="25" height="25" />
        <h3>Settings</h3>
      </div>
    </div>
  )
}

export default LeftMenu