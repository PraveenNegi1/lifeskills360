export default function OutcomesSection() {
  const data = [
    {
      icon: "💰",
      title: "Make smarter money decisions",
      desc: "Confident with budgeting, saving, and spending choices.",
    },
    {
      icon: "🛡️",
      title: "Stay safe online",
      desc: "Recognise scams, protect privacy, and use tech responsibly.",
    },
    {
      icon: "🚀",
      title: "Think independently",
      desc: "Solve real problems with creativity and confidence.",
    },
  ];

  return (
    <section className="w-full bg-[#f4f7f8] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block bg-red-100 text-red-500 px-5 py-2 rounded-full text-sm font-medium mb-6">
          The Problem
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-[#1c2b4a] mb-16">
          What students actually gain
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#d8ebe7] text-2xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#1c2b4a] mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
