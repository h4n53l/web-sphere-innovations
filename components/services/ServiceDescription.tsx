
type propTypes = {
      serviceHeading: string;
      description: string;
      subServiceList: {service: string, description: string}[];
      imageOne: string;
      imageTwo: string;
      imageThree: string;
    }

const ServiceDescription = ({serviceHeading, description, subServiceList, imageOne, imageTwo, imageThree}: propTypes) => {

  return (
        <section className="about-section section-gap overflow-hidden">
        <div className="custom-container-fluid">
          <div className="row align-items-center justify-content-xl-start justify-content-center">
            <div className="col-xl-4 col-lg-8 col-sm-10">
              <div className="about-contant content-mb-lg-80">
                <div className="section-heading mb-20">
                  <h2 className="title">
                    {serviceHeading}
                  </h2>
                  <span className="tagline">How We Do It</span>
                </div>
                <p>{description}
                </p>
                <ul className="circle-list mb-40 mt-30 wow fadeInUp">
                     {
                        subServiceList.map((subService, index)=> {return(
                            <div key={index}>
                            <li>{subService.service}</li>
                            <p className="mb-40">{subService.description}</p>
                            </div>
                        )})
                    } 
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
                      src={imageOne}
                      alt="About Image"
                    />
                  </div>
                  <div className="col-sm-6 wow fadeInUp">
                    <img
                      className="mb-30"
                      src={imageTwo}
                      alt="About Image"
                    />
                    <img
                      className="mb-30"
                      src={imageThree}
                      alt="About Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ServiceDescription;