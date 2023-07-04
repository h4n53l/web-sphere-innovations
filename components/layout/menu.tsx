import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import rtl from "../rtl/rtl";

export const Home = () => {
  const [path, setPath] = useState(false);
  useEffect(() => {
    let location = window.location.pathname;
    setPath(location.includes("rtl"));
  }, []);

  return (
    <Fragment>
      <li>
        <Link href={`${rtl()}`}>SEO Agency</Link>
      </li>
      <li>
        <Link href={`${rtl()}index-2`}>Digital Agency</Link>
      </li>
      <li>
        <Link href={`${rtl()}index-3`}>Marketing Agency</Link>
      </li>
      <li>
        <Link href={`${rtl()}index-4`}>Digital Agency Dark</Link>
      </li>
      {!path && (
        <li>
          <Link href={`/index-5`}>Design Studio</Link>
        </li>
      )}
    </Fragment>
  );
};
export const Services = () => (
  <Fragment>
    <li>
      <Link href={`${rtl()}marketing-services`}>Web Design</Link>
    </li>
    <li>
      <Link href={`${rtl()}agency-services`}>Search Engine Optimisation</Link>
    </li>
    <li>
      <Link href={`${rtl()}service-details`}>Content Management Services</Link>
    </li>
  </Fragment>
);
export const Works = () => (
  <Fragment>
      <Link href={`${rtl()}portfolio`}>Portfolio</Link>
  </Fragment>
);

export const Pages = () => (
  <Fragment>
    <li>
      <Link href={`${rtl()}about`}>Who We Are</Link>
    </li>
    <li>
      <Link href={`${rtl()}team`}>Our Terms</Link>
    </li>
    <li>
      <Link href={`${rtl()}faq`}>FAQ</Link>
    </li>
  </Fragment>
);
export const Contact = () => (
  <Fragment>
    <Link href={`${rtl()}contact`}>Contact Us</Link>
  </Fragment>
);
