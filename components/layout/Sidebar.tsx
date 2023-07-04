type propTypes = { active: boolean; close: () => void };

const Sidebar = ({ active, close }: propTypes) => {
  return (
    <div
      className={`slide-panel off-canvas-panel ${active ? "show-panel" : ""}`}
    >
      <div className="panel-overlay" onClick={() => close()} />
      <div className="panel-inner">
        <div className="canvas-logo">
          <img src="/assets/img/logo.png" alt="" />
        </div>
        <div className="about-us">
          <h5 className="canvas-widget-title">About Us</h5>
          <p>
            Sed perspiciatis unde omnis iste natus error voluptatem accusantium
            doloremque laudantium totam rem aperams eaque ipsa quae abillo.
          </p>
        </div>
        <div className="contact-us">
          <h5 className="canvas-widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="far fa-envelope-open" />
              <a href="mailto:websphereinnovations@gmail.com">
                support@WebSphereInnovations
              </a>
              <a href="mailto:websphereinnovations@gmail.com">
                info@WebSphereInnovations
              </a>
            </li>
            <li>
              <i className="far fa-phone" />
              <a href="tel:+01234567899">+447467872544</a>
              <br />
              <a href="tel:+8563214">+8563214</a>
            </li>
          </ul>
        </div>
        <a href="#" className="panel-close" onClick={() => close()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default Sidebar;
