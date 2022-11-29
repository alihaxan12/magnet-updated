import React from 'react'
import Image from 'next/image';
import Footer from './Component/Footer';

 const SendCv = () => {
  return (
    <div className="w-full">
            <div className="md:bg-fixed md:w-full bg-slate-400" >
                <div className='opacity-75'>
                    <Image alt='image' src='/image/page2wave.png' width={1080} height={400} layout='responsive' />
                </div>
                <h1 className="text-white text-6xl text-center font-bold">Send Your CV</h1>
                <div className='w-full'>
                    <Image alt='image' src='/image/page2wavedown.png' width={1080} height={200} layout='responsive' />
                </div>
            </div>
            <div className='bg-[#14213d] md:w-full py-10'>
                <div className="md:w-[1240px] md:grid md:grid-cols-1 justify-center mx-auto">
                    <div className=" mx-auto px-4">
                        <p className="text-white w-20  font-bold pt-4">Email <span className="text-red-700">*</span></p>
                        <input type="text" className="md:w-[600px] w-full  h-2 py-4" placeholder="" />
                        <p className="text-white font-bold pt-4">Phone <span className="text-red-700">*</span></p>
                        <input type="text" className="md:w-[600px] w-full  h-2 py-4" placeholder="" />
                        <p className="text-white font-bold pt-4">First Name <span className="text-red-700">*</span></p>
                        <input type="text" className=" md:w-[400px] w-full h-2 py-4" placeholder="" />
                        <p className="text-white font-bold pt-4">Last Name <span className="text-red-700">*</span></p>
                        <input type="text" className="md:w-[400px] w-full h-2 py-4" placeholder="" />
                        <p className="text-white font-bold pt-4">Message <span className="text-red-700">*</span></p>
                        <div className='md-w-full mx-auto'>
                            <textarea name="" id="" cols="40" rows="5" ></textarea>
                        </div>
                        <p className="text-white text-xl pt-4">Upload Your CV <span className="text-red-700">*</span></p>
                        <input className=' rounded-md' type='file'/>
                        <div className='md:w-[600px] py-4 grid col-span-1'>
                            <p className='text-white text-xl '>
                                Magnet Recruit is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:
                            </p>
                            <p className='text-white text-xl font-semibold py-4'>
                                <input type="radio" className='h-4 w-4 mr-2' />
                                I agree to receive other communications from Magnet Recruit.
                            </p>
                            <p className='text-white text-xl  py-4'>
                            In order to provide you the content requested, we need to store and process your personal data. If you consent to us storing your personal data for this purpose, please tick the checkbox below
                            </p>
                            <p className='text-white text-xl font-semibold py-4'>
                                <input type="radio" className='h-4 w-4 mr-2' />
                                I agree to allow Magnet Recruit to store and process my personal data.
                            </p>
                            <p className='text-white text-xl  py-4'>
                                You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.
                            </p>
                        </div>
                        
                        <div className="sm:object-center sm:mx-auto">
                            <button className=" py-2 px-4 rounded-sm   mt-8 hover:bg-slate-500 font-bold hover:text-white  bg-slate-200 ">Submit Now</button>
                        </div>
                    </div>
                </div>
                <div className="md:w-[1240px] md:grid md:grid-cols-1 w-full justify-center mx-auto">
                    <div className=" mx-auto">
                        <p className="text-white font-bold pt-4">Email <span className="text-red-700">*</span></p>
                        <input type="text" className="md:w-[600px] sm:w-full  h-2 py-4" placeholder="" />
                        <p className="text-white font-bold pt-4">Phone <span className="text-red-700">*</span></p>
                        <input type="text" className="md:w-[600px] sm:w-full  h-2 py-4" placeholder="" />
                        <p className="text-white font-bold pt-4">First Name <span className="text-red-700">*</span></p>
                        <input type="text" className=" md:w-[400px] sm:w-full h-2 py-4" placeholder="" />
                        <p className="text-white font-bold pt-4">Last Name <span className="text-red-700">*</span></p>
                        <input type="text" className="md:w-[400px] sm:w-full h-2 py-4" placeholder="" />
                        <p className="text-white font-bold pt-4">Message <span className="text-red-700">*</span></p>
                        <div className='md-w-full mx-auto'>
                            <textarea name="" id="" cols="50" rows="5" ></textarea>
                        </div>
                        <p className="text-white text-xl pt-4">Upload Your CV <span className="text-red-700">*</span></p>
                        <input className=' rounded-md' type='file'/>
                        <div className='md:w-[600px] py-4 w-full grid col-span-1'>
                            <p className='text-white text-xl '>
                                Magnet Recruit is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:
                            </p>
                            <p className='text-white text-xl font-semibold py-4'>
                                <input type="radio" className='h-4 w-4 mr-2' />
                                I agree to receive other communications from Magnet Recruit.
                            </p>
                            <p className='text-white text-xl  py-4'>
                            In order to provide you the content requested, we need to store and process your personal data. If you consent to us storing your personal data for this purpose, please tick the checkbox below
                            </p>
                            <p className='text-white text-xl font-semibold py-4'>
                                <input type="radio" className='h-4 w-4 mr-2' />
                                I agree to allow Magnet Recruit to store and process my personal data.
                            </p>
                            <p className='text-white text-xl  py-4'>
                                You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.
                            </p>
                        </div>
                        
                        <div className="sm:object-center sm:mx-auto">
                            <button className=" py-2 px-4 rounded-sm   mt-8 hover:bg-slate-500 font-bold hover:text-white  bg-slate-200 ">Submit Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default SendCv;


