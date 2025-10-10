"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
	{
		id: 'consulting-solution-design',
		title: 'Consulting & Solution Design',
		description: 'We provide full support by identifying customer needs, customizing solutions, and building the right security architecture.',
		icon: (
			<svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
			</svg>
		),
		capabilities: [
			'Customer Needs Assessment',
			'Security Architecture Design',
			'Solution Customization',
			'Technology Evaluation',
			'Strategic Security Planning'
		]
	},
	{
		id: 'proof-of-concept',
		title: 'Proof of Concept & Value',
		description: 'We execute PoC and PoV initiatives to help clients gain hands-on, practical insight into how solutions deliver value.',
		icon: (
			<svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
			</svg>
		),
		capabilities: [
			'Proof of Concept Development',
			'Value Demonstration',
			'Hands-on Testing Environment',
			'ROI Analysis',
			'Solution Validation'
		]
	},
	{
		id: 'professional-services',
		title: 'Professional Services & Support',
		description: 'We deliver professional implementation, configuration, and technical support to ensure long-term success.',
		icon: (
			<svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
		),
		capabilities: [
			'Professional Implementation',
			'System Configuration',
			'Technical Support',
			'Maintenance Services',
			'Long-term Success Planning'
		]
	},
	{
		id: 'regional-presence',
		title: 'Regional Presence',
		description: 'We operate across CLM, including but not limited to Cambodia, Laos, and Myanmar.',
		icon: (
			<svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		),
		capabilities: [
			'Southeast Asia Operations',
			'Cambodia Coverage',
			'Laos Market Presence',
			'Myanmar Operations',
			'Regional Partnership Network'
		]
	}
];

