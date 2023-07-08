import PageTitle from "@/components/layout/PageTitle";
import ProjectsSlider from "@/components/projects/ProjectsSlider";
import { projectPages } from "@/utilities/pageTexts";
import { GetStaticProps } from "next/types";
import { Fragment } from "react";

type propTypes = {
  pageInfo: {
    slug: string;
    title: string;
    category: string;
    description: string;
    outcome: string;
    client: string;
    duration: string;
    conclusion: string;
    steps: { step: string; description: string }[];
  };
};

const Project = ({ pageInfo }: propTypes) => {
  return (
    <Fragment>
      <PageTitle pageTitle={"Project Details"} />
      <section className="portfolio-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12 order-first">
              <div className="portfolio-thumb">
                <img
                  src="../assets/img/portfolio/portfolio-details.jpg"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-4 order-lg-last">
              <div className="portfolio-info-box wow fadeInUp">
                <h4 className="box-title">Project Info</h4>
                <ul>
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
                      src="../assets/img/portfolio/portfolio-details-01.jpg"
                      alt="Image"
                      className="mb-30"
                    />
                  </div>
                  <div className="col-sm-6">
                    <img
                      src="../assets/img/portfolio/portfolio-details-02.jpg"
                      alt="Image"
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
{pageInfo.steps.map((step) => {
return(
                      <div className="simple-icon-box icon-left mb-30 wow fadeInUp">
                        <div className="icon">
                          <i className="flaticon-crop" />
                        </div>
                        <div className="content">
                          <h4 className="title">{step.step}</h4>
                          <p>
                            {step.description}
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
<ProjectsSlider />
    </Fragment>
  );
};

export default Project;

export const getServerSideProps: GetStaticProps = (context) => {
  const { params } = context;
  const project = params!.project;

  const pageInfo = projectPages.filter((pageData) => {
    return pageData.slug === project;
  })[0];

  return {
    props: { pageInfo },
  };
};
