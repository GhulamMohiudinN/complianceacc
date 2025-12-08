import Link from "next/link";

const FeaturedProducts = () => {
  const cards = [
    {
      id: 1,
      title: "Tax Compliance & Strategy",
      description:
        "Comprehensive tax planning and compliance solutions tailored to optimize your financial position while ensuring full regulatory adherence.",
      icon: "📊",
    },
    {
      id: 2,
      title: "Financial Auditing Excellence",
      description:
        "Rigorous auditing services that provide transparent insights into your financial operations, enhancing credibility and stakeholder confidence.",
      icon: "🔍",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Header and Description */}
          <div>
            <div className="align-middle">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold sm:text-3xl md:text-5xl  text-gray-900 leading-tight">
                    Featured Products
                  </h2>
                  {/* <div className="w-32 h-1 bg-gradient-to-r from-gray-900 to-gray-300 mt-4" /> */}
                </div>

                <p className="text-lg md:text-xl text-gray-600 italic font-light leading-relaxed pt-4">
                  Delve into a world of precision and insight at our accounting
                  and auditing emporium, where unparalleled expertise meets
                  meticulous attention to detail. Our distinguished services
                  blend modern innovation with time-honored practices to offer a
                  distinguished caliber of financial clarity.
                </p>
              </div>
            </div>
          </div>

          <div className="">
            {/* Cards Grid - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="group bg-white rounded-xl p-6 shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold">{card.id}</span>
                    </div>
                    <h3 className="text-xl pb-10 font-light text-gray-900 group-hover:text-gray-800 transition-colors duration-200">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-8">
              <Link href="/services" className="inline-block">
                <button className="relative overflow-hidden group rounded-full border border-gray-700 px-8 py-4">
                  {/* Text */}
                  <span className="relative z-10 text-lg font-light text-black hover:cursor-pointer hover:text-white transition-colors duration-300">
                    Explore All Services
                  </span>

                  {/* Water Fill Layer */}
                  <span
                    className="
        absolute inset-0 
        bg-gray-900 
        translate-y-full 
        group-hover:translate-y-0 
        transition-transform 
        duration-500 
        ease-out
      "
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
