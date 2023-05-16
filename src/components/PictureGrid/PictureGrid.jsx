import React from 'react'

import "./PictureGrid.css";

function PictureGrid() {

  return (
    <div className='right-menu-container'>
      <div className='picture-grid'>
        <div className='top-grid'>
          <img src="pg1.png" className="top-square" style={{borderRadius: "15px 0px 0px 0px"}}/>
          <img src="pg2.png" className="top-square"/>
          <img src="pg3.png" className="top-square" style={{borderRadius: "0px 15px 0px 0px"}}/>
        </div>
        <div className='bottom-grid'>
          <img src="midtermCalc.png" className="bottom-square" style={{borderRadius: "0px 0px 0px 15px"}} />
          <img src="cookingSchool.png" className="bottom-square" />
          <img src="cookingSchool.png" className="bottom-square" style={{borderRadius: "0px 0px 15px 0px"}} />
        </div>
      </div>
    </div>
  )
}

export default PictureGrid