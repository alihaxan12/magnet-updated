<div style={{ backgroundColor: `${navbg}` }} className="fixed w-full h-20 shadow-xl z-[100]">
    <div className="flex justify-between items-center w-full h-full px-2 lg:px-16">
        <Link href='/'><h1 className=" cursor-pointer text-[#1f2937] text-4xl font-bold">Portfolio</h1></Link>

        <div>
            <ul className="hidden md:flex ">
                <Link href='/'>
                    <li style={{ color: `${linkColor}` }} className="cursor-pointer scroll-smooth ml-10 font-bold text-[#1f2937]  uppercase hover:border-b" > Home</li>
                </Link>
                <Link href='/#about' scroll={false}><li style={{ color: `${linkColor}` }} className="cursor-pointer scroll-smooth ml-10 font-bold text-[#1f2937]  uppercase hover:border-b">About</li></Link>
                <Link href='/#skills' scroll={false}><li style={{ color: `${linkColor}` }} className="cursor-pointer scroll-smooth ml-10 font-bold text-[#1f2937]  uppercase hover:border-b">Skills</li></Link>
                <Link href='/#projects' scroll={false}><li style={{ color: `${linkColor}` }} className=" cursor-pointer scroll-smooth ml-10 font-bold text-[#1f2937]  uppercase hover:border-b">Projects</li></Link>
                <li style={{ color: `${linkColor}` }} className="cursor-pointer ml-10 font-bold text-[#1f2937]  uppercase hover:border-b">
                    <Link href='/#contact' scroll={false}> Contact  </Link>
                </li>


            </ul>
        </div>
        <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={20} />
        </div>
    </div>
    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-transparent' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] h-screen p-10 ease-in duration-500 '
            : 'fixed left-[-100%] p-10 ease-in duration-500'}>
            <div>
                <div className='flex items-center justify-between w-full'>
                    <h1 className="text-[#1f2937] text-3xl font-bold">Next App</h1>
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose />
                    </div>
                </div>

            </div>
            <div className='flex py-4 flex-col'>
                <ul className='uppercase'>
                    <Link onClick={()=>setNav(false)} href="/WhoweAre"><li className="p-2 ">Who We Are</li></Link>
                    <Link onClick={()=>setNav(false)} href='/Client'><li className="p-2   ">Clients</li></Link>
                    <Link onClick={()=>setNav(false)} href='/Candidates'><li className="p-2  ">Candidates</li></Link>
                    <Link onClick={()=>setNav(false)} href='/SearchJob'><li className="p-2   "> Search Jobs </li></Link>
                    <Link onClick={()=>setNav(false)} href='/ContactUs'><li className="p-2   "> Contact Us </li></Link>
                </ul>

            </div>
        </div>
    </div>
</div>