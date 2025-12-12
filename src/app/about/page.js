import React from 'react'
import Header from '@/components/Header';
import Image from 'next/image';
import about from '@/assists/about.jpg';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import homeHero from "@/assists/homeHero.jpg";

const page = () => {
  return (
    <>
      <Header activePage="about" />

      <div className="relative w-full h-screen overflow-hidden">
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={homeHero}
                  alt="Professional accounting workspace"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
                {/* Optional: Additional shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
      
              {/* Content Container */}
              <div className="relative h-full flex items-center justify-center px-4">
                <div className=" max-w-4xl mx-auto">
                  {/* Main Text */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight tracking-wide">
                    <span className="block mb-2">
                      Compliance Financial Accountants and management consultants
                    </span>
                    {/* <span className="block mb-4">Accounting Solutions</span> */}
                    {/* <span className="block"> Discerning Professionals</span> */}
                  </h1>
      
                  {/* Optional: Decorative line */}
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/70 to-transparent mx-auto my-8" />
      
                  {/* Optional: Subtitle
                  <p className="text-base sm:text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto italic mt-8">
                    Precision, discretion, and expertise tailored for modern businesses
                  </p> */}
                </div>
              </div>
      
              {/* Scroll indicator (optional) */}
              <div className="absolute bottom-40 md:bottom-28 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
                </div>
              </div>
            </div>
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* 3 Responsive Blocks */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:px-22">

      {/* Block 1 */}
      <div className="space-y-5">
        <div className="relative w-full h-64 overflow-hidden rounded-xl">
          <Image
            src={about}
            alt="Elite Accounting Experts"
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold tracking-wide">
          How we deliver ?
        </h3>

        <p className="text-lg font-light leading-relaxed">
          We deliver highly accurate accounting frameworks that ensure every
          financial aspect is handled with absolute precision and clarity.
        </p>
      </div>

      {/* Block 2 */}
      <div className="space-y-5">
        <div className="relative w-full h-64 overflow-hidden rounded-xl">
          <Image
            src={about}
            alt="Professional Auditing Services"
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold tracking-wide">
          Why us ?
        </h3>

        <p className="text-lg font-light leading-relaxed">
          Our auditing methodologies are structured to identify insights,
          elevate compliance, and safeguard your organization’s financial health.
        </p>
      </div>

      {/* Block 3 */}
      <div className="space-y-5">
        <div className="relative w-full h-64 overflow-hidden rounded-xl">
          <Image
            src={about}
            alt="Strategic Financial Consulting"
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold tracking-wide">
         Who we are ?
        </h3>

        <p className="text-lg font-light leading-relaxed">
          We offer strategic insights and tailored financial advice that empower
          businesses to grow with confidence and long-term stability.
        </p>
      </div>

    </div>
  </div>
</section>


      <ContactForm/>

      <Footer/>
    </>
  )
}

export default page;