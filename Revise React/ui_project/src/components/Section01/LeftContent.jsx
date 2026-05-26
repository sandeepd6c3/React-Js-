import React from 'react'
import Arrow from './Arrow'
import Herotext from './Herotext'

const LeftContent = () => {
  return (
    <div className='w-1/3  h-full  flex flex-col bg-blue-200 '>
  <Herotext/>
  <Arrow/>
  </div>
  )
}

export default LeftContent
