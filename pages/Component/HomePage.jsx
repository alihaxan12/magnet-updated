import React from 'react'
import { ClientCandidate } from './ClientCandidate'
import { CompanyIntro } from './CompanyIntro'
import  Footer  from './Footer'
import Hero from './Hero'
import { Testimonials } from './Testimonials'

export const HomePage = () => {
  return (
    <div>
        <Hero/>
        <CompanyIntro/>
        <Testimonials/>
        <ClientCandidate/>
        <Footer/>
    </div>
  )
}
