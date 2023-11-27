import React from 'react'

export default function Why() {
    return (
        <div className="why">
            <div className="why">
                <h1>Why choose us ?</h1>
            </div>
            <div className="why">
                <div className="flex flex-wrap gap-7 justify-around text-text">
                    <div className="whycad p-3 lo:w-64 text-left h-40 w-80 rounded-lg flex justify-center flex-col bg-pshadow">
                        <h2 className=' bg-secondary rounded-md w-8 text-center'><i class="bi bi-person-check"></i></h2>
                        <h1 className='text-[20px] font-bold mb-2'>Expertise</h1>
                        <p className='text-[12px]'>Industry-leading professionals with proven experience.</p>
                    </div>
                    <div className="whycad p-3 lo:w-64 text-left h-40 w-80 rounded-lg flex justify-center flex-col bg-pshadow">
                        <h2 className=' bg-secondary rounded-md w-8 text-center'><i class="bi bi-person-gear"></i></h2>
                        <h1 className='text-[20px] font-bold mb-2'>Custom Solutions</h1>
                        <p className='text-[12px]'>Tailored services to meet your unique needs.</p>
                    </div>
                    <div className="whycad p-3 lo:w-64 text-left h-40 w-80 rounded-lg flex justify-center flex-col bg-pshadow">
                        <h2 className=' bg-secondary rounded-md w-8 text-center'><i class="bi bi-gear-wide-connected"></i></h2>
                        <h1 className='text-[20px] font-bold mb-2'>Innovation</h1>
                        <p className='text-[12px]'>Utilizing cutting-edge technologies and trends.</p>
                    </div>
                    <div className="whycad p-3 lo:w-64 text-left h-40 w-80 rounded-lg flex justify-center flex-col bg-pshadow">
                        <h2 className=' bg-secondary rounded-md w-8 text-center'><i class="bi bi-emoji-smile"></i></h2>
                        <h1 className='text-[20px] font-bold mb-2'>Customer-Centric</h1>
                        <p className='text-[12px]'>Prioritizing client satisfaction and feedback.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
