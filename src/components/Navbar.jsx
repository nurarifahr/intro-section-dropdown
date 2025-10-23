import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='py-8 px-12 flex flex-row justify-between text-lg items-center text-slate-500 font-medium'>
      <div className='flex flex-row gap-14'>
        <img src="/images/logo.svg" alt=""className='w-24'/> 
        <ul className='flex felx-row gap-14'>
          <li className='flex flex-row items-center gap-3'>Features <span><img src="/images/icon-arrow-down.svg" alt="" /></span></li>
          <li className='flex flex-row items-center gap-3'>Company <span><img src="/images/icon-arrow-down.svg" alt="" /></span></li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>
      <div className='flex flex-row gap-14'>
        <button>Login</button>
        <button className='border px-6 py-2 rounded-2xl'>Register</button>
      </div>
    </div>
    </>
  )
}

export default Navbar
