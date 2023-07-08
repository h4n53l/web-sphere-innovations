import { Fragment } from "react";
import Slider from "react-slick";
import { testimonialslidertwo } from "./sliderProps";
import { reviews } from "@/utilities/pageTexts";


const TestimonialSlider = () => {
    return (
        <Fragment>
        {" "}
        <Slider {...testimonialslidertwo} className="testimonial-slider-two row">
{reviews.map((review) =>{ return (
          <div className="testimonial-item">
            <div className="content">
              <p>
                {review.review}
              </p>
            </div>
            <div className="author">
              <div className="author-photo">
                <img src="/assets/img/author/01.png" alt="William P. Harris" />
              </div>
              <div className="author-info">
                <h4 className="name">{review.name}</h4>
                <span className="title">{review.company}</span>
              </div>
            </div>
          </div>
         )})}
        </Slider>
      </Fragment>
    );
}

export default TestimonialSlider;