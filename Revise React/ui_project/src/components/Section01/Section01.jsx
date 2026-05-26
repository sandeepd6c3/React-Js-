import React from 'react'
import Nav from './Nav'
import Page1content from './Page1content'

const Section01 = (props) => {

   

  return (
    <div>
       <Nav/> 
         <Page1content Users={props.Users}/>
    </div>
  )
}

export default Section01
