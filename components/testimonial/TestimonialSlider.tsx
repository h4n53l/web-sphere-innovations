import { Fragment } from "react";
import Slider from "react-slick";
import { testimonialslidertwo } from "./sliderProps";


const TestimonialSlider = () => {
    return (
        <Fragment>
        {" "}
        <Slider {...testimonialslidertwo} className="testimonial-slider-two row">
          <div className="testimonial-item">
            <div className="content">
              <p>
                Quis autem vel eum iure reprehenderit quin voluptate velit esse
                quam molestia consequat dolorem eum fugiat voluptas nulla
                pariaturor empsum dolor amet consectetur adipiscing elitsed
                eiusmod tempor incididunt laboret dolore magna aliquauis
                suspendisse
              </p>
            </div>
            <div className="author">
              <div className="author-photo">
                <img src="/assets/img/author/01.png" alt="William P. Harris" />
              </div>
              <div className="author-info">
                <h4 className="name">William P. Harris</h4>
                <span className="title">Senior Manager</span>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="content">
              <p>
                Quis autem vel eum iure reprehenderit quin voluptate velit esse
                quam molestia consequat dolorem eum fugiat voluptas nulla
                pariaturor empsum dolor amet consectetur adipiscing elitsed
                eiusmod tempor incididunt laboret dolore magna aliquauis
                suspendisse
              </p>
            </div>
            <div className="author">
              <div className="author-photo">
                <img src="/assets/img/author/02.png" alt="William P. Harris" />
              </div>
              <div className="author-info">
                <h4 className="name">William P. Harris</h4>
                <span className="title">Senior Manager</span>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="content">
              <p>
                Quis autem vel eum iure reprehenderit quin voluptate velit esse
                quam molestia consequat dolorem eum fugiat voluptas nulla
                pariaturor empsum dolor amet consectetur adipiscing elitsed
                eiusmod tempor incididunt laboret dolore magna aliquauis
                suspendisse
              </p>
            </div>
            <div className="author">
              <div className="author-photo">
                <img src="/assets/img/author/01.png" alt="William P. Harris" />
              </div>
              <div className="author-info">
                <h4 className="name">William P. Harris</h4>
                <span className="title">Senior Manager</span>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="content">
              <p>
                Quis autem vel eum iure reprehenderit quin voluptate velit esse
                quam molestia consequat dolorem eum fugiat voluptas nulla
                pariaturor empsum dolor amet consectetur adipiscing elitsed
                eiusmod tempor incididunt laboret dolore magna aliquauis
                suspendisse
              </p>
            </div>
            <div className="author">
              <div className="author-photo">
                <img src="/assets/img/author/02.png" alt="William P. Harris" />
              </div>
              <div className="author-info">
                <h4 className="name">William P. Harris</h4>
                <span className="title">Senior Manager</span>
              </div>
            </div>
          </div>
        </Slider>
      </Fragment>
    );
}

export default TestimonialSlider;