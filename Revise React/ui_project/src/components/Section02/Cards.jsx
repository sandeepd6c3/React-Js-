import React from 'react'
import RightcardContent from './RightcardContent'


const Cards = (props) => {
  return (
    <div className='w-80 h-full  flex items-center overflow-hidden justify-center  shrink-0  rounded-4xl relative scroll-none'>
       <img className='h-full w-full object-cover ' src={props.img} alt="" />

        <RightcardContent intro={props.intro} id={props.id} tag={props.tag}/>
    </div>
  )
}

export default Cards
