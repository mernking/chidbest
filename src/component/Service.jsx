import React from 'react'

export default function Service() {
    return (
        <div>
            <div className="text-text title text-center font-bold text-2xl mb-7">
                <h1>Service</h1>
            </div>
            <div className='flex flex-wrap gap-7 justify-around text-text'>
                <div className="servcad p-3 lo:w-64 text-left h-40 w-80 rounded-lg flex justify-center flex-col bg-pshadow">
                    <h2 className=' bg-secondary rounded-md w-8 text-center'><i class="bi bi-code-slash"></i></h2>
                    <h1 className='text-[20px] font-bold mb-2'>website development</h1>
                    <p className='text-[12px]'>Tailored, visually appealing websites reflecting brand identity and business needs.</p>
                </div>
                <div className="servcad p-3 lo:w-64 text-left h-40 w-80 rounded-lg flex justify-center flex-col bg-pshadow">
                    <h2 className=' bg-secondary rounded-md w-8 text-center'><i class="bi bi-search"></i></h2>
                    <h1 className='text-[20px] font-bold mb-2'>SEO (Search Engine Optimization)</h1>
                    <p className='text-[12px]'>Enhances online visibility.
                        <br />Boosts website ranking on search engines.
                        <br />Improves organic traffic.</p>
                </div>
                <div className="servcad p-3 lo:w-64 text-left h-40 w-80 rounded-lg flex justify-center flex-col bg-pshadow">
                    <h2 className=' bg-secondary rounded-md w-8 text-center'><i class="bi bi-headset"></i></h2>
                    <h1 className='text-[20px] font-bold mb-2'>Maintenance & Support</h1>
                    <p className='text-[12px]'>Ongoing care to keep websites secure, updated, and functioning efficiently.</p>
                </div>
                <div className="servcad p-3 lo:w-64 text-left h-40 w-80 rounded-lg flex justify-center flex-col bg-pshadow">
                    <h2 className=' bg-secondary rounded-md w-8 text-center'><i class="bi bi-universal-access-circle"></i></h2>
                    <h1 className='text-[20px] font-bold mb-2'>Experience (UX) Design</h1>
                    <p className='text-[12px]'>Creating intuitive interfaces for a positive and user-friendly website experience.</p>
                </div>
            </div>
        </div>
    )
}
