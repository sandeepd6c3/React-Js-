import React from 'react'

const RightcardContent = (props) => {
  return (
    <div>
       <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col items-start justify-between  '>
            <h2 className='h-10 w-10 bg-white rounded-full flex items-center justify-center font-semibold'>{props.id+1}</h2>

            <div >
                <p className='text-xl leading-normal mb-14   font-semibold  text-white '>{props.intro}</p>

                <div className=' flex justify-between font-medium'>
                    <button className=' bg-blue-600 text-white font-semibold px-7 py-2 rounded-4xl'>{props.tag}</button>
                
                 <button className='bg-blue-600  text-white px-3 py-2 rounded-full ' ><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default RightcardContent
