import React from 'react'

import Image from 'next/image'

export const Testimonials = () => {
    return (
        <div className='w-full'>
            <div className='bg-[#E5E5E5]'>
                <Image src='/image/upwave.svg'
                   width={1080}
                   height={200}
                   layout="responsive"
                   objectFit='cover'
                   quality={100} 
                   alt='image'/>
            </div>
            <div className='justify-center bg-[#14213d]'>
                <h1 className='text-5xl text-center font-bold text-white'>Testimonials</h1>
            </div>
            <div className='md:w-full m-auto bg-[#14213d]'>
                {/* <Carosel /> */}
            </div>
            <div className='md:w-full'>
                {/* <Carosel2 /> */}
            </div>
        </div>
    )
}
