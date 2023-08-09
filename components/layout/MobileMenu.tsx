import { SetStateAction, useState } from "react";


type propTypes = { active: boolean, close: ()=> void }


const MobileMenu = ({ active, close }: propTypes) => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value: SetStateAction<string>) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeIcon = (value: string) => (value === activeMenu ? "submenu-opened" : ""),
    activeLi = (value: string) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <div
      className={`slide-panel mobile-slide-panel ${active ? "show-panel" : ""}`}
    >
      <div className="panel-overlay" onClick={() => close()} />
      <div className="panel-inner">
        <div className="panel-logo">
          <img src="/assets/img/logo.png" alt="" />
        </div>
        <nav className="mobile-menu">
          <ul className="primary-menu">
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <li>
              <a>
                Services
                <span
                  className={`dd-trigger ${activeIcon("Services")}`}
                  onClick={() => activeMenuSet("Services")}
                >
                  <i className="fas fa-angle-down" />
                </span>
                </a>
              <ul className="submenu" style={activeLi("Services")}>
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
        <button className="panel-close navbar-toggler" onClick={() => close()}>
          <i className="fal fa-times" />
          </button>
      </div>
    </div>
  );
};
export default MobileMenu;
