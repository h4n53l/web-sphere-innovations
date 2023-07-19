import {Fragment} from 'react';
import PageTitle from "@/components/layout/PageTitle";
import ProjectsSlider from "@/components/projects/ProjectsSlider";
import { sanityClient, urlFor } from "@/utilities/sanityInit";


const Project = ({ pageInfo, otherProjects }: {pageInfo: any, otherProjects: any}) => {

  return (
    <Fragment>
      <PageTitle pageTitle={"Project Details"} />
      <section className="portfolio-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12 order-first">
              <div className="portfolio-thumb">
                <img
                  src={urlFor(pageInfo.mainImage).width(1170).url()}
                  alt={pageInfo.link}
                />
              </div>
            </div>
            <div className="col-lg-4 order-lg-last">
              <div className="portfolio-info-box wow fadeInUp">
                <h4 className="box-title">Project Info</h4>
                <ul>
                  <li>
                    <span className="info-title">Link</span>
                    <a href={pageInfo.link} className="info">{pageInfo.link}</a>
                  </li>
                  <li>
                    <span className="info-title">Clients</span>
                    <span className="info">{pageInfo.client}</span>
                  </li>
                  <li>
                    <span className="info-title">Project Category</span>
                    <span className="info">{pageInfo.category}</span>
                  </li>
                  <li>
                    <span className="info-title">Project Date</span>
                    <span className="info">{pageInfo.duration}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="portfolio-details-content wow fadeInUp">
                <h2 className="portfolio-title">
                  {pageInfo.title}
                </h2>
                <p className="mb-30">
                  {pageInfo.description}
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <img
                  src={urlFor(pageInfo.featureImageOne).width(370).url()}
                  alt={pageInfo.link}
                      className="mb-30"
                    />
                  </div>
                  <div className="col-sm-6">
                    <img
                  src={urlFor(pageInfo.featureImageTwo).width(370).url()}
                  alt={pageInfo.link}
                      className="mb-30"
                    />
                  </div>
                </div>
                <p>
                {pageInfo.outcome}
                </p>
                <div className="row">
                  <div className="col-lg-9">
                    <div className="feature-lists mt-30">
{pageInfo.details.map((detail: { service: string ; description: string }) => {
return(
                      <div className="simple-icon-box icon-left mb-30 wow fadeInUp">
                        <div className="icon">
                          <i className="flaticon-crop" />
                        </div>
                        <div className="content">
                          <h4 className="title">{detail.service}</h4>
                          <p>
                            {detail.description}
                          </p>
                        </div>
                      </div>
                      )
})
                      }
                    </div>
                  </div>
                </div>
                <p>
                  {pageInfo.conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Portfolio Area End ======*/}
      {/*====== Related Portfolio Start ======*/}
<ProjectsSlider projects={otherProjects} />
    </Fragment>
  );
};

export default Project;

export const getStaticProps = async (params: { params: { slug: any; }; }) => {
  const pageSlug = params.params.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const project = await sanityClient.fetch(`*[ _type == "projects" && slug.current == "${pageSlug}"]`)
  const otherProjects = await sanityClient.fetch(`*[ _type == "projects"]`)

  const pageInfo = project[0];

  console.log(pageInfo)

  if (!pageInfo) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: { pageInfo, otherProjects },
    };
  }
};

export const getStaticPaths = async () => {

    const query = `*[ _type == "projects"].slug.current`;

  const services = await sanityClient.fetch(query)

  const paths = services.map(( slug: any) =>({
     params: {slug}
  }));

  return { paths, fallback: false };
};
