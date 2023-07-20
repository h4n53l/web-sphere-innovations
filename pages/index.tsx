import { Fragment } from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/services/Services'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Portfolio from '@/components/projects/Portfolio'
import HireUs from '@/components/HireUs'
import Testimonials from '@/components/testimonial/Testimonials'
import { sanityClient } from '@/utilities/sanityInit'


export default function Home({reviews, projects}: {reviews: any, projects: any}) {
  console.log(projects)
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
<Portfolio projects={projects}/>
</div>
<HireUs />
<Testimonials reviews={reviews}/>
    </Fragment>
  )
}

export const getStaticProps = async () => {

const reviews = await sanityClient.fetch(`*[ _type == "reviews"]`);
const projects = await sanityClient.fetch(`*[ _type == "projects"]`);

if (!reviews) {
  return {
    notFound: true,
  };
} else {
  return {
    props: { reviews, projects },
  };
}
};
