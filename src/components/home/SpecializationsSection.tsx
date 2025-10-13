"use client";
import { motion } from 'framer-motion';

const SpecializationsSection = () => {
  const specializations = [
    {
      title: "Device and User Protection",
      icon: "🔒"
    },
    {
      title: "Infrastructure Protection",
      icon: "🏢"
    },
    {
      title: "Information Protection",
      icon: "📁"
    },
    {
      title: "Risk Assessment and Compliance",
      icon: "✅"
    },
    {
      title: "Network and Connectivity",
      icon: "🌐"
    },
    {
      title: "System Management",
      icon: "⚙️"
    },
    {
      title: "Physical Security",
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Technical grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `
              linear-gradient(rgba(116, 63, 119, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(116, 63, 119, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Floating tech elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {i % 3 === 0 && <div className="w-3 h-3 border border-[var(--color-primary)] opacity-20 transform rotate-45" />}
            {i % 3 === 1 && <div className="w-2 h-6 bg-[var(--color-primary)] opacity-15 rounded-full" />}
            {i % 3 === 2 && <div className="w-4 h-4 border-2 border-[var(--color-primary)] opacity-10 rounded-full" />}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)]/20 backdrop-blur-sm rounded-full border border-[var(--color-primary)]/30 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3 animate-pulse"></div>
            <span className="text-white text-sm font-medium">TECHNICAL EXPERTISE</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent">
              We Specialise In
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Advanced technologies that secure, connect, and transform modern enterprises
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-[var(--color-primary)]/20 via-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-[var(--color-primary)]/20 group-hover:border-[var(--color-primary)]/40 transition-all duration-500 h-full relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[180px]">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[var(--color-primary)] opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[var(--color-primary)] opacity-60"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {spec.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {spec.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection; 