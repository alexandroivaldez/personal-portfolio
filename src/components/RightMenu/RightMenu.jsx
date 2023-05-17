import React from 'react'
import PictureGrid from '../PictureGrid/PictureGrid';
import TrendingChart from '../TrendingChart/TrendingChart';
import "./RightMenu.css";

function RightMenu(props) {
  return (
    <div className="right-menu" style={{backgroundColor: props.currentBackgroundColor}}>
      <PictureGrid currentBackgroundColor={props.currentBackgroundColor} />
      <TrendingChart currentBackgroundColor={props.currentBackgroundColor} />
    </div>
  )
}

export default RightMenu