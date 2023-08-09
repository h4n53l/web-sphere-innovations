import Link from "next/link";
import rtl from "../rtl/rtl";



const PageTitle = ({pageTitle} :{pageTitle: string}) => {
    return (
        <section className="page-title-area">
        <div className="d-flex align-items-center justify-content-center p-2">
          
              <h2 className="page-title">{pageTitle}</h2>
         
        </div>
      </section>
    );
}

export default PageTitle;