import React from 'react'
import Beep from '../Beep/Beep'
import "./BeepsContainer.css"

function BeepsContainer(props) {

  const beeps = props.beepData.map((item) => {
    return <Beep currentBackgroundColor={props.currentBackgroundColor} additionalLink={item.additionalLink} text={item.bioText} imgURL={item.imgSrc} key={Math.random()} />
  })

  return (
    <div className='beeps-container'>
       {beeps}
    </div>
  )
}

export default BeepsContainer