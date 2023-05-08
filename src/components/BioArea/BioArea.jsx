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
        <h4>Front-end Developer. Code Instructor at Mimo Dev. <span style={{color:"#2393FA"}}>#opentowork</span></h4>
        <div className='bio-extras-container'>
            <div className="bio-extra">
                <Icon icon="bi:geo-alt" color="#a6a6a6" width="20" height="20" />
                <p>Houston, Texas</p>
            </div>
            <div className="bio-extra">
                <Icon icon="ic:outline-insert-link" color="#a6a6a6" width="20" height="20" />
                <p style={{color:"#2393FA"}}>github.com</p>
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