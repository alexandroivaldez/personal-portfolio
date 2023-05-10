import React from 'react'
import "./Beep.css"
import { Icon } from '@iconify/react';

function Beep() {
    
    const beepString = "A website made for a cooking school.";
    const imageURL = "beep1.jpg";

    const generateRand = () => {
        return Math.floor(Math.random() * 1000);
    }
    


  return (
    <div className='beep-container'>
        <img src="profile.jpg" id="profile" />
        <div className='beep-data'>
            <div className='beep-info-container'>
                <div className='username-info-container'>
                    <div className='username-container'>
                        <h3>Alexandro Valdez</h3>
                        <Icon icon="mdi:check-decagram" color="#1da1f2" />
                    </div>
                    <h5 style={{color: "#ccc"}}>@alexandroivaldez</h5>
                </div>
                <Icon icon="ph:dots-three" color="#ccc" />
            </div>
            <p>Hello world! Welcome to my take on a Twitter style personal portfolio! Thanks for stopping bye!</p>
            <a href="https://www.google.com"><img src={imageURL} className="beep-thumbnail" /></a>
            <div className='engagement-container'>
                <div className='engagement-card'>
                    <Icon icon="tabler:message-circle-2" color="#ccc" />
                    <p>{generateRand()}</p>
                </div>
                <div className='engagement-card'>
                    <Icon icon="ps:retweet-1" color="#ccc" />
                    <p>{generateRand()}</p>
                </div>
                <div className='engagement-card'>
                    <Icon icon="mdi:cards-heart-outline" color="#ccc" />
                    <p>{generateRand()}</p>
                </div>
                <div className='engagement-card'>
                    <Icon icon="mdi:graph-bar" color="#ccc" />
                    <p>{generateRand()}</p>
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