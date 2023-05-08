import React from 'react'
import "./Beep.css"
import { Icon } from '@iconify/react';

function Beep() {
    
    const beepString = "A website made for a cooking school.";
    const imageURL = "src/assets/cookingSchool.png";


  return (
    <div className='beep-container'>
        <img src="src/assets/profile.JPG" id="profile" />
        <div className='beep-data'>
            <div className='beep-info-container'>
                <div className='username-info-container'>
                    <div className='username-container'>
                        <h3>Alexandro Valdez</h3>
                        <Icon icon="emojione-monotone:white-heavy-check-mark" color="#2393fa" />
                    </div>
                    <h5 style={{color: "#ccc"}}>@alexandroivaldez</h5>
                </div>
                <Icon icon="ph:dots-three" color="#ccc" />
            </div>
            <p>A website made for a cooking school.</p>
            <img src={imageURL} className="beep-thumbnail" />
            <div className='engagement-container'>
                <div className='engagement-card'>
                    <Icon icon="tabler:message-circle-2" color="#ccc" />
                    <p>539</p>
                </div>
                <div className='engagement-card'>
                    <Icon icon="ps:retweet-1" color="#ccc" />
                    <p>539</p>
                </div>
                <div className='engagement-card'>
                    <Icon icon="mdi:cards-heart-outline" color="#ccc" />
                    <p>539</p>
                </div>
                <div className='engagement-card'>
                    <Icon icon="mdi:graph-bar" color="#ccc" />
                    <p>539</p>
                </div>
                <div className='engagement-card'>
                    <Icon icon="material-symbols:ios-share-rounded" color="#ccc" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Beep