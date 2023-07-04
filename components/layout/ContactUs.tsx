

const ContactUs = ({ logo, icons }: any) => {
  return (
    <div className="widget contact-widget">
      <h4 className="widget-title">Contact Us</h4>
      <div className="contact-content">
        <div className="phone-number">
          <span>Phone Number</span>
          <a href="tel:+01234567899">
            <i className="far fa-phone" />
            +012 (345) 678 99
          </a>
        </div>
        <p>
          <br /><br />
          <a href="mailto:websphereinnovations@gmail.com">support@WebphereInnovations</a>
        </p>
        {!icons && (
          <img
            src={`/assets/img/${logo ? logo : "logo-white"}.png`}
            alt="Web Sphere Innovations"
          />
        )}
      </div>
      {icons && (
        <ul className="social-links">
          <li>
            <span>Follow</span>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-behance-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};
export default ContactUs;
