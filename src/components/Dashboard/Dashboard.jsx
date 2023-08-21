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

function Dashboard() {
  return (
    <>
      <div className='grid grid-cols-12  ml-[173px]'>
        <div className='mt-[230px] col-span-4'>
          <h4 className='text-white'>At Tokners we are</h4>
          <h2 className='text-5xl font-bold leading-[54px] tracking-[-0.06rem] text-[#fff] w-[95%] mt-[10px] '>Reimagining social media through the power of the blockchain.</h2>
          <p className='mt-[30px] text-base font-normal leading-6 text-[#DDE2FF] opacity-60 w-[80%]'>We are creating social media 3.0 with influencers, celebrities and creators being able to launch their own digital currency by simply creating a profile with media content posted as Non fungible Tokens that can be owned and traded on the Tknrs network</p>
          <button className='text-sm font-bold leading-normal text-[#fff] text-center bg-[#22A75D] rounded-[52px] w-[147px] h-[48px] mt-10 greenButtonShadow '>Learn More</button>
        </div>
        <div className='col-span-8  -ml-36 -mt-20'>
          <img src={dashboard} alt="" className='' />
        </div>

      </div>
      {/* Section 2 Creators */}
      <div className='ml-[173px] flex'>
        <div className='bg-[#171B29] w-[777px] h-[436px] '>
          <div className='ml-[70px]'>
            <div className='relative mt-[60px] w-[70px] h-[70px] rounded-full bg-[#22A75D] creatorShadow'><img src={creators} alt="" className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' /></div>
            <h2 className='text-[#fff] mt-5  text-[36px] font-bold leading-[54px]'>For <span className='text-[#22A75D] underline'>Creators</span></h2>
            <p className='mt-5 text-base font-normal leading-6 opacity-50  text-[#FFFFFF] w-[82%]'>Creators can gain independence through a decentralised digital currency system that is
              dependent on growing and engaging with the community and also their star power. They own
              10-15% of the total value of the tokens minted.</p>
            <button className='text-[#22A75D] text-sm font-bold underline mt-[68px]'>Learn More <img src={creatorArrow} alt="" className='inline-block ml-[6px]' /></button>
          </div>
        </div>
        <div className='bg-[#171B29] w-[777px] h-[436px] ml-5 mt-[73px] '>
          <div className='ml-[70px]'>
            <div className='relative mt-[60px] w-[70px] h-[70px] rounded-full bg-[#2278D4] holderShadow'><img src={holderframe} alt="" className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' /></div>
            <h2 className='text-[#fff] mt-5  text-[36px] font-bold leading-[54px]'>For <span className='text-[#2278D4] underline'>Holders</span></h2>
            <p className='mt-5 text-base font-normal leading-6 opacity-50  text-[#FFFFFF] w-[80%]'>Holding social tokens allows the individual to gain access to benefits including unreleased
              content, private communities, direct access to celebrity, early- access to tickets and more as well as the ability to trade with other communities in order to gain access to more creator content with early token buyers being the biggest winners as the value of the token increases with more buyers. .</p>
            <button className='text-[#2278D4] text-sm font-bold underline mt-5'>Learn More <img src={blurarrow} alt="" className='inline-block ml-[6px]' /></button>
          </div>
        </div>
      </div>

      {/* Section 3 What makes us different */}
      <div className='mt-[120px] grid grid-cols-2'>
        <div className=''><img src={colorfull} alt="" className=''/></div>
        <div className='bg-[#fff] rounded-tl-[400px]'>
          <div className='ml-[143px] mt-[296px]'>
            <h2 className='text-[48px] font-bold leading-[54px] text-[#0F1320]'>What makes us different?</h2>
            <h3 className='mt-[30px] text-base font-bold left-5 opacity-60 text-[#0F1320]'>We would only launch tokens with the express permission of the creators. </h3>
            <p className='mt-[30px] text-base font-normal leading-6 opacity-60 text-[#0F1320] w-[65%]'>There are several thousand celebrities and creators on twitter, tiktok, Instagram and YouTube with followings in the millions who we would be actively engaging before we go viral.
              <br />
              <br />
              <br />
              We would get them on our
              platform and they would see the opportunity to create a fan driven digital economy where their digital content can be traded as NFTs and their most loyal fans can have the monetary value of their creator's currency increase significantly as they promote their digital currency across their channels while our native token holders benefit from the Weentar popularity.</p>
            
          </div>
        </div>
      </div>


      {/* Section 4 History */}
      <div className='mt-[203px] ml-[173px] mr-[188px]'>
        <div className='flex'>
          <div>
            <div className='flex'>
              <div className='relative w-[82px] h-[82px]'>
                <img src={h1} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
                <h3 className='absolute text-[#0F1320] text-[26px] font-bold leading-9 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 '>Q1</h3>
              </div>
              <div className='ml-2 flex flex-col justify-end'>
                <div className='w-[12px] h-[12px] bg-[#22A75D] rounded-full'></div>
                <p className='text-[#fff] text-lg font-bold leading-9'>2021</p>
              </div>
            </div>
            <div className='mt-[39px]'>
              <p><span className='text-xs font-bold leading-[34px] text-[#22A75D] mr-5'>01</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70'> Team set-up</span></p>
              <p><span className='text-xs font-bold leading-[34px] text-[#22A75D] mr-5'>02</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70 inline-block min-w-[332px] '> Launch of informational website</span></p>
            </div>
          </div>


          <div className='ml-[31px]'>
            <div className='flex'>
              <div className='relative w-[82px] h-[82px]'>
                <img src={h2} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
                <h3 className='absolute text-[#0F1320] text-[26px] font-bold leading-9 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 '>Q2</h3>
              </div>
              <div className='ml-2 flex flex-col justify-end'>
                <div className='w-[12px] h-[12px] bg-[#2278D4] rounded-full'></div>
                <p className='text-[#fff] text-lg font-bold leading-9'>2021</p>
              </div>
            </div>
            <div className='mt-[39px] '>
              <p><span className='text-xs font-bold leading-[34px] text-[#2278D4] mr-5'>01</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70'> Presale and exchange listings</span></p>
              <p><span className='text-xs font-bold leading-[34px] text-[#2278D4] mr-5'>02</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70'> Blockchain development and launch</span></p>
              <p><span className='text-xs font-bold leading-[34px] text-[#2278D4] mr-5'>03</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70'> Launch of our MVP</span></p>
              <p><span className='text-xs font-bold leading-[34px] text-[#2278D4] mr-5'>04</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70'> Influencer agency partnerships</span></p>
              <p><span className='text-xs font-bold leading-[34px] text-[#2278D4] mr-5'>05</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70 inline-block w-[340px]'> Marketing and promotion </span></p>
            </div>
          </div>

          
          <div className='ml-[24px]'>
            <div className='flex'>
              <div className='relative w-[82px] h-[82px]'>
                <img src={h3} alt="" className='min-w-fit min-h-full absolute top-[66%] left-[50%] -translate-x-2/4 -translate-y-2/4 ' />
                <h3 className='absolute text-[#0F1320] text-[26px] font-bold leading-9 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 '>Q3</h3>
              </div>
              <div className='ml-2 flex flex-col justify-end'>
                <div className='w-[12px] h-[12px] bg-[#FFD100] rounded-full'></div>
                <p className='text-[#fff] text-lg font-bold leading-9'>2021</p>
              </div>
            </div>
            <div className='mt-[39px] '>
              <p><span className='text-xs font-bold leading-[34px] text-[#FFD100] mr-5'>01</span> <span className='text-[#fff] text-lg font-normal leading-[34px] opacity-70 inline-block w-[303px]'> Celebrity, Creator and Influencer partnerships</span></p>
            </div>
          </div>
          
        </div>
      </div>

    </>
  )
}

export default Dashboard