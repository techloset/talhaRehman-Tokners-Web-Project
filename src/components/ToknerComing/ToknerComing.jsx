import React from 'react'
import logoicom from '../../assests/images/iconlogo.svg'
import womenHolding from '../../assests/images/womanHolding.svg'
import doubleQuotes from '../../assests/images/“.svg'
import iphonecoming from '../../assests/images/iphonecomimg.svg'


function ToknerComing() {
  return (
    <>
    
    <div className='2xl:mx-[173px] xl:mx-10 lg:mx-12 mt-[189px] '>
        <div className='flex xl:flex-nowrap sm:flex-wrap xs:flex-wrap 2xl:justify-normal sm:justify-center '>
          <div className='2xl:w-[644px] xl:w-[45%] sm:order-2 xs:order-2 xl:order-1 xs:mt-[70px]'>
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
            <div className='hidden xs:block xs:mx-5'> <button className='text-lg font-bold text-[#22A75D] mt-1 border-[#22A75D] border-dotted border-b-2'>Read More</button></div>

          </div>
          <div className=' relative sm:order-1 xs:order-1 xl:order-2 xs:mx-5'>
            <img src={womenHolding} alt="" className='' />
            <div className='coming lg:w-[80%] lg:h-[82%] 2xl:w-[777px] 2xl:h-[900px] absolute top-[28px] left-[114px] -z-10 xs:w-[85%] xs:h-[97.8%] xs:left-[50px] xs:top-[10px]'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToknerComing