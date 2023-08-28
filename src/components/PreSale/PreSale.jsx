import React from 'react'
import historygreen from '../../assests/images/historygreen.svg'
import historyblue from '../../assests/images/historyblue.svg'
import historyyellow from '../../assests/images/historyyellow.svg'
import one from '../../assests/images/01.svg'
import two from '../../assests/images/02.svg'
import three from '../../assests/images/03.svg'
import '../../App.css'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import {  FreeMode , Pagination } from 'swiper/modules';

function PreSale() {
  return (
    <>
      <div className='bgpresale pb-[160px] lg:block sm:hidden xs:hidden'>
        <div className='2xl:mx-[173px] sm:mx-10 pt-[450px]'>
          <h2 className='text-center text-[#fff] text-5xl font-bold leading-[54px]'>Presale Details</h2>
          <div className='flex' >
            <div className='relative w-[511px] h-[585px] mt-5 rounded-[25px] bg-[#ffffff] flex items-center flex-col text-center'>
              <div className='relative w-[82px] h-[82px] mt-[110px]'>
                <img src={historygreen} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
                <h3 className='absolute text-[#0F1320] text-[26px] font-bold leading-9 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 '>01</h3>
              </div>
              <div className='mt-[63px]'>
                <h2 className='text-[32px] font-bold leading-[54px] text-[#191B21]'>Phase One</h2>
                <p className='text-base font-bold leading-5 text-[#191B21] mt-[9px] opacity-80'>0/04/2021 - 16/04/2021</p>
              </div>
              <div>
                <p className='text-[#191B21] text-[20px] font-bold leading-5 opacity-80 mt-[70px]'>1 BNB = 100000 WNTR</p>
                <p className='text-base font-normal leading-5 mt-5 text-[#191B21] font-[tokner]'>Soft cap: <span className='font-bold opacity-80 font-[toknerb]'> 5000 BNB</span></p>
                <p className='text-base font-normal leading-5 mt-[10px] text-[#191B21] font-[tokner]'>Hard cap: <span className='font-bold opacity-80 font-[toknerb]'> 10000 BNB</span></p>
              </div>
              <img src={one} alt="" className='absolute top-[97px]' />
            </div>

            <div className='relative w-[511px] h-[585px] mt-[80px] ml-5 rounded-[25px] bg-[#ffffff] flex items-center flex-col text-center'>
              <div className='relative w-[82px] h-[82px] mt-[110px]'>
                <img src={historyblue} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
                <h3 className='absolute text-[#0F1320] text-[26px] font-bold leading-9 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 '>02</h3>
              </div>
              <div className='mt-[63px]'>
                <h2 className='text-[32px] font-bold leading-[54px] text-[#191B21]'>Phase Two</h2>
                <p className='text-base font-bold leading-5 text-[#191B21] mt-[9px] opacity-80'>0/04/2021 - 16/04/2021</p>
              </div>
              <div>
                <p className='text-[#191B21] text-[20px] font-bold leading-5 opacity-80 mt-[70px]'>1 BNB = 100000 WNTR</p>
                <p className='text-base font-normal leading-5 mt-5 text-[#191B21] font-[tokner]'>Soft cap: <span className='font-bold opacity-80 font-[toknerb]'> 5000 BNB</span></p>
                <p className='text-base font-normal leading-5 mt-[10px] text-[#191B21] font-[tokner]'>Hard cap: <span className='font-bold opacity-80 font-[toknerb]'> 10000 BNB</span></p>
              </div>
              <img src={two} alt="" className='absolute top-[97px]' />
            </div>

            <div className='relative w-[511px] h-[585px] mt-5 ml-5 rounded-[25px] bg-[#ffffff] flex items-center flex-col text-center'>
              <div className='relative w-[82px] h-[82px] mt-[110px]'>
                <img src={historyyellow} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
                <h3 className='absolute text-[#0F1320] text-[26px] font-bold leading-9 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 '>03</h3>
              </div>
              <div className='mt-[63px]'>
                <h2 className='text-[32px] font-bold leading-[54px] text-[#191B21]'>Phase Three</h2>
                <p className='text-base font-bold leading-5 text-[#191B21] mt-[9px] opacity-80'>0/04/2021 - 16/04/2021</p>
              </div>
              <div>
                <p className='text-[#191B21] text-[20px] font-bold leading-5 opacity-80 mt-[70px]'>1 BNB = 100000 WNTR</p>
                <p className='text-base font-normal leading-5 mt-5 text-[#191B21] font-[tokner]'>Soft cap: <span className='font-bold opacity-80 font-[toknerb]'> 5000 BNB</span></p>
                <p className='text-base font-normal leading-5 mt-[10px] text-[#191B21] font-[tokner]'>Hard cap: <span className='font-bold opacity-80 font-[toknerb]'> 10000 BNB</span></p>
              </div>
              <img src={three} alt="" className='absolute top-[97px]' />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Resposive Presale */}
      <div className='bgpresaleiphone pb-[160px] sm:hidden '>
      <h2 className='text-center text-[#fff] text-5xl font-bold leading-[54px] pt-[127px]'>Presale Details</h2>
      <Swiper pagination={true} modules={[FreeMode ,Pagination]} slidesPerView={1.13} spaceBetween={20} initialSlide={1} centeredSlides={true}   pagination-top={350} freeMode={false}   className="mySwiper customCenteredSlide  sm:block lg:!hidden mt-10">
        <SwiperSlide className='min-h-[550px]'>
        <div className='relative w-[335px] h-[445px] mt-5 rounded-[25px] bg-[#ffffff] flex items-center flex-col text-center'>
              <div className='relative w-[82px] h-[82px] mt-[110px] xs:mt-[90px]'>
                <img src={historygreen} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
                <h3 className='absolute text-[#0F1320] text-[26px] font-bold leading-9 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 '>01</h3>
              </div>
              <div className='mt-[63px] xs:mt-[28px]'>
                <h2 className='text-[32px] font-bold leading-[54px] text-[#191B21]'>Phase One</h2>
                <p className='text-base font-bold leading-5 text-[#191B21] mt-[9px] xs:mt-[4px] opacity-80'>0/04/2021 - 16/04/2021</p>
              </div>
              <div>
                <p className='text-[#191B21] text-[20px] font-bold leading-5 opacity-80 mt-[70px] xs:mt-[40px]'>1 BNB = 100000 WNTR</p>
                <p className='text-base font-normal leading-5 mt-5 text-[#191B21] font-[tokner]'>Soft cap: <span className='font-bold opacity-80 font-[toknerb]'> 5000 BNB</span></p>
                <p className='text-base font-normal leading-5 mt-[10px] text-[#191B21] font-[tokner]'>Hard cap: <span className='font-bold opacity-80 font-[toknerb]'> 10000 BNB</span></p>
              </div>
              <img src={one} alt="" className='absolute top-[97px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide className='min-h-[550px]'>
        <div className='relative w-[335px] h-[445px] mt-5 rounded-[25px] bg-[#ffffff] flex items-center flex-col text-center'>
              <div className='relative w-[82px] h-[82px] mt-[110px] xs:mt-[90px]'>
                <img src={historyblue} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
                <h3 className='absolute text-[#0F1320] text-[26px] font-bold leading-9 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 '>02</h3>
              </div>
              <div className='mt-[63px] xs:mt-[28px]'>
                <h2 className='text-[32px] font-bold leading-[54px] text-[#191B21]'>Phase Two</h2>
                <p className='text-base font-bold leading-5 text-[#191B21] mt-[9px] xs:mt-[4px] opacity-80'>0/04/2021 - 16/04/2021</p>
              </div>
              <div>
                <p className='text-[#191B21] text-[20px] font-bold leading-5 opacity-80 mt-[70px] xs:mt-[40px]'>1 BNB = 100000 WNTR</p>
                <p className='text-base font-normal leading-5 mt-5 text-[#191B21] font-[tokner]'>Soft cap: <span className='font-bold opacity-80 font-[toknerb]'> 5000 BNB</span></p>
                <p className='text-base font-normal leading-5 mt-[10px] text-[#191B21] font-[tokner]'>Hard cap: <span className='font-bold opacity-80 font-[toknerb]'> 10000 BNB</span></p>
              </div>
              <img src={two} alt="" className='absolute top-[97px]' />
            </div>
        </SwiperSlide>
        <SwiperSlide className='min-h-[550px]'>
        <div className='relative w-[335px] h-[445px] mt-5 rounded-[25px] bg-[#ffffff] flex items-center flex-col text-center'>
              <div className='relative w-[82px] h-[82px] mt-[110px] xs:mt-[90px]'>
                <img src={historyyellow} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
                <h3 className='absolute text-[#0F1320] text-[26px] font-bold leading-9 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 '>03</h3>
              </div>
              <div className='mt-[63px] xs:mt-[28px]'>
                <h2 className='text-[32px] font-bold leading-[54px] text-[#191B21]'>Phase Three</h2>
                <p className='text-base font-bold leading-5 text-[#191B21] mt-[9px] xs:mt-[4px] opacity-80'>0/04/2021 - 16/04/2021</p>
              </div>
              <div>
                <p className='text-[#191B21] text-[20px] font-bold leading-5 opacity-80 mt-[70px] xs:mt-[40px]'>1 BNB = 100000 WNTR</p>
                <p className='text-base font-normal leading-5 mt-5 text-[#191B21] font-[tokner]'>Soft cap: <span className='font-bold opacity-80 font-[toknerb]'> 5000 BNB</span></p>
                <p className='text-base font-normal leading-5 mt-[10px] text-[#191B21] font-[tokner]'>Hard cap: <span className='font-bold opacity-80 font-[toknerb]'> 10000 BNB</span></p>
              </div>
              <img src={three} alt="" className='absolute top-[97px]' />
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  )
}

export default PreSale