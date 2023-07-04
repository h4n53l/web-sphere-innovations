import Head from "next/head";
import { Fragment, useEffect } from "react";
import CallToAction from "../../components/CallToAction";
import VideoPopup from "../../components/VideoPopup";
import { progressbar, stickyNav } from "../../utils";
import Footer2 from ".././footer/Footer2";
import Header3 from ".././header/Header3";

const RtlLayout = ({ children, noHeader, noFooter }) => {
  useEffect(() => {
    stickyNav();
    progressbar();
    const path = window.location.pathname;
    if (path.includes("/index-4")) {
      document.querySelector("body").classList.add("dark-version");
    } else {
      document.querySelector("body").classList.remove("dark-version");
    }
    if (path.includes("rtl")) {
      document.querySelector("html").setAttribute("dir", "rtl");
    }
  }, []);
  return (
    <Fragment>
      <Head>
        <link
          rel="shortcut icon"
          href="/assets/img/favicon.ico"
          type="img/png"
        />
        <title>
          Web Sphere Innovations - Marketing Agency React Nextjs Template || Digital Agency
        </title>
        {/* <!--====== Animate Css ======--> */}
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        {/* <!--====== Bootstrap css ======--> */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        {/* <!--====== Slick Slider ======--> */}
        <link rel="stylesheet" href="/assets/css/slick.min.css" />
        {/* <!--====== Nice Select ======--> */}
        <link rel="stylesheet" href="/assets/css/nice-select.min.css" />
        {/* <!--====== Font Awesome ======--> */}
        <link
          rel="stylesheet"
          href="/assets/fonts/fontawesome/css/all.min.css"
        />
        {/* <!--====== Flaticon ======--> */}
        <link rel="stylesheet" href="/assets/fonts/flaticon/css/flaticon.css" />
        {/* <!--====== Lity CSS ======--> */}
        <link rel="stylesheet" href="/assets/css/lity.min.css" />
        {/* <!--====== Main Css ======--> */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        {/* <!--====== Responsive CSS ======--> */}
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        {/* <!--====== RTL-Main Css ======--> */}
        <link rel="stylesheet" href="/assets/css/rtl-style.css" />
        {/* <!--====== RTL-Responsive CSS ======--> */}
        <link rel="stylesheet" href="/assets/css/rtl-responsive.css" />
      </Head>
      <VideoPopup />
      {!noHeader && <Header3 />}
      {children}
      {!noFooter && (
        <Fragment>
          <CallToAction />
          <Footer2 />
        </Fragment>
      )}
    </Fragment>
  );
};
export default RtlLayout;
