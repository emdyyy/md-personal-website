import Page from "../components/page";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import EmailService from "../services/EmailService";
import { useState } from "react";
import * as yup from "yup";

interface MyFormValues {
  fullName: string;
  email: string;
  message: string;
}

let schema = yup.object().shape({
  fullName: yup.string().max(50, "too long").required("this field is required"),
  email: yup
    .string()
    .email("this is not an email")
    .max(50, "too long")
    .required("this field is required"),
  message: yup.string().max(300, "too long").required("this field is required"),
});

const Contact = () => {
  const initialValues: MyFormValues = { fullName: "", email: "", message: "" };
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showSendingMessage, setShowSendingMessage] = useState(false);
  return (
    <Page title="Contact" desc="Contact me" contactHidden={true}>
      <main className="grid place-content-center lg:flex min-h-screen">
        <div className="m-auto md:mr-5 md:ml-auto h-96 w-96 relative hidden lg:block">
          <Image
            src="/images/md.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="lg:w-2/3 lg:pl-28 lg:pr-28 lg:mt-auto lg:mb-auto xl:pr-44 xl:pl-44 2xl:pr-72 2xl:pl-72">
          <h1 className="text-center lg:text-left lg:ml-5 text-primary font-gilroy font-bold mt-5 text-2xl">
            anything cool to share?
          </h1>
          <p className="text-center lg:text-left lg:ml-5 text-primary font-gilroy mt-5 text-lg w-2/3 md:w-64 ml-auto mr-auto md:m-auto">
            or want to hang out, just leave me a message.
          </p>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              setShowSendingMessage(true);
              const emailToSend = {
                from_name: values.fullName,
                email: values.email,
                message: values.message,
              };

              EmailService.sendEmail(emailToSend).then(
                function () {
                  setShowSendingMessage(false);
                  setShowSuccessMessage(true);
                },
                function () {
                  setShowSendingMessage(false);
                  setShowErrorMessage(true);
                }
              );
            }}
            validationSchema={schema}
          >
            {({ errors, touched, isValid, dirty, isSubmitting }) => (
              <Form className="flex flex-col font-gilroy m-5">
                <label htmlFor="fullName" className="font-bold">
                  full name
                </label>
                <Field
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  className="bg-secondary-light border-secondary-border border-2 p-1 focus:outline-none focus:border-primary disabled:text-secondary"
                  disabled={isSubmitting}
                />
                {errors.fullName && touched.fullName ? (
                  <small className="text-error">{errors.fullName}</small>
                ) : null}
                <label htmlFor="email" className="font-bold mt-3">
                  email
                </label>
                <Field
                  id="email"
                  name="email"
                  placeholder="j.doe@example.com"
                  className="bg-secondary-light border-secondary-border border-2 p-1 focus:outline-none focus:border-primary disabled:text-secondary"
                  disabled={isSubmitting}
                />
                {errors.email && touched.email ? (
                  <small className="text-error">{errors.email}</small>
                ) : null}
                <label htmlFor="message" className="font-bold mt-3">
                  your message
                </label>
                <Field
                  id="message"
                  name="message"
                  placeholder="Hi, Want to work on a project together?"
                  as="textarea"
                  rows="5"
                  className="bg-secondary-light border-secondary-border border-2 p-1 focus:outline-none focus:border-primary disabled:text-secondary"
                  disabled={isSubmitting}
                />
                {errors.message && touched.message ? (
                  <small className="text-error">{errors.message}</small>
                ) : null}
                <button
                  type="submit"
                  className="border-primary border-2 p-1 w-1/2 lg:w-1/3 mt-3 ml-auto mr-auto font-bold active:bg-primary focus:bg-primary focus:outline-none focus:text-white disabled:border-secondary disabled:text-secondary"
                  disabled={!(isValid && dirty) || isSubmitting}
                >
                  SEND
                </button>
                <small
                  className={
                    "text-success text-center m-3 " +
                    (showSuccessMessage ? "" : "hidden")
                  }
                >
                  message sent successfully
                </small>
                <small
                  className={
                    "text-error text-center m-3 " +
                    (showErrorMessage ? "" : "hidden")
                  }
                >
                  message could not be sent
                </small>
                <small
                  className={
                    "text-secondary text-center m-3 " +
                    (showSendingMessage ? "" : "hidden")
                  }
                >
                  sending message...
                </small>
              </Form>
            )}
          </Formik>
        </div>
      </main>
    </Page>
  );
};
export default Contact;
