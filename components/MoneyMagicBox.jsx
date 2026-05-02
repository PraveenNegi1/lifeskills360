import Image from "next/image";

export default function MoneyMagicBox() {
  return (
    <section className="w-full bg-[#f4f7f8e8] py-20 px-6 md:px-12 lg:px-20 text-center">
      <div className="max-w-5xl mx-auto">
        
        {/* Badge */}
        <span className="inline-block bg-[#fdebd2] text-[#f59e0b] px-5 py-2 rounded-full text-sm font-medium mb-6">
          ✨ Our Differentiator
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c2b4a] mb-4">
          The Money Magic Box
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-lg mb-12">
          Students don't just learn — they practice using real-life simulations.
        </p>

        {/* Image Card */}
        <div className="relative flex justify-center">
          
          {/* Outer soft layer */}
          <div className="absolute  h-full bg-[#e7dfd3] rounded-3xl top-4"></div>

          {/* Main Card */}
          <div className="relative bg-white rounded-3xl shadow-lg  ">
            
            <Image
              src="/monymagicbox.jpeg" 
              alt="Money Magic Box"
              width={550}
              height={500}
              className="mx-auto object-contain"
              priority
            />

            {/* Bottom Badge */}
            <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2">
              <span className="bg-[#f59e0b] text-white px-6 py-2 rounded-full text-sm font-medium shadow-md">
                ₹ Included with every program
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}