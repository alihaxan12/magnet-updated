import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className="w-full h-20 bg-[#14213d]    ">
            <div className="flex justify-between   items-center  h-full px-2 lg:px-16 w-full   ">
                <Link href='/'><Image src='/image/logo.png' className='cursor-pointer' width={400} height={70} alt='image' /></Link>
                <div >
                    <ul className="hidden md:flex  ">
                        <Link href="/WhoweAre"><li className="cursor-pointer  ml-10 font-bold text-white">Who We Are</li></Link>
                        <Link href='/Client'><li className="cursor-pointer  ml-10 font-bold text-white  ">Clients</li></Link>
                        <Link href='/Candidates'><li className="cursor-pointer  ml-10 font-bold text-white ">Candidates</li></Link>
                        <Link href='/SearchJob'><li className=" cursor-pointer ml-10 font-bold text-white  "> Search Jobs </li></Link>
                        <Link href='/ContactUs'><li className=" cursor-pointer ml-10 font-bold text-white  "> Contact Us </li></Link>
                    </ul>
                </div>
                <div onClick={handleNav} className='md:hidden'>
                    {!nav ? <AiOutlineMenu size={40} className="fill-white" /> : <AiOutlineClose size={30} className="fill-white " />}
                </div>
            </div>
            <div className={nav ? 'absolute top-30  w-full bg-[#14213d] opacity-70 h-[400px] p-10 ease-in duration-300 '
                : 'fixed left-[-100%] p-10 ease-in duration-300'}>
                <div className='flex py-4 flex-col absolute float-left'>
                    <ul className='uppercase text-white'>
                        <Link onClick={() => setNav(false)} href="/WhoweAre"><li className="p-2 ">Who We Are</li></Link>
                        <Link onClick={() => setNav(false)} href='/Client'><li className="p-2   ">Clients</li></Link>
                        <Link onClick={() => setNav(false)} href='/Candidates'><li className="p-2  ">Candidates</li></Link>
                        <Link onClick={() => setNav(false)} href='/SearchJob'><li className="p-2   "> Search Jobs </li></Link>
                        <Link onClick={() => setNav(false)} href='/ContactUs'><li className="p-2   "> Contact Us </li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;