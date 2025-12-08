import React from 'react'
import Header from '@/components/Header';
import Image from 'next/image';
import about from '@/assists/about.jpg';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <>
      <Header activePage="about" />
      
      <section className="py-16  px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side - Image */}
             <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold   leading-tight tracking-wide">
                  <span className="block mb-2">Who we are</span>
                </h1>
              </div>

              <div className="space-y-6">
                <p className="text-lg md:text-xl  italic font-light leading-relaxed pt-4">
                  At the pinnacle of precision and integrity, we offer elite
                  accounting and auditing services designed to elevate your
                  financial pursuits to the highest echelon. Delivering
                  unparalleled experties and meticulous attention to detial, we
                  redefine Excellence for those who seek distinctive, tailored
                  financial solutions.
                </p>
              </div>
            </div>

            {/* Right Side - Content */}
           <div className="relative h-full min-h-[400px] md:min-h-[500px]  overflow-hidden">
              <Image
                src={about}
                alt="Professional accounting services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Optional overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
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