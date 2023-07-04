import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, SetStateAction, useEffect, useRef, useState } from "react";

const ProjectsIsotope = () => {
 
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
            Design
          </li>
          <li
            data-filter=".motions"
            className={`c-pointer ${activeBtn("motions")}`}
            onClick={handleFilterKeyChange("motions")}
          >
            Motions
          </li>
          <li
            data-filter=".graphics"
            className={`c-pointer ${activeBtn("graphics")}`}
            onClick={handleFilterKeyChange("graphics")}
          >
            Graphics
          </li>
          <li
            data-filter=".branding"
            className={`c-pointer ${activeBtn("branding")}`}
            onClick={handleFilterKeyChange("branding")}
          >
            Branding
          </li>
        </ul>
      </div>
      <div className="row filter-items">
        <div className="col-lg-4 col-sm-6 filter-item design graphics">
          <div className="portfolio-items-two mt-50">
            <div className="portfolio-thumb">
              <img src="/assets/img/portfolio/05.jpg" alt="Image" />
              <Link href="/portfolio-details"/>
            </div>
            <div className="portfolio-content">
              <h4 className="title">
                <Link href="/portfolio-details">Digital Agency Template</Link>
              </h4>
              <div className="categories">
                <a href="#">Marketing Strategy</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 filter-item motions branding">
          <div className="portfolio-items-two mt-50">
            <div className="portfolio-thumb">
              <img src="/assets/img/portfolio/06.jpg" alt="Image" />
              <Link href="/portfolio-details"/>
            </div>
            <div className="portfolio-content">
              <h4 className="title">
                <Link href="/portfolio-details">Chatbot Web Template</Link>
              </h4>
              <div className="categories">
                <a href="#">Marketing Strategy</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 filter-item design graphics">
          <div className="portfolio-items-two mt-50">
            <div className="portfolio-thumb">
              <img src="/assets/img/portfolio/07.jpg" alt="Image" />
              <Link href="/portfolio-details"/>
            </div>
            <div className="portfolio-content">
              <h4 className="title">
                <Link href="/portfolio-details">Digital Products Design</Link>
              </h4>
              <div className="categories">
                <a href="#">Marketing Strategy</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 filter-item motions branding">
          <div className="portfolio-items-two mt-50">
            <div className="portfolio-thumb">
              <img src="/assets/img/portfolio/08.jpg" alt="Image" />
              <Link href="/portfolio-details"/>
            </div>
            <div className="portfolio-content">
              <h4 className="title">
                <Link href="/portfolio-details">Digital Agency Template</Link>
              </h4>
              <div className="categories">
                <a href="#">Marketing Strategy</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 filter-item design graphics">
          <div className="portfolio-items-two mt-50">
            <div className="portfolio-thumb">
              <img src="/assets/img/portfolio/09.jpg" alt="Image" />
              <Link href="/portfolio-details"/>
            </div>
            <div className="portfolio-content">
              <h4 className="title">
                <Link href="/portfolio-details">Fitness Program Template</Link>
              </h4>
              <div className="categories">
                <a href="#">Marketing Strategy</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 filter-item motions branding">
          <div className="portfolio-items-two mt-50">
            <div className="portfolio-thumb">
              <img src="/assets/img/portfolio/10.jpg" alt="Image" />
              <Link href="/portfolio-details" />
                
            </div>
            <div className="portfolio-content">
              <h4 className="title">
                <Link href="/portfolio-details">E-Wallet Template</Link>
              </h4>
              <div className="categories">
                <a href="#">Marketing Strategy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectsIsotope;
