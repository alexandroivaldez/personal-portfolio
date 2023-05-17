import React from 'react'

import "./Banner.css";

function Banner(props) {
  return (
    <div style={{backgroundColor: props.currentBackgroundColor}}>
        <img src="banner.png" id='banner'/>
    </div>
  )
}

export default Banner