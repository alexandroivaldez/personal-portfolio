import React from 'react'

import "./MainArea.css";
import TopBar from '../TopBar/TopBar';
import Banner from '../Banner/Banner';
import ProfilePicBar from '../ProfilePicBar/ProfilePicBar';
import BioArea from '../BioArea/BioArea';
import NavBar from '../NavBar/NavBar';

function MainArea({name, username, currentBackgroundColor}) {
 
  return (
    <div className='main-container'>
      <TopBar name={name} username={username} currentBackgroundColor={currentBackgroundColor} />
      <Banner currentBackgroundColor={currentBackgroundColor} />
      <ProfilePicBar currentBackgroundColor={currentBackgroundColor} />
      <BioArea name={name} username={username} currentBackgroundColor={currentBackgroundColor}/>
      <NavBar currentBackgroundColor={currentBackgroundColor} />
    </div>
  )
}

export default MainArea