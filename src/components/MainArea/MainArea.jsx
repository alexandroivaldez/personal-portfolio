import React from 'react'

import "./MainArea.css";
import TopBar from '../TopBar/TopBar';
import Banner from '../Banner/Banner';

function MainArea({name, username}) {
  return (
    <div className='main-container'>
      <TopBar name={name} username={username} />
      <Banner />
    </div>
  )
}

export default MainArea