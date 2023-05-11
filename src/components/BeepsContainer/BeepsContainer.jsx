import React from 'react'
import Beep from '../Beep/Beep'
import "./BeepsContainer.css"

function BeepsContainer(props) {

  const nums = props.beepData[0];
  console.log(props.beepData[0])

  const beeps = nums.map((item) => {
    return <Beep text={item.bioText} imgURL={item.imgSrc} key={Math.random()} />
  })

  return (
    <div>
       {beeps}
    </div>
  )
}

export default BeepsContainer