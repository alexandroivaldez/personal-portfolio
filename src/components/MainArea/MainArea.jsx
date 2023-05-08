import React from 'react'

import "./MainArea.css";
import TopBar from '../TopBar/TopBar';
import Banner from '../Banner/Banner';
import ProfilePicBar from '../ProfilePicBar/ProfilePicBar';
import BioArea from '../BioArea/BioArea';

function MainArea({name, username}) {
  return (
    <div className='main-container'>
      <TopBar name={name} username={username} />
      <Banner />
      <ProfilePicBar />
      <BioArea name={name} username={username}/>
    </div>
  )
}

export default MainArea