"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full ">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-12">
        <div>
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full font-semibold"></span>
            For Schools · Grades 6–8
          </div>

          <h1 className="text-4xl  font-bold leading-tight text-[#1f2a44]">
            Students score well in exams.{" "}
            <span className="text-blue-800">But struggle</span>{" "}
            <span className="text-teal-500">with real life.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-500 max-w-xl">
            12-week hands-on programs in financial literacy, digital safety &
            entrepreneurship — aligned with NEP 2020.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-800 transition">
              Book a Free Demo →
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition">
              ▶ View Programs
            </button>
          </div>

          <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-[#24C8B2]">✔</span> NEP 2020 Aligned
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#24C8B2]">✔</span> 50+ Schools Trust Us
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#24C8B2]">✔</span> 10,000+ Students
              Impacted
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src="/heroimage.jpeg"
              alt="students"
              width={500}
              height={500}
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute top-6 right-6 bg-white shadow-md rounded-xl px-4 py-3">
            <p className="text-orange-500 font-bold text-lg">Money Magic Box</p>
            <p className="text-gray-500 text-xs">Physical kit included</p>
          </div>

          <div className="absolute -bottom-4 left-6 bg-white shadow-md rounded-xl px-4 py-3">
            <p className="font-semibold text-gray-800">12 Weeks</p>
            <p className="text-gray-500 text-sm">Structured Curriculum</p>
          </div>
        </div>
      </div>
    </section>
  );
}
