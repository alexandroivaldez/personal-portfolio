import React from 'react'

import "./ProfilePicBar.css";

function ProfilePicBar() {
  return (
    <div className='profile-pic-container'>
        <img src="profile.jpg" id="profile-pic" />
        <button class="follow-btn">Follow</button>
    </div>
  )
}

export default ProfilePicBar