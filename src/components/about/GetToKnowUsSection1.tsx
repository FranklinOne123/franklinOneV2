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

  const contentBlock = {
    title: "Get to Know Us",
    text: [
      "Our company was established by a team of highly experienced professionals who have excelled in the distribution business for years, deeply understanding the core values of being a true distributor.",
      "We have built a dedicated team to provide comprehensive support, including solution consultation and after-sales service, ensuring that our customers receive the best possible experience. Our goal is to work closely with our resellers to deliver exceptional products with friendly, reliable service to end clients.",
      "Committed to unquestionable business principles, we strictly conduct our transactions through resellers and never engage directly with end customers. We firmly believe in the partner ecosystem and strive to be a role model in the country and the region.",
      "Our shareholders comprise individuals with a strong financial background who share a unified vision— building a long-lasting organization that generates sustainable benefits for all stakeholders."
    ].join('\n\n'),
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
    gradient: "from-purple-500 to-purple-700",
    highlights: ["Experienced Team", "Comprehensive Support", "Partner-Focused", "Business Integrity", "Partner Ecosystem", "Sustainable Growth"]
  };

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

        {/* Content Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{
              scale: 1.03,
              y: -12,
              rotateY: 2,
              transition: { type: "spring", stiffness: 400, damping: 15 }
            }}
            className="group relative"
          >
            {/* Highly Eye-Catching Animated Border & Text Effect */}

            {/* Rotating Gradient Border Animation */}
            <motion.div
              className="absolute -inset-0.5 rounded-3xl pointer-events-none"
              animate={{
                background: [
                  'conic-gradient(from 0deg, #a855f7, #a855f7, #a855f7, #a855f7)',

                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                opacity: 0.6,
                filter: 'blur(1px)'
              }}
            />


            {/* Floating Animated Particles Around the Card */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full pointer-events-none hidden md:block"
                style={{
                  left: `${Math.cos((i / 8) * Math.PI * 2) * 200 + 50}%`,
                  top: `${Math.sin((i / 8) * Math.PI * 2) * 150 + 50}%`,
                  background: i % 2 === 0 ? 'rgba(236, 72, 153, 0.6)' : 'rgba(245, 90, 34, 0.6)'
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.2, 0.8],
                  x: [0, Math.cos((i / 8) * Math.PI * 2) * 30, 0],
                  y: [0, Math.sin((i / 8) * Math.PI * 2) * 30, 0]
                }}
                transition={{
                  duration: 3 + (i % 3) * 0.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeInOut'
                }}
                aria-hidden="true"
              />
            ))}

            {/* Shimmer Effect Overlay */}

            {/* Glassmorphism Card with Enhanced Styling */}
            <div className="relative h-full bg-gradient-to-br from-white/10 via-purple-500/5 to-pink-500/10 backdrop-blur-xl rounded-3xl p-12 border border-gradient-to-r border-purple-500/20 hover:border-purple-400/40 transition-all duration-700 shadow-2xl hover:shadow-purple-500/25">

              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4), rgba(99, 102, 241, 0.4), rgba(168, 85, 247, 0.4))`,
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'subtract'
                }}
              />



              {/* Stylized Content with Better Typography */}
              <div className="text-gray-200 leading-relaxed text-lg mb-10 space-y-8">
                {contentBlock.text.split('\n\n').map((paragraph, idx) => (
                  <motion.div
                    key={idx}
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                  >
                    {/* Animated Number Badge */}
                    <motion.div
                      className="absolute -left-4 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      <span className="text-sm">{idx + 1}</span>
                    </motion.div>

                    {/* Gradient Border with Glow */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Decorative Quote Mark */}
                    <motion.div
                      className="absolute left-12 -top-2 text-4xl text-purple-400/30 font-serif leading-none"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + 0.4 }}
                    >
                      &quot;
                    </motion.div>

                    {/* Paragraph with Enhanced Styling */}
                    <motion.p
                      className="relative pl-16 pr-4 py-4 text-gray-100 leading-loose"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Background Glow on Hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ zIndex: -1 }}
                      />

                      {/* Highlight Key Phrases */}
                      {paragraph.split(' ').map((word, wordIdx) => {
                        const keyPhrases = ['experienced', 'professionals', 'comprehensive', 'support', 'exceptional', 'business principles', 'partner ecosystem', 'sustainable', 'financial'];
                        const isKeyPhrase = keyPhrases.some(phrase => word.toLowerCase().includes(phrase.toLowerCase()));

                        return (
                          <motion.span
                            key={wordIdx}
                            className={isKeyPhrase ? "relative inline-block" : ""}
                            whileHover={isKeyPhrase ? { scale: 1.05 } : {}}
                          >
                            {isKeyPhrase ? (
                              <>
                                <span className="relative z-10 font-semibold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                                  {word}
                                </span>
                                <motion.span
                                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-full"
                                  initial={{ scaleX: 0 }}
                                  whileInView={{ scaleX: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.2 + wordIdx * 0.02, duration: 0.3 }}
                                />
                              </>
                            ) : (
                              word
                            )}{' '}
                          </motion.span>
                        );
                      })}
                    </motion.p>

                    {/* Sparkle Effect */}
                    <motion.div
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-400/0 group-hover:text-yellow-400/60 transition-all duration-500"
                      animate={{
                        rotate: [0, 180, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ✨
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Multiple Decorative Elements */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full rounded-bl-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                initial={{ scale: 0, rotate: 45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full rounded-tr-full bg-gradient-to-tl from-pink-600/20 to-purple-600/20 backdrop-blur-sm"></div>
              </motion.div>

              {/* Enhanced Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.1), transparent 70%)`
                }}
              />

              {/* Floating Particles Effect */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    opacity: [0, 0.6, 0],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
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
