import React from 'react'
import historygreen from '../../assests/images/historygreen.svg'
import historyblue from '../../assests/images/historyblue.svg'
import historyyellow from '../../assests/images/historyyellow.svg'
import historyred from '../../assests/images/historyred.svg'

function History() {
  return (
   <> 
    <div className='mt-[203px] 2xl:ml-[173px] 2xl:mr-[188px] xs:ml-5 xs:mt-[70px] xs:overflow-x-hidden'>
        <div className='flex sm:flex-wrap xs:flex-wrap sm:justify-center 2xl:justify-normal 2xl:flex-nowrap'>
          <div>
            <div className='flex sm:mt-10 2xl:mt-0'>
              <div className='relative w-[82px] h-[82px]'>
                <img src={historygreen} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
                <h3 className='absolute text-[#0F1320] text-[26px] font-bold leading-9 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 '>Q1</h3>
              </div>
              <div className='ml-2 flex flex-col justify-end'>
                <div className='w-[12px] h-[12px] bg-[#22A75D] rounded-full'></div>
                <p className='text-[#fff] text-lg font-bold leading-9'>2021</p>
              </div>
            </div>
            <div className='mt-[39px] w-[365px]'>
              <p><span className='text-xs font-bold leading-[34px] text-[#22A75D] mr-5 xs:mr-[10px]'>01</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70 font-[tokner]'> Team set-up</span></p>
              <p><span className='text-xs font-bold leading-[34px] text-[#22A75D] mr-5 xs:mr-[10px]'>02</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70 font-[tokner]'> Launch of informational website</span></p>
            </div>
          </div>


          <div className='ml-[31px] xs:ml-0 xs:mt-[42px]'>
            <div className='flex sm:mt-10 2xl:mt-0'>
              <div className='relative w-[82px] h-[82px]'>
                <img src={historyblue} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
                <h3 className='absolute text-[#0F1320] text-[26px] font-bold leading-9 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 '>Q2</h3>
              </div>
              <div className='ml-2 flex flex-col justify-end'>
                <div className='w-[12px] h-[12px] bg-[#2278D4] rounded-full'></div>
                <p className='text-[#fff] text-lg font-bold leading-9'>2021</p>
              </div>
            </div>
            <div className='mt-[39px] leading-[34px] w-[375px]'>
              <p><span className='text-xs font-bold leading-[34px] text-[#2278D4] mr-5 xs:mr-[10px]'>01</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70 font-[tokner]'> Presale and exchange listings</span></p>
              <p><span className='text-xs font-bold leading-[34px] text-[#2278D4] mr-5 xs:mr-[10px]'>02</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70 font-[tokner]'> Blockchain development and launch</span></p>
              <p><span className='text-xs font-bold leading-[34px] text-[#2278D4] mr-5 xs:mr-[10px]'>03</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70 font-[tokner]'> Launch of our MVP</span></p>
              <p><span className='text-xs font-bold leading-[34px] text-[#2278D4] mr-5 xs:mr-[10px]'>04</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70 font-[tokner]'> Influencer agency partnerships</span></p>
              <p><span className='text-xs font-bold leading-[34px] text-[#2278D4] mr-5 xs:mr-[10px]'>05</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70 font-[tokner]'> Marketing and promotion </span></p>
            </div>
          </div>


          <div className='ml-[24px] xs:ml-0 xs:mt-[42px]'>
            <div className='flex sm:mt-10 2xl:mt-0'>
              <div className='relative w-[82px] h-[82px]'>
                <img src={historyyellow} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
                <h3 className='absolute text-[#0F1320] text-[26px] font-bold leading-9 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 '>Q3</h3>
              </div>
              <div className='ml-2 flex flex-col justify-end'>
                <div className='w-[12px] h-[12px] bg-[#FFD100] rounded-full'></div>
                <p className='text-[#fff] text-lg font-bold leading-9'>2021</p>
              </div>
            </div>
            <div className='mt-[39px] w-[338px]'>
              <div className='flex '>
                <p><span className='text-xs font-bold leading-[34px] text-[#FFD100] mr-5 xs:mr-[10px]'>01</span> </p>
                <p><span className='text-[#fff] text-lg font-normal leading-[20px] opacity-70 font-[tokner] '> Celebrity, Creator and Influencer partnerships</span></p>
              </div>
              <div className='flex mt-2'>
                <p><span className='text-xs font-bold leading-[34px] text-[#FFD100] mr-5 xs:mr-[10px]'>02</span> </p>
                <p><span className='text-[#fff] text-lg font-normal leading-[20px] opacity-70 font-[tokner] '>  Expansion of creator communities on our platform</span></p>
              </div>
              <div className='flex mt-2'>
                <p><span className='text-xs font-bold leading-[34px] text-[#FFD100] mr-5 xs:mr-[10px]'>03</span> </p>
                <p><span className='text-[#fff] text-lg font-normal leading-[20px] opacity-70  font-[tokner]'>  More Marketing and promotion</span></p>
              </div>
            </div>
          </div>

          <div className='ml-[61px] xs:ml-0 xs:mt-[42px]'>
            <div className='flex sm:mt-10 2xl:mt-0'>
              <div className='relative w-[82px] h-[82px]'>
                <img src={historyred} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
                <h3 className='absolute text-[#0F1320] text-[26px] font-bold leading-9 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 '>Q4</h3>
              </div>
              <div className='ml-2 flex flex-col justify-end'>
                <div className='w-[12px] h-[12px] bg-[#E20613] rounded-full'></div>
                <p className='text-[#fff] text-lg font-bold leading-9'>2021</p>
              </div>
            </div>
            <div className='mt-[39px] w-[338px]'>
              <div className='flex leading-[34px] '>
                <p><span className='text-xs font-bold leading-[34px] text-[#E20613] mr-5 xs:mr-[10px]'>01</span> </p>
                <p><span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70 font-[tokner] '> Mainstream partnerships</span></p>
              </div>
              <div className='flex'>
                <p><span className='text-xs font-bold leading-[34px] text-[#E20613] mr-5 xs:mr-[10px]'>02</span> </p>
                <p><span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70 font-[tokner] '>   500 active creator communities</span></p>
              </div>
              <div className='flex'>
                <p><span className='text-xs font-bold leading-[34px] text-[#E20613] mr-5 xs:mr-[10px]'>03</span> </p>
                <p><span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70 font-[tokner] '>  2Million active community members</span></p>
              </div>
              <div className='flex'>
                <p><span className='text-xs font-bold leading-[34px] text-[#E20613] mr-5 xs:mr-[10px]'>04</span> </p>
                <p><span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70 font-[tokner] '>   More Marketing and promotion</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>
   </>
  )
}

export default History