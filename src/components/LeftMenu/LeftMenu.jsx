import React, { useState , useRef, useEffect} from 'react';

import { Icon } from '@iconify/react';
import "./LeftMenu.css";

function LeftMenu(props) {

  const setTheme = () => {
    if(props.currentBackgroundColor == "black"){
      props.setBackgroundColor("white");
    } else {
      props.setBackgroundColor("black");
    }
  }

  return (
    <div className='left-menu-container' style={{backgroundColor: props.currentBackgroundColor}}>
      <div className='menu-container'>
        <Icon icon="tabler:lego" color="#ccc" width="25" height="25" />
        <h3 id="explore-text"><a href="https://black-sibelle-80.tiiny.site/" target="_blank">Resume</a></h3>
      </div>
      <div className='menu-container'>
        <Icon icon="material-symbols:settings-outline-rounded" color="#ccc" width="25" height="25" />
        <h3 id="settings-text" onClick={() => setTheme()}>Settings</h3>
      </div>
    </div>
  )
}

export default LeftMenu