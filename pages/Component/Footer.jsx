import React from 'react'
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='w-full bg-[#14213d]'>
            <div className='pt-10 px-24'>
                <Image src="/image/logo.png"  width={400} height={80} quality={100}  alt='image'/>
            </div>
            <div className='md:w-[1240px] md:grid md:grid-cols-3'>
                <div className='mt-5 md:col-span-1 '>
                    <h1 className=' text-white pl-24 text-2xl font-bold'>Get in Touch</h1>
                    <div className='flex mx-auto text-white gap-8 pl-20 py-3'>
                        <HiLocationMarker size={50} />
                        <p className='text-white'>3.1 Universal Square, Devonshire St North, Manchester M12 6JH</p>
                    </div>
                    <div className='flex mx-auto text-white gap-8 pl-20 py-3'>
                        <HiPhone size={40} />
                        <p className='text-white'>0161 974 6110</p>
                    </div>
                    <div className='flex mx-auto text-white gap-8 pl-20 py-3'>
                        <HiMail size={40} />
                        <p className='text-white'>info@magnetrecruit.com</p>
                    </div>
                    <div className='flex mx-auto sm:justify-center text-white gap-8 pl-20 py-3'>
                        <p className='text-white text-center'>Interact with Us on Social Media</p>
                    </div>
                    <div className='flex md:justiy-center justify-center gap-5 text-white   py-3'>
                        <BsFacebook size={30} className='hover:fill-[#fca311]' />
                        <BsTwitter size={30} className='hover:fill-[#fca311]' />
                        <BsLinkedin size={30} className='hover:fill-[#fca311]' />
                    </div>
                </div>
                <div className='mt-5  px-4 '>
                    <h1 className=' text-white text-center   md:text-justify text-2xl  font-bold '>Quick Links</h1>
                    <div className='grid '>
                        <ul className='text-white text-center md:text-justify'>
                            <Link href='/'><li className='py-2 text-[#fca311]  hover:text-white'>Magnet Recruit</li></Link>
                            <Link href='/WhoweAre'><li className='py-2 hover:text-[#fca311]'>Who We Are</li></Link>
                            <Link href='/Client'><li className='py-2 hover:text-[#fca311]'>Clients</li></Link>
                            <Link href='/Candidates'><li className='py-2 hover:text-[#fca311]'>Candidates</li></Link>
                            <Link href='/SearchJob'><li className='py-2 hover:text-[#fca311]'>Search Job</li></Link>
                            <Link href='/ContactUs'><li className='py-2 hover:text-[#fca311]'>Contact Us</li></Link>
                        </ul>
                    </div>
                </div>
                <div className=' mx-auto '>
                    {/* <MagnitMap/> */}
                </div>
            </div>
            <div className=' py-10  flex justify-center  text-white '>
                <ul className='md:flex sm:grid justify-between gap-20 text-center'>
                    <Link href='/'><li className='py-2'>Privacy Policy</li></Link>
                    <Link href='/'><li className='py-2'>Cookie Policy</li></Link>
                    <Link href='/'><li className='py-2'>Retention Policy</li></Link>
                </ul>
            </div>
            <div className='flex justify-center py-2 text-sm text-white '>
                <p>Copyright © 2022 Magnet Recruit Limited. All Rights Reserved.</p>
            </div>
        </div>
    )
}
export default Footer;