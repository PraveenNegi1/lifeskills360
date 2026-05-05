"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#091853] text-gray-300 px-6 md:px-16 py-14 rounded-t-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm">
              Courses
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses/financial-literacy">
                  Financial Literacy
                </Link>
              </li>
              <li>
                <Link href="/courses/cybersecurity">Cybersecurity</Link>
              </li>
              <li>
                <Link href="/courses/digital-literacy">Digital Literacy</Link>
              </li>
              <li>
                <Link href="/courses/entrepreneur-business">
                  Entrepreneur & Business
                </Link>
              </li>
              <li>
                <Link href="/courses/ai-fundamentals">AI Fundamentals</Link>
              </li>
              <li>
                <Link href="/courses" className="text-white font-medium">
                  View All Courses →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm">
              Grade Bands
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/grades/sprouts">Sprouts — Grade 4–5</Link>
              </li>
              <li>
                <Link href="/grades/builders">Builders — Grade 6–8</Link>
              </li>
              <li>
                <Link href="/grades/creators">Creators — Grade 9–10</Link>
              </li>
              <li>
                <Link href="/grades/pioneers">Pioneers — Grade 11–12</Link>
              </li>
              <li>
                <Link href="/skills-passport">Skills Passport</Link>
              </li>
              <li>
                <Link href="/leaderboard">Leaderboard & Badges</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm">
              For Schools (B2B)
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/schools/overview">School Programme Overview</Link>
              </li>
              <li>
                <Link href="/schools/standard-plan">Standard Plan</Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/schools/premium-plan">Premium Plan</Link>
                <span className="bg-white text-black text-xs px-2 py-0.5 rounded">
                  Popular
                </span>
              </li>
              <li>
                <Link href="/schools/nep-2020">NEP 2020 Alignment</Link>
              </li>
              <li>
                <Link href="/demo">Book a Demo</Link>
              </li>
              <li>
                <Link href="/partner">Partner with Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm">
              For Students & Parents (B2C)
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/enrol">Enrol a Child</Link>
              </li>
              <li>
                <Link href="/courses/single">Single Course</Link>
              </li>
              <li>
                <Link href="/courses/bundle">3-Course Bundle</Link>
              </li>
              <li>
                <Link href="/plans/annual">All-Access Annual Plan</Link>
              </li>
              <li>
                <Link href="/products/money-magic-kit">Money Magic Kit</Link>
              </li>
              <li>
                <Link href="/dashboard">Parent Dashboard</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/sample">Free Sample Module</Link>
              </li>
              <li>
                <Link href="/blog">Blog — Money for Kids</Link>
              </li>
              <li>
                <Link href="/reports">Impact Reports</Link>
              </li>
              <li>
                <Link href="/faqs">FAQs</Link>
              </li>
              <li>
                <Link href="/brochure">Download Brochure</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/experts">Our Experts</Link>
              </li>
              <li>
                <Link href="/stories">School Success Stories</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 LifeSkills360 Platform. Building future-ready kids.</p>

          <div className="flex gap-6 flex-wrap justify-center">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/refund">Refund Policy</Link>
            <Link href="/child-safety">Child Safety Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
