import { Fragment, useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import Link from "next/link";
import { urlFor } from "@/utilities/sanityInit";


const ProjectsIsotope = ({projects}) => {
 
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".filter-items", {
        itemSelector: ".filter-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".filter-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="portfolio-filter">
        <ul>
          <li
            data-filter="*"
            className={`c-pointer ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            Show All
          </li>
          <li
            data-filter=".design"
            className={`c-pointer ${activeBtn("design")}`}
            onClick={handleFilterKeyChange("design")}
          >
            Web Design
          </li>
          <li
            data-filter=".seo"
            className={`c-pointer ${activeBtn("seo")}`}
            onClick={handleFilterKeyChange("seo")}
          >
            SEO
          </li>
          <li
            data-filter=".cms"
            className={`c-pointer ${activeBtn("cms")}`}
            onClick={handleFilterKeyChange("cms")}
          >
            CMS
          </li>
        </ul>
      </div>
      <div className="row filter-items">
        {projects.map((project, index) =>{ return (
        <div key={index} className={`col-lg-4 col-sm-6 filter-item ${project.category}`}>
        <div className="portfolio-items-two mt-50">
          <div className="portfolio-thumb">
            <img src={urlFor(project.mainImage).width(370).url()} alt={project.title} />
            <Link href={`projects/${project.slug.current}`}/>
          </div>
          <div className="portfolio-content">
            <h4 className="title">
              <Link href={`projects/${project.slug.current}`}>{project.title}</Link>
            </h4>
            <div className="categories">
              <a href={`projects/${project.slug.current}`}>View Details</a>
            </div>
          </div>
        </div>
      </div>
        )})}

      </div>
    </Fragment>
  );
};
export default ProjectsIsotope;
