import React, { useEffect, useRef } from 'react'
import Cards from '../Section02/Cards'

const Rightcontent = (props) => {
  const scrollRef = useRef(null)
  const isPausedRef = useRef(false)

  useEffect(() => {
    const slider = scrollRef.current

    if (!slider) return

    const scroll = () => {
      if (isPausedRef.current) return
      slider.scrollLeft += 1
    }

    const interval = setInterval(scroll, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      id='right'
      ref={scrollRef}
      onMouseDown={() => {
        isPausedRef.current = true
      }}
      onMouseUp={() => {
        isPausedRef.current = false
      }}
      onMouseLeave={() => {
        isPausedRef.current = false
      }}
      className='w-2/3  rounded-5xl overflow-x-auto h-full flex flex-nowrap gap-10 p-6'
    >
     
     {props.Users.map(function(elem, index){
     return <Cards key={index} img={elem.img} id={index} intro={elem.intro} tag={elem.tag}/>
     })}

    </div>
  )
}

export default Rightcontent
