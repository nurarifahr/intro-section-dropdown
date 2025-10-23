import React from 'react'

const Intro = () => {
  return (
    <section>
      <div className='flex justify-around mt-5 px-48'>
        <div className='mt-12'>
            <h1 className='text-8xl font-bold'>Make</h1>
            <h1 className='text-8xl font-bold'>remote work</h1>
            <p className='mt-15 text-lg font-medium w-md text-slate-500 text-justify'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button className='mt-10 border px-6 py-3 rounded-2xl bg-black text-white font-medium'>Learn more</button>

            <div className='flex gap-10 mt-20 items-start w-lg'>
                <img src="/images/client-databiz.svg" alt="" className=''/>
                <img src="/images/client-audiophile.svg" alt="" />
                <img src="/images/client-meet.svg" alt="" />
                <img src="/images/client-maker.svg" alt="" />
            </div>
        </div>

         <div>
            <img src="/images/image-hero-desktop.png" alt="" className='w-md' />
        </div>
      </div>
    </section>
  )
}

export default Intro
