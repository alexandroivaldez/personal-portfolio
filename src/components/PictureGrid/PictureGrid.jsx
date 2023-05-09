import React from 'react'

import "./PictureGrid.css";

function PictureGrid() {
  return (
    <div className='right-menu-container'>
      <div className='picture-grid'>
        <div className='top-grid'>
          <img src="src/assets/cookingSchool.png" className="top-square" style={{borderRadius: "15px 0px 0px 0px"}}/>
          <img src="src/assets/beanMachine.png" className="top-square"/>
          <img src="src/assets/cookingSchool.png" className="top-square" style={{borderRadius: "0px 15px 0px 0px"}}/>
        </div>
        <div className='bottom-grid'>
          <img src="src/assets/cookingSchool.png" className="bottom-square" style={{borderRadius: "0px 0px 0px 15px"}} />
          <img src="src/assets/cookingSchool.png" className="bottom-square" />
          <img src="src/assets/cookingSchool.png" className="bottom-square" style={{borderRadius: "0px 0px 15px 0px"}} />
        </div>
      </div>
    </div>
  )
}

export default PictureGrid