import React from 'react'
import "./Beep.css"
import { Icon } from '@iconify/react';

function Beep(props) {

    const generateRand = () => {
        return Math.floor(Math.random() * 1000);
    }

  return (
    <div className='beep-container' style={{backgroundColor: props.currentBackgroundColor}}>
        <img src="profile.jpg" id="profile" />
        <div className='beep-data'>
            <div className='beep-info-container'>
                <div className='username-info-container'>
                    <div className='username-container'>
                        <h3 id="username">Alexandro Valdez</h3>
                        <Icon icon="mdi:check-decagram" color="#1da1f2" />
                    </div>
                    <h5 style={{color: "#ccc"}}>@alexandroivaldez</h5>
                </div>
                <Icon icon="ph:dots-three" color="#ccc" />
            </div>
            <p>{props.text}</p>
            <a href={props.additionalLink} target="_blank" ><img src={props.imgURL} className="beep-thumbnail" /></a>
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