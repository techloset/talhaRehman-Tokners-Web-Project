import React from 'react'
import logo from '../../assests/images/logoHeader.svg'
import twitter from '../../assests/images/twitter.svg'
import fb from '../../assests/images/facebook.svg'
import insta from '../../assests/images/instagram.svg'
import medium from '../../assests/images/medium.svg'
import github from '../../assests/images/github.svg'
import riddit from '../../assests/images/reddit.svg'

function Footer() {
  return (
    <>
    
    <div className='mt-[210px] xs:mt-[64px] mb-[150px] xs:mb-[42px]'>
        <div className='sm:hidden xs:hidden lg:block'>
            <ul className='flex justify-center'>
                <li className='uppercase text-base font-bold underline text-[#fff] tracking-[-0.32px]'>Our team</li>
                <li className='uppercase text-base font-bold underline text-[#fff] tracking-[-0.32px] opacity-[0.16] ml-[72px] mr-[66px]'>/</li>
                <li className='uppercase text-base font-bold underline text-[#fff] tracking-[-0.32px]'>Tokens</li>
                <li className='uppercase text-base font-bold underline text-[#fff] tracking-[-0.32px] opacity-[0.16] ml-[72px] mr-[66px]'>/</li>
                <li className='uppercase text-base font-bold underline text-[#fff] tracking-[-0.32px]'>Connect wallet</li>
                <li className='uppercase text-base font-bold underline text-[#fff] tracking-[-0.32px] opacity-[0.16] ml-[72px] mr-[66px]'>/</li>
                <li className='uppercase text-base font-bold underline text-[#fff] tracking-[-0.32px]'>Lightpaper</li>
               
            </ul>
        </div>
        <div className='xl:mx-[173px] lg:mx-20 mt-[129px] flex  lg:justify-between sm:flex-col xs:flex-col sm:items-center xs:items-center lg:flex-row'>
            <div><img src={logo} alt="" /></div>
            <div className='flex sm:mt-10 lg:mt-0 xs:mt-[33px] xs:mx-4 '>
              <div className='w-[50px] h-[50px] opacity-5 stroke-[2px] stroke-[#fff] rounded-full border-2  relative mr-[10px]'><img src={twitter} alt="" className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4' /></div>
              <div className='w-[50px] h-[50px] opacity-5 stroke-[2px] stroke-[#fff] rounded-full border-2 relative mr-[10px]'><img src={fb} alt="" className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4' /></div>
              <div className='w-[50px] h-[50px] opacity-5 stroke-[2px] stroke-[#fff] rounded-full border-2 relative mr-[10px]'><img src={insta} alt="" className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4' /></div>
              <div className='w-[50px] h-[50px] opacity-5 stroke-[2px] stroke-[#fff] rounded-full border-2 relative mr-[10px]'><img src={medium} alt="" className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4' /></div>
              <div className='w-[50px] h-[50px] opacity-5 stroke-[2px] stroke-[#fff] rounded-full border-2 relative mr-[10px]'><img src={github} alt="" className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4' /></div>
              <div className='w-[50px] h-[50px] opacity-5 stroke-[2px] stroke-[#fff] rounded-full border-2 relative mr-[10px]'><img src={riddit} alt="" className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4' /></div>
            </div>
            <div className='sm:mt-10 lg:mt-0 xs:mt-[32px]'><p className='text-[#fff] text-sm font-bold leading-[22px] lg:text-right sm:text-center'>© 2021 Tokners. All rights reserved.</p>
            <p className='mt-[3px] lg:text-right sm:text-center xs:text-center'><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none" className='inline'>
  <path d="M18.3148 11.1316C17.6938 11.2085 17.0618 11.2481 16.4211 11.2481C12.1493 11.2481 8.2699 9.4886 5.40707 6.62362C7.15259 11.5664 11.0661 15.4078 15.9384 16.8808C16.8092 17.1441 17.7107 17.3317 18.636 17.4364C18.7539 17.4497 18.8722 17.4617 18.9909 17.4724L18.9951 17.4663C20.2561 15.6513 21 13.4167 21 11C21 10.8499 20.9971 10.7005 20.9914 10.5519C20.1277 10.8221 19.2332 11.0177 18.3148 11.1316Z" fill="white"/>
  <path d="M2.68421 11C2.68421 15.5221 6.18346 19.188 10.5 19.188C12.0824 19.188 13.555 18.6953 14.7857 17.8484C15.7603 18.3201 16.8157 18.6398 17.9241 18.7787C16.024 20.769 13.3992 22 10.5 22C4.70101 22 0 17.0751 0 11C0 4.92487 4.70101 0 10.5 0C15.6857 0 19.9933 3.93818 20.8465 9.11543C20.0097 9.40738 19.1262 9.592 18.2106 9.6537C17.5984 5.77135 14.3794 2.81203 10.5 2.81203C6.18346 2.81203 2.68421 6.47791 2.68421 11Z" fill="white"/>
</svg> <span className='text-[#fff] text-xs underline font-normal tracking-[0.24px] font-[tokner]'>Design by Oleg Kulik</span></p>
            </div>
        </div>
    </div>
    <div className='bgBlur1 overflow-hidden w-[80vw] xl:block sm:hidden xs:hidden'></div>
    
    </>
  )
}

export default Footer