import { Fragment } from "react";
import Slider from "react-slick";
import { testimonialslidertwo } from "./sliderProps";
import { urlFor } from "@/utilities/sanityInit";


const TestimonialSlider = ({reviews}: any) => {
  return (
    <Fragment>
        {" "}
        <Slider {...testimonialslidertwo} className="testimonial-slider-two row">
{reviews.map((review, index: number) =>{ 
  return (
          <div key={index} className="testimonial-item">
            <div className="content">
              <p>
                {review.review}
              </p>
            </div>
            <div className="author">
              <div className="author-photo">
                <img src={urlFor(review.avatar).width(200).url()} alt={review.author} />
              </div>
              <div className="author-info">
                <h4 className="name">{review.author}</h4>
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
