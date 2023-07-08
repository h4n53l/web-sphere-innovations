import Link from "next/link";
import { Fragment, useState } from "react";
import rtl from "../rtl/rtl";
import MobileMenu from "./MobileMenu";
import Sidebar from "./Sidebar";
import { Home, Works, Pages, Contact, Services } from "./menu";

const Navbar = ({dark}: any) => {
    const [mobileToggle, setMobileToggle] = useState(false);
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const Nav = () => (
        <nav className="nav-menu d-none d-xl-block">
        <ul className="primary-menu">
          <li>
            <Link href="/">
              
                Home
                <span className="">
                </span>
              
            </Link>
          </li>
          <li>
            <Link href="#">
                Services
                <span className="dd-trigger">
                  <i className="fas fa-angle-down" />
                </span>
            </Link>
            <ul className="submenu">
              <Services />
            </ul>
          </li>
          {/* <li>
              <Works />
          </li> */}
          <li>
            <a href="#">
              About Us
              <span className="dd-trigger">
                <i className="fas fa-angle-down" />
              </span>
            </a>
            <ul className="submenu">
              <Pages />
            </ul>
          </li>
          <li>
            <Contact />
          </li>
        </ul>
      </nav>
    )


    return (
        <Fragment>
        <header className="template-header absolute-header sticky-header">
          <div className="container-fluid container-1550">
            <div className="header-inner">
              <div className="header-left">
                <div className="site-logo">
                  <Link href={`${rtl()}`}>
                    
                      <img
                      height={50}
                        src={`/assets/img/${dark ? "logo-white" : "logo"}.svg`}
                        alt="Web Sphere Innovations"
                      />
                    
                  </Link>
                </div>
              </div>
              <div className="header-center">
                <Nav />
              </div>
              <div className="header-right">
                <ul className="header-extra">
                  <li className="header-btns d-none d-md-block">
                    <a href="#" className="template-btn">
                      Let’s Talk
                      <i className="far fa-long-arrow-right" />
                      </a>
                  </li>
                  <li className="d-none d-xl-block">
                    <a
                      href="#"
                      className="off-canvas-btn"
                      onClick={() => setSidebarToggle(true)}
                    >
                      <span />
                      <span />
                      <span />
                    </a>
                  </li>
                  <li className="d-xl-none">
                    <div
                      className="navbar-toggler"
                      onClick={() => setMobileToggle(true)}
                    >
                      <span />
                      <span />
                      <span />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Sidebar active={sidebarToggle} close={() => setSidebarToggle(false)} />
        </header>
        <MobileMenu active={mobileToggle} close={() => setMobileToggle(false)} />
      </Fragment>
    );
}

export default Navbar;