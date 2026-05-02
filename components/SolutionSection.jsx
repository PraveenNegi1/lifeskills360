import Image from "next/image";

export default function SolutionSection() {
  return (
    <section className="w-full bg-[#f4f7f8] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <span className="inline-block bg-[#d8ebe7] text-[#1e7f74] px-4 py-1 rounded-full text-sm font-medium mb-6">
            Our Solution
          </span>

          <h2 className="text-4xl font-bold text-[#1c2b4a] leading-tight mb-6">
            We turn learning into real{" "}
            <span className="text-[#2fa7a0]">-life practice</span>
          </h2>

          <ul className="space-y-4 mb-8">
            {[
              "12-week structured curriculum",
              "Hands-on activities & simulations",
              "Physical 'Money Magic Box' kit",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-lg text-gray-700">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#d8ebe7]">
                  <span className="w-2.5 h-2.5 bg-[#2fa7a0] rounded-full"></span>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <button className="bg-[#2b4a9b] hover:bg-[#243e85] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition">
            See It In Action
            <span className="text-lg">→</span>
          </button>
        </div>

        <div className="relative">
          <div className="bg-[#cfe3df] p-4 rounded-3xl">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/student 1.png" 
                alt="Learning Illustration"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}