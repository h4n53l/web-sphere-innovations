import dynamic from "next/dynamic";

const Portfolio = ({projects}) => {

    const ProjectsIsotope = dynamic(
        () => import("./ProjectsIsotope"),
        {
          ssr: false,
        }
      );

    return (
        <section className="portfolio-section section-gap">
        <div className="container">
          <div className="section-heading text-center mb-50">
            <h2 className="title">Some Of Our Latest Projects</h2>
            <span className="tagline">Web Sphere Innovations</span>
          </div>
          <ProjectsIsotope projects={projects}/>
        </div>
      </section>
    )
}

export default Portfolio;
