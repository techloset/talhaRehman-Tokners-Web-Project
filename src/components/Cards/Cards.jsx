import React from 'react'
import creators from '../../assests/images/Frame.svg'
import creatorArrow from '../../assests/images/arrow-right-ic.svg'
import holderframe from '../../assests/images/holderFrame.svg'
import blurarrow from '../../assests/images/bluearrow-right-ic.svg'

function Cards() {
  return (
    <> 
     <div className='2xl:ml-[173px] flex sm:flex-wrap xs:flex-wrap xl:flex-nowrap 2xl:mt-0 sm:mt-20 xs:mx-5 2xl:justify-start sm:justify-center  '>
        <div className='bg-[#171B29] 2xl:w-[777px] xl:w-[45%] 2xl:h-[436px] xl:h-auto rounded-[25px] sm:w-[80%] 2xl:pb-0 lg:pb-10 sm:pb-16'>
          <div className='ml-[4.375rem] xs:ml-[1.875rem] '>
            <div className='relative mt-[60px] w-[70px] h-[70px] rounded-full bg-[#22A75D] creatorShadow'><img src={creators} alt="" className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' /></div>
            <h2 className='text-[#fff] mt-5  text-[36px] font-bold leading-[54px] xs:text-[28px]'>For <span className='text-[#22A75D] underline'>Creators</span></h2>
            <p className='mt-5 text-base font-normal leading-6 opacity-50  text-[#FFFFFF] w-[90%] font-[tokner] xs:w-[91%]'>Creators can gain independence through a decentralised digital currency system that is
              dependent on growing and engaging with the community and also their star power. They own
              10-15% of the total value of the tokens minted.</p>
            <button className='text-[#22A75D] text-sm font-bold underline mt-[68px] xs:pb-[41px] xs:mt-[20px]'>Learn More <img src={creatorArrow} alt="" className='inline-block ml-[6px]' /></button>
          </div>
        </div>
        <div className='bg-[#171B29] 2xl:w-[777px] 2xl:h-[436px] xl:w-[45%] sm:w-[80%] xl:h-auto ml-5 mt-[73px] xs:mt-[10px] xs:ml-0 rounded-[25px] 2xl:pb-0  lg:pb-10 sm:pb-16'>
          <div className='ml-[4.375rem] xs:ml-[1.875rem]'>
            <div className='relative mt-[60px] w-[70px] h-[70px] rounded-full bg-[#2278D4] holderShadow'><img src={holderframe} alt="" className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' /></div>
            <h2 className='text-[#fff] mt-5  text-[36px] font-bold leading-[54px] xs:text-[28px]'>For <span className='text-[#2278D4] underline'>Holders</span></h2>
            <p className='mt-5 text-base font-normal leading-6 opacity-50  text-[#FFFFFF] w-[89.86%] font-[tokner] xs:w-[92%]'>Holding social tokens allows the individual to gain access to benefits including unreleased
              content, private communities, direct access to celebrity, early- access to tickets and more as well as the ability to trade with other communities in order to gain access to more creator content with early token buyers being the biggest winners as the value of the token increases with more buyers. .</p>
            <button className='text-[#2278D4] text-sm font-bold underline mt-5 xs:pb-[41px]'>Learn More <img src={blurarrow} alt="" className='inline-block ml-[6px]' /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards