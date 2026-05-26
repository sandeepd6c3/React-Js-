import React from 'react'
import Section01 from './components/Section01/Section01'
import Section02 from './components/Section02/Section02'

const App = () => { 

  const Users = [
  {
    img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    intro: "Helping businesses grow with smart customer engagement strategies.",
    tag: "Satisfied"
  },

  {
    img: "https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    intro: "Professional teams working together to achieve modern solutions.",
    tag: "Creative"
  },

  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    intro: "Building strong digital experiences for future-ready companies.",
    tag: "Success"
  },
    {
    img: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    intro: "Innovation and teamwork driving impactful business results.",
    tag: "Growth"
  },

  {
    img: "https://images.unsplash.com/photo-1752170080627-0324ede1ddf2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
    intro: "Delivering high-quality services with customer-first thinking.",
    tag: "Trusted"
  }
]
  return (
   <div>

    <Section01 Users={Users}/>
    
     

   </div>
  )
}

export default App
