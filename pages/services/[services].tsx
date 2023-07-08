import PageTitle from "@/components/layout/PageTitle";
import ServiceDescription from "@/components/services/ServiceDescription";
import { servicesPage } from "@/utilities/pageTexts";
import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";


type propTypes = {
  pageInfo: {
  title: string,
  slug: string,
  serviceHeading: string,
  description: string,
   subServiceList: {subService: string, description: string}[]
 }[]
 }

const Service = ({pageInfo}: propTypes) => {
  const router = useRouter()
  
  const pageText = pageInfo!.filter((pageData)=> {return pageData.slug === router.query.services})
  
    return (
        <Fragment>
        <PageTitle pageTitle={pageText[0].title}/>
        {/*====== Page Title Area End ======*/}
        {/*====== About Area Start ======*/}
<ServiceDescription 
serviceHeading={pageText[0].serviceHeading} 
description={pageText[0].description} 
subServiceList={pageText[0].subServiceList} 
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
                    <Link href="/services/seo">
                      Search Engine Optimisation
                    </Link>
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
}

export default Service;


export const getStaticPaths: GetStaticPaths = () => {
  const paths = servicesPage.map((pageData)=> {return {params: { services: pageData.slug }}});
  
  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = () => {
    const pageInfo = servicesPage;
  
    return {
      props: { pageInfo },
    };
  };