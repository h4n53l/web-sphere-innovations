import Link from "next/link";
import { Fragment, useState } from "react";
import rtl from "../rtl/rtl";
import MobileMenu from "./MobileMenu";
import ContactForm from "../ContactForm";

const Navbar = ({dark}: any) => {
    const [mobileToggle, setMobileToggle] = useState(false);
    const [contactForm, setContactForm] = useState(false);
    

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
            <a>
                Services
                <span className="dd-trigger">
                  <i className="fas fa-angle-down" />
                </span>
            </a>
            <ul className="submenu">
    <li>
      <a href={`/services/web-design`}>Web Design</a>
    </li>
    <li>
      <a href={`/services/seo`}>Search Engine Optimisation</a>
    </li>
    <li>
      <a href={`/services/cms`}>Content Management Services</a>
    </li>
            </ul>
          </li>
          <li>
            <a href="/about">
              About Us
            </a>
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
                      height={"auto"}
                      width={200}
                        src={`/assets/img/${dark ? "logo-white" : "logo"}.png`}
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
                    <button 
                    className={contactForm ? "template-btn-danger" :"template-btn"}
                    onClick={()=>setContactForm(!contactForm)}
                    >
                      {contactForm ? "Close Form" :"Let's Talk"}
                      <i className="far fa-long-arrow-right" />
                      </button>
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
        </header>
        <MobileMenu active={mobileToggle} close={() => setMobileToggle(false)} />
        {contactForm &&
            <div className="d-flex align-items-center justify-content-center p-5 m-5">
              <ContactForm />
          </div>
        }
      </Fragment>
    );
}

export default Navbar;