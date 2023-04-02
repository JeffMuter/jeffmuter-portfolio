// src/components/Contact.js
import Email from "../Email/Email";
import React from "react";

const Contact = (props) => {
  //Users can send me an email after giving some basic info via a form that takes up the right side of the bottom section of the page.On the bottom left is the Google Maps API zoomed into my area.

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
        <Email />
      </div>
    </section>
  );
};
export default Contact;
