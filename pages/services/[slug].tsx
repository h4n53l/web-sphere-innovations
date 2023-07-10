import PageTitle from "@/components/layout/PageTitle";
import ServiceDescription from "@/components/services/ServiceDescription";
import { servicesPages } from "@/utilities/pageTexts";
import { sanityClient } from "@/utilities/sanityInit";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

type propTypes = {
  pageInfo: {
    title: string;
    slug: string;
    serviceHeading: string;
    description: string;
    subServiceList: { subService: string; description: string }[];
  };
};

const Service = ({ pageInfo }) => {
  return (
    <Fragment>
      <PageTitle pageTitle={pageInfo.title} />
      {/*====== Page Title Area End ======*/}
      {/*====== About Area Start ======*/}
      {/* <ServiceDescription
        serviceHeading={pageInfo.serviceHeading}
        description={pageInfo.description}
        subServiceList={pageInfo.subServiceList}
      /> */}
      {/*====== About Area End ======*/}
      {/*====== Service Section Start ======*/}
      <section
        className="service-section section-gap bg-color-primary-7 bg-cover-center"
        style={{ backgroundImage: "url(assets/img/service-bg.jpg)" }}
      >
        <div className="container">
          <div className="section-heading mb-30 text-center">
            <h2 className="title">Services We Offer</h2>
            <span className="tagline">Web Sphere Innovations</span>
          </div>
          <div className="row service-boxes justify-content-center">
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <i className="flaticon-subscription" />
                </div>
                <h4 className="title">
                  <Link href="/services/web-development">Web Development</Link>
                </h4>
                <p>Quis autem reprehenderit quiinea volup tate</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <i className="flaticon-seo-2" />
                </div>
                <h4 className="title">
                  <Link href="/services/seo">Search Engine Optimisation</Link>
                </h4>
                <p>Quis autem reprehenderit quiinea volup tate</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <i className="flaticon-click" />
                </div>
                <h4 className="title">
                  <Link href="/services/cms">Content Management</Link>
                </h4>
                <p>Quis autem reprehenderit quiinea volup tate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Service Section End ======*/}
    </Fragment>
  );
};

export default Service;


export const getServerSideProps = async (context: {
  query: { slug: string };
}) => {
  const pageSlug = context.query.slug;

  console.log(pageSlug);

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  // const query = encodeURIComponent(
    const query = `*[ _type == "services" && slug.current == "${pageSlug}"]`;
  // const url = `https://nfvjxp0o.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await sanityClient.fetch(query) //.then((response) => response.json());
  const pageInfo = result[0];
  if (!pageInfo) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: { pageInfo },
    };
  }
};
