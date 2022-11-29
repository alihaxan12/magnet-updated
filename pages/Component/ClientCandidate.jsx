import React from 'react'
import Link from 'next/link'

export const ClientCandidate = () => {
  return (
    <div className='w-full bg-[#14213d]'>
        <div className='md:w-full  md:grid md:grid-cols-2 m-auto '>
            <div className='items-center p-10'>
                <h1 className='text-4xl text-[#fca311] font-bold py-6 text-center'>Candidates</h1>
                <p className='text-center text-white p-4'>
                    Let us know about yourself and what motivates you, so we can update you
                    on our vacancies or job hunt on your behalf.
                </p>
                <div className='flex items-center mx-auto justify-center py-8'>
                <Link href='/Candidates'><button className='uppercase py-3 px-6 bg-[#fca311] hover:bg-slate-500 hover:text-white rounded-md '>Read more</button></Link>
                </div>
            </div>
            <div className='items-center bg-slate-200 py-10'>
                <h1 className='text-4xl text-[#14213d] font-bold py-6 text-center'>Clients</h1>
                <p className='text-center text-[#14213d] p-4'>
                    Let us know about yourself and what motivates you, so we can update you
                    on our vacancies or job hunt on your behalf.
                </p>
                <div className='flex items-center mx-auto justify-center py-8'>
                    <Link href='/Client'><button  className='uppercase py-3 text-white px-8 bg-[#14213d] hover:bg-[#fca213] hover:text-[#14213d]  rounded-md '>Read more</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
