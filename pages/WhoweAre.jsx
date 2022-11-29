import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import  Footer  from './Component/Footer';
import Image from 'next/image';
import Link from 'next/link';
import {AiFillCheckCircle} from 'react-icons/ai';
import {FaUserCheck} from 'react-icons/fa';
import {GoArrowRight} from 'react-icons/go';
import {GiImperialCrown} from 'react-icons/gi';
import {BsCheckLg} from 'react-icons/bs';
 const WhoweAre = () => {
  return (
    <div className='w-full  '>
        <div className=" md:w-full "   style={{ backgroundImage: 'url(image/gif-2.gif)',backgroundRepeat:"no-repeat",backgroundSize:"cover" } }>
          <div className='opacity-75 ' >
              <Image   alt='image' src='/image/page2wave.png' width={1080} height={200} layout='responsive' />
          </div>
          <h1 className="text-white text-6xl text-center font-bold">Who We Are</h1>
          <div className='opacity-75'>
              <Image   alt='image' src='/image/page2wavedown.png' width={1080} height={400} layout='responsive' />
          </div>
        </div>
        <div className='bg-[#14213d] pt-10'>
          <h1 className='text-white text-4xl text-center font-bold'>Meet Our Team</h1>
          <div className='grid md:grid-cols-2 md:w-[1240px] w-full mx-auto'>
        {/* for Sam Hassan  */}
            <div className='item-center pt-24'>
              <div className='flex justify-center mx-auto'>
                  <Image className='mx-auto overflow-hidden'   alt='image' src='/image/person1.png' width={180} height={120}  />
                </div>
              <h1 className='text-[#fca214] text-3xl text-center font-semibold px-4 py-6 '>Sam  Hassan</h1>
              <p className='text-2xl text-white px-12 text-center font-semibold'>Founder</p>
              <div className='flex gap-8 cursor-pointer justify-center py-4 text-[#fca214]'>
                  <BsLinkedin size={35}/>
                  <HiMail size={40}/>
              </div>
              <div className='md:w-full'>
                <div className="flex border md:border-none sm:mx-2">
                    <p className=" lg:w-[25%]   text-xl text-[#FCA311]  border   p-4 lg:border-b-0 ">About Sam</p>
                    <p className="w-[80%] border-b-2"></p>
                </div>
                <div className="sm:mx-2">
                    <p className="p-7   border  text-white border-t-transparent text-xl text-justify ">
                        Previously working for various companies as an Interim  
                        Recruitment Consultant, Sam decided to give up his status 
                        of employee and establish an honest organisation based on
                        the values he believes in. He founded Magnet Recruit in the
                        midst of the 2020 pandemic, with the aim of creating promoting a Culture within the recruitment industry that
                        puts Clients and Candidates first.
                    </p>
                </div>
                <div className="my-4 border md:border-none sm:mx-2">
                  <div className="flex ">
                    <p className=" md:w-[30%] w-[50%]  text-xl text-[#FCA311]  border  p-4 lg:border-b-0 ">His motto</p>
                    <p className="w-[80%] border-b-2"></p>
                  </div>
                  <div>
                    <p className="md:pr-80 md:py-10 w-full p-4 border  text-white border-t-transparent text-xl text-justify ">
                      “Begin with the end in mind”.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* for Dominic Jones */}
            <div className='item-center pt-24'>
                <div className='flex justify-center'>
                  <Image   alt='image' src='/image/person2.png' width={180} height={120}  />
                </div>
                <h1 className='text-[#fca214] text-3xl text-center font-semibold px-4 py-6 '>Dominic Jones</h1>
                <p className='text-2xl text-white px-12 text-center font-semibold'>Director</p>
                <div className='flex gap-8 cursor-pointer justify-center py-4 text-[#fca214]'>
                    <BsLinkedin size={35}/>
                    <HiMail size={40}/>
                </div>
              <div >
                  <div className="flex border md:border-none sm:mx-2">
                    <p className=" md:w-[35%] w-[50%]  text-xl text-[#FCA311]  border  p-4 md:border-b-0 ">About Dominic</p>
                    <p className="w-[80%] border-b-2"></p>
                  </div>
                  <div className="sm:boder sm:mx-2">
                    <p className="p-8   border  text-white border-t-transparent text-xl text-justify ">
                          With extensive recruitment experience within the Food
                          Manufacturing & FMCG space, Dom has a strong eye for detail and 
                          will partner with Sam to give both existing and new clients best in
                          class support across Engineering, Operations, Technical and
                          Commercial disciplines, within both Perm and Interim contracts. 
                          Building relationships with both Clients and Candidates alike, is
                          what Dom strives for.
                    </p>
                  </div>
                </div>  
                <div className="my-4 border lg:border-none sm:mx-2">
                  <div className="flex">
                    <p className=" md:w-[30%] w-[50%]   text-xl text-[#FCA311]  border  p-4 lg:border-b-0 ">His motto</p>
                    <p className="w-full border-b-2"></p>
                    </div>
                    <div>
                      <p className="md:pr-72 py-10 text-left border  w-full text-white border-t-transparent text-xl  ">
                        “Begin with the end in mind”.
                      </p>
                    </div>
                </div>
            </div>
            {/* Suzanne Malik */}
            <div className='item-center pt-24'>
                <div className='flex justify-center'>
                  <Image   alt='image' src='/image/woman1.png' width={180} height={120}  />
                </div>
                <h1 className='text-[#fca214] text-3xl text-center font-semibold px-4 py-6 '>Suzanne Malik</h1>
                <p className='text-2xl text-white px-12 text-center font-semibold'>Recruitment Consultant &Account Manager</p>
                <div className='flex gap-8 cursor-pointer justify-center py-4 text-[#fca214]'>
                    <BsLinkedin size={35}/>
                    <HiMail size={40}/>
                </div>
              <div >
                  <div className="flex border md:border-none sm:mx-2">
                    <p className=" w-[35%]  text-xl text-[#FCA311]  border  p-4 lg:border-b-0 ">About Suzanne</p>
                    <p className="w-[80%] border-b-2"></p>
                  </div>
                  <div className="sm:boder sm:mx-2">
                    <p className="p-8   border  text-white border-t-transparent text-xl text-justify ">
                      With a strong background in law and Client Relationship
                       management, Suzanne joined the magnet team ready to start an
                       exciting journey and in need of a new challenge. With her positive
                        mindset and enthusiastic character, she has already developed an
                        excellent network within the industry.  Suzanne is very passionate
                        about health, wellbeing and lifestyle coaching.
                    </p>
                  </div>
                </div>  
                <div className="my-4 border md:border-none sm:mx-2">
                  <div className="flex">
                    <p className=" md:w-[30%] w-[50%]   text-xl text-[#FCA311]  border  p-4 lg:border-b-0 ">Her motto</p>
                    <p className="w-full border-b-2"></p>
                    </div>
                    <div>
                      <p className=" py-10 text-left border  text-white border-t-transparent text-xl  ">
                      “Vision without action is a daydream”.
                      </p>
                    </div>
                </div>
              </div>
              {/* for Yasmin */}
              <div className='item-center pt-24'>
                <div className='flex justify-center'>
                  <Image   alt='image' src='/image/woman2.png' width={180} height={120}  />
                </div>
                <h1 className='text-[#fca214] text-3xl text-center font-semibold px-4 py-6 '>Yasmine Boubakir</h1>
                <p className='text-2xl text-white px-12 text-center font-semibold'>Accounts Administrator</p>
                <div className='flex gap-8 cursor-pointer justify-center py-4 text-[#fca214]'>
                    <BsLinkedin size={35}/>
                    <HiMail size={40}/>
                </div>
              <div >
                  <div className="flex border md:border-none sm:mx-2">
                    <p className=" md:w-[35%] w-[50%]  text-xl text-[#FCA311]  border  p-4 md:border-b-0 ">About Yasmin</p>
                    <p className="w-[80%] border-b-2"></p>
                  </div>
                  <div className="sm:boder sm:mx-2">
                    <p className="p-8   border  text-white border-t-transparent text-xl text-justify ">
                      Yas recently joined Magnet Recruit to take over the administrative
                      side of the business and manage all things accounting and
                       invoicing. While simultaneously conducting her doctoral research
                       in the field of languages and human sciences, she runs the back
                       office and operates behind the scenes to put systems of
                       organisation in place.<br/>
                    </p>
                  </div>
                </div>  
                <div className="my-4 border md::border-none sm:mx-2">
                  <div className="flex">
                    <p className=" md:w-[30%] w-[50%]   text-xl text-[#FCA311]  border  p-4 lg:border-b-0 ">Her motto</p>
                    <p className="w-full border-b-2"></p>
                    </div>
                    <div>
                      <p className=" py-10 text-left border  text-white border-t-transparent text-xl  ">
                      “Always under-promise and over-deliver”.
                      </p>
                    </div>
                </div>
              </div>
          </div>
          <div className="md:w-[1240px]    py-44 m-auto">
                <div>
                  <h1 className="md:text-6xl text-2xl font-bold text-[#FCA311] text-center">How do we recruit<br/> people?</h1>
                </div>
                <div className="mx-auto justify-center md:w-[600px] md:px-16 px-6   ">    
                  <div  className="  text-white pt-12 flex">
                    <div className='flex justify-center'>
                      <AiFillCheckCircle size={40} fill='white'/>
                    </div>
                    <Link href="/"><h1 className="text-justify md:font-bold py-2 px-4 hover:text-[#FCA311]">We ask the difficult question</h1></Link>
                  </div>
                  <div  className="  text-white py-2 flex">
                    <div className='flex justify-center'>
                      <FaUserCheck size={40} fill='white'/>
                    </div>
                    <Link href="/"><h1 className=" text-justifyfont-bold py-2 px-4 hover:text-[#FCA311]">We only put the best candidates in<br/> front of you.</h1></Link>
                  </div>
                  <div  className="  text-white py-2 flex">
                    <div className='flex justify-center'>
                      <GoArrowRight size={40} fill='white'/>

                    </div>
                    <Link href="/"><h1 className="text-justify font-bold py-2 px-4 hover:text-[#FCA311]">We look for long-term partnerships.</h1></Link>
                  </div>
                  <div  className="  text-white py-2 flex">
                    <div className='flex justify-center'>
                      <GiImperialCrown size={40} fill='white'/>
                    </div>
                    <Link href="/"><h1 className="text-justify font-bold py-2 px-4 hover:text-[#FCA311]">We specialise in what we do.</h1></Link>
                  </div>
                  <div  className="  text-white py-2 flex">
                    <div className='flex justify-center'>
                       <BsCheckLg size={40} fill='white'/>
                    </div>
                    <Link href="/"><h1 className="text-justify font-bold py-2 px-4 hover:text-[#FCA311]">We ensure every candidate we<br/>
                        represent, can do that role.</h1></Link>
                  </div>
                </div>    
              </div>
              <div className="md:w-[1240px] sm:w-full justify-center sm:py-6 m-auto ">
                <h1 className="text-[#fca311] text-2xl text-center py-2 font-bold">RECRUITMENT</h1>
                <h1 className="text-white lg:text-4xl sm:text-4xl text-center font-bold py-2">Our Recruitment Process</h1>
              </div>
              <div className="md:w-[1340px] md:block mt-10 m-auto gap-10 hidden lg:grid grid-cols-3 py-20">
                <div className="grid ">
                <div className="h-56"></div>
                    <h1 className="text-[#fca311] px-4 text-xl text-justify py-2 font-bold">04. THE PROCESSING</h1>
                    <h1 className=" border-b-2 w-96 m-auto"></h1>
                    <h1 className="py-6 text-white  justify-center pl-8">
                    We will manage the entire process that follows the interview stage. From feedback, to offers and referencing, we will take over to save you time and enable you to focus on the essential instead.
                    </h1>
                    <div className='flex justify-center rotate-180'>
                      <Image   alt='image' src='/image/downarrow.png' width={150} height={150}  />
                    </div>
                </div>
                <div>
                    <h1 className="text-center text-[#fca311] text-xl font-bold ">01. THE CONSULTATION</h1>
                    <h1 className=" border-b-2 pt-20 w-96 m-auto"></h1>
                    <div className=" grid place-content-center">
                         <h1 className="py-6 text-white  justify-center pl-8">
                            We will take a dive into your<br/>
                            Company, Culture, values and<br/>
                            roles’ requirement to gain an in-<br/>
                            depth understanding of the vacancies.
                            </h1>
                    </div>
                    <div className=" grid place-content-center mx-auto">
                        <div className='flex justify-center py-10'>
                          <Image   alt='image' src='/image/Mr.png' width={250} height={150}  />
                        </div>
                        <h1 className="text-center text-[#fca311] text-2xl font-bold ">03. THE ASSESSMENT</h1>
                        <h1 className=" border-b-2 pt-20 w-96 m-auto"></h1>
                        <h1 className="break-all pt-10 px-10 text-white text-2xl justify-center pl-8">We will thoroughly review, shortlist and outline the most relevant applicants to go through to the interview stage.</h1>
                    </div>
                </div>
                <div className="grid">
                    <div className='flex justify-center'>
                      <Image   alt='image' src='/image/downarrow.png' width={150} height={150}  />
                    </div>
                    <h1 className="text-justify px-4 pt-20 text-[#fca311] text-xl font-bold ">02. THE RESOURCING</h1>
                    <h1 className=" border-b-2 mt-24  w-96 m-auto"></h1>
                    <h1 className="break-all pt-10 px-10 text-white  justify-center pl-8">Our Consultants will then source the best-suited candidates for your requirements. Our research process is based on our knowledge of the industry and awareness of Candidates availabilities, as well as our extensive network and database.</h1>
                    <div className='flex justify-center rotate-90'>
                      <Image   alt='image' src='/image/downarrow.png' width={150} height={150}  />
                    </div>
                </div>  
           </div>
        </div>   
        <div className="w-full mt-18 ">
          {/* <Carosel2/> */}
        </div>  
        <Footer/>
    </div>
  )
}
export default WhoweAre;
