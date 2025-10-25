import React from 'react'

const Intro = () => {
  return (
    <section>
      <div className='flex mt-5 lg:mx-50 justify-between'>
        <div>
          <img src="/images/image-hero-mobile.png" alt="" className='w-full block md:w-auto md:mx-auto lg:hidden' />
          <div className='text-center lg:text-left'>
            <h1 className='font-bold text-6xl mt-8 lg:mt-20 lg:text-8xl'>Make <br className='lg:block' />remote work</h1>
              <p className='mt-6 text-xl font-medium text-slate-500 mx-20 lg:mx-0 lg:mt-10 lg:w-md'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
              <button className='mt-10 border px-6 py-3 rounded-2xl bg-black text-white font-medium hover:bg-white hover:text-black cursor-pointer'>Learn more</button>

              <div className='flex gap-10 mt-10 mb-20 items-center justify-around lg:mt-15'>
                  <img src="/images/client-databiz.svg" alt="" className=''/>
                  <img src="/images/client-audiophile.svg" alt="" />
                  <img src="/images/client-meet.svg" alt="" />
                  <img src="/images/client-maker.svg" alt="" />
              </div>

          </div>
        </div>

         <div>
            <img src="/images/image-hero-desktop.png" alt="" className='w-md hidden lg:block' />
        </div>
      </div>
    </section>
  )
}

export default Intro
