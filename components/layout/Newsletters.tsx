const Newsletters = ({ noIcon, btnClass }: any) => {
  return (
    <div className="widget newsletters-widget pl-xl-4">
      <h4 className="widget-title">Newsletter</h4>
      <p>
        Signup to our newsletter for latest updates on web design trends.
      </p>
      <div className="newsletter-form">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email Address" className="color-primary" />
          <button type="submit" className={btnClass ? btnClass : ""}>
            Sign Up <i className="far fa-long-arrow-right" />
          </button>
        </form>
      </div>
      {!noIcon && (
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
export default Newsletters;
