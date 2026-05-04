import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="bg-[#1f3556] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1 */}
        <div>
          <h2 className="text-white text-2xl font-semibold">
            LifeSkills<span className="text-teal-400">360</span>.in
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            India's hands-on life skills program for school students — building
            financial literacy, digital safety, and entrepreneurial thinking
            from Grade 6.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaLinkedinIn, FaXTwitter, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-[#2a4368] hover:bg-[#35507a] transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Programs</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">
              Financial Literacy
            </li>
            <li className="hover:text-white cursor-pointer">Cybersecurity</li>
            <li className="hover:text-white cursor-pointer">
              AI & Digital Literacy
            </li>
            <li className="hover:text-white cursor-pointer">
              Entrepreneurship
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">How It Works</li>
            <li className="hover:text-white cursor-pointer">For Schools</li>
            <li className="hover:text-white cursor-pointer">Money Magic Box</li>
            <li className="hover:text-white cursor-pointer">Book a Demo</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <HiOutlineEnvelope size={18} />
              hello@lifeskills360.in
            </li>
            <li className="flex items-center gap-3">
              <HiOutlinePhone size={18} />
              +91 98765 43210
            </li>
            <li className="flex items-start gap-3">
              <HiOutlineMapPin size={18} className="mt-1" />
              Akashdeep, Colonel's Enclave, Roorkee
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2e4a73]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2026 LifeSkills360.in. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
