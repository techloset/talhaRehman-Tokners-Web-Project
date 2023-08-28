import React from 'react'
import dashboard from '../../assests/images/headerBg.svg'
import iphonedashboard from '../../assests/images/iphoneMobiletokner.svg'
 



function Dashboard() {

  return (
    <>
      <div className='bgBlur overflow-hidden xl:block sm:hidden xs:hidden'></div>
        <div className='grid grid-cols-12  2xl:ml-[10.813rem] lg:ml-20 xl:ml-[10rem] sm:ml-14   xs:m-0'>
          <div className='2xl:mt-[14.375rem] xl:mt-[9.375rem] lg:mt-20 sm:mt-[3.125rem] xs:mx-5 xs:mt-14 2xl:col-span-4 xl:col-span-6 lg:col-span-7 sm:col-span-12 xs:col-span-12'>
          <h4 className='bg-gradient-to-t from-[#2B3087] to-[#00B4EC] bg-clip-text text-transparent xs:ml-1 xs:text-sm ml-[3px]'>At Tokners we are</h4>
          <h2 className='text-5xl font-bold leading-[54px] tracking-[-0.06rem] text-[#fff] 2xl:w-[97%] xl:w-[562px] mt-[0.625rem] xs:text-4xl xs:leading-[40px]'>Reimagining social media through the power of the blockchain.</h2>
          <p className='mt-[1.875rem] text-base font-normal leading-6 text-[#DDE2FF] opacity-60 w-[88%] font-[tokner] xs:mt-5 xs:text-sm xs:w-[97%] '>We are creating social media 3.0 with influencers, celebrities and creators being able to launch their own digital currency by simply creating a profile with media content posted as Non fungible Tokens that can be owned and traded on the Tknrs network</p>
          <button className='text-sm font-bold leading-normal  text-[#fff] text-center bg-[#22A75D] rounded-[52px] w-[147px] h-[48px] mt-10 greenButtonShadow  xs:mt-[30px]'>Learn More</button>
        </div>
        <div className='2xl:col-span-8 xl:col-span-6 lg:col-span-5 sm:col-span-12 xs:col-span-12 xl:-ml-36 xl:-mt-20 xs:!min-w-[100vw] xs:m-0 xs:p-0 overflow-hidden'>
          <img src={dashboard} alt="" className='xl:w-[100%] xs:w-[100vw] xs:overflow-hidden  xs:min-w-[100px]  xs:overflow-y-hidden xs:hidden' />
          <img src={iphonedashboard} alt=""  className='sm:hidden block overflow-hidden w-full '/>
        </div>
      </div>

    </>
  )
}

export default Dashboard