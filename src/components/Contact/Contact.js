// src/components/Contact.js
import { useRef } from "react";
import React from "react";
import emailjs, { sendForm } from "emailjs-com";

const Contact = (props) => {
  //Users can send me an email after giving some basic info via a form that takes up the right side of the bottom section of the page.On the bottom left is the Google Maps API zoomed into my area.

  const form = useRef();

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
    e.target.reset();
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  return (
    <section id="contact" className="relative">
      {/* contianer for the GoogleMaps API */}
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-pink rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=211+Millpond+Road,+Sunbury,+OH,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          {/* container for my personal contact info (address, phone number, email). Includes headers and details */}
          <div className="relative flex flex-wrap py-6 rounded shadow-md bg-purple text-teal">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                211 Millpond Ave. <br />
                Sunbury OH. 43074
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                muterjeffery@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">(614) 557-2867</p>
            </div>
          </div>
        </div>
        {/* contains the form that will take details and send a personal email to me */}
        <form
          ref={form}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          onSubmit={sendEmail}
        >
          <label className="text-teal sm:text-4xl text-3xl mb-1 font-medium title-font">
            Let's Work Together
          </label>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-teal">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-teal">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-teal">Message</label>
            <textarea
              name="message"
              required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="text-teal bg-pink border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          ></input>
        </form>
      </div>
    </section>
  );
};
export default Contact;
