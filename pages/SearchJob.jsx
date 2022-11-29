import React from 'react'
import Footer from './Component/Footer';
import Image from 'next/image';
import Link from 'next/link';
import {BsBookmark, BsBookmarks} from 'react-icons/bs';
import {FcBookmark} from 'react-icons/fc'
const SearchJob = () => {
    return (
        <div className='w-full'>
            <div className="md:bg-fixed md:w-full " style={{ backgroundImage: 'url(image/gif-2.gif)', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='opacity-75'>
                    <Image  alt='image' src='/image/page2wave.png' width={1080} height={400} layout='responsive' />
                </div>
                <h1 className="text-white text-6xl text-center font-bold">Search Job</h1>
                <div className=''>
                    <Image  alt='image' src='/image/page2wavedown.png' width={1080} height={200} layout='responsive' />
                </div>
            </div>
            <div className='w-full absolute '>
                <Image  alt='image' src='/image/candidatewavedown.svg' width={1080} height={210} layout='responsive' />
            </div>
            <div className="h-52 bg-[#E5E5E5]"></div>
            <div className="lg:flex sm:grid md:grid lg:flex-row bg-[#E5E5E5] sm:overflow-hidden sm:mx-auto md:mx-auto">
                <div className="basis-1/2">
                    <h1 className="text-5xl text-black text-center font-bold py-10">Sectors</h1>
                    <div className="items-center py-4 md:w-[250px]  sm:w-full  md:mx-auto md:my-4 bg-white">
                        <div className='flex justify-center py-4'>
                            <Image  alt='image' src='/image/branch.png' width={70} height={70} />
                        </div>
                        <h1 className=" text-center  text-slate-600 font-bold py-4">Oprations & Supply Chain</h1>
                    </div>
                    <div className="items-center py-4 md:w-[250px]  sm:w-full  md:mx-auto md:my-4 bg-white">
                        <div className='flex justify-center py-4'>
                            <Image  alt='image' src='/image/users.png' width={70} height={70} />
                        </div>
                        <h1 className=" text-center  text-slate-600 font-bold py-4">Oprations & Supply Chain</h1>
                    </div>
                    <div className="items-center py-4 md:w-[250px]  sm:w-full  md:mx-auto md:my-4 bg-white">
                        <div className='flex justify-center py-4'>
                            <Image  alt='image' src='/image/usercheck.png' width={70} height={70} />
                        </div>
                        <h1 className=" text-center  text-slate-600 font-bold py-4">Oprations & Supply Chain</h1>
                    </div>
                    <div className="items-center py-4 md:w-[250px]  sm:w-full  md:mx-auto md:my-4 bg-white">
                        <div className='flex justify-center py-4'>
                            <Image  alt='image' src='/image/sitemap.png' width={70} height={70} />
                        </div>
                        <h1 className=" text-center  text-slate-600 font-bold py-4">Oprations & Supply Chain</h1>
                    </div>
                    <div className="items-center py-4 md:w-[250px]  sm:w-full  md:mx-auto md:my-4 bg-white">
                        <div className='flex justify-center py-4'>
                            <Image  alt='image' src='/image/handholdingheart.png' width={70} height={70} />
                        </div>
                        <h1 className=" text-center  text-slate-600 font-bold py-4">Oprations & Supply Chain</h1>
                    </div>
                </div>
                <div className="w-full  py-32 ">
  {/*================================= input field  ===========================*/}
                    <div className=" md:flex grid px-4 gap-2">
                        <input type="text" className="md:w-80 md:h-10 p-6 mx-4 " placeholder="Enter Your Job title" />
                        <input type="option" className="md:w-80 md:h-10 p-6 mx-4" placeholder="Job type" />
                        <button className="px-10 py-2 my-3 rounded-sm   hover:bg-slate-800 font-bold hover:text-white text-white  bg-black ">Search Now</button>
                    </div>
                    {/* ============================================================ */}
                    <div className="md:grid grid-cols-2 gap-4">
                        <div  className="hover:text-white text-slate-700  " >
                            <div className="py-6 hover:bg-slate-700  md:w-full hover:text-white px-6">
                                <div className='flex gap-4 justify-between '>
                                    <Image  alt='image' src='/image/breafcase.png' width={100} height={100} />
                                    <p className=" py-4   font-semibold">Maintenance Engineering Supervisor/ Team Leader -West Yorkshire-$46k- Double Days (Mon-Fri) </p>
                                </div>    
                                    <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                <div className="flex flex-row gap-4 py-5 text-red-600 ">
                                    <FcBookmark size={30}/>
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer</p>
                                    <p className=" italic text-gray-900 ">Compitative</p>
                                </div>
                                <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                            </div>
                        </div>
                        <div className="hover:text-white text-slate-700  " >
                            <div className="py-6 hover:bg-slate-700  md:w-full hover:text-white px-6">
                                <div className='flex justify-between gap-4'>
                                    <Image  alt='image' src='/image/breafcase.png' width={100} height={100} />
                                    <p className=" py-4   font-semibold">Maintenance Engineering Supervisor/ Team Leader -West Yorkshire-$46k- Double Days (Mon-Fri) </p>
                                </div>    
                                    <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                <div className="flex flex-row gap-4 py-5 text-red-600 ">
                                    <FcBookmark size={30}/>
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer</p>
                                    <p className=" italic text-gray-900 ">Compitative</p>
                                </div>
                                <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                            </div>
                        </div>
                        <div  className="hover:text-white text-slate-700  " >
                            <div className="py-6 hover:bg-slate-700  md:w-full hover:text-white px-6">
                                <div className='flex gap-4 justify-between '>
                                    <Image  alt='image' src='/image/breafcase.png' width={100} height={100} />
                                    <p className=" py-4   font-semibold">Maintenance Engineering Supervisor/ Team Leader -West Yorkshire-$46k- Double Days (Mon-Fri) </p>
                                </div>    
                                    <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                <div className="flex flex-row gap-4 py-5 text-red-600 ">
                                    <FcBookmark size={30}/>
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer</p>
                                    <p className=" italic text-gray-900 ">Compitative</p>
                                </div>
                                <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                            </div>
                        </div>
                        <div className="hover:text-white text-slate-700  " >
                            <div className="py-6 hover:bg-slate-700  md:w-full hover:text-white px-6">
                                <div className='flex justify-between gap-4'>
                                    <Image  alt='image' src='/image/breafcase.png' width={100} height={100} />
                                    <p className=" py-4   font-semibold">Maintenance Engineering Supervisor/ Team Leader -West Yorkshire-$46k- Double Days (Mon-Fri) </p>
                                </div>    
                                    <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                <div className="flex flex-row gap-4 py-5 text-red-600 ">
                                    <FcBookmark size={30}/>
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer</p>
                                    <p className=" italic text-gray-900 ">Compitative</p>
                                </div>
                                <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                            </div>
                        </div>
                        <div  className="hover:text-white text-slate-700  " >
                            <div className="py-6 hover:bg-slate-700  md:w-full hover:text-white px-6">
                                <div className='flex gap-4 justify-between '>
                                    <Image  alt='image' src='/image/breafcase.png' width={100} height={100} />
                                    <p className=" py-4   font-semibold">Maintenance Engineering Supervisor/ Team Leader -West Yorkshire-$46k- Double Days (Mon-Fri) </p>
                                </div>    
                                    <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                <div className="flex flex-row gap-4 py-5 text-red-600 ">
                                    <FcBookmark size={30}/>
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer</p>
                                    <p className=" italic text-gray-900 ">Compitative</p>
                                </div>
                                <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                            </div>
                        </div>
                        <div className="hover:text-white text-slate-700  " >
                            <div className="py-6 hover:bg-slate-700  md:w-full hover:text-white px-6">
                                <div className='flex justify-between gap-4'>
                                    <Image  alt='image' src='/image/breafcase.png' width={100} height={100} />
                                    <p className=" py-4   font-semibold">Maintenance Engineering Supervisor/ Team Leader -West Yorkshire-$46k- Double Days (Mon-Fri) </p>
                                </div>    
                                    <p className=" italic tracking-wide  font-semibold">Magnet Recrute</p>
                                <div className="flex flex-row gap-4 py-5 text-red-600 ">
                                    <FcBookmark size={30}/>
                                    <p className="text-red-700 italic ">North West</p>
                                    <p className="text-red-700 italic ">Salary Offer</p>
                                    <p className=" italic text-gray-900 ">Compitative</p>
                                </div>
                                <p className=" text-right mr-6  font-thin     ">2 months ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default SearchJob;