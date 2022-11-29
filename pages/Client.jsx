import React from 'react'
import Footer from './Component/Footer';
import Image from 'next/image';
import {SiSpeedtest} from 'react-icons/si';

const Client = () => {
    return (
        <div className="w-full  ">
            <div className="md:bg-fixed md:w-full " style={{ backgroundImage: 'url(image/gif1.gif)', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='opacity-75'>
                    <Image  alt='image' src='/image/page2wave.png' width={1080} height={400} layout='responsive' />
                </div>
                <h1 className="text-white text-6xl text-center font-bold">Client</h1>
                <div className='opacity-75'>
                    <Image  alt='image' src='/image/page2wavedown.png' width={1080} height={200} layout='responsive' />
                </div>
            </div>
            <div className="w-full py-10 lg:px-24 sm:px-2 ">
                <h1 className="lg:text-5xl sm:text-3xl text-center  break-all subpixel-antialiased ">Magnet Recruit offer a variety of services based<br /> on your specific needs and requirements.</h1>
            </div>
            <div className="grid md:grid-cols-4 p-2 md:w-[1300px] gap-10 m-auto">
                <div>
                    <h1 className="text-6xl my-4 text-center text-[#fca311]">Interim</h1>
                    <div className="shadow-xl border">
                        <div className='flex justify-center py-4'>
                            <Image  alt='image' src='/image/pie.svg' width={50} height={50}  />
                        </div>
                        <p className="text-2xl text-center font-bold py-4">INTERIM</p>
                        <p className=" text-center font-normal px-6 text-gray-500 text-xl leading-loose">Drawing on our deep industry knowledge and large network, we will put the best individuals in front of you. Whether it’s short-term interim support during seasonal peaks or the right person for your project, our Interim Consultants team will ensure to facilitate the delivery of your assignment with the most appropriate contractors.</p>
                    </div>
                </div>
                <div>
                    <div className="h-52"></div>
                    <h1 className="text-6xl my-4 text-center text-[#fca311]">Perm</h1>
                    <div className="shadow-xl border">
                        <div className='flex justify-center py-4'>
                            <Image  alt='image' src='/image/manlocate.png' width={50} height={50}  />
                        </div>
                        <p className="text-2xl text-center font-bold py-4">PERMANENT PLACEMENTS</p>
                        <p className=" text-center font-normal px-6 text-gray-500 text-xl leading-loose">Our permanent recruitment experts will guarantee you the best individuals who will strengthen your operation and take it to the next level. Always putting your Culture and values at the forefront whilst simultaneously ensuring a high-level professional performance that surpasses your expectations.</p>
                    </div>
                </div>
                <div>
                    <div className="h-96"></div>
                    <h1 className="text-6xl my-4 text-center text-[#fca311]">Retained</h1>
                    <div className="shadow-xl border">
                    <div className='flex justify-center py-4'>
                            <Image  alt='image' src='/image/bill.png' width={50} height={50}  />
                        </div>
                        <p className="text-2xl text-center font-bold py-4">RETAINED ROLES</p>
                        <p className=" text-center font-normal px-6 text-gray-500 text-xl leading-loose">Our permanent recruitment experts will guarantee you the best individuals who will strengthen your operation and take it to the next level. Always putting your Culture and values at the forefront whilst simultaneously ensuring a high-level professional performance that surpasses your expectations.</p>
                    </div>
                </div>
                <div>
                    <div className="h-52"></div> <div className="h-52"></div> <div className="h-52"></div>
                    <h1 className="text-6xl my-4 text-center text-[#fca311]">Bespoke</h1>
                    <div className="shadow-xl border">
                      <div className='flex justify-center py-4'>
                            <Image alt='/' src='/image/slider.png' width={50} height={50}  />
                        </div>
                        <p className="text-2xl text-center font-bold py-4">BESPOKE PACKAGES</p>
                        <p className=" text-center font-normal px-6 text-gray-500 text-xl leading-loose">Our permanent recruitment experts will guarantee you the best individuals who will strengthen your operation and take it to the next level. Always putting your Culture and values at the forefront whilst simultaneously ensuring a high-level professional performance that surpasses your expectations.</p>
                    </div>
                </div>
            </div>
            <div className="pt-6  bg-[#14213D] absolut  " style={{ backgroundImage: `url(/image/laptop1.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
                <div className="bg-[#14213D] lg:opacity-90 sm:opacity-99 ">
                    <div className="lg:w-[1240px] p lg:m-auto">
                        <div className='flex justify-center py-20 '>
                            <span className='rounded-full p-6 bg-[#fca311]'>
                                <SiSpeedtest size={50} className='hover:fill-slate-200'/>
                            </span>
                        </div>
                        <div>
                            <h1 className="lg:text-6xl sm:text-3xl text-[#fca311] text-center font-bold">Fast. Reliable. Facile.</h1>
                        </div>
                        <div className="py-12">
                            <h1 className="lg:text-3xl sm:text-2xl text-white text-center">We guarantee quality, every single time. </h1>
                        </div>
                        <div className=" text-white  md:text-justify px-5 md:mx-40 text-xl">
                            <h1 className='xs:text-center'>We are leaders in:</h1>
                            <ul className="md:list-disc text-justify    pl-4 py-4 ">
                                <li className=" md:list-disc py-2">Quality over quantity.</li>
                                <li className=" md:list-disc py-2">Unrivalled market knowledge.</li>
                                <li className=" md:list-disc py-2">Providing the highest calibre of candidates. </li>
                            </ul>
                        </div>
                        <div className="h-36"></div>
                    </div>
                </div>
            </div>
            <div className="bg-[#14213D] py-8 lg:w-full sm:grid">
                <div className=" lg:flex lg:flex-row lg:w-[1240px] m-auto gap-10 py-8">
                    <div className="basis-1/2 sm:py-6">
                        <h1 className="text-white lg:text-5xl sm:text-3xl sm:text-center sm:m-auto">Send your CV to us. Let us<br /> handle the rest.</h1>
                    </div>
                    <div className="basis-1/2 place-items-center">
                        <button type='submit' className="px-14 py-4 rounded-md ml-28 mt-8 hover:bg-[#fca311] font-bold hover:text-white  bg-slate-200 ">Send CV</button>
                    </div>
                </div>
            </div>
            <div className="w-full ">
                {/* <Carosel2 /> */}
            </div>
            <Footer />
        </div>
    )
}
export default Client;