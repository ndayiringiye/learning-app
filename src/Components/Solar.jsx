import React from 'react'

const Solar = (props) => {
  return (
    <div>
        <div className='text-green-700 text-center mt-4'>
     <h2 className='font-bold text-3xl  '>{props.text}</h2>
     <a className='font-bold underline underline-offset-4' href="#">Schedule a Virtual Consultation</a>
     </div>
    </div>
  )
}

export default Solar