import React from 'react'
import Why from './Why'

export default function About() {
  return (
    <div className='text-text text-center mt-11'>
      <div className="title text-2xl font-bold">
        <h1>About</h1>
      </div>
      <div className="explain p-1 text-[14px]">
        <p>Passionate. Creative. Committed.
          We're here to turn visions into reality. With a relentless
          pursuit of excellence, our team is dedicated to crafting
          innovative solutions that empower your success. Together,
          let's redefine possibilities and embark on a journey of growth.</p>
      </div>
      <div>
        <Why />
      </div>
    </div>
  )
}
