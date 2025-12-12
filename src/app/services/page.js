'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FaUserTie,
  FaBalanceScale, 
  FaRegChartBar,
  FaClipboardCheck,
  FaCalculator,
  FaRegLightbulb,
  FaBuilding,
  FaFileInvoiceDollar,
  FaChartPie,
  FaPlus,
  FaMinus,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logo from "@/assists/logo.png";
import logoB from "@/assists/logo-black.png"

export default function page() {
  return (
    <>
      <Header activePage="services"/>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 sm:px-6 lg:px-22 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Section Title */}
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide text-center mb-14">
            Our Services
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

            <ServiceCard Icon={FaUserTie} title="Business Advisory" desc="Strategic advisory tailored to improve your organization's direction and financial clarity." />
            <ServiceCard Icon={FaBalanceScale} title="Audit & Assurance" desc="Precision-driven auditing and assurance ensuring integrity, accuracy, and compliance." />
            <ServiceCard Icon={FaRegChartBar} title="Financial Reporting" desc="Robust reporting structures that ensure transparency and informed decision-making." />
            <ServiceCard Icon={FaClipboardCheck} title="Compliance Management" desc="Comprehensive compliance frameworks aligned with local and international standards." />
            <ServiceCard Icon={FaCalculator} title="Accounting Services" desc="End-to-end accounting solutions designed for accuracy, structure, and operational efficiency." />
            <ServiceCard Icon={FaRegLightbulb} title="Strategy & Consulting" desc="Tailored consulting programs to help businesses thrive with clarity and long-term vision." />
            <ServiceCard Icon={FaBuilding} title="Corporate Structuring" desc="Optimize your corporate structure for financial control, tax efficiency, and scalability." />
            <ServiceCard Icon={FaFileInvoiceDollar} title="Taxation Services" desc="Complete tax planning, filing, and compliance services for companies and individuals." />
            <ServiceCard Icon={FaChartPie} title="Financial Analysis" desc="Data-driven financial evaluations designed to strengthen your decision-making process." />

          </div>
        </div>
      </section>



      {/* FAQ SECTION */}
      <section className="py-24 px-6 sm:px-6 lg:px-22 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE - ACCORDION */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide mb-10">
              Frequently Asked Questions
            </h2>

            <FAQSection />
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="w-full flex justify-center">
            <Image 
              src={logoB} 
              alt="FAQ Illustration"
              className="rounded-xl shadow-lg w-full max-w-md"
            />
          </div>

        </div>
      </section>

      <section className="py-24 px-6 sm:px-6 lg:px-22 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide text-center mb-12">
            What Our Clients Say
          </h2>

          <TestimonialSlider />
        </div>
      </section>

      <Footer />
    </>
  );
}



