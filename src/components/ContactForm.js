import React from "react";
import Link from "next/link";


const ContactForm = () => {
  return (
    <section className="bg-gray-200 pt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col ">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold   leading-tight tracking-wide">
            <span className="block mb-2">Contact us</span>
          </h1>
          <p className="text-lg md:text-xl  italic font-light leading-relaxed pt-4">
            Intrested in working together? Fill out some info and we will be in
            touch shortly. We can't wait to hear from you!
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 bg-gray-200 p-6 ">
          <form className="flex flex-col gap-4">
            {/* Full Name */}
            <p className="italic text-gray-700">Name (required)</p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <p className="italic text-gray-700">First Name</p>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col">
                <p className="italic text-gray-700">Last Name</p>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <p className="italic text-gray-700">Email (required)</p>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />

            {/* Message */}
            <p className="italic text-gray-700">Message (required)</p>
            <textarea
              rows="5"
              placeholder="Tell us about your business and financial needs..."
              className="border border-gray-300 rounded-3xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            ></textarea>

            {/* Submit Button */}
                     <div className="pt-8 hover:cursor-pointer">
  <Link href="" className="inline-block">
    <button
      className="
        relative overflow-hidden hover:cursor-pointer group 
        rounded-full border border-gray-700 hover:border-[#93c67c]
        px-8 py-4 
        font-light 
        transition-colors duration-300
      "
    >
      {/* ORIGINAL TEXT (visible normally, disappears on hover) */}
      <span
        className="
          relative z-10 block 
          text-black
          transition-all duration-500
          group-hover:translate-y-[-100%] group-hover:opacity-0
        "
      >
        Submit
      </span>

      {/* HOVER TEXT (starts below, slides up into center) */}
      <span
        className="
          absolute inset-0 flex items-center justify-center
          text-white
          translate-y-full group-hover:translate-y-0
          transition-transform duration-500 ease-out
          z-10
        "
      >
        Submit
      </span>

      {/* Background Fill Layer */}
      <span
        className="
          absolute inset-0 
          bg-[#93c67c]
          translate-y-full 
          group-hover:translate-y-0 
          transition-transform duration-500 ease-out
        "
      />
    </button>
  </Link>
</div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