const WhatWeDoClient = () => {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative min-h-[85vh] flex items-center justify-center bg-[#0a0e1a] text-white overflow-hidden">
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,14,26,0.95)] via-[rgba(22,33,62,0.85)] to-[rgba(116,63,119,0.9)] z-10" />
					<div className="absolute inset-0 bg-[url('/cyber.png')] bg-cover bg-center z-0 opacity-30" />
				</div>

				<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						className="relative inline-flex items-center px-8 py-4 mb-10"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/30 to-[var(--color-primary)]/20 backdrop-blur-md rounded-full border border-[var(--color-primary)]/40 shadow-lg"></div>
						<div className="relative flex items-center">
							<div className="w-3 h-3 bg-[var(--color-primary)] rounded-full mr-4" />
							<span className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
								CYBERSECURITY EXPERTS
							</span>
						</div>
					</motion.div>

					<motion.h1 
						className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<span className="bg-gradient-to-r from-white via-gray-200 to-[var(--color-primary)] bg-clip-text text-transparent">
							What We Do
						</span>
					</motion.h1>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="mb-12"
					>
						<div className="w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] mx-auto mb-8" />
						<p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
							Enabling security through expertise, partnership, and regional reach with comprehensive cybersecurity and networking solutions tailored to your needs.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1 }}
						className="flex flex-col sm:flex-row justify-center gap-6"
					>
						<Link href="/contact-us" className="bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] hover:from-[#f15a22] hover:to-[var(--color-primary)] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out">
							Get Started Today
						</Link>
						<Link href="#services" className="bg-transparent border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out">
							Explore Services
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Services Overview Section */}
			<section id="services" className="relative py-20 bg-gradient-to-b from-[#0a0e1a] via-[#161b2e] to-[#0a0e1a] text-white overflow-hidden">
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-20">
						{/* Enhanced badge */}
						<motion.div
							className="relative inline-flex items-center px-8 py-4 mb-8"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
						>
							<motion.div 
								className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/30 via-[#f15a22]/20 to-[var(--color-primary)]/30 backdrop-blur-md rounded-full border border-[var(--color-primary)]/50 shadow-2xl"
								animate={{
									boxShadow: [
										"0 0 20px rgba(116,63,119,0.3)",
										"0 0 40px rgba(241,90,34,0.5)"
									]
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									repeatType: "reverse",
									ease: "easeInOut"
								}}
							/>
							<div className="relative flex items-center">
								<motion.div 
									className="w-4 h-4 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] rounded-full mr-4"
									animate={{
										scale: [1, 1.3, 1],
										rotate: [0, 180, 360]
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut"
									}}
								/>
								<span className="text-sm font-bold text-white tracking-wider uppercase">
									OUR CORE SERVICES
								</span>
							</div>
						</motion.div>

						{/* Enhanced title */}
						<motion.h2 
							className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							<motion.span 
								className="bg-gradient-to-r from-white via-[var(--color-primary)] to-[#f15a22] bg-clip-text text-transparent"
								animate={{
									backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: "linear"
								}}
								style={{
									backgroundSize: "200% 200%"
								}}
							>
								WHAT WE DO
							</motion.span>
						</motion.h2>

						{/* Enhanced divider */}
						<motion.div 
							className="relative mb-10"
							initial={{ opacity: 0, scaleX: 0 }}
							whileInView={{ opacity: 1, scaleX: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1, delay: 0.4 }}
						>
							<div className="w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[#f15a22] to-[var(--color-primary)] mx-auto rounded-full" />
							<motion.div
								className="absolute inset-0 w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[#f15a22] to-[var(--color-primary)] mx-auto rounded-full blur-sm"
								animate={{
									opacity: [0.5, 1, 0.5]
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut"
								}}
							/>
						</motion.div>

						{/* Enhanced description */}
						<motion.p 
							className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							We provide{" "}
							<motion.span 
								className="text-[var(--color-primary)] font-semibold"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.2 }}
							>
								comprehensive support
							</motion.span>{" "}
							through professional consulting, proven validation, professional implementation, and regional presence across{" "}
							<motion.span 
								className="text-[#f15a22] font-semibold"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.2 }}
							>
								Southeast Asia
							</motion.span>.
						</motion.p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
						{services.map((service, index) => (
							<motion.div
								key={service.id}
								initial={{ opacity: 0, y: 50, scale: 0.9 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								viewport={{ once: true }}
								transition={{ 
									duration: 0.8, 
									delay: index * 0.2,
									type: "spring",
									stiffness: 100,
									damping: 10
								}}
								whileHover={{ 
									scale: 1.05,
									rotateY: 5,
									z: 50
								}}
								className="relative group cursor-pointer perspective-1000"
								style={{ transformStyle: 'preserve-3d' }}
							>
								{/* Animated background glow */}
								<motion.div
									className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)] via-[#f15a22] to-[var(--color-primary)] rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
									animate={{
										background: [
											"linear-gradient(45deg, var(--color-primary), #f15a22, var(--color-primary))",
											"linear-gradient(45deg, #f15a22, var(--color-primary), #f15a22)",
											"linear-gradient(45deg, var(--color-primary), #f15a22, var(--color-primary))"
										]
									}}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: "easeInOut"
									}}
								/>

								{/* Main card */}
								<div className="relative bg-gradient-to-br from-[rgba(10,14,26,0.95)] via-[rgba(22,33,62,0.90)] to-[rgba(10,14,26,0.95)] rounded-3xl border border-[var(--color-primary)]/30 backdrop-blur-lg overflow-hidden group-hover:border-[var(--color-primary)]/60 transition-all duration-500">
									
									{/* Animated corner accents */}
									<motion.div
										className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[var(--color-primary)] rounded-tl-3xl opacity-60"
										animate={{
											borderColor: ["var(--color-primary)", "#f15a22", "var(--color-primary)"]
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "easeInOut",
											delay: index * 0.5
										}}
									/>
									<motion.div
										className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#f15a22] rounded-br-3xl opacity-60"
										animate={{
											borderColor: ["#f15a22", "var(--color-primary)", "#f15a22"]
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "easeInOut",
											delay: index * 0.5 + 1
										}}
									/>

									{/* Floating particles effect */}
									<div className="absolute inset-0 overflow-hidden pointer-events-none">
										{[...Array(6)].map((_, i) => (
											<motion.div
												key={i}
												className="absolute w-1 h-1 bg-[var(--color-primary)] rounded-full opacity-40"
												style={{
													left: `${20 + i * 15}%`,
													top: `${10 + i * 10}%`,
												}}
												animate={{
													y: [-10, -30, -10],
													opacity: [0.2, 0.8, 0.2],
													scale: [0.5, 1, 0.5]
												}}
												transition={{
													duration: 3,
													repeat: Infinity,
													ease: "easeInOut",
													delay: i * 0.5
												}}
											/>
										))}
									</div>

									<div className="relative p-10 h-full">
										{/* Enhanced icon container */}
										<motion.div
											className="w-24 h-24 bg-gradient-to-br from-[var(--color-primary)] to-[#f15a22] text-white rounded-2xl flex items-center justify-center mb-8 border-2 border-white/20 shadow-2xl"
											whileHover={{ 
												rotate: 360,
												scale: 1.1
											}}
											transition={{ 
												duration: 0.8,
												type: "spring",
												stiffness: 200
											}}
											animate={{
												boxShadow: [
													"0 0 20px rgba(116,63,119,0.3)",
													"0 0 40px rgba(241,90,34,0.5)"
												]
											}}
											style={{
												animation: `pulse-glow-${index} 2s ease-in-out infinite`
											}}
										>
											<motion.div
												whileHover={{ scale: 1.2 }}
												transition={{ duration: 0.3 }}
											>
												{service.icon}
											</motion.div>
										</motion.div>

										{/* Enhanced title */}
										<motion.h3 
											className="text-2xl md:text-3xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[var(--color-primary)] group-hover:to-[#f15a22] group-hover:bg-clip-text transition-all duration-500"
											whileHover={{ scale: 1.05 }}
										>
											{service.title}
										</motion.h3>

										{/* Enhanced description */}
										<motion.p 
											className="text-gray-300 text-lg leading-relaxed mb-8 group-hover:text-gray-100 transition-colors duration-300"
											initial={{ opacity: 0.8 }}
											whileHover={{ opacity: 1 }}
										>
											{service.description}
										</motion.p>

										{/* Hover effect overlay */}
										<motion.div
											className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[#f15a22]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
											whileHover={{
												background: "radial-gradient(circle at center, rgba(116,63,119,0.1) 0%, rgba(241,90,34,0.1) 100%)"
											}}
										/>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="relative py-20 bg-gradient-to-b from-[#0a0e1a] via-[#161b2e] to-[#0a0e1a] text-white overflow-hidden">
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,14,26,0.95)] via-[rgba(22,33,62,0.85)] to-[rgba(116,63,119,0.9)] z-10" />
				</div>

				<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						className="relative inline-flex items-center px-6 py-3 mb-8"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/30 to-[var(--color-primary)]/20 backdrop-blur-md rounded-full border border-[var(--color-primary)]/40 shadow-lg"></div>
						<div className="relative flex items-center">
							<div className="w-2.5 h-2.5 bg-[var(--color-primary)] rounded-full mr-3" />
							<span className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
								START YOUR SECURITY JOURNEY
							</span>
						</div>
					</motion.div>

					<motion.h2 
						className="text-3xl md:text-5xl font-bold mb-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<span className="bg-gradient-to-r from-white via-gray-200 to-[var(--color-primary)] bg-clip-text text-transparent">
							Ready to enhance your security posture?
						</span>
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mb-10"
					>
						<div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] mx-auto mb-6" />
						<p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
							Contact our team to discuss how we can help you address your security and networking challenges with cutting-edge solutions.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="flex flex-col sm:flex-row justify-center gap-6"
					>
						<Link href="/contact-us" className="bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] hover:from-[#f15a22] hover:to-[var(--color-primary)] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 ease-in-out flex items-center justify-center space-x-3">
							<span>Schedule a Consultation</span>
							<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</Link>

						<Link href="/solutions" className="bg-transparent backdrop-blur-sm text-white hover:bg-white/10 border-2 border-white/30 hover:border-white/50 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 ease-in-out flex items-center justify-center space-x-3">
							<span>Explore Solutions</span>
							<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default WhatWeDoClient;
