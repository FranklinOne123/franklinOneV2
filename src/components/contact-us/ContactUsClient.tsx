"use client";
import { motion } from 'framer-motion';

const ContactUsClient = () => {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0a0e1a] text-white overflow-hidden">
        {/* Dark cyber background with overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[rgba(10,14,26,0.95)] via-[rgba(22,33,62,0.85)] to-[rgba(116,63,119,0.9)] z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 bg-[url('/cyber.png')] bg-cover bg-center z-0"
            style={{ opacity: 0.3 }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Animated network grid */}
        <motion.div
          className="absolute inset-0 bg-[url('/network-bg.svg')] z-10"
          style={{ opacity: 0.15 }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Animated dots */}
        <motion.div
          className="absolute inset-0 bg-[url('/dot-pattern.svg')] bg-repeat z-10"
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px', '0px 0px']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: 0.12 }}
        />

        {/* Enhanced floating security elements */}
        <div className="absolute inset-0 z-15">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[var(--color-primary)]"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
                fontSize: `${1.5 + Math.random() * 1}rem`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 360]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Enhanced Security badge */}
          <motion.div
            className="relative inline-flex items-center px-8 py-4 mb-10"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/30 to-[var(--color-primary)]/20 backdrop-blur-md rounded-full border border-[var(--color-primary)]/40 shadow-lg"></div>

            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)]/50"
              animate={{
                boxShadow: [
                  '0 0 5px rgba(116, 63, 119, 0.3)',
                  '0 0 20px rgba(116, 63, 119, 0.6)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />

            {/* Content */}
            <div className="relative flex items-center">
              <motion.div
                className="w-3 h-3 bg-[var(--color-primary)] rounded-full mr-4"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                SECURE COMMUNICATION
              </span>
            </div>
          </motion.div>

          {/* Enhanced title with gradient text */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-[var(--color-primary)] bg-clip-text text-transparent">
              Contact Us
            </span>
          </motion.h1>

          {/* Enhanced subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] mx-auto mb-8"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 128, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
              We&apos;re here to help with your security and networking needs. Reach out to our team for qualified and reliable consultation and advanced cybersecurity solutions.            </p>
          </motion.div>

          {/* Enhanced scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[var(--color-primary)]"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Form and Info Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#0a0e1a] via-[#161b2e] to-[#0a0e1a] text-white overflow-hidden">
        {/* Advanced cyber background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-[url('/cyber-grid.svg')] bg-center z-0"
            style={{ opacity: 0.1 }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating security nodes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12 border border-[var(--color-primary)]/30 rounded-full flex items-center justify-center"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
            >
              <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse"></div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Enhanced Contact Form */}


            {/* Enhanced Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between"
            >
              <div>
                <motion.h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-white via-gray-200 to-[var(--color-primary)] bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </motion.h2>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] mb-8"
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <p className="text-gray-300 mb-8 leading-relaxed">
                  If you have any questions or would like to discuss your security and networking needs, our team is here to help. You can reach us through the following secure channels:                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* General Inquiry */}
                  <motion.div
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-medium text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">General Inquiry</h3>
                      <p className="mt-1 text-gray-300">Tel: (855) 89 308 840</p>
                      <p className="mt-1 text-gray-300">Email: info@franklinone.com</p>
                      <p className="mt-1 text-sm text-gray-400">For general questions and information</p>
                    </div>
                  </motion.div>

                  {/* Sales Inquiry */}
                  <motion.div
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 text-[#f15a22] border border-[#f15a22]/30 group-hover:border-[#f15a22]/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-medium text-white group-hover:text-[#f15a22] transition-colors duration-300">Sales Inquiry</h3>
                      <p className="mt-1 text-gray-300">Tel: (855) 89 308 840</p>
                      <p className="mt-1 text-gray-300">Email: sales@franklinone.com</p>
                      <p className="mt-1 text-sm text-gray-400">For sales and business inquiries</p>
                    </div>
                  </motion.div>

                  {/* Technical Support */}
                  <motion.div
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-medium text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">Technical Support</h3>
                      <p className="mt-1 text-gray-300">Tel: (855) 89 308 840</p>
                      <p className="mt-1 text-gray-300">Email: support@franklinone.com</p>
                      <p className="mt-1 text-sm text-gray-400">For technical assistance and support</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-medium text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">Headquarters</h3>
                      <p className="mt-1 text-gray-300">
                        No. 37, Street 2011, Sen Sok<br />
                        Phnom Penh, Cambodia
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#0a0e1a] via-[#161b2e] to-[#0a0e1a] text-white overflow-hidden">
        {/* Cyber background patterns */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-[url('/cyber-grid.svg')] bg-center"
            style={{ opacity: 0.08 }}
            animate={{
              backgroundPosition: ['0px 0px', '100px 100px'],
              opacity: [0.05, 0.12, 0.05]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating security nodes for map section */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 border border-[var(--color-primary)]/20 rounded-full flex items-center justify-center"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 8 + i * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2
              }}
            >
              <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse"></div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced section header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-[var(--color-primary)] bg-clip-text text-transparent">
                Find Us Physically
              </span>
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Visit our office in-person for consultations and cybersecurity solutions demonstrations.
            </p>
          </motion.div>

          {/* Enhanced map container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Enhanced map frame with cyber styling */}
            <div className="relative bg-gradient-to-br from-[rgba(116,63,119,0.1)] via-[rgba(22,33,62,0.15)] to-[rgba(241,90,34,0.1)] rounded-2xl border border-[var(--color-primary)]/20 backdrop-blur-sm p-6 shadow-2xl">
              {/* Enhanced corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--color-primary)]/50 rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#f15a22]/50 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#f15a22]/50 rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--color-primary)]/50 rounded-br-2xl"></div>

              {/* Glowing border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-[var(--color-primary)]/30"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(116, 63, 119, 0.2)',
                    '0 0 30px rgba(116, 63, 119, 0.4)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />

              {/* Map with enhanced styling */}


              {/* Enhanced location details */}
              <motion.div
                className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="text-center group">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">Address</h3>
                  <p className="text-sm text-gray-300 mt-1">No. 37, Street 2011, Sen Sok<br />Phnom Penh, Cambodia</p>
                </div>

                <div className="text-center group">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-[#f15a22]/30 group-hover:border-[#f15a22]/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg className="w-6 h-6 text-[#f15a22]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-semibold text-white group-hover:text-[#f15a22] transition-colors duration-300">Office Hours</h3>
                  <p className="text-sm text-gray-300 mt-1">Monday – Friday: 8am – 5:30pm<br />Saturday: 8am – 12pm</p>
                </div>

                <div className="text-center group">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)]/20 to-[#f15a22]/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-[var(--color-primary)]/30 group-hover:border-[var(--color-primary)]/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </motion.div>
                  <h3 className="font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">Security</h3>
                  <p className="text-sm text-gray-300 mt-1">Secure facility with<br />24/7 surveillance</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsClient;
