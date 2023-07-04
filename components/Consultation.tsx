import { Fragment } from "react";
import NiceSelect from "./NiceSelect";

const Consultation = ({ extraClass }: any) => {
    return (
        <Fragment>
        <div className={`consultation-form ${extraClass}`}>
          <h3 className="title">Free Consultation</h3>
          <p className="subtitle">Let's discuss how we can help you achieve your goals</p>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div className="input-field">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="input-field">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="input-field">
              <NiceSelect
                value={["Subject One", "Subject Two", "Subject Three"]}
                disable={"Subject"}
              />
            </div>
            <div className="input-field">
              <button type="submit" className="template-btn">
                Get Consultations <i className="far fa-long-arrow-right" />
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
}

export default Consultation;