export default function DemoCTASection() {
  return (
    <section id="contact" className="w-full bg-[#f4f7f8] py-20 px-6 md:px-12 lg:px-14">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Container */}
        <div className="relative bg-[#2d4592] rounded-3xl px-8 md:px-16 py-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Decorative Circles */}
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#3b57a6] rounded-full opacity-40"></div>
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#3b57a6] rounded-full opacity-40"></div>

          {/* LEFT CONTENT */}
          <div className="text-white max-w-xl relative z-10">
            
            {/* Badge */}
            <span className="inline-block bg-[#3b57a6] text-white px-4 py-1 rounded-full text-sm mb-6">
              ✨ Limited slots for 2026–27
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Bring life skills into your school in just 12 weeks
            </h2>

            {/* Subtext */}
            <p className="text-blue-100 text-lg mb-6">
              Free demo. No commitment. See it in action.
            </p>

            {/* Points */}
            <ul className="space-y-3 text-blue-100">
              {[
                "Free demo — no commitment",
                "Setup in under 1 week",
                "Dedicated success manager",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#2dd4bf] text-[#2d4592] text-xs font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative z-10">
            
            <h3 className="text-xl font-semibold text-[#1c2b4a] mb-2 text-center">
              Book a Free Demo
            </h3>
            <p className="text-gray-500 text-sm text-center mb-6">
              Fill in your details and we'll get in touch
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2d4592]"
              />
              <input
                type="text"
                placeholder="School Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2d4592]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2d4592]"
              />

              <button
                type="submit"
                className="w-full bg-[#2d4592] hover:bg-[#243a7a] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition shadow-md"
              >
                Book a Demo
                <span>→</span>
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              No spam. No commitment. Just a quick walkthrough.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}