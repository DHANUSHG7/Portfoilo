import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqanqpna");

  return (
    <div id="contact" className="px-4 md:px-8 lg:px-16 py-10">
      {/* Heading */}
      <h1 className="fade-up mt-4 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent font-bold text-3xl md:text-5xl text-center uppercase">
        Get in touch
      </h1>

      {/* Main Layout */}
      <div className="fade-up flex flex-col md:flex-row justify-center items-stretch gap-5 mt-8 max-w-5xl mx-auto">
        
        {/* Left - Contact Info + Socials */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          {/* Contact Info Card */}
          <div className="text-white backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 rounded-2xl shadow-lg zoom-in1 p-5">
            <p className="flex items-center gap-5 text-lg md:text-xl my-2 p-2 zoom-in1">
              <FaLocationDot className="font-bold text-2xl" /> Trichy
            </p>
            <p className="flex items-center gap-5 text-lg md:text-xl my-2 p-2 zoom-in1">
              <FaPhoneVolume className="font-bold text-2xl" />
              +91-7397523506
            </p>
            <p className="flex items-center gap-5 text-lg md:text-xl my-2 p-2 zoom-in1 break-all">
              <CgMail className="font-bold text-2xl" />
              dhanushganasan@gmail.com
            </p>
          </div>

          {/* Socials Card */}
          <div className="flex flex-col justify-center items-center p-4 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 rounded-2xl shadow-lg zoom-in1">
            <h1 className="text-white font-bold text-2xl md:text-3xl p-1 m-2">
              Follow on
            </h1>

            <div className="relative flex gap-3 md:gap-4">
              <a
                href="https://www.linkedin.com/in/dhanush-g-b60a392a8/"
                target="_blank"
                className="zoom-in1 relative z-50 text-white text-3xl p-1 hover:text-indigo-300"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/DHANUSHG7"
                target="_blank"
                className="zoom-in1 relative z-50 text-white text-3xl p-1 hover:text-indigo-300"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/_dhanush_7___/"
                target="_blank"
                className="zoom-in1 relative z-50 text-white text-3xl p-1 hover:text-indigo-300"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2 flex justify-center">
          {state.succeeded ? (
            <div className="w-full max-w-[400px] mx-auto my-2 p-5 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl shadow-lg">
              <h2 className="text-white text-2xl font-bold mb-2">
                Thanks — message sent!
              </h2>
              <p className="text-white/80 mb-4">
                I'll get back to you soon. 🚀
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 rounded-md text-white font-semibold hover:scale-105 transition-all"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="text-white w-full max-w-[400px] mx-auto m-2 p-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl shadow-lg space-y-3"
            >
              {/* Name */}
              <div className="zoom-in1 flex flex-col">
                <label htmlFor="Name" className="mb-1 font-medium">
                  Name
                </label>
                <input
                  id="Name"
                  type="text"
                  name="Name"
                  className="p-2 rounded-md bg-white/10 border border-white/30 outline-none focus:ring-2 focus:ring-purple-400"
                />
                <ValidationError prefix="Name" field="Name" errors={state.errors} />
              </div>

              {/* Email */}
              <div className="zoom-in1 flex flex-col">
                <label htmlFor="email" className="mb-1 font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="p-2 rounded-md bg-white/10 border border-white/30 outline-none focus:ring-2 focus:ring-purple-400"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Message */}
              <div className="zoom-in1 flex flex-col">
                <label htmlFor="message" className="mb-1 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  className="p-2 rounded-md bg-white/10 border border-white/30 outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="zoom-in1 w-full py-2 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 rounded-md font-semibold text-white shadow-lg hover:scale-105 transition-all disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
