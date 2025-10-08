"use client";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#743f77] to-[#633567] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">FranklinOne</h3>
            <p className="text-white mb-4">
              Our company was established by a team of highly experienced professionals who have excelled in the distribution business for years, deeply understand the core values of being a true distributor
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white hover:text-gray-200 transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-gray-200 transition-all duration-300">
                  About FranklinOne
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-white hover:text-gray-200 transition-all duration-300">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-white hover:text-gray-200 transition-all duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="text-white hover:text-gray-200 transition-all duration-300">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/vendors" className="text-white hover:text-gray-200 transition-all duration-300">
                  Vendors
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-200 transition-all duration-300">
                  Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-200 transition-all duration-300">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>No. 37, Street 2011, Sen Sok, Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@franklinone.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.34 1.36a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.36.34A2 2 0 0121 16.72V19a2 2 0 01-2 2h-.01C7.61 21 3 16.39 3 10.01V9a2 2 0 012-2z" />
                </svg>
                <a href="tel:+85569308840" className="hover:underline">+855 89 308 840</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#9e5fa4] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white">© 2025 FranklinOne. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-white">
              <li>
                <Link href="#" className="hover:text-gray-200 transition-all duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 transition-all duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 transition-all duration-300">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;