import sendEmail from "@/utilities/helpers/sendEmail";
import useContactForm from "@/utilities/hooks/useContactForm";
import { Fragment, useState } from "react";
import Swal from "sweetalert2";

const ContactForm = ({ extraClass }: any) => {
  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState(
    {isSuccessful: false, message: ''});

const handleSubmit = async (event: any) => {
  event.preventDefault();
  try {
    const request = await sendEmail(values.name, values.email, values.subject, values.message);
    if (request.status === 200) {
      setResponseMessage(
          {isSuccessful: true, message: 'Thank you for your message.'});
          Swal.fire({
            icon: "success",
            title: "Inquiry Submitted",
            text: "Thank you very much for your inquiry. We will get back to you shortly.",
            showConfirmButton: false,
  timer: 1500
          });
          values.email="";
          values.name = "";
          values.message = "";
          values.subject = "";
    }
  } catch (error) {
    setResponseMessage({
      isSuccessful: false,
      message: 'Oops something went wrong. Please try again.',
    });
  }

};
  return (
    <Fragment>
      <div className={`consultation-form ${extraClass}`}>
        <h3 className="title">Inquiry Form</h3>
        <p className="subtitle">
          Let's discuss how we can help you achieve your goals
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              id="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              required
              id="email"
              value={values.email}
              onChange={handleChange}
              type="email"
            />
          </div>
          <div className="input-field">
            <label htmlFor="subject">Subject</label>
            <input
              required
              id="subject"
              value={values.subject}
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="input-field">
            <label htmlFor="message">Message</label>
            <textarea
              required
              value={values.message}
              onChange={handleChange}
              id="message"
              rows={8}
            />
          </div>
          <div className="input-field">
            <button type="submit" value='Submit' className="template-btn">
              Submit Inquiry <i className="far fa-long-arrow-right" />
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactForm;
