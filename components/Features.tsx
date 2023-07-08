const Features = () => {
    return (
        <section className="feature-section section-gap-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="feature-images row align-items-center content-mb-md-50">
                  <div className="col-6">
                    <img
                      src="/assets/img/feature-1.jpg"
                      alt="Image"
                      className="animate-float-bob-y"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="/assets/img/feature-2.jpg"
                      alt="Image"
                      className="animate-float-bob-y"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="feature-text-block content-l-spacing">
                  <div className="section-heading mb-50">
                    <h2 className="title">
                      Service Features
                    </h2>
                    <span className="tagline">
                      Web Sphere Innovations
                    </span>
                  </div>
                  <div className="feature-lists">
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h4 className="title">User-Centric</h4>
                        <p>
                        We prioritize the user experience in all our web design projects. By understanding your target audience and their needs, we create intuitive and user-friendly interfaces that enhance engagement and drive conversions. Our goal is to ensure that every visitor enjoys a seamless and enjoyable journey on your website.
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h4 className="title">Technological Expertise</h4>
                        <p>
                        With a strong focus on the latest technologies and frameworks, we leverage the power of cutting-edge tools to build high-performance websites. Our developers are adept at utilizing the latest coding languages and frameworks to ensure your website is robust, secure, and scalable.
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h4 className="title">Results-Driven</h4>
                        <p>
                         We are committed to delivering tangible results to our clients. Our strategies are data-driven, with a strong emphasis on measuring and analyzing key performance indicators. By monitoring and optimizing the performance of your website, we help you achieve your business goals and maximize your return on investment.
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h4 className="title">Collaborative Partnership</h4>
                        <p>
                        We believe in building strong and long-lasting relationships with our clients. Collaboration and open communication are at the core of our process. We work closely with you, keeping you informed and involved throughout the project lifecycle, ensuring that your vision and objectives are met.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="template-btn mt-10">
                    Start a Project <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Features;