import Link from "next/link";
import Slider from "react-slick";
import { portfolioslider } from "../testimonial/sliderProps";

const ProjectsSlider = () => {
    return (
        <section className="related-portfolio bg-color-primary-7 section-gap">
        <div className="container">
          <div className="section-heading text-center mb-60">
            <h2 className="title">Other Projects</h2>
            <span className="tagline">Web Sphere Innovations</span>
          </div>
          <Slider {...portfolioslider} className="row portfolio-slider">
            <div className="portfolio-items-two">
              <div className="portfolio-thumb">
                <img src="../assets/img/portfolio/05.jpg" alt="Image" />
                <Link href="/portfolio-details portfolio-link">
                  {/* <a className="" /> */}
                </Link>
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
            <div className="portfolio-items-two">
              <div className="portfolio-thumb">
                <img src="../assets/img/portfolio/06.jpg" alt="Image" />
                <Link href="/portfolio-details portfolio-link">
                  {/* <a className="" /> */}
                </Link>
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
            <div className="portfolio-items-two">
              <div className="portfolio-thumb">
                <img src="../assets/img/portfolio/07.jpg" alt="Image" />
                <Link href="/portfolio-details portfolio-link">
                  {/* <a className="" /> */}
                </Link>
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
            <div className="portfolio-items-two">
              <div className="portfolio-thumb">
                <img src="../assets/img/portfolio/08.jpg" alt="Image" />
                <Link href="/portfolio-details portfolio-link">
                  {/* <a className="" /> */}
                </Link>
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
            <div className="portfolio-items-two">
              <div className="portfolio-thumb">
                <img src="../assets/img/portfolio/09.jpg" alt="Image" />
                <Link href="/portfolio-details portfolio-link">
                  {/* <a className="" /> */}
                </Link>
              </div>
              <div className="portfolio-content">
                <h4 className="title">
                  <Link href="/portfolio-details">
                    Fitness Program Template
                  </Link>
                </h4>
                <div className="categories">
                  <a href="#">Marketing Strategy</a>
                </div>
              </div>
            </div>
            <div className="portfolio-items-two">
              <div className="portfolio-thumb">
                <img src="../assets/img/portfolio/10.jpg" alt="Image" />
                <Link href="/portfolio-details portfolio-link">
                  {/* <a className="" /> */}
                </Link>
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
          </Slider>
        </div>
      </section>
    );
}

export default ProjectsSlider;