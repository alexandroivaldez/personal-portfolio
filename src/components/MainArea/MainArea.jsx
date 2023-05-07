import React from 'react'

import "./MainArea.css";
import TopBar from '../TopBar/TopBar';

function MainArea({name, username}) {
  return (
    <div className='main-container'>
      <TopBar name={name} username={username} />
    </div>
  )
}

export default MainArea