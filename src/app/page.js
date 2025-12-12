import Header from "@/components/Header";
import homeHero from "@/assists/homeHero.jpg";
import homeThree from "@/assists/homeThree.jpg";
import homeFour from "@/assists/homeFour.jpg";
import Image from "next/image";
import FeaturedProducts from "@/components/FeaturedProducts";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
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
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Text */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight tracking-wide">
              <span className="block mb-2">
                Exquisite Accounting Solutions for
              </span>
              {/* <span className="block mb-4">Accounting Solutions</span> */}
              <span className="block"> Discerning Professionals</span>
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

      <FeaturedProducts />

      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={homeThree}
            alt="Professional accounting workspace"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Text */}
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold  text-white leading-tight tracking-wide">
              <span className="block mb-2">Reserve your complimentary</span>
              <span className="block">Consultion</span>
            </h1>
            <p className="text-lg md:text-xl text-white italic font-light leading-relaxed pt-4">
              Step into a world where precision meet dedication; book your
              oppointment today to experience the pinnacle of accounting and
              auditing experties. Discover a tailored service designed to
              transcend expectations, ensuring your financial vision is both
              safeguarded and elevated.
            </p>

           <div className="pt-8">
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=mohiudin7174@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <button
      className="
        relative bg-white hover:cursor-pointer overflow-hidden group 
        rounded-full border border-gray-700 hover:border-[#93c67c]
        px-16 py-4 
      "
    >
      {/* Normal Text */}
      <span
        className="
          relative z-10 block text-lg font-light text-black 
          transition-all duration-500
          group-hover:translate-y-[-100%] group-hover:opacity-0
        "
      >
        Book Now
      </span>

      {/* Hover Text */}
      <span
        className="
          absolute inset-0 flex items-center justify-center
          text-lg font-light text-white
          translate-y-full group-hover:translate-y-0 
          transition-transform duration-500 ease-out
          z-10
        "
      >
        Book Now
      </span>

      {/* Background Fill */}
      <span
        className="
          absolute inset-0 bg-[#93c67c]
          translate-y-full group-hover:translate-y-0
          transition-transform duration-500 ease-out
        "
      />
    </button>
  </a>
</div>

          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side - Image */}
            <div className="relative h-full min-h-[400px] md:min-h-[500px]  overflow-hidden">
              <Image
                src={homeFour}
                alt="Professional accounting services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Optional overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold   leading-tight tracking-wide">
                  <span className="block mb-2">Our Company ethos</span>
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

              {/* Button */}
              <div className="pt-8 hover:cursor-pointer">
  <Link href="/about" className="inline-block">
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
        Learn More
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
        Learn More
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
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
