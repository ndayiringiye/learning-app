import React from 'react'

const HomeCards = () => {
  return (
    <div className='bg-gray-200'>
    <div className='grid grid-cols-2 gap-20 py-32 w-4/5 mx-auto'>

        <div className='  bg-[#00d2d3] text-[#30336b]  py-3 px-4 rounded-md shadow-mc flex flex-col items-center gap-y-6 '>
              <h2 className='text-xl font-bold'>For Students</h2>
              <p>Checkout some cool course to perfect your craft</p>
              <a className=' transition duration-300  front-bold hover:bg-[#30336b] text-[#30336b] px-3 py-1.5 hover:text-white border-2 border-[#30336b]' href="#">View Courses</a>
        </div>
        <div className='text-white bg-[#192a56] py-3 px-4 rounded-md shadow-mc flex flex-col items-center gap-y-6'>
                <h2 className='text-xl font-bold'>For Teachers</h2>
                <p>Showcase your best courses to attract world-class learners</p>
                <a className=' transition duration-300  front-bold hover:bg-gray-400 text-white px-3 py-1.5 hover:bg-[#30336b]  border-2 border-bg-gray-400' href="#">Publish Courses</a>
        </div>
   

    </div>
    </div>
  )
}

export default HomeCards