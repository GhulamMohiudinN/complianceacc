"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from '@/components/Header';
import about from '@/assists/about.jpg';
import Footer from '@/components/Footer';
import homeHero from "@/assists/homeHero.jpg";
import { FaCertificate, FaUserCheck, FaDollarSign } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";

const page = () => {

  const stats = [
    { id: 1, value: 7, suffix: "+", label: "Years of Experience" },
    { id: 2, value: 900, suffix: "+", label: "Projects Done" },
    { id: 3, value: 100, suffix: "%", label: "Clients Satisfaction" },
  ];
    const features = [
    {
      id: 1,
      title: "Extensive Experience",
      desc: "Working for clientele across multiple industries, we have gained exhaustive experience in Audit, Accounting, Bookkeeping, and CFO services.",
      icon: <FaCertificate className="text-white text-2xl" />,
    },
    {
      id: 2,
      title: "Qualified Professionals",
      desc: "Our team includes qualified professionals from top auditing firms with outstanding service records and exceptional auditing skills.",
      icon: <FaUserCheck className="text-white text-2xl" />,
    },
    {
      id: 3,
      title: "Cost Effective Packages",
      desc: "Choose from a wide array of cost-effective service packages. We tailor each offering according to your specific requirements.",
      icon: <FaDollarSign className="text-white text-2xl" />,
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16);

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(start);
          return updated;
        });
      }, 16);
    });
  }, []);


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
                  <h1 className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight tracking-wide">
                    <span className="block mb-2">
                      Compliance Accounting Solutions and Management Consultants
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

    </div>
  </div>
</section>

<section className="relative py-20 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={homeHero}
          alt="Background"
          fill
          className="object-cover object-center blur-sm brightness-[0.45]"
        />
      </div>

      {/* Overlay for dark transparency */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="
                border border-[#93c67c] hover:cursor-pointer p-10 rounded-xl 
                flex flex-col items-center justify-center
                text-white text-center backdrop-blur-sm
                bg-white/5 transition-all duration-300
                hover:bg-white/10 hover:scale-[1.03]
              "
            >
              <h2 className="text-5xl font-bold tracking-wide">
                {counts[index]}
                {stat.suffix}
              </h2>
              <p className="text-lg mt-2 tracking-wide">{stat.label}</p>
            </div>
          ))}

        </div>
      </div>
    </section>

<section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Why Choose Us
          </h2>

          <div className="flex justify-center items-center gap-3 mt-3">
            <span className="w-12 h-0.5 bg-gray-400" />
            <span className="text-[#93c67c] text-xl"><FaChartSimple /></span>
            <span className="w-12 h-0.5 bg-gray-400" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white hover:border-gray-200
  hover:-translate-y-1 hover:shadow-xl hover:cursor-pointer transition-all duration-300 shadow-lg rounded-xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-start">
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-[#93c67c] flex items-center justify-center mb-5">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <Footer/>
    </>
  )
}

export default page;