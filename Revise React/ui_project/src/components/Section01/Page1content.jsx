import React from 'react'
import LeftContent from './LeftContent'
import Rightcontent from './Rightcontent'


const Page1content = () => {
  return (
    <div className='py-3 px-16 bg-blue-100 h-[90vh]  flex items-center justify-between gap-6'>
      <LeftContent/>
      <Rightcontent/>
    </div>
  )
}

export default Page1content
