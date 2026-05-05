export default function ForSchoolsSection() {
  const features = [
    {
      icon: "🔌",
      title: "Plug-and-play curriculum",
      desc: "Drop-in lesson plans that fit any school timetable.",
    },
    {
      icon: "💙",
      title: "No extra burden on teachers",
      desc: "Ready-to-deliver content with zero prep required.",
    },
    {
      icon: "🎓",
      title: "Training & resources included",
      desc: "Full onboarding, slides, and ongoing support.",
    },
  ];

  return (
    <section
      id="schools"
      className="w-full bg-[#f4f7f8] py-20 px-6 md:px-12 lg:px-20 text-center"
    >
      <div className="max-w-7xl mx-auto">
        <span className="inline-block bg-[#e3e7f0] text-[#2b4a9b] px-5 py-2 rounded-full text-sm font-medium mb-6">
          For Schools
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1c2b4a] mb-16">
          Built for schools. Easy to implement.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-[#e3e7f0] text-2xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#1c2b4a] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <button className="bg-[#2b4a9b] hover:bg-[#243e85] text-white px-8 py-4 rounded-xl font-medium text-lg flex items-center gap-2 mx-auto transition shadow-md">
          Partner With Us
          <span>→</span>
        </button>
      </div>
    </section>
  );
}
