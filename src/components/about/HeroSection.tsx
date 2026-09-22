"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `
              linear-gradient(rgba(116, 63, 119, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(116, 63, 119, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[var(--color-primary)] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-center min-h-screen py-20">
          {/* Centered Content */}
          <motion.div
            className="text-center max-w-5xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)]/20 backdrop-blur-sm rounded-full border border-[var(--color-primary)]/30 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full mr-3 animate-pulse"></div>
              <span className="text-white text-sm font-medium tracking-wider">CYBERSECURITY PIONEERS</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="bg-gradient-to-r from-white via-[var(--color-primary)] to-[#f15a22] bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                
                Built on Purpose
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Discover our journey from a visionary startup to regional cybersecurity leadership, our mission to protect digital futures, and the professional team driving innovation in the ever-evolving threat landscape.
              </p>
            </motion.div>

            {/* Call-to-Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="#company-story"
                className="group bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22]  text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10">Our Story</span>
                <svg className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>

              <Link
                href="/contact-us"
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center"
              >
                <span>Partner With Us</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Decorative elements */}

          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-white transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Discover More</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 