import Link from "next/link";
import Slider from "react-slick";
import { portfolioslider } from "../testimonial/sliderProps";
import { urlFor } from "@/utilities/sanityInit";

const ProjectsSlider = ({projects}: {projects: any}) => {
    return (
        <section className="related-portfolio bg-color-primary-7 section-gap">
        <div className="container">
          <div className="section-heading text-center mb-60">
            <h2 className="title">Other Projects</h2>
            <span className="tagline">Web Sphere Innovations</span>
          </div>
          <Slider {...portfolioslider} className="row portfolio-slider">
          {projects.map((project: any, index: number) =>{ return (
                        <div key={index} className="portfolio-items-two">
                        <div className="portfolio-thumb">
                          <img src={urlFor(project.mainImage).width(370).url()} alt={project.title} />
                          <Link href={`projects/${project.slug.current}`}/>
                        </div>
                        <div className="portfolio-content">
                          <h4 className="title">
                            <Link href="/portfolio-details">{project.title}</Link>
                          </h4>
                          <div className="categories">
                            <a href="#">{(project.category)}</a>
                          </div>
                        </div>
                      </div>
        )})}

          </Slider>
        </div>
      </section>
    );
}

export default ProjectsSlider;