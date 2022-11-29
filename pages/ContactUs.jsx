import React from 'react'
import Footer from './Component/Footer';
import Image from 'next/image';
import Link from 'next/link';
const ContactUs = () => {
    return (
        <div className="w-full">
            <div className="md:bg-fixed md:w-full " style={{ backgroundImage: 'url(image/gif-2.gif)', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='opacity-75'>
                    <Image  alt='image' src='/image/page2wave.png' width={1080} height={400} layout='responsive' />
                </div>
                <h1 className="text-white text-6xl text-center font-bold">Contact Us</h1>
                <div className=''>
                    <Image  alt='image' src='/image/page2wavedown.png' width={1080} height={200} layout='responsive' />
                </div>
            </div>
            <div className="bg-[#14213D] py-6 ">
                <div className='md:w-[1240px] mx-auto'>
                    <h1 className="text-4xl text-center text-white font-bold">We are here to assist you</h1>
                    <p className="text-white  text-center  py-6"> Feel free to contact us or just drop a line here. Our support staff will reach you very soon.</p>
                </div>
                <div className="md:w-[1240px]  px-4 m-auto">
                    <div className="md:flex   py-8 ">
                        <div className="lg:basis-1/2  py-6">
                            <h1 className="text-2xl py-8  text-[#fca311] font-bold" >CONTACT US</h1>
                            <div className=" md:flex gap-8 py-2">
                                <div className='flex'>
                                    <Image  alt='image' src='/image/house.png' width={60} height={30}/>
                                </div>
                                <h1 className="sm:hidden lg:block  text-white tracking-widest">3.1 UNIVERSAL SQUARE,<br />
                                    DEVONSHIRE ST NORTH,<br /> MANCHESTER M12 6JH</h1>
                                <h1 className="sm:py-10 sm:block lg:hidden sm:text-center  text-white tracking-widest">3.1 UNIVERSAL SQUARE,
                                    DEVONSHIRE ST NORTH,MANCHESTER M12 6JH</h1>
                            </div>
                            <div className=" lg:flex gap-8 py-2">
                                <div className='flex'>
                                    <Image  alt='image' src='/image/headfon.png' width={60} height={50}/>
                                </div>
                                <h1 className=" text-white tracking-widest py-4">0161 974 6110</h1>
                            </div>
                            <div className=" lg:flex gap-8 py-2">
                                <div className='flex text-[#fca311]'>
                                    <Image  alt='image' src='/image/openmail.png' width={60} height={50}/>
                                </div>
                                <Link href='https://accounts.google.com/v3/signin/identifier?dsh=S1946800022%3A1668448922110746&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAtpIClW3LwyU3UBQE-GG7HNFTGaMg55GE_WuAYvER76vZ1cm9dhPrHSC-92QoQOi-lxnSb5'>
                                    <h1 className="cursor-pointer text-white tracking-widest py-6">
                                        INFO@MAGNETRECRUIT.COM
                                    </h1></Link>
                            </div>
                        </div>
                        <div className="basis-1/2">
                            <h1 className="text-2xl py-8  text-[#fca311] font-bold" >SEND IN YOUR QUERY</h1>
                            <div className=" sm:mx-14">
                                <p className="text-white pt-4">Email <span className="text-red-700">*</span></p>
                                <input type="text" className="lg:w-[600px] sm:w-full  h-2 py-4" placeholder="" />
                                <p className="text-white pt-4">Phone <span className="text-red-700">*</span></p>
                                <input type="text" className="lg:w-[600px] sm:w-full  h-2 py-4" placeholder="" />
                                <p className="text-white pt-4">First Name <span className="text-red-700">*</span></p>
                                <input type="text" className=" lg:w-[400px] sm:w-full h-2 py-4" placeholder="" />
                                <p className="text-white pt-4">Last Name <span className="text-red-700">*</span></p>
                                <input type="text" className="lg:w-[400px] sm:w-full h-2 py-4" placeholder="" />
                                <p className="text-white pt-4">Message <span className="text-red-700">*</span></p>
                                <div className='md-w-full mx-auto'>
                                    <textarea name="" id="" cols="40" rows="5" ></textarea>
                                </div>
                                <div className="sm:object-center sm:mx-auto">
                                    <button className=" py-2 px-4 rounded-sm   mt-8 hover:bg-slate-500 font-bold hover:text-white  bg-slate-200 ">Submit Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ContactUs;