/* ========== REUSABLE CARD COMPONENT ========== */
function ServiceCard({ Icon, title, desc }) {
  return (
    <div
      className="
        group p-8 rounded-xl border border-gray-200 shadow-sm 
        transition-all duration-300 bg-white
        hover:-translate-y-2 hover:shadow-xl
      "
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-[#93c67c] rounded-full flex items-center justify-center mb-6">
        <Icon className="text-white text-3xl" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-4 tracking-wide">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-10">
        {desc}
      </p>

      {/* Button */}
      <Link href="/contact" className="inline-block">
        <button
          className="
            relative overflow-hidden hover:cursor-pointer group/button 
            rounded-full border border-gray-700 px-8 py-3 hover:border-[#93c67c]
            bg-white text-sm font-light
          "
        >
          {/* Normal Text */}
          <span
            className="
              relative z-10 block text-black
              transition-all duration-500
              group-hover/button:-translate-y-full group-hover/button:opacity-0
            "
          >
            Learn More
          </span>

          {/* Hover Text */}
          <span
            className="
              absolute inset-0 flex items-center justify-center 
              text-white text-sm z-10
              translate-y-full group-hover/button:translate-y-0 
              transition-transform duration-500 ease-out
            "
          >
            Learn More
          </span>

          {/* Background Fill */}
          <span
            className="
              absolute inset-0 bg-[#93c67c]
              translate-y-full group-hover/button:translate-y-0
              transition-transform duration-500 ease-out
            "
          />
        </button>
      </Link>
    </div>
  );
}



/* ========== FAQ COMPONENT ========== */
function FAQSection() {
  const [active, setActive] = useState(null);

  const faqList = [
    {
      q: "What services do you provide?",
      a: "We offer advisory, audit, taxation, accounting, and corporate restructuring solutions designed for long-term growth."
    },
    {
      q: "How does your consultation process work?",
      a: "We begin with a discovery call, followed by a structured evaluation and tailored recommendations."
    },
    {
      q: "Do you provide tax planning for companies?",
      a: "Yes, we offer complete tax consulting, filing, planning, and compliance for businesses and individuals."
    },
    {
      q: "Can you help with corporate structuring?",
      a: "Absolutely. We help design and optimize corporate structures for maximum operational and financial efficiency."
    },
    {
      q: "Do you work with startups and small businesses?",
      a: "Yes. Our services are fully scalable and designed to support startups as well as established enterprises."
    },
  ];

  return (
    <div className="space-y-6">
      {faqList.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-300 pb-4"
        >
          {/* Question Row */}
          <button
            onClick={() => setActive(active === index ? null : index)}
            className="flex items-center justify-between w-full text-left"
          >
            <span className="text-lg font-medium">{item.q}</span>

            {active === index ? (
              <FaMinus className="text-[#93c67c] text-xl" />
            ) : (
              <FaPlus className="text-[#93c67c] text-xl" />
            )}
          </button>

          {/* Answer */}
          <div
            className={`
              overflow-hidden transition-all duration-300 
              ${active === index ? "max-h-40 mt-3" : "max-h-0"}
            `}
          >
            <p className="text-gray-600 leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ========== TESTIMONIAL SLIDER COMPONENT ========== */
function TestimonialSlider() {
  const testimonials = [
    {
      name: "John Carter",
      role: "Business Owner",
      review:
        "Outstanding service. Their advisory helped us restructure operations and improve profitability.",
    },
    {
      name: "Amelia Wilson",
      role: "Startup Founder",
      review:
        "Professional and reliable team. The financial reporting support is exceptional.",
    },
    {
      name: "Michael Lee",
      role: "CEO, Tech Sphere",
      review:
        "Their tax planning saved us a significant amount. Highly recommended for any corporation.",
    },
    {
      name: "Sarah Thompson",
      role: "Operations Director",
      review:
        "Extremely detailed and strategic guidance. They truly understand long-term business needs.",
    },
    {
      name: "David Brown",
      role: "Entrepreneur",
      review:
        "Excellent service with attention to detail. Highly recommended for startups.",
    },
    {
      name: "Emily Clark",
      role: "Finance Manager",
      review:
        "Professional and timely advice. Their reporting and analysis are top-notch.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total slides
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Calculate visible testimonials for current slide
  const startIndex = currentIndex * itemsPerView;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerView);

  // Ensure we have exactly itemsPerView items (pad with empty if needed)
  while (visibleTestimonials.length < itemsPerView) {
    visibleTestimonials.push({
      name: "",
      role: "",
      review: "",
      isEmpty: true
    });
  }

  return (
    <div className="relative px-4 md:px-0">
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {visibleTestimonials.map((item, idx) => (
          !item.isEmpty ? (
            <div
              key={`${startIndex + idx}`}
              className="group p-8 rounded-xl border border-gray-200 shadow-sm 
                transition-all duration-300 bg-white hover:-translate-y-2 hover:shadow-xl
                flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-gray-600">"</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                "{item.review}"
              </p>

              {/* Client Info */}
              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            </div>
          ) : (
            <div key={`empty-${idx}`} className="hidden lg:block"></div>
          )
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="
            w-12 h-12 bg-[#93c67c] rounded-full flex items-center justify-center 
            text-white text-lg hover:bg-[#83c266] transition-colors duration-300
            shadow-md hover:shadow-lg active:scale-95
          "
          aria-label="Previous testimonials"
        >
          <FaChevronLeft />
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-3">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${currentIndex === idx ? 'bg-[#93c67c] scale-125' : 'bg-gray-300 hover:bg-gray-400'}
              `}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="
            w-12 h-12 bg-[#93c67c] rounded-full flex items-center justify-center 
            text-white text-lg hover:bg-[#83c266] transition-colors duration-300
            shadow-md hover:shadow-lg active:scale-95
          "
          aria-label="Next testimonials"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Slide Counter (Optional) */}
      <div className="text-center mt-6 text-gray-500 text-sm">
        <span className="font-medium">{currentIndex + 1}</span> / <span>{totalSlides}</span>
      </div>
    </div>
  );
}