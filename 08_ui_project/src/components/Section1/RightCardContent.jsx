import React from 'react'

const RightCardContent = (elem) => {
  return (
    <div>
      
       <div className="absolute h-full w-full   top-0 left-0 p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-12 w-12  flex justify-center items-center text-xl font-semibold  ">
           {elem.id+1}
        </h2>

        <div>
          <p className="text-shadow-2xs text-lg leading-relaxed text-white mb-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            placeat sit quas, architecto fuga eveniet!
          </p>

          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-md px-8 py-2 rounded-full">
              {elem.tag}
            </button>
            <button className="bg-blue-600 text-white font-md px-4 py-2 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RightCardContent
