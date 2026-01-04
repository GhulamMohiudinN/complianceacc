"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendFormspreeEmail = async (formData) => {
    setIsLoading(true);
    setIsSuccess(false);

    try {
      const response = await fetch("https://formspree.io/f/meeopkqe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          from_name: `${formData.firstName} ${formData.lastName}`,
          first_name: formData.firstName,
          last_name: formData.lastName,
          message: formData.message,
        }),
      });

      if (response.ok) {
        reset();
        setIsSuccess(true);
      } else {
        alert("❌ Error sending email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gray-200 pt-12">
      {/* Custom Success Message */}
      {isSuccess && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg shadow-lg z-50 animate-[slideIn_0.3s_ease-out]">
          <div className="flex items-center">
            <div className="h-3 w-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="font-medium">Message sent successfully!</span>
          </div>
          <div className="text-xs mt-1">We'll get back to you soon.</div>
        </div>
      )}
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-wide">
            <span className="block mb-2">Contact us</span>
          </h1>
          <p className="text-lg md:text-xl italic font-light leading-relaxed pt-4">
            Interested in working together? Fill out some info and we will be in
            touch shortly. We can't wait to hear from you!
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 bg-gray-200 p-6">
          <form 
            onSubmit={handleSubmit(sendFormspreeEmail)} 
            className="flex flex-col gap-4"
          >
            {/* Full Name */}
            <p className="italic text-gray-700">Name (required)</p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <p className="italic text-gray-700">First Name</p>
                <input
                  type="text"
                  {...register("firstName", { 
                    required: "First name is required" 
                  })}
                  placeholder="First Name"
                  className="border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="flex-1 flex flex-col">
                <p className="italic text-gray-700">Last Name</p>
                <input
                  type="text"
                  {...register("lastName", { 
                    required: "Last name is required" 
                  })}
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <p className="italic text-gray-700">Email (required)</p>
            <input
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email",
                },
              })}
              placeholder="Email"
              className="border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}

            {/* Message */}
            <p className="italic text-gray-700">Message (required)</p>
            <textarea
              rows="5"
              {...register("message", { 
                required: "Message is required" 
              })}
              placeholder="Tell us about your business and financial needs..."
              className="border border-gray-300 rounded-3xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                disabled={isLoading}
                className="
                  relative overflow-hidden group 
                  rounded-full border border-gray-700 hover:border-[#93c67c]
                  px-8 py-4 
                  font-light 
                  transition-colors duration-300
                  disabled:opacity-70 disabled:cursor-not-allowed
                  w-full md:w-auto
                "
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="h-5 w-5 border-2 border-gray-700 border-t-transparent rounded-full animate-spin mr-2"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;