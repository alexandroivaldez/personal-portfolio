import React from 'react'
import PictureGrid from '../PictureGrid/PictureGrid';
import TrendingChart from '../TrendingChart/TrendingChart';
import "./RightMenu.css";

function RightMenu() {
  return (
    <div style={{backgroundColor: "black"}}>
      <PictureGrid />
      <TrendingChart />
    </div>
  )
}

export default RightMenu