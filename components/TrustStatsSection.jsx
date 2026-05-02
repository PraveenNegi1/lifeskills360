export default function TrustStatsSection() {
  const stats = [
    {
      icon: "🏫",
      value: "50+",
      label: "Schools",
    },
    {
      icon: "👥",
      value: "10,000+",
      label: "Students Impacted",
    },
    {
      icon: "🎖️",
      value: "NEP 2020",
      label: "Aligned Curriculum",
    },
  ];

  return (
    <section className="w-full bg-white border-y border-gray-100 py-16 px-6 md:px-12 lg:px-20 text-center">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Text */}
        <p className="text-[14px] tracking-widest text-gray-500 font-semibold uppercase mb-12">
          Trusted by schools across India
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#e3e7f0] text-2xl mb-4">
                {item.icon}
              </div>

              {/* Value */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#1c2b4a]">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-gray-600 mt-2">
                {item.label}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}