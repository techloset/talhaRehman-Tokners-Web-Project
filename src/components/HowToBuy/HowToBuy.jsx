import React from 'react'
import greenarrow from '../../assests/images/greenarrow.svg'
import yellowarrow from '../../assests/images/yellowarrow.svg'

function HowToBuy() {
  return (
    <>
    <div className='xl:mx-[173px] sm:mx-10 lg:mt-0 sm:mt-20 xs:mt-20'>
        <h2 className='text-4xl font-bold leading-[54px] text-[#F7F5F9] text-center'>How to buy</h2>
        <div className='flex lg:flex-nowrap sm:flex-wrap xs:flex-wrap sm:justify-center lg:justify-normal xs:mx-5'>
          <div className='w-[511px] h-[270px] xs:w-[335px] xs:h-[216px] bg-[#171B29] rounded-[25px] relative mt-[50px] '>
            <span className='text-xs font-bold leading-6 opacity-30 text-[#fff] ml-[30px] pt-[30px] block'>01</span>
            <div className='flex flex-col justify-center items-center  text-lg font-bold leading-6 text-[#fff] mt-[45px] xs:mt-5 xs:text-base'><p className='w-[52%] xs:w-[70%]'>First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.</p></div>
            <div className='h-[86px] w-[86px] xs:w-[60px] xs:h-[60px] rounded-full bg-[#0F1320] flex justify-center items-center absolute lg:top-[43%] lg:left-[90%] sm:left-[50%] xs:left-[50%] sm:top-[100%] xs:top-[100%]  sm:-translate-x-2/4 xs:-translate-x-2/4 sm:-translate-y-2/4 xs:-translate-y-2/4 lg:transform-none z-50'><div><img src={greenarrow} alt="" className='sm:rotate-90 xs:rotate-90 lg:rotate-0' /></div></div>
          </div>

          <div className='w-[511px] h-[270px] xs:w-[335px] xs:h-[216px] bg-[#171B29] rounded-[25px] relative lg:ml-5 lg:mt-[110px] sm:mt-5 xs:mt-5'>
            <span className='text-xs font-bold leading-6 opacity-30 text-[#fff] ml-[30px] pt-[30px] block'>02</span>
            <div className='flex flex-col justify-center items-center  text-lg font-bold leading-6 text-[#fff] mt-[45px] xs:mt-5 xs:text-base'><p className='w-[50%] xs:w-[70%]'>Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale wallet</p></div>
            <div className='h-[86px] w-[86px] xs:w-[60px] xs:h-[60px] rounded-full bg-[#0F1320] flex justify-center items-center absolute lg:top-[20%] lg:left-[90%] sm:left-[50%]  xs:left-[50%] sm:top-[100%] xs:top-[100%] sm:-translate-x-2/4 sm:-translate-y-2/4 xs:-translate-x-2/4 xs:-translate-y-2/4 lg:transform-none z-50'><div><img src={yellowarrow} alt="" className='sm:rotate-90 xs:rotate-90 lg:rotate-0'/></div></div>
          </div>
          <div className='w-[511px] h-[270px] xs:w-[335px] xs:h-[216px] bg-[#171B29] rounded-[25px] relative lg:ml-5 lg:mt-[50px] sm:mt-5 xs:mt-5'>
            <span className='text-xs font-bold leading-6 opacity-30 text-[#fff] ml-[30px] pt-[30px] block'>03</span>
            <div className='flex flex-col justify-center items-center  text-lg font-bold leading-6 text-[#fff] mt-[45px] xs:mt-5 xs:text-base'><p className='w-[50%] xs:w-[70%]'>Then after you will received your $WNTR to your address within 24hours. </p></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowToBuy