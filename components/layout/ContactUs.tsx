

const ContactUs = ({ logo, icons }: any) => {
  return (
    <div className="widget contact-widget">
      <h4 className="widget-title">Contact Us</h4>
      <div className="contact-content">
        <div className="phone-number">
          <span>Email Address:</span>
          <a href="mailto:websphereinnovations@gmail.com">
            <i className="far fa-phone" />
            websphereinnovations@gmail.com
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
            <a href="https://www.facebook.com/profile.php?id=100094352629718">
              <i className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/WebSphereInnov">
              <i className="fab fa-twitter-square" />
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};
export default ContactUs;
