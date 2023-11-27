import React from 'react'
import "./hero.css"






export default function Hero() {
  return (
    <div className='flex flex-col items-center'>
      <div className="hoor text-text w-full flex flex-col items-center justify-center text-center">
        <img src="/logodark.png" alt="" className=' h-40 w-40 rounded-full bg-secondary' />
        <h1 className='text-text font-bold text-3xl'>Chidbest</h1>
        <p className=' text-[14px] m-2'>Elevating Your Vision with Creative Excellence
          and Unwavering Commitment</p>
        <div className="sc flex">
          <div className="fa text-text h-8 w-8">
            <a href="https://web.facebook.com/david.chiboy.92798" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
          </div>
          <div className="fa text-text h-8 w-8">
            <a href="https://web.facebook.com/profile.php?id=100067166857905" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
          </div>
          <div className="discord text-text h-8 w-8">
            <a href="https://wa.me/09035853253?text=" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}
