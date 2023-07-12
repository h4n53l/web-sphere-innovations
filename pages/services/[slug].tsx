import PageTitle from "@/components/layout/PageTitle";
import ServiceDescription from "@/components/services/ServiceDescription";
import { sanityClient } from "@/utilities/sanityInit";
import Link from "next/link";
import { Fragment } from "react";

type propTypes = {
  pageInfo: {
    title: string;
    slug: string;
    heading: string;
    description: string;
    details: { service: string; description: string }[];
  };
};

const Service = ({ pageInfo }: propTypes) => {
  return (
    <Fragment>
      <PageTitle pageTitle={pageInfo.title} />
      {/*====== Page Title Area End ======*/}
      {/*====== About Area Start ======*/}
       <ServiceDescription
        serviceHeading={pageInfo.heading}
        description={pageInfo.description}
        subServiceList={pageInfo.details}
      /> 
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
                <p>Click to learn more about our web development services.</p>
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
                <p>Click to learn more about our search engine optimisation services.</p>
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
                <p>Click to learn more about our content management services.</p>
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


export const getStaticProps = async (params: { params: { slug: any; }; }) => {
  const pageSlug = params.params.slug;
  console.log(params);

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }
    const query = `*[ _type == "services" && slug.current == "${pageSlug}"]`;

  const result = await sanityClient.fetch(query) 
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

export const getStaticPaths = async () => {

    const query = `*[ _type == "services"].slug.current`;

  const services = await sanityClient.fetch(query)

  const paths = services.map(( slug: any) =>({
     params: {slug}
  }));

  return { paths, fallback: false };
};
