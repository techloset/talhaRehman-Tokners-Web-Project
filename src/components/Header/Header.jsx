import React from 'react'
import logo from '../../assests/images/logoHeader.svg'

function Header() {
  return (
    <>
    <div className='flex justify-between mx-10 mt-10'>
        <div className='flex items-center'>
            <div><img src={logo} alt="Logo Tokners" /></div>
            <div className='ml-[78px]'>
              <ul className='flex'>
                <li className='text-sm font-bold leading-normal text-[#fff] mr-[30px]'>Our team</li>
                <li className='text-sm font-bold leading-normal text-[#fff] mr-[30px]'>Tokens</li>
                <li className='text-sm font-bold leading-normal text-[#fff] mr-[30px]'>Connect wallet</li>
                <li className='text-sm font-bold leading-normal text-[#fff] mr-[30px]'>Lightpaper</li>
              </ul>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='mr-[30px]'><button className='text-sm font-bold leading-normal text-[#fff]'>Sign In</button></div>
            <div><button className='text-sm font-bold leading-normal text-[#fff] border-2 border-[#22A75D] rounded-[52px] w-[147px] h-12'>Sign Up</button></div>
        </div>
    </div>
    
    </>
  )
}

export default Header