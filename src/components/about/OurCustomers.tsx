"use client";
import { motion } from 'framer-motion';

const customerCategories = [
  { id: "01", title: "System Integrator" },
  { id: "02", title: "Value-Added Reseller" },
  { id: "03", title: "Corporate Reseller" },
  { id: "04", title: "Retailer" },
  { id: "05", title: "Mechanical and Engineering" },
  { id: "06", title: "Main Contractor" },
];

const OurCustomersSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden py-20">
      {/* 1. Precise Premium Grid Pattern (Inspired by image_d061e5.jpg) */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(154, 93, 157, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(154, 93, 157, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '45px 45px',
          }}
        />
        {/* Subtle radial dark overlay to fade edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0b0f19_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 inset-0 bg-gradient-to-r from-[var(--color-primary)]/30 via-[#f15a22]/20 to-[var(--color-primary)]/30 backdrop-blur-md rounded-full border border-[var(--color-primary)]/30 mb-8"
            variants={fadeInUp}
            animate={{
							boxShadow: [
								"0 0 10px rgba(241, 89, 34, 0.46)",
								"0 0 26px rgba(241, 89, 34, 0.72)"
							]
						}}
            transition={{ 
									duration: 3,
									repeat: Infinity,
									repeatType: "reverse",
									ease: "easeInOut"
						}}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative flex items-center">
								<motion.div
									className="w-2 h-2 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] rounded-full mr-4"
									animate={{
										scale: [1, 1.3, 1],
									}}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "easeInOut"
									}}
								/>
                <span className="text-white text-sm font-medium tracking-wider">MARKET SEGMENTS</span>
              </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
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
              Our Customers
            </motion.span>
          </motion.h2>

          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[#f15a22] to-[var(--color-primary)] mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            style={{ originX: 0.5 }}
          />
        </motion.div>
              
        {/* ================= CUSTOMER LIST BLOCKS ================= */}
        <motion.div 
          className="relative max-w-4xl mx-auto space-y-8 pl-4 md:pl-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Vertical Connecting Node Rail (Matching image_d061e5.jpg) */}
          <div className="absolute left-[23px] md:left-[35px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#f15a22]  to-transparent pointer-events-none" />

          {customerCategories.map((customer, idx) => (
            <motion.div
              key={customer.id || idx}
              variants={fadeInUp}
              className="flex items-center gap-6 md:gap-10 group relative"
            >
              
              {/* Left Side: High-Tech Node Ring */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0d1321] border border-slate-700/80 flex items-center justify-center transition-all duration-300 group-hover:border-[#f15a22] shadow-xl">
                {/* Active node inner ring indicator */}
                <div className="absolute inset-[3px] rounded-full border border-dashed border-slate-800 group-hover:border-[#f15a22]/40 transition-colors" />
                <span className="text-slate-400 font-mono font-bold text-xs md:text-sm group-hover:text-white transition-colors relative z-10">
                  {String(customer.id || idx + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Right Side: Geometric Angular Slanted Banner (Inspired by image_b2da3d.png) */}
              <div 
                className="flex-1 relative min-h-[64px] md:min-h-[76px] flex items-center bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-800/40 border border-slate-800/80 hover:border-[#f15a22]/30 transition-all duration-300 overflow-hidden shadow-2xl rounded-r-md"
                style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 0% 100%)' }}
              >
                {/* Asymmetric Left Accent Ribbon */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#f15a22] to-[#f15a22] opacity-40 group-hover:opacity-100 transition-opacity" />

                {/* Text Content Holder */}
                <div className="pl-6 pr-10 py-4">
                  <h3 className="text-lg md:text-xl font-bold text-slate-200 group-hover:text-white tracking-wide transition-colors">
                    {customer.title}
                  </h3>
                </div>

                {/* Right Geometric Accent Wingtip (Inspired by image_b2c723.png) */}
                <div 
                  className="absolute right-0 top-0 bottom-0 w-8 bg-[#f15a22]/30 group-hover:bg-[#f15a22]/10 transition-colors"
                  style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                />
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurCustomersSection;