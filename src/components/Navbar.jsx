import React, { useEffect, useRef, useState } from 'react'
import arrowDown from "/images/icon-arrow-down.svg"
import arrowUp from "/images/icon-arrow-up.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [isDrop, setDrop] = useState(null);
  const ref = useRef(null);

  useEffect(()=>{
    if(!isOpen){
      setDrop({features: false, company: false});
    }
  }, [isOpen])

  const toggleDropdown = (menuName) => {
    setDrop(isDrop == menuName ? null : menuName)
  }

    useEffect(()=>{
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)){
        setDrop(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [isDrop])

  return (
   <nav className='py-8 px-12 lg:flex lg:flex-row lg:text-lg lg:items-center'>

    <div className='flex flex-row gap-14 justify-between'>
        <img src="/images/logo.svg" alt=""className='w-24'/> 

        {/* tombol button mobile */}
        <button 
        className='lg:hidden right-12 top-8 cursor-pointer z-50'
        onClick={()=> setIsOpen(!isOpen)}
        >
          <img src={isOpen? "/images/icon-close-menu.svg" : "/images/icon-menu.svg"} alt="menu" />
        </button>
    </div>

    <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}
    md:h-full
    lg:static lg:w-auto lg:bg-transparent lg:shadow-none lg:translate-x-0 lg:flex lg:ml-10`}>
        
        <ul className='flex flex-col mt-24 text-lg  px-6 lg:flex lg:flex-row lg:gap-14 lg:font-medium lg:mt-0 lg:items-center'>

          <li 
          onClick={()=>toggleDropdown("features")}
          className='flex gap-6 items-center py-2 text-slate-500 cursor-pointer hover:text-black'>Features 
            <span>
              <img src={isDrop === "features"? arrowUp : arrowDown} alt="" />
            </span></li>

            {isDrop == "features" && (
              <div ref={ref} className='lg:absolute lg:left-20 lg:-translate-x-1/2 lg:mt-56 lg:w-40 lg:bg-white lg:rounded-md lg:shadow-lg lg:z-50'>
              <ul className='px-5 py-3 space-y-4 text-slate-500'>
                <li className='flex items-center gap-4 hover:text-black cursor-pointer'><img src="/images/icon-todo.svg" alt="" className='w-4 h-4'/> Todo List</li>
                <li className='flex items-center gap-4 hover:text-black cursor-pointer'><img src="/images/icon-calendar.svg" alt="" className='w-4 h-4'/>Calender</li>
                <li className='flex items-center gap-4 hover:text-black cursor-pointer'><img src="/images/icon-reminders.svg" alt="" className='w-4 h-4'/>Reminders</li>
                <li className='flex items-center gap-4 hover:text-black cursor-pointer'><img src="/images/icon-planning.svg" alt="" className='w-4 h-4'/>Planning</li>
               </ul>
              </div>
            )}
            
          <li 
          onClick={()=>toggleDropdown("company")}
          className='flex gap-4 items-center py-2 text-slate-500 cursor-pointer hover:text-black'>Company
            <span>
              <img src={isDrop === "company"? arrowUp : arrowDown} alt="" />
            </span>
          </li>

          {isDrop == "company" && (
            <div ref={ref} className='lg:absolute lg:mt-46 lg:w-36 lg:bg-white lg:rounded-md lg:shadow-lg lg:z-50 lg:left-66 lg:-translate-x-1/2'>
              <ul className='px-8 py-3 space-y-4 cursor-pointer text-slate-500'>
                <li className='hover:text-black'>History</li>
                <li className='hover:text-black'>Our Team</li>
                <li className='hover:text-black'>Blog</li>
              </ul>
            </div>
          )}

          <li className='py-2 text-slate-500 cursor-pointer hover:text-black'>Careers</li>
          <li className='py-2 text-slate-500 cursor-pointer hover:text-black'>About</li>
        </ul>

        <div className="flex flex-col items-center mt-5 lg:flex lg:gap-8 lg:items-center text-slate-500 lg:font-medium lg:mt-0 lg:flex-row lg:ml-[830px]">
            <button className="hover:text-black cursor-pointer">
              Login
            </button>
            <button className="border px-6 py-2 rounded-2xl hover:text-black hover:border-black cursor-pointer mt-5 lg:mt-0">
              Register
            </button>
        </div>
      </div>


      {isOpen && (
        <div
        className='fixed inset-0 bg-black opacity-40 z-30'
        onClick={()=> setIsOpen(false)}
        ></div>
      )}
   </nav>
  )
}

export default Navbar

