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

  const paragraphs = [
    "Our company was established by a team of highly experienced professionals who have excelled in the distribution business for years, deeply understanding the core values of being a true distributor.",
    "We have built a dedicated team to provide comprehensive support, including solution consultation and after-sales service, ensuring that our customers receive the best possible experience. Our goal is to work closely with our resellers to deliver exceptional products with friendly, reliable service to end clients.",
    "Committed to unquestionable business principles, we strictly conduct our transactions through resellers and never engage directly with end customers. We firmly believe in the partner ecosystem and strive to be a role model in the country and the region.",
    "Our shareholders comprise individuals with a strong financial background who share a unified vision building a long-lasting organization that generates sustainable benefits for all stakeholders."
  ];

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
                <span className="text-white text-sm font-medium tracking-wider">OUR STORY</span>
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
              Get to Know Us
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

        {/* Content Block */}
        <div className="max-w-4xl mx-auto">
          {paragraphs.map((paragraph, idx) => (
            <motion.div
          key={idx}
          className="relative flex flex-col md:flex-row items-stretch min-h-[120px] group drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* 1. LEFT DECORATIVE ACCENT (Slanted Striped Blocks) */}
          {/* <div 
            className="hidden md:flex w-24 bg-gradient-to-r from-purple-900 to-indigo-950 items-center justify-center relative"
            style={{ clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)' }}
          >
            <div className="absolute inset-y-0 left-2 w-3 bg-purple-500/40 transform -skew-x-[25deg]" />
            <div className="absolute inset-y-0 left-8 w-3 bg-purple-400/30 transform -skew-x-[25deg]" />
          </div> */}

          {/* 2. INDEX / LOGO BADGE (Deep Purple Angular Shield) */}
          <div 
            className="relative flex items-center justify-center bg-[#f15a22]/40 text-purple-200 font-black text-2xl px-10 py-6 md:py-0 min-w-[100px] z-20 shadow-xl"
            style={{ clipPath: 'polygon(0 0, 100% 0, 82% 100%, 0% 100%)' }}
          >
            {/* <span className="tracking-wider relative z-10 group-hover:scale-110 group-hover:text-white transition-all duration-300">
              {String(idx + 1).padStart(2, '0')}
            </span> */}
            {/* Highlight overlay reflection */}
            <div className="absolute top-0 left-0 right-4 h-[45%] bg-white/5 pointer-events-none" />
          </div>

          {/* 3. MAIN CONTENT LAYER (Dual-layered Slash Box) */}
          <div className="flex-1 flex flex-col relative -ml-6 md:-ml-8 z-10">

            {/* Core Body Container */}
            <div 
              className="flex-1 p-6 md:p-8 bg-gradient-to-r from-[#f15a22]/30 to-[#743f77]/10 text-slate-100 border-b border-purple-500/20"
              style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 1.5% 100%)' }}
            >
              <p className="text-sm md:text-base leading-relaxed font-medium tracking-wide pl-4 md:pl-6 max-w-[94%]">
                {paragraph}
              </p>
            </div>

            {/* Bottom Accent Highlight Line */}
            <div 
              className="h-1.5 bg-gradient-to-r from-[#f15a22] via-[#f15a22]/20 to-transparent w-[80%] ml-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)' }}
            />
          </div>

          {/* 4. RIGHT GEOMETRIC WING TERMINATOR */}
          {/* <div 
            className="hidden lg:block w-16 bg-gradient-to-br from-purple-900 to-slate-950 self-stretch -ml-6"
            style={{ clipPath: 'polygon(0 0, 50% 0, 100% 100%, 50% 100%)' }}
          /> */}
        </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetToKnowUsSection;
