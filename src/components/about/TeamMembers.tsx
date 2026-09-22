"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

// Extracted team data from your image
const teamMembers = [
  {
    name: "Ms. Bpha Kim",
    role: "Channel and Marketing Supervisor",
    image: "/images/team/kim_bopha.jpg",
  },
  {
    name: "Ms. Phanet Theang",
    role: "Solution Sales Executive",
    image: "/images/team/phanet_theang.jpg",
  },
  {
    name: "Mr. Ol Oeun",
    role: "Network and Security Engineer",
    image: "/images/team/ol_oeun.jpg",
  },
  {
    name: "Ms. Manin Savoeun",
    role: "Accounting Executive",
    image: "/images/team/manin_savoeun.jpg",
  },
  {
    name: "Mr. Bill Oeng",
    role: "Solution Sales Executive",
    image: "/images/team/bill_oeng.jpg",
  },
  {
    name: "Mr. Thy Thern",
    role: "Network and Security Engineer",
    image: "/images/team/thernthy.jpg", // Replace with your actual paths
  },
];
const gradientAnimation = {
    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
  };

  const gradientTransition = {
    repeat: Infinity,
    duration: 6,
    ease: "easeInOut"
  };
const TeamMembersSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20">
      {/* Tech grid pattern background matching your design */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `
              linear-gradient(rgba(116, 63, 119, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(116, 63, 119, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
       {/* teams chart */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16 md:mb-20"
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
                <span className="text-white text-sm font-medium tracking-wider">OUR TEAM</span>
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
              repeatType: "reverse",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Team Introduction
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

      {/* Team Rows Structure */}
      <motion.div 
        className="space-y-12 lg:space-y-16 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {["Channel and Marketing Supervisor", "Solution Sales Executive", "Network and Security Engineer", "Accounting Executive"].map((role, idx) => (
          <motion.div key={idx} className="w-full" variants={fadeInUp}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              
              {/* 1. Left Role Label Component */}
              <motion.div 
                className="relative group bg-gradient-to-br from-[#f15a22] via-gray-800 to-gray-900/90 backdrop-blur-md rounded-xl lg:rounded-r-none lg:rounded-l-xl p-[1px] lg:border-r lg:border-[#f15a22]" 
                style={{ backgroundSize: '200% 200%' }}
                animate={gradientAnimation}
                transition={gradientTransition}
              >
                <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md py-5 px-4 text-center z-10 rounded-[11px] lg:rounded-r-none lg:rounded-l-[11px]">
                  <h3 className="text-sm lg:text-xs font-semibold uppercase text-center tracking-wider text-white">
                    {role}
                  </h3>
                </div>
              </motion.div>
            
              {/* 2. Right Side Matching Members Layout */}
              <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {teamMembers
                  .filter(member => member.role === role)
                  .map((member, mIdx) => (
                    <div key={mIdx} className="w-full flex flex-col gap-4 items-center group/card">
                      
                      {/* Name Plate Component */}
                      <motion.div 
                        className="w-full relative rounded-xl p-[1px] shadow-lg bg-gradient-to-br from-[#f15a22] via-gray-800 to-gray-900/90 backdrop-blur-md"
                        style={{ backgroundSize: '200% 200%' }}
                        animate={gradientAnimation}
                        transition={gradientTransition}
                      >
                        <div className="relative w-full h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-[11px] py-4 px-4 text-center z-10">
                          <h4 className="text-white font-semibold text-base tracking-wide font-sans">
                            {member.name}
                          </h4>
                          
                          {/* Aesthetic Line Attachments - visible only on large monitors */}
                          <div className="hidden lg:block absolute w-8 h-[1px] bg-[#f15a22] top-1/2 -left-8 transform -translate-y-1/2" />
                          <div className="hidden lg:block w-2 h-2 bg-[#f15a22] rounded-full absolute top-1/2 -left-1 transform -translate-y-1/2" />
                          <div className="hidden lg:block w-[1px] h-6 bg-[#f15a22] absolute -bottom-6 left-1/2 transform -translate-x-1/2" />
                        </div>
                      </motion.div>

                      {/* Image Frame Wrapper */}
                      <div className="relative mt-2">
                        {/* Decorative Dot Connector */}
                        <div className="hidden lg:block w-2.5 h-2.5 bg-[#f15a22] rounded-full absolute -top-[13px] left-1/2 transform z-20 -translate-x-1/2" />
                        
                        <div className="relative w-60 h-68 sm:w-64 sm:h-72 mx-auto rounded-xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-gray-800 transition-all duration-300 group-hover/card:border-[#f15a22]/50 group-hover/card:shadow-[0_20px_40px_rgba(241,90,34,0.2)]">
                          <Image
                            src={member.image || "/images/team/placeholder.jpg"}
                            alt={member.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 256px"
                            className="object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                          />
                        </div>
                      </div>

                    </div>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </section>
  );
};

export default TeamMembersSection;