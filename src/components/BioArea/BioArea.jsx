import React from 'react'

import { Icon } from '@iconify/react';

import "./BioArea.css";

function BioArea({name, username}) {
  return (
    <div className='bio-container'>
        <div className='username-container'>
            <h3>{name}</h3>
            <Icon icon="emojione-monotone:white-heavy-check-mark" color="#2393fa" />
        </div>
        <h5 style={{color: "#ccc"}}>@alexandroivaldez</h5>
        <h4>Front-end Developer. Code Instructor at Mimo Dev 🪴 💻 ☕</h4>
        <a href="https://www.linkedin.com/in/alexandro-valdez/"><span style={{display: "flex", alignItems:"center", color:"#2393FA"}}>#opentowork<Icon icon="mdi:linkedin" color="#0b5de0" /></span></a>
        <div className='bio-extras-container'>
            <div className="bio-extra">
                <Icon icon="bi:geo-alt" color="#a6a6a6" width="20" height="20" />
                <p><a href="https://www.google.com/search?q=Houston%2C+Texas&oq=Houston%2C+Texas&aqs=chrome..69i57j46i131i433i512j46i433i512j0i131i433i512j0i433i512j69i61j69i60l2.2774j0j7&sourceid=chrome&ie=UTF-8">Houston, Texas</a></p>
            </div>
            <div className="bio-extra">
                <Icon icon="ic:outline-insert-link" color="#a6a6a6" width="20" height="20" />
                <p><a style={{color:"#2393FA"}} href="https://github.com/alexandroivaldez">github.com</a></p>
            </div>
            <div className="bio-extra">
                <Icon icon="ion:balloon-outline" color="#a6a6a6" width="20" height="20" />
                <p>Born April 4, 1997</p>
            </div>
        </div>
    </div>
  )
}

export default BioArea