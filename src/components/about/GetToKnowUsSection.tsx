"use client";
import { motion } from 'framer-motion';

const GetToKnowUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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

  const contentBlocks = [
    {
      title: "Our Foundation & Expertise",
      text: "Our company was established by a team of highly experienced professionals who have excelled in the distribution business for years, deeply understanding the core values of being a true distributor. We have built a dedicated team to provide comprehensive support, including solution consultation and after-sales service, ensuring that our customers receive the best possible experience. Our goal is to work closely with our resellers to deliver exceptional products with friendly, reliable service to end clients.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
        </svg>
      ),
      gradient: "from-purple-500 to-purple-700",
      highlights: ["Experienced Team", "Comprehensive Support", "Partner-Focused"]
    },
    {
      title: "Our Principles & Vision",
      text: "Committed to unquestionable business principles, we strictly conduct our transactions through resellers and never engage directly with end customers. We firmly believe in the partner ecosystem and strive to be a role model in the country and the region. Our shareholders comprise individuals with a strong financial background who share a unified vision— building a long-lasting organization that generates sustainable benefits for all stakeholders.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      gradient: "from-blue-500 to-blue-700",
      highlights: ["Business Integrity", "Partner Ecosystem", "Sustainable Growth"]
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 0.8, 1],
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          scale: { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-teal-500/10 to-indigo-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6"
          >
            <motion.span 
              className="text-purple-300 font-semibold tracking-wider uppercase text-sm"
              whileHover={{ 
                scale: 1.1,
                letterSpacing: "0.2em",
                transition: { duration: 0.3 }
              }}
            >
              Our Story
            </motion.span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Get to Know Us
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
          </motion.p>
        </motion.div>

        {/* Content Blocks */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {contentBlocks.map((block, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-10 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 shadow-xl">
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${block.gradient} mb-6 shadow-lg`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                >
                  <div className="text-white">
                    {block.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {block.title}
                </h3>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed text-base mb-6">
                  {block.text}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {block.highlights.map((highlight, idx) => (
                    <motion.span
                      key={idx}
                      className={`px-3 py-1.5 bg-gradient-to-r ${block.gradient} bg-opacity-20 border border-white/10 rounded-full text-xs text-white font-medium`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-full h-full rounded-bl-full bg-gradient-to-br ${block.gradient} opacity-10`}></div>
                </motion.div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1), transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 80,
            damping: 15,
            delay: 0.5
          }}
          className="text-center mt-20"
        >
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Ready to partner with us?
            </p>
            <motion.div 
              className="flex items-center justify-center gap-4 text-purple-300"
              animate={{ 
                x: [0, 10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-lg">Let&apos;s build something great together</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetToKnowUsSection;
