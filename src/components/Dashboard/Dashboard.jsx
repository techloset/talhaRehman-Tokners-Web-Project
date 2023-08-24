import React from 'react'
import bgblur from '../../assests/images/bgblur.svg'
import dashboard from '../../assests/images/headerBg.svg'
import creators from '../../assests/images/Frame.svg'
import creatorArrow from '../../assests/images/arrow-right-ic.svg'
import holderframe from '../../assests/images/holderFrame.svg'
import blurarrow from '../../assests/images/bluearrow-right-ic.svg'
import colorfull from '../../assests/images/colorfull.svg'
import h1 from '../../assests/images/H1.svg'
import h2 from '../../assests/images/h2.svg'
import h3 from '../../assests/images/h3.svg'
import h4 from '../../assests/images/h4.svg'
import logoicom from '../../assests/images/iconlogo.svg'
import womenHolding from '../../assests/images/womanHolding.svg'
import doubleQuotes from '../../assests/images/“.svg'
import one from '../../assests/images/01.svg'
import two from '../../assests/images/02.svg'
import three from '../../assests/images/03.svg'
import cr from '../../assests/images/cr.svg'
import cr1 from '../../assests/images/cr1.svg'
import iphonecolor from '../../assests/images/iphonecolor.svg'
import iphonecoming from '../../assests/images/iphonecomimg.svg'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


