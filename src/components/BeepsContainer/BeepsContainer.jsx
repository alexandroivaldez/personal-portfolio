import React from 'react'
import Beep from '../Beep/Beep'
import "./BeepsContainer.css"

function BeepsContainer() {

  const nums = [1,2,3,4,5];

  const beeps = nums.map(() => {
    return <Beep />
  })

  return (
    <div>
       {beeps}
    </div>
  )
}

export default BeepsContainer