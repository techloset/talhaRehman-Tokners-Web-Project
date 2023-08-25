import React from 'react'
import colorfull from '../../assests/images/colorfull.svg'
import iphonecolor from '../../assests/images/iphonecolor.svg'

function WhatMakes() {
  return (
    <>
    <div className='mt-[120px] grid 2xl:grid-cols-2 sm:grid-cols-1'>
        <div className='lg:hidden 2xl:block '><img src={colorfull} alt="" className='w-full xs:hidden' /> <img src={iphonecolor} alt="" className='hidden xs:block' /></div>
        <div className='bg-[#fff] lg:rounded-tl-[400px] sm:rounded-tr-[400px] xs:rounded-tr-[150px] lg:rounded-tr-none 2xl:pb-3 lg:pb-11 sm:pb-16'>
          <div className='ml-[143px] xs:ml-5 mt-[296px] xs:mt-[70px]'>
            <h2 className='text-[48px] font-bold leading-[54px] text-[#0F1320] xs:text-4xl xs;leading-[40px] xs:w-[70%]'>What makes us different?</h2>
            <h3 className='mt-[30px] text-base font-bold left-5 opacity-60 text-[#0F1320] xs:text-sm'>We would only launch tokens with the express permission of the creators. </h3>
            <p className='mt-[30px] text-base font-normal leading-6 opacity-60 text-[#0F1320] w-[71%] font-[tokner] xs:text-sm xs:w-[94%] xs:pb-[70px]'>There are several thousand celebrities and creators on twitter, tiktok, Instagram and YouTube with followings in the millions who we would be actively engaging before we go viral.
              <br />
              <br />
              <br />
              We would get them on our
              platform and they would see the opportunity to create a fan driven digital economy where their digital content can be traded as NFTs and their most loyal fans can have the monetary value of their creator's currency increase significantly as they promote their digital currency across their channels while our native token holders benefit from the Weentar popularity.</p>

          </div>
        </div>
      </div>

    </>
  )
}

export default WhatMakes