function Dashboard() {
  
  return (
    <>
    <div className='bgBlur overflow-hidden xl:block sm:hidden xs:hidden'></div>
      <div className='grid grid-cols-12  2xl:ml-[173px] lg:ml-20 xl:ml-20 sm:ml-14 xs:mx-5 overflow-x-hidden'>
        <div className='2xl:mt-[230px] xl:mt-[150px] lg:mt-[80px] sm:mt-[50px] xs:mt-[56px] 2xl:col-span-4 xl:col-span-6 lg:col-span-7 sm:col-span-12 xs:col-span-12'>
          <h4 className='text-white xs:ml-1 xs:text-sm'>At Tokners we are</h4>
          <h2 className='text-5xl font-bold leading-[54px] tracking-[-0.06rem] text-[#fff] 2xl:w-[97%] xl:w-[90%] mt-[10px] xs:text-4xl xs:leading-[40px]'>Reimagining social media through the power of the blockchain.</h2>
          <p className='mt-[30px] text-base font-normal leading-6 text-[#DDE2FF] opacity-60 w-[88%] font-[tokner] xs:mt-5 xs:text-sm xs:w-[97%] '>We are creating social media 3.0 with influencers, celebrities and creators being able to launch their own digital currency by simply creating a profile with media content posted as Non fungible Tokens that can be owned and traded on the Tknrs network</p>
          <button className='text-sm font-bold leading-normal text-[#fff] text-center bg-[#22A75D] rounded-[52px] w-[147px] h-[48px] mt-10 greenButtonShadow  xs:mt-[30px]'>Learn More</button>
        </div>
        <div className='2xl:col-span-8 xl:col-span-6 lg:col-span-5 sm:col-span-12 xs:col-span-12 xl:-ml-36 xl:-mt-20 xs:!min-w-[100vw]'>
          <img src={dashboard} alt="" className='xl:w-[100%] xs:w-[100vw] xs:overflow-hidden  xs:min-w-[100px]  xs:overflow-y-hidden' />
        </div>

      </div>
      {/* Section 2 Creators */}
      <div className='2xl:ml-[173px] flex sm:flex-wrap xs:flex-wrap xl:flex-nowrap 2xl:mt-0 sm:mt-20 xs:mx-5 2xl:justify-start sm:justify-center  '>
        <div className='bg-[#171B29] 2xl:w-[777px] xl:w-[45%] 2xl:h-[436px] xl:h-auto rounded-[25px] sm:w-[80%] 2xl:pb-0 lg:pb-10 sm:pb-16'>
          <div className='ml-[70px] xs:ml-[30px] '>
            <div className='relative mt-[60px] w-[70px] h-[70px] rounded-full bg-[#22A75D] creatorShadow'><img src={creators} alt="" className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' /></div>
            <h2 className='text-[#fff] mt-5  text-[36px] font-bold leading-[54px] xs:text-[28px]'>For <span className='text-[#22A75D] underline'>Creators</span></h2>
            <p className='mt-5 text-base font-normal leading-6 opacity-50  text-[#FFFFFF] w-[90%] font-[tokner] xs:w-[91%]'>Creators can gain independence through a decentralised digital currency system that is
              dependent on growing and engaging with the community and also their star power. They own
              10-15% of the total value of the tokens minted.</p>
            <button className='text-[#22A75D] text-sm font-bold underline mt-[68px] xs:pb-[41px] xs:mt-[20px]'>Learn More <img src={creatorArrow} alt="" className='inline-block ml-[6px]' /></button>
          </div>
        </div>
        <div className='bg-[#171B29] 2xl:w-[777px] 2xl:h-[436px] xl:w-[45%] sm:w-[80%] xl:h-auto ml-5 mt-[73px] xs:mt-[10px] xs:ml-0 rounded-[25px] 2xl:pb-0  lg:pb-10 sm:pb-16'>
          <div className='ml-[70px] xs:ml-[30px]'>
            <div className='relative mt-[60px] w-[70px] h-[70px] rounded-full bg-[#2278D4] holderShadow'><img src={holderframe} alt="" className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' /></div>
            <h2 className='text-[#fff] mt-5  text-[36px] font-bold leading-[54px] xs:text-[28px]'>For <span className='text-[#2278D4] underline'>Holders</span></h2>
            <p className='mt-5 text-base font-normal leading-6 opacity-50  text-[#FFFFFF] w-[89%] font-[tokner] xs:w-[92%]'>Holding social tokens allows the individual to gain access to benefits including unreleased
              content, private communities, direct access to celebrity, early- access to tickets and more as well as the ability to trade with other communities in order to gain access to more creator content with early token buyers being the biggest winners as the value of the token increases with more buyers. .</p>
            <button className='text-[#2278D4] text-sm font-bold underline mt-5 xs:pb-[41px]'>Learn More <img src={blurarrow} alt="" className='inline-block ml-[6px]' /></button>
          </div>
        </div>
      </div>

      {/* Section 3 What makes us different */}
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


      {/* Section 4 History */}
      <div className='mt-[203px] 2xl:ml-[173px] 2xl:mr-[188px] xs:ml-5 xs:mt-[70px] xs:overflow-x-hidden'>
        <div className='flex sm:flex-wrap xs:flex-wrap sm:justify-center 2xl:justify-normal'>
          <div>
            <div className='flex sm:mt-10 2xl:mt-0'>
              <div className='relative w-[82px] h-[82px]'>
                <img src={h1} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
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
                <img src={h2} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
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
                <img src={h3} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
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
                <img src={h4} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
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

      {/* Section 5 Tokner is Coming  */}

      <div className='2xl:mx-[173px] xl:mx-10 lg:mx-12 mt-[189px] '>
        <div className='flex xl:flex-nowrap sm:flex-wrap xs:flex-wrap 2xl:justify-normal sm:justify-center '>
          <div className='2xl:w-[644px] xl:w-[45%] sm:order-2 xs:order-2 xl:order-1'>
            <div className='flex flex-nowrap xs:flex-wrap xl:justify-normal sm:justify-center xs:ml-5'>
              <img src={logoicom} alt="" className='sm:self-end xl:self-auto xs:hidden' />
              <img src={iphonecoming} alt="" className='hidden xs:block' />
              <h2 className='text-5xl font-bold text-[#fff] ml-6 xl:mt-0 sm:mt-20 xs:text-4xl xs:ml-0 xs:mr-[30px] xs:mt-[10px]'>Tokner is coming</h2>
            </div>
            <div className='xl:mx-0 xl:w-[100%] sm:w-[90%] sm:mx-auto xs:mx-5' >

              <p className='text-[#fff] text-base font-bold leading-6 w-[95%] mt-[30px] opacity-60 xs:text-sm xs:w-[99%]'>Cryptocurrency adoption is at less than 1% of the global world population with some countries and entities actively fighting against its mass adoption and the smartest developers and nerds holding the fort.</p>
              <p className='text-[#fff] text-base font-normal leading-6 opacity-60 mt-5 w-[97%] font-[tokner] xs:text-sm xs:w-[99%]'> Bitcoin was the first, and it has since grown to thousands of tokens launched all aiming to fix one problem or the other with some quite simply FOMOing the moment. Our goal is to bring mass adoption to the cryptocurrency space by dumbing it down. How far down? So down that even a celebrity can explain it in simple words to their followers and have them download an app, buy into the social currency of their favourite person and watch their investment as is with other crypto currency project.
               <br /> <br />We are trying to do to this space what investment apps did for the "nonexistent retail investors". We are gamefying digital currency, bringing in popular faces instead of hard to understand projects to make it the norm and inadvertently being the "gateway drug" for a lot of people to finally give this space a real look.</p>
              <p className=' text-[#9FA1A6] text-base font-bold leading-6 mt-5 w-[97%]'>A new digital economy is coming. People would be just as powerful as countries and creators would be paid beyond the peanuts that conventional social media platforms can offer.</p>
              <p className='text-[#9FA1A6] text-base font-normal leading-6 mt-5 w-[100%] font-[tokner]'> There would be new markets and advertisers with little to offer would not find home there. Like Kanye said,</p>
              <div className='mt-5 flex items-start'><img src={doubleQuotes} alt="" className='mt-2' /> <p className='text-[#9FA1A6] ml-[14px] inline text-base font-bold italic leading-6 w-[90%]'><span> "</span> Personalities would become the new currency, and services would be built on top of them". </p></div>
              <p className='text-base text-[#fff] font-normal leading-6 opacity-60 mt-5 font-[tokner] w-[98.5%]'>Well, Kanye didn't exactly say that, but it sounds like something we hope he would say.
                <br /><br />
                Currency is digital, it has been that way for a while now, but this time there would be no dead presidents on the money, there would people like you on the money, and you would own it because it would make the most sense in the world.</p>
            </div>
            <div className='mt-5 xl:mx-0 xl:w-[100%] sm:w-[90%] sm:mx-auto xs:hidden '><button className='text-sm font-bold leading-normal text-[#fff] border-2 border-[#22A75D] rounded-[52px] w-[147px] h-12'>Read More</button></div>
            <div className='hidden xs:block xs:mx-5'> <button className='text-lg font-bold text-[#22A75D] mt-1'>Read More</button></div>

          </div>
          <div className=' relative sm:order-1 xs:order-1 xl:order-2'>
            <img src={womenHolding} alt="" className='' />
            <div className='coming lg:w-[80%] lg:h-[82%] 2xl:w-[777px] 2xl:h-[900px] absolute top-[28px] left-[114px] -z-10'></div>
          </div>
        </div>
      </div>

      {/* section 6 PreSAle */}
      <div className='bgpresale pb-[160px] lg:block sm:hidden xs:hidden'>
        <div className='xl:mx-[173px] sm:mx-10 pt-[450px]'>
          <h2 className='text-center text-[#fff] text-5xl font-bold leading-[54px]'>Presale Details</h2>
          <div className='flex' >
            <div className='relative w-[511px] h-[585px] mt-5 rounded-[25px] bg-[#ffffff] flex items-center flex-col text-center'>
              <div className='relative w-[82px] h-[82px] mt-[110px]'>
                <img src={h1} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
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
                <img src={h2} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
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
                <img src={h3} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
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
      <Swiper pagination={true} modules={[Pagination]} slidesPerView={1.1} spaceBetween={20}  pagination-top={350}  className="mySwiper  sm:block lg:!hidden mt-10">
        <SwiperSlide className='min-h-[550px]'>
        <div className='relative w-[335px] h-[445px] mt-5 rounded-[25px] bg-[#ffffff] flex items-center flex-col text-center'>
              <div className='relative w-[82px] h-[82px] mt-[110px] xs:mt-[90px]'>
                <img src={h1} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
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
                <img src={h2} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
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
                <img src={h3} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
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
      {/* section 7 */}

      <div className='xl:mx-[173px] sm:mx-10 lg:mt-0 sm:mt-20 xs:mt-20'>
        <h2 className='text-4xl font-bold leading-[54px] text-[#F7F5F9] text-center'>How to buy</h2>
        <div className='flex lg:flex-nowrap sm:flex-wrap xs:flex-wrap sm:justify-center lg:justify-normal xs:mx-5'>
          <div className='w-[511px] h-[270px] xs:w-[335px] xs:h-[216px] bg-[#171B29] rounded-[25px] relative mt-[50px] '>
            <span className='text-xs font-bold leading-6 opacity-30 text-[#fff] ml-[30px] pt-[30px] block'>01</span>
            <div className='flex flex-col justify-center items-center  text-lg font-bold leading-6 text-[#fff] mt-[45px] xs:mt-5 xs:text-base'><p className='w-[52%] xs:w-[70%]'>First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.</p></div>
            <div className='h-[86px] w-[86px] xs:w-[60px] xs:h-[60px] rounded-full bg-[#0F1320] flex justify-center items-center absolute lg:top-[43%] lg:left-[90%] sm:left-[50%] xs:left-[50%] sm:top-[100%] xs:top-[100%]  sm:-translate-x-2/4 xs:-translate-x-2/4 sm:-translate-y-2/4 xs:-translate-y-2/4 lg:transform-none z-50'><div><img src={cr} alt="" className='sm:rotate-90 xs:rotate-90 lg:rotate-0' /></div></div>
          </div>

          <div className='w-[511px] h-[270px] xs:w-[335px] xs:h-[216px] bg-[#171B29] rounded-[25px] relative lg:ml-5 lg:mt-[110px] sm:mt-5 xs:mt-5'>
            <span className='text-xs font-bold leading-6 opacity-30 text-[#fff] ml-[30px] pt-[30px] block'>02</span>
            <div className='flex flex-col justify-center items-center  text-lg font-bold leading-6 text-[#fff] mt-[45px] xs:mt-5 xs:text-base'><p className='w-[50%] xs:w-[70%]'>Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale wallet</p></div>
            <div className='h-[86px] w-[86px] xs:w-[60px] xs:h-[60px] rounded-full bg-[#0F1320] flex justify-center items-center absolute lg:top-[20%] lg:left-[90%] sm:left-[50%]  xs:left-[50%] sm:top-[100%] xs:top-[100%] sm:-translate-x-2/4 sm:-translate-y-2/4 xs:-translate-x-2/4 xs:-translate-y-2/4 lg:transform-none z-50'><div><img src={cr1} alt="" className='sm:rotate-90 xs:rotate-90 lg:rotate-0'/></div></div>
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

export default Dashboard