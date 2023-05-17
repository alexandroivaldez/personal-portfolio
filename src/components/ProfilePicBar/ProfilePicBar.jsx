import React from 'react'

import "./ProfilePicBar.css";

function ProfilePicBar(props) {
  return (
    <div className='profile-pic-container' style={{backgroundColor: props.currentBackgroundColor}}>
        <img src="profile.jpg" id="profile-pic" />
        <button className="follow-btn">Follow</button>
    </div>
  )
}

export default ProfilePicBar