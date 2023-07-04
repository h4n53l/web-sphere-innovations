const Hero = () => {
  return (
    <section className="hero-area-two have-animate-icons">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="hero-content wow fadeInUp" data-wow-delay="0.3s">
              <span className="tagline">Web Sphere Innovations</span>
              <h1 className="hero-title">
                Elevating Web Design to New Dimensions
              </h1>
              <p>
                At Web Sphere Innovations we believe that your website is more
                than just a collection of pages—it is a virtual window into your
                brand's identity. We bring your brand an online presence
                through custom-made
                interfaces that not only engage your audience but also leave a
                lasting impression.
              </p>
              <a href="#" className="template-btn">
                Get Started With Us <i className="far fa-long-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="hero-img wow fadeInDown" data-wow-delay="0.4s">
              <img
                src="/assets/img/hero/hero-illustration-two.png"
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="animate-icons">
        <img
          src="/assets/img/shape/gradient-pipe.png"
          alt="particles"
          className="icon-one animate-rotate-me"
        />
        <img
          src="/assets/img/shape/wave-line.png"
          alt="particles"
          className="icon-two animate-float-bob-x"
        />
        <img
          src="/assets/img/shape/stars.png"
          alt="particles"
          className="icon-three animate-float-bob-x"
        />
        <img
          src="/assets/img/shape/triangle.png"
          alt="particles"
          className="icon-four animate-float-bob-y"
        />
        <img
          src="/assets/img/shape/triangle-2.png"
          alt="particles"
          className="icon-five animate-rotate-me"
        />
        <img
          src="/assets/img/shape/circle.png"
          alt="particles"
          className="icon-six animate-zoom-fade"
        />
        <img
          src="/assets/img/shape/circle-small.png"
          alt="particles"
          className="icon-seven animate-float-bob-y"
        />
      </div>
    </section>
  );
};

export default Hero;
