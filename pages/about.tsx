import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/layout/PageTitle";
import Link from "next/link";
import { Fragment } from "react";

const About = () => {
  return (
    <Layout>
      <Fragment>
        <PageTitle pageTitle={"About us"} />
        <section className="feature-section section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="feature-text-block content-r-spacing">
                  <div className="section-heading mb-50">
                    <h2 className="title text-center">
                      We Elevate Web Design to New Dimensions
                    </h2>
                    <span className="tagline text-center">
                      Welcome to Web Sphere Innovations, where creativity meets
                      technology to redefine your digital presence. As a leading
                      web design and development agency, we are committed to
                      transforming your ideas into captivating online
                      experiences that leave a lasting impression.
                      <br />
                      <br />
                      At Web Sphere Innovations, we believe that the digital
                      landscape is a canvas of endless possibilities. Our
                      passionate team of designers, developers, and strategists
                      is dedicated to crafting custom solutions that not only
                      meet your objectives but also elevate your brand to new
                      heights.
                    </span>
                  </div>
                  <div className="feature-lists">
                    <div className="simple-icon-box icon-left wow fadeInUp mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h4 className="title">Our Vision</h4>
                        <p>
                          To be at the forefront of innovation, driving digital
                          transformation and pushing the boundaries of what's
                          possible in the online realm.
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left wow fadeInUp mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h4 className="title">Our Mission</h4>
                        <p>
                          To empower businesses, startups, and individuals with
                          cutting-edge web solutions that enable them to thrive
                          in the digital age.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-9">
                <div className="feature-img text-lg-right text-center content-mt-md-50">
                  <img
                    src="/assets/img/illustrations/feature-illustration.png"
                    alt="Image"
                    className="animate-float-bob-y"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="">
          <div className="animate-icon d-none d-lg-block">
            <img
              src="/assets/img/shape/gradient-pipe.png"
              alt="icon"
              className="animate-rotate-me"
            />
          </div>
        </div>
      </Fragment>
    </Layout>
  );
};
export default About;
