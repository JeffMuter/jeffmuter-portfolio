import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Email = (props) => {
  const form = useRef();

  //creating a function to send the email through the EmailJS to my email.
  const sendEmail = (e) => {
    e.preventDefault();

    //all the required info in order for the info to get to EmailJS & indentify my account.
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      //.then used because sendForm is asynchronous.
      //if clear, logs the text, if error, error message
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    toast.success("Email sent!", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1500,
      hideProgressBar: true,
      icon: false,
    });
    e.target.reset();
  };

  return (
    <div className=" m-10">
      {/* a form for the user to write an email, add their name and email */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" flex flex-col md:ml-auto w-full md:mt-0"
      >
        <label className="text-teal sm:text-4xl text-3xl mb-4 font-medium title-font">
          Let's Work Together
        </label>
        <label className="leading-7 text-sm text-teal">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        ></input>
        <label className="leading-7 text-sm text-teal">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        ></input>
        <label className="leading-7 text-sm text-teal">Message</label>
        <textarea
          name="message"
          required
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
        <button
          type="submit"
          className="text-teal bg-pink border-0 py-2 px-6 mt-8 focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg inline-block min-w-max"
        >
          Send Email
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Email;
