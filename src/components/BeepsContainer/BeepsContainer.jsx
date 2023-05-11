import React from 'react'
import Beep from '../Beep/Beep'
import "./BeepsContainer.css"

function BeepsContainer(props) {

  const nums = props.beepData;
  console.log(props.beepData)

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