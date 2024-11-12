import React from 'react'

const NavBar =() => {
  return (
    <div>
        <nav className=' bg-[#192a56] text-white '>
           <div className='w-11/12 mx-auto flex justify-between'>
            <h1 className='font-extrabold text-3xl'>Smart<span className='text-[#00d2d3]'>Learn</span></h1>
            <div className='flex gap-x-5 items-center'>
                <a href="#" className='hover:underline  hover:text-[#00d2d3]'>Home</a>
                <a href="#" className='hover:underline  hover:text-[#00d2d3]'>Course</a>
                <a href="#" className='hover:underline  hover:text-[#00d2d3]'>Add course</a>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
