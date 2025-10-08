"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const VisionMissionSection = () => {
  // Animation variants for better organization
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

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



  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden py-20">
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `
              linear-gradient(rgba(116, 63, 119, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(116, 63, 119, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              backgroundColor: '#743f77',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1.2, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)]/20 backdrop-blur-sm rounded-full border border-[var(--color-primary)]/30 mb-8"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(116, 63, 119, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
            />
            <span className="text-white text-sm font-medium tracking-wider">FOUNDATION</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            <motion.span 
              className="bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Our Vision & Mission
            </motion.span>
          </motion.h2>

          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-white mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        {/* Main Content - Enhanced Layout */}
        <div className="space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Vision Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Enhanced number and line */}
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 mr-4"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)",
                    borderColor: "rgba(147, 51, 234, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg 
                    className="w-6 h-6 text-purple-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </motion.svg>
                </motion.div>
                <motion.div 
                  className="h-px bg-gradient-to-r from-purple-500 to-transparent flex-1"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{ originX: 0 }}
                />
              </motion.div>

              {/* Vision Title */}
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                &quot;Truly partner-centric company.&quot;
              </motion.h3>

              {/* Vision Description */}
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                We envision a future where partnerships transcend traditional boundaries, 
                creating ecosystems of mutual growth and innovation.
              </motion.p>
            </motion.div>

            {/* Vision Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-80 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Vision Image */}
                    <motion.div 
                      className="w-full h-full z-10 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-900/10 to-transparent z-10" />
                        <Image
                          src="/images/visionnew.png"
                          alt="Team collaboration representing our vision"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.div>

                    {/* Enhanced animated rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-32 h-32 border-2 border-purple-500/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        whileHover={{ 
                          borderColor: "rgba(147, 51, 234, 0.6)",
                          boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
                        }}
                      />
                      <motion.div
                        className="absolute w-24 h-24 border border-purple-500/20 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        whileHover={{ 
                          borderColor: "rgba(147, 51, 234, 0.4)",
                          scale: 1.1
                        }}
                      />
                    </div>

                    {/* Enhanced corner accents */}
                    <motion.div 
                      className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-purple-500 opacity-60"
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    />
                    <motion.div 
                      className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-purple-500 opacity-60"
                      initial={{ scale: 0, rotate: 45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    />
                    <motion.div 
                      className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-purple-500 opacity-60"
                      initial={{ scale: 0, rotate: 45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    />
                    <motion.div 
                      className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-purple-500 opacity-60"
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* Mission Section - Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission Image Section (Left on desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:order-1"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-80 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Mission Image */}
                    <motion.div 
                      className="w-full h-full z-10 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/10 to-transparent z-10" />
                        <Image
                          src="/images/missionnew.png"
                          alt="Cybersecurity solutions representing our mission"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.div>

                    {/* Enhanced animated rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-32 h-32 border-2 border-blue-500/30 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        whileHover={{ 
                          borderColor: "rgba(59, 130, 246, 0.6)",
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                        }}
                      />
                      <motion.div
                        className="absolute w-24 h-24 border border-blue-500/20 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        whileHover={{ 
                          borderColor: "rgba(59, 130, 246, 0.4)",
                          scale: 1.1
                        }}
                      />
                    </div>

                    {/* Enhanced corner accents */}
                    <motion.div 
                      className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-blue-500 opacity-60"
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    />
                    <motion.div 
                      className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-blue-500 opacity-60"
                      initial={{ scale: 0, rotate: 45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    />
                    <motion.div 
                      className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-blue-500 opacity-60"
                      initial={{ scale: 0, rotate: 45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    />
                    <motion.div 
                      className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-blue-500 opacity-60"
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Mission Content (Right on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative lg:order-2"
            >
              {/* Enhanced number and line */}
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mr-4"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                    borderColor: "rgba(59, 130, 246, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg 
                    className="w-6 h-6 text-blue-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                  >
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </motion.svg>
                </motion.div>
                <motion.div 
                  className="h-px bg-gradient-to-r from-blue-500 to-transparent flex-1"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{ originX: 0 }}
                />
              </motion.div>

              {/* Mission Title */}
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                &quot;Be the extended hand of the manufacturer serving wisely to each-and-every customer.&quot;
              </motion.h3>

              {/* Mission Description */}
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                We bridge gaps, connect possibilities, and deliver wisdom-driven solutions 
                that serve every customer with precision and care.
              </motion.p>
            </motion.div>
          </div>
        </div>
 
      </div>
    </section>
  );
};

export default VisionMissionSection;