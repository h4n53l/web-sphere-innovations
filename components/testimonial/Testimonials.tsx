import TestimonialSlider from "./TestimonialSlider";

const Testimonials = ({reviews}: any) => {
    return (
        <section className="testimonial-section section-gap">
        <div className="container">
          <div className="testimonial-area">
            <div className="section-heading text-center mb-50">
              <h2 className="title">What’s Clients Say</h2>
              <span className="tagline">Best SEO Optimization Agency</span>
            </div>
            <TestimonialSlider reviews={reviews}/>
          </div>
        </div>
      </section>
    );
}

export default Testimonials;