import Link from "next/link";

const Services = () => {
  return (
    <section className="service-section section-gap">
      <div className="container">
        <div className="section-heading text-center mb-30">
          <h2 className="title">Services We Provide</h2>
          <span className="tagline">Web Sphere Innovations</span>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 wow fadeInUp">
            <div className="iconic-box icon-left mt-30">
              <div className="icon">
                <img src="/assets/img/icon/code.png" alt="Icon" />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service-details">Web Development</Link>
                </h5>
                <p>
                  Need a new website? Looking to revamp your existing website?
                  We take your online presence to the next level. By designing a
                  digital masterpiece that will get you tangible business
                  results.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 wow fadeInUp">
            <div className="iconic-box icon-left mt-30">
              <div className="icon">
                <img src="/assets/img/icon/mike.png" alt="Icon" />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service-details">
                    Search Engine Optimisation (SEO)
                  </Link>
                </h5>
                <p>
                  Boost your online visibility and drive organic traffic with
                  our expert SEO services. We will optimize your website to
                  outrank the competition and attract valuable leads.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 wow fadeInUp">
            <div className="iconic-box icon-left mt-30">
              <div className="icon">
                <img src="/assets/img/icon/laptop.png" alt="Icon" />
              </div>
              <div className="content">
                <h5 className="title">
                  <Link href="/service-details">
                    Content Management Services
                  </Link>
                </h5>
                <p>
                  From content strategy development to distribution and
                  performance analysis, we will maximize the value of
                  your content and engage your target audience effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
