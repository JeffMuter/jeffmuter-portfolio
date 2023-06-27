import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Email = (props) => {
  const form = useRef();

  // function to send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    // send the form data to EmailJS to identify account and send email
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      // using .then because sendForm is asynchronous. If successful, logs the text. If error, logs error message
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    // display toast notification when email is successfully sent
    toast.success("Email sent!", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1500,
      hideProgressBar: true,
      icon: false,
    });
    // clear the form after email is sent
    e.target.reset();
  };

  return (
    <div className="grid grid-cols-1 gap-4 m-20 w-1/2">
      {/* form for user to send email */}
      <form ref={form} onSubmit={sendEmail} className="block md:mt-0">
        {/* label for the form */}
        <label className="block text-teal sm:text-4xl text-3xl mb-4 font-medium title-font">
          Let's Work Together
        </label>
        {/* input field for user's name */}
        <label className="block leading-7 text-sm text-teal">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="w-full mb-4 rounded border border-teal focus:border-coral text-teal py-1 px-3 leading-8"
          style={{ backgroundColor: "transparent" }}
        />
        {/* input field for user's email */}
        <label className="leading-7  mt-12 text-sm text-teal">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="w-full  mb-4 rounded border border-teal focus:border-coral text-teal py-1 px-3 leading-6"
          style={{ backgroundColor: "transparent" }}
        />
        {/* input field for message */}
        <label className="leading-7 text-sm text-teal">Message</label>
        <textarea
          name="message"
          required
          className="w-full  mb-4 rounded border border-teal focus:border-coral h-32 text-base text-teal py-1 px-3 resize-none leading-6"
          style={{ backgroundColor: "transparent" }}
        />
        {/* button to submit the form */}
        <button
          type="submit"
          className="text-teal bg-pink border-0 py-2 px-6 mt-8 rounded-3xl text-lg inline-block transition-shadow duration-300 hover:box-shadow-teal"
        >
          Send Email
        </button>
      </form>
      {/* toast notification for displaying success/error messages */}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Email;
