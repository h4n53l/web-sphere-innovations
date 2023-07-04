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
                      We Provide Solutions
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
                        <h4 className="title">Professional Agency</h4>
                        <p>
                          Consectetur adipisci velitsed quia non numquam eius
                          mode tempralabore et dolore magnam aliquam quaerat
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h4 className="title">Best Solutions Provider</h4>
                        <p>
                          Consectetur adipisci velitsed quia non numquam eius
                          mode tempralabore et dolore magnam aliquam quaerat
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        <i className="flaticon-crop" />
                      </div>
                      <div className="content">
                        <h4 className="title">Web &amp; Design Solutions</h4>
                        <p>
                          Consectetur adipisci velitsed quia non numquam eius
                          mode tempralabore et dolore magnam aliquam quaerat
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