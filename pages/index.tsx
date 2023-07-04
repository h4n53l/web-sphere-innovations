import { Fragment } from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Features from '@/components/Features'
import { Head } from 'next/document'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'
import HireUs from '@/components/HireUs'
import Testimonials from '@/components/testimonial/Testimonials'


export default function Home() {
  return (
      <Fragment>
        {/* <head>
        <title>Web Sphere Innovations</title>
        </head> */}
<Hero/>
<Services/>
<div className="section-blob-bg">
<Features/>
<Stats />
<Portfolio />
</div>
<HireUs />
<Testimonials />
    </Fragment>
  )
}
