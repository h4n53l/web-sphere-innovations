import Link from "next/link";
import { Fragment } from "react";
import PageTitle from "@/components/layout/PageTitle";

const WebDesignService = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Our Web Design Services"} />
      {/*====== Page Title Area End ======*/}
      {/*====== About Area Start ======*/}
      <section className="about-section section-gap overflow-hidden">
        <div className="custom-container-fluid">
          <div className="row align-items-center justify-content-xl-start justify-content-center">
            <div className="col-xl-4 col-lg-8 col-sm-10">
              <div className="about-contant content-mb-lg-80">
                <div className="section-heading mb-20">
                  <h2 className="title">
                    Revamp Your Digital Presence with Exceptional Web Design
                    Services
                  </h2>
                  <span className="tagline">How We Do It</span>
                </div>
                <p>
                  At Web Sphere Innovations, we believe that a well-designed
                  website is the cornerstone of a successful online presence.
                  Our web design services combine creativity, functionality, and
                  user-centric design principles to deliver websites that
                  captivate audiences and drive measurable results. Our team of
                  talented designers and developers work closely with you to
                  understand your unique brand, goals, and target audience. We
                  craft visually stunning and intuitive websites that not only
                  reflect your brand identity but also provide seamless user
                  experiences across all devices.
                </p>
                <ul className="circle-list mb-40 mt-30 wow fadeInUp">
                  <li>Strategic Planning</li>
                  <p className="mb-40">
                    We start by gaining a deep understanding of your business
                    objectives and target audience. Our team collaborates with
                    you to develop a strategic plan that aligns with your goals,
                    ensuring your website is tailored to attract and engage your
                    desired customers.
                  </p>
                  <li>Custom Design</li>
                  <p className="mb-40">
                    We believe in creating unique and memorable designs that
                    stand out from the crowd. Our expert designers blend
                    aesthetics with functionality, employing modern design
                    techniques to deliver visually striking websites that leave
                    a lasting impression.
                  </p>
                  <li>Responsive Design</li>
                  <p className="mb-40">
                    With the increasing use of mobile devices, responsive design
                    is paramount. We ensure that your website looks and
                    functions flawlessly across all screen sizes, providing a
                    seamless experience for your visitors and maximizing your
                    reach.
                  </p>
                  <li>User Experience (UX) Optimization</li>
                  <p className="mb-40">
                    A positive user experience is key to keeping visitors
                    engaged and converting them into customers. We pay
                    meticulous attention to the usability and flow of your
                    website, optimizing it for intuitive navigation and smooth
                    interactions.
                  </p>
                </ul>
                <a href="#" className="template-btn bordered-btn">
                  Find out more <i className="fas fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-10 col-md-10">
              <div className="fancy-image-gallery-two">
                <div className="row align-items-center">
                  <div className="col-sm-6 wow fadeInUp">
                    <img
                      className="mb-30"
                      src="/assets/img/fancy-gallery/05.jpg"
                      alt="About Image"
                    />
                  </div>
                  <div className="col-sm-6 wow fadeInUp">
                    <img
                      className="mb-30"
                      src="/assets/img/fancy-gallery/06.jpg"
                      alt="About Image"
                    />
                    <img
                      className="mb-30"
                      src="/assets/img/fancy-gallery/07.jpg"
                      alt="About Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== About Area End ======*/}
      {/*====== Service Section Start ======*/}
      <section
        className="service-section section-gap bg-color-primary-7 bg-cover-center"
        style={{ backgroundImage: "url(assets/img/service-bg.jpg)" }}
      >
        <div className="container">
          <div className="section-heading mb-30 text-center">
            <h2 className="title">Other Services We Provide</h2>
            <span className="tagline">Web Sphere Innovations</span>
          </div>
          <div className="row service-boxes justify-content-center">
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <i className="flaticon-subscription" />
                </div>
                <h4 className="title">
                  <Link href="/service-details">Web Development</Link>
                </h4>
                <p>Quis autem reprehenderit quiinea volup tate</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <i className="flaticon-seo-2" />
                </div>
                <h4 className="title">
                  <Link href="/service-details">
                    Search Engine Optimisation
                  </Link>
                </h4>
                <p>Quis autem reprehenderit quiinea volup tate</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <i className="flaticon-click" />
                </div>
                <h4 className="title">
                  <Link href="/service-details">Content Management</Link>
                </h4>
                <p>Quis autem reprehenderit quiinea volup tate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Service Section End ======*/}
    </Fragment>
  );
};

export default WebDesignService;
