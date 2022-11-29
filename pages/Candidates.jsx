import React from 'react'
import Accordion from './Component/Accordion';
import { HiOutlineArrowUpTray } from 'react-icons/hi2';
import Footer from './Component/Footer';
import Image from 'next/image';
import Link from 'next/link';
const Candidates = () => {
    return (
        <div className="w-full">
            <div className="md:bg-fixed md:w-full " style={{ backgroundImage: 'url(image/gif1.gif)', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='opacity-75'>
                    <Image  alt='image' src='/image/page2wave.png' width={1080} height={400} layout='responsive' />
                </div>
                <h1 className="text-white text-6xl text-center font-bold">Candidates</h1>
                <div className='opacity-75'>
                    <Image  alt='image' src='/image/page2wavedown.png' width={1080} height={200} layout='responsive' />
                </div>
            </div>
            <div className='w-full ' >
                <div className='w-full absolute bg-transparentn mb-0'>
                    <Image  alt='image' src='/image/candidatewavedown.svg' width={1080} height={210} layout='responsive' className='' />
                </div>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 ">
                <div className="px-20 pt-72">
                    <h1 className="text-[#fca311] text-2xl   ">YOUR FUTURE STARTS HERE</h1>
                    <p className="text-xl leading-loose md:text-justify py-8">At Magnet Recruit, we focus on allowing our Candidates to<br />
                        exploit their potential to its fullest, by offering them the most<br />
                        suitable opportunities. Your growth is what drives us everyday<br />
                        and our Consultants will always make sure to highlight the<br /> value you can add to our Clients.</p>
                </div>
                <div className="lg:grid sm:hidden " style={{backgroundImage: 'url(image/building.png)'}} />
            </div>
            <div className="md:w-full bg-[#14213D]">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 md:w-[1240px] m-auto">
                    <div className=' py-28 sm:ms-auto'>
                        <Image  alt='image' src='/image/Chairs.JPG' width={500} height={400}  />
                    </div>
                    <div className="py-14">
                        <h1 className="text-[#fca311] tracking-widest sm:text-center p-4">OUR PLACEMENT SERVICES</h1>
                        <h1 className="text-[#fca311] tracking-wider sm:text-center text-3xl text-justify py-8 leading-loose">MAXIMISE YOUR OPPORTUNITIES WITH<br /> MAGNET RECRUIT</h1>
                        <div className="pt-14 sm:mx-10 sm:px-10  pb-10">
                            <Accordion />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='w-full absolute bg-transparentn mb-0'>
                    <Image  alt='image' src='/image/candidatewavedown.svg' width={1080} height={210} layout='responsive' className='' />
                </div>
            <div className="lg:w-full bg-slate-50 " >
                <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                    <div className="  pt-60 px-14 lg:bg-none  ">
                        <h1 className="text-[#fca311] text-2xl font-semibold">OUR RIGOROUS PROCESS IS PROVEN TO GET YOU THE TOP TALENT</h1>
                        <div className="py-6 ">
                            <h1 className="text-xl border-b-2 border-b-orange-400  py-1 text-gray-800">EXPERIENCE</h1>
                        </div>
                        <div className="py-6 ">
                            <h1 className="text-xl border-b-2 border-b-orange-400  py-1 text-gray-800">COLLABORATION</h1>
                        </div>
                        <div className="py-6 ">
                            <h1 className="text-xl border-b-2 border-b-orange-400  py-1 text-gray-800">NETWORKING</h1>
                        </div>
                    </div>
                    <div className="lg:grid sm:hidden " style={{backgroundImage: 'url(image/woman.jpg)'}}  />
                </div>
            </div>
            <div className="bg-[#14213D] ">
                <div className="py-12 lg:w-[1240px] grid lg:grid-cols-5 sm:grid-cols-1 sm:w-full m-auto">
                    <div className="sm:m-auto">
                    <div className='flex justify-center'>
                                    <Image  src='/image/bag.png' 
                                    width={150} 
                                    height={150}
                                    objectFit='cover'
                                    layout='fixed'
                                    objectPosition='absolute'
                                    alt='image'/>
                                 </div>
                        {/* <h1 className="text-[#fca311] w-[150px] h-[150px] sm:text-center text-6xl lg:pl-12 sm:m-auto font-bold "><CountUp start={0} end={3} duration={2} /></h1> */}
                        <h1 className="text-2xl sm:m-auto sm:text-center text-white font-bold">Weekly Successes</h1>
                    </div>
                    <div className="sm:m-auto">
                    <div className='flex justify-center'>
                                    <Image  src='/image/location.png' 
                                    width={200} 
                                    height={150}
                                    objectFit='cover'
                                    layout='fixed'
                                    objectPosition='absolute'
                                    alt='image'/>
                                 </div>
                        {/* <h1 className="text-[#fca311] w-[150px] h-[150px] sm:text-center text-6xl lg:pl-12 sm:m-auto font-bold"><CountUp start={0} end={8} duration={2} /></h1> */}
                        <h1 className="text-2xl sm:m-auto sm:text-center text-white font-bold">Global Clients</h1>
                    </div>
                    <div className="sm:m-auto">
                    <div className='flex justify-center'>
                                    <Image src='/image/nots.png'  alt='image'
                                    width={150} 
                                    height={150}
                                    objectFit='cover'
                                    layout='fixed'
                                    objectPosition='absolute'/>
                                 </div>
                        {/* <h1 className="text-[#fca311] w-[150px] h-[150px] sm:text-center text-6xl lg:pl-12 sm:m-auto font-bold"><CountUp start={0} end={100} duration={2} />%</h1> */}
                        <h1 className="text-2xl sm:m-auto sm:text-center text-white font-bold">Success (on retained)</h1>
                    </div>
                    <div className="sm:m-auto">
                    <div className='flex justify-center'>
                                    <Image  alt='image' src='/image/search.png' 
                                    width={150} 
                                    height={150}
                                    objectFit='cover'
                                    layout='fixed'
                                    objectPosition='absolute'/>
                                 </div>
                        {/* <h1 className="text-[#fca311] w-[150px] h-[150px] sm:text-center text-6xl lg:pl-12 sm:m-auto font-bold"><CountUp start={0} end={24} duration={2} />H</h1> */}
                        <h1 className="text-2xl sm:m-auto sm:text-center text-white font-bold">Customer Service</h1>
                    </div>
                    <div className="sm:m-auto">
                    <div className='flex justify-center'>
                                    <Image  alt='image' src='/image/arrow.png' 
                                    width={150} 
                                    height={150}
                                    objectFit='cover'
                                    layout='fixed'
                                    objectPosition='absolute'/>
                                 </div>
                        {/* <h1 className="text-[#fca311] w-[150px] h-[150px] sm:text-center text-6xl lg:pl-12 sm:m-auto font-bold"><CountUp start={0} end={100} duration={2} />%</h1> */}
                        <h1 className="text-2xl sm:m-auto sm:text-center text-white font-bold">Client Satisfaction</h1>
                    </div>
                </div>
            </div>
            <div className='grid'>
                <div className='w-full  bg-transparentn '>
                    <Image  alt='image' src='/image/candidatewavedown.svg' width={1080} height={210} layout='responsive' className='' />
                    {/* <Carosul2 /> */}
                </div>
            </div> 
            <div className="bg-[#14213D] py-10">
                <h1 className=" text-center text-2xl text-slate-300 font-bold">SEND IN YOUR CV</h1>
                <div className="items-center flex justify-center py-12">
                    <Link href="/SendCv"><button className="items-center m-auto px-14 py-4 rounded-md   hover:bg-[#fca311] font-bold hover:text-white  bg-slate-200 ">Send CV</button></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Candidates;