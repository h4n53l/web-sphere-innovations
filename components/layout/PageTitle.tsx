import Link from "next/link";
import rtl from "../rtl/rtl";



const PageTitle = ({pageTitle} :{pageTitle: string}) => {
    return (
        <section className="page-title-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="">
              <h2 className="page-title">{pageTitle}</h2>
            </div>
          </div>
        </div>
      </section>
    );
}

export default PageTitle;