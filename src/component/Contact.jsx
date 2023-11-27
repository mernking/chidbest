import React from 'react'

export default function Contact() {
  return (
    <div className='text-text flex items-center bg-primary pt-3 m-6 flex-col rounded-md text-center lo:w-64 md:w-96'>
        <div className="font-bold">
            <h1>Contac us</h1>
        </div>
        <form action="" className="m-2 p-1 flex flex-col gap-2 items-center">
            <input type="text" name="name" id="name" className='lo:w-56 md:w-72 h-12 rounded-md bg-[#393939] text-white p-3' />
            <input type="email" name="email" id="email" className='lo:w-56 md:w-72 h-12 rounded-md bg-[#393939] text-white p-3'/>
            <textarea name="message" id="message" className='lo:w-56 md:w-72 w-80 h-40 rounded-md bg-[#393939] text-white'/>
            <div className="formbtn">
                <button className='bg-accent w-32 rounded-lg'>send</button>
            </div>
        </form>
    </div>
  )
}

