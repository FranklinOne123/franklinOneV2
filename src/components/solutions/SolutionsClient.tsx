"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import securitySections  from './solutionsIthems'
import { SwiperSlide } from 'swiper/react';
// import {  Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
// const detailedSolutions = {
// 	endpointSecurity: [
// 		'Endpoint Protection (EDR/XDR)',
// 		'Mobile Threat Defense (MTD)',
// 		'AD Assessment',
// 		'AD Protection',
// 		'Insider Threat Management (ITM)'
// 	],
// 	networkSecurity: [
// 		'Secure Web Gateway (SWG)',
// 		'Zero Trust Network Access (ZTNA)',
// 		'Remote Browser Isolation (RBI)',
// 		'Cloud Access Security Broker (CASB)',
// 		'Deception Solution',
// 		'Next-Gen SIEM',
// 		'Email Security Solution',
// 		'Security Awareness Training',
// 		'Web Takedown Service'
// 	],
// 	dataSecurity: [
// 		'Data Loss Prevention (DLP) – Endpoint DLP',
// 		'Data Loss Prevention (DLP) – Network DLP',
// 		'Data Loss Prevention (DLP) – Email DLP',
// 		'Data Security Platform',
// 		'Database Activity Monitoring (DAM)',
// 		'Data Sanitization (Data Erasure)'
// 	],
// 	vulnerabilityManagement: [
// 		'Vulnerability Management Detection and Response (VMDR)',
// 		'Web Application Scanning (WAS)',
// 		'Cloud & Container Security',
// 		'File Integrity Monitoring (FIM)',
// 		'Policy Compliance',
// 		'Audit Fix'
// 	],
// 	networkingSolutions: [
// 		'Next-Gen Firewall (NGFW)',
// 		'SD-WAN',
// 		'Device Intelligence and IOT Security',
// 		'Cloud Traffic Aggregation and Processing'
// 	],
// 	itOperations: [
// 		'CyberSecurity Asset Management (CSAM)',
// 		'Patch Management'
// 	],
// 	physicalSecurity: [
// 		'Video Management Software (VMS)',
// 		'Access Control',
// 		'Automatic License Plate Recognition (ALPR)',
// 		'Optical Character Recognition (OCR)'
// 	]
// };
// Explicit key tracking for security modules
export type SecurityDataKeys = 
  | 'endpointSecurity' 
  | 'networkSecurity' 
  | 'dataSecurity' 
  | 'vulnerabilityManagement' 
  | 'networkingSolutions' 
  | 'itOperations' 
  | 'physicalSecurity';

// Structure of a single solution bullet item inside the card
export interface SolutionItem {
  id: string;
  title: string;
  discription?: string; // Spelling match for your schema attribute
}

// Structure of the main parent security card container
export interface SecuritySection {
  id: string;
  title: string;
  subtitle: string;
  subColor: string;
  dataKey: SecurityDataKeys;
  icon: React.ReactNode;
  cat: string,
  solution_items?: SolutionItem[]; // Optional array property
}
const SolutionsClient = () => {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative min-h-[90vh] flex items-center justify-center bg-[#0a0e1a] text-white overflow-hidden pb-20">
				{/* Dark cyber background with overlay */}
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-gradient-to-b from-[rgba(52, 2, 55, 0.9)] via-[#743f77] to-[#0A0E1A] z-10"></div>
					<div className="absolute inset-0 bg-[url('/cyber.png')] bg-cover bg-center z-0 opacity-40"></div>
				</div>

				{/* Animated network grid */}
				<div className="absolute inset-0 bg-[url('/network-bg.svg')] opacity-20 z-10"></div>

				{/* Animated dots */}
				<motion.div
					className="absolute inset-0 bg-[url('/dot-pattern.svg')] bg-repeat z-10"
					animate={{
						backgroundPosition: ["0px 0px", "100px 100px"]
					}}
					transition={{
						duration: 60,
						ease: "linear",
						repeat: Infinity
					}}
				></motion.div>

				{/* Animated shield overlay */}
				<div className="absolute inset-0 flex items-center justify-center z-10">
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 0.15 }}
						transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
					>
						<div className="w-[400px] h-[400px] rounded-full border-8 border-white/30"></div>
					</motion.div>
					<motion.div
						initial={{ scale: 0.5, opacity: 0 }}
						animate={{ scale: 0.7, opacity: 0.1 }}
						transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
						className="absolute"
					>
						<div className="w-[600px] h-[600px] rounded-full border-2 border-[var(--color-secondary)]/40"></div>
					</motion.div>
					<motion.div
						className="absolute w-full h-full flex items-center justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.15 }}
						transition={{ duration: 1 }}
					>
						<svg width="240" height="240" viewBox="0 0 24 24" className="text-white/20">
							<path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
						</svg>
					</motion.div>
				</div>

				<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="text-center mb-12"
					>
						<motion.div
							className="inline-block mb-6 px-4 py-1 rounded-full border border-[var(--color-secondary)]/30 bg-white/5 backdrop-blur-sm text-sm font-medium text-[var(--color-secondary)] mt-14"
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							ENTERPRISE SECURITY SOLUTIONS
						</motion.div>

						<motion.h1
							className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							<span className="text-white block mb-2">Secure Solutions</span>
							<span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">Strategic Defense</span>
						</motion.h1>

						<motion.div
							className="w-24 h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] mx-auto mb-8"
							initial={{ width: 0, opacity: 0 }}
							animate={{ width: "6rem", opacity: 1 }}
							transition={{ duration: 1, delay: 0.5 }}
						></motion.div>

						<motion.p
							className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-10"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.7 }}
						>
							Advanced cybersecurity and networking solutions to protect your organization&apos;s most valuable assets against evolving threats in an increasingly connected world.
						</motion.p>

						<motion.div
							className="flex flex-col md:flex-row justify-center items-center gap-4 mt-12"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1 }}
						>
							<Link href="#solutions"
								className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r    shadow-lg hover:shadow-xl transition-all duration-300  bg-gradient-to-r to-[var(--color-primary)] from-[#f15a22]"
							>
								<svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
								Explore Security Solutions
							</Link>
							<Link href="/contact-us"
								className="inline-flex items-center px-8 py-4 border border-white/30 bg-transparent text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300"
							>
								Request Consultation
								<svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</Link>
						</motion.div>

						{/* Enhanced feature badges */}
						<motion.div
							className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.5, duration: 1 }}
						>
							<motion.div
								className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
								whileHover={{ scale: 1.05, y: -5 }}
							>
								<svg className="w-10 h-10 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
								</svg>
								<span className="text-base font-medium text-white text-center">Recognized by Global Standard Bodies</span>
							</motion.div>

							<motion.div
								className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
								whileHover={{ scale: 1.05, y: -5 }}
							>
								<svg className="w-10 h-10 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
								</svg>
								<span className="text-base font-medium text-white text-center">Scalable - Future-Ready Solutions</span>
							</motion.div>

							<motion.div
								className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
								whileHover={{ scale: 1.05, y: -5 }}
							>
								<svg className="w-10 h-10 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
								</svg>
								<span className="text-base font-medium text-white text-center">Providing Most Secured with Advanced Solutions Capability</span>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Detailed Solutions redesign Structure Section */}
			<section id="solutions" className="relative bg-gradient-to-b from-[#0A0E1A] via-gray-800 to-gray-900 overflow-hidden px-4 py-20">
				<motion.div 
					className="absolute inset-0 bg-repeat"
					style={{
						backgroundImage: `
						linear-gradient(rgba(116, 63, 119, 0.2) 1px, transparent 1px),
						linear-gradient(90deg, rgba(116, 63, 119, 0.2) 1px, transparent 1px)
						`,
						backgroundSize: '60px 60px'
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear"
					}}
				/>
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
					{[...Array(30)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute rounded-full"
						style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						width: Math.random() * 6 + 2,
						height: Math.random() * 6 + 2,
						backgroundColor: '#f1592295',
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
				<div className="absolute inset-0 bg-[url('/dot-pattern.svg')] opacity-[0.02]"></div>
				<div
					className="
						rounded-3xl
						border border-purple-400/20
						backdrop-blur-md
						shadow-lg
						p-4 md:p-8
						max-w-7xl mx-auto
					"
				>
					{/* Category Header Label Row Area */}
					<div className="mb-6">
							<div className="flex items-center gap-3 mb-2">
								<div
									className="mr-3 p-3 rounded-xl"
									style={{
									  boxShadow: "-32px -27px 76px #8e2a94",
									}}
								  >
									<motion.svg
									  className="w-10 h-10"
									  viewBox="0 0 20 20"
									  animate={{
										fill: [
										  "#743f77",
										  "#d3491b",
										],
									  }}
									  transition={{
										duration: 4,
										repeat: Infinity,
										ease: "linear",
									  }}
									>
										<path
										  fillRule="evenodd"
										  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										  clipRule="evenodd"
										/>
									  </motion.svg>
								</div>
								<h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-[var(--color-primary)] to-[#f15a22] bg-clip-text text-transparent mb-2 flex items-center gap-3">
									<motion.span
									className="bg-gradient-to-r from-white via-[#9a5d9d] to-[#f15a22] bg-clip-text text-transparent"
									initial={{ backgroundPosition: "0% 50%" }}
									animate={{ backgroundPosition: "100% 50%" }}
									transition={{ 
										duration: 3,
										repeat: Infinity,
										repeatType: "reverse"
									}}
									style={{ backgroundSize: "200% 200%" }}
									>Cybersecurity</motion.span>
									
								</h3>
							</div>
						<div className="w-full h-1 bg-gradient-to-r from-transparent via-[#9a5d9d]/20 to-transparent rounded-full" style={{ opacity: 0.93979 }}></div>
						<div className="w-full py-4">
							{/* 1. Custom Left Navigation Button */}
							{/* <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
								<ChevronLeftIcon className="w-6 h-6" />
							</button> */}
							<div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
								{[...securitySections]
								.sort((a, b) => a.title.charAt(0).localeCompare(b.title.charAt(0)))
								.map((section: SecuritySection, cardIndex: number) => {
									// TypeScript safely checks that the dataKey matches a valid string array
									const items: SolutionItem[] = section.solution_items || [];
									// const firstChar: string = section.title.charAt(0);
									
								   if(section.cat === "Cybersecurity, Network, and IT Operation"){
									   return (
									   <SwiperSlide key={section.id}>
										   <motion.div
										   className=" rounded-xl shadow-lg cursor-pointer border-t-0 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
										   initial={{ opacity: 0, y: 30 }}
										   whileInView={{ opacity: 1, y: 0 }}
										   viewport={{ once: true }}
										   transition={{ duration: 0.6, delay: cardIndex * 0.1 }}
										   >
										   {/* Card Header */}
										   <div className="p-6 text-white bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22]">
											   <div className="flex items-center mb-4">
											   <div className="bg-white/20 p-3 rounded-lg mr-4">
												   {section.icon}
											   </div>
											   <div>
												   <h3 className="text-2xl font-bold">
												   {section.subtitle}
												   </h3>
											   </div>
											   </div>
										   </div>
   
										   {/* Card Body */}
										   <div className="relative p-6 flex-grow">
											   <div className="grid grid-cols-1 gap-">
												   <div className="grid grid-cols-1 gap-2">
													   <div className="grid grid-cols-1 gap-2">
													   {[...items]
														   .sort((a, b) => a.title.localeCompare(b.title))
														   .map((solution: SolutionItem, itemIndex: number) => (
															   <div 
																   className="flex-1 relative  flex items-center bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-800/40 border border-slate-800/80 hover:border-[#f15a22]/30 transition-all duration-300 overflow-hidden shadow-2xl rounded-r-md"
																   style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)', boxShadow:'0 0 50px rgba(241, 89, 34, 0.494)' }}
																   key={itemIndex}
																   >
																	   {/* Asymmetric Left Accent Ribbon */}
																	   <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#f15a22] to-[#f15a22] opacity-40 group-hover:opacity-100 transition-opacity" />
   
																	   {/* Text Content Holder */}
																	   <div className="pl-3 pr-4 py-3">
																		   <span className="text-slate-200 group-hover:text-white tracking-wide transition-colors">
																			   {solution.title}
																		   </span>
																	   </div>
   
																	   {/* Right Geometric Accent Wingtip (Inspired by image_b2c723.png) */}
																	   <div 
																	   className="absolute right-0 top-0 bottom-0 w-8 bg-[#f15a22]/30 group-hover:bg-[#f15a22]/10 transition-colors"
																	   style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
																	   />
															   </div>
														   // <motion.div 
														   // 	key={solution.id || itemIndex}
														   // 	className="border border-purple-100 rounded-lg p-4 hover:bg-purple-100 transition-colors cursor-pointer"
														   // 	initial={{ opacity: 0, x: -20 }}
														   // 	whileInView={{ opacity: 1, x: 0 }}
														   // 	viewport={{ once: true }}
														   // 	transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
														   // 	whileHover={{ scale: 1.02 }}
														   // >
														   // 	<div className="flex items-center">
														   // 	<div className="w-2 h-2 bg-[#743f77]/95 rounded-full mr-3" />
														   // 	<span className="text-gray-800 font-medium text-sm">
														   // 		{solution.title}
														   // 	</span>
														   // 	</div>
														   // </motion.div>
														   ))}
													   </div>
												   </div>
											   </div>
										   </div>
										   </motion.div>
									   </SwiperSlide>
									   );
								   }
								})}
							</div>
							{/* <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
								<ChevronRightIcon className="w-6 h-6" />
							</button>
							<div className="custom-dots flex justify-center items-center gap-2 mt-6 w-full" /> */}
						</div>
					</div>
					<div className="mb-6 max-w-7xl mx-auto">
							<div className="flex items-center gap-3 mb-2">
									<div
										className="mr-3 p-3 rounded-xl"
										style={{
										boxShadow: "-32px -27px 76px #8e2a94",
										}}
									>
										<motion.svg
										className="w-10 h-10"
										viewBox="0 0 64 64" 
										version="1.1" 
										animate={{
											fill: [
											"#743f77",
											"#d3491b",
											],
										}}
										transition={{
											duration: 4,
											repeat: Infinity,
											ease: "linear",
										}}
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
										xmlSpace="preserve" 
										>
											<g id="smart_lamp"/>
						
											<g id="e-wallet"/>
						
											<g id="virtual_reality"/>
						
											<g id="payment"/>
						
											<g id="cloud_storage"/>
						
											<g id="security_camera"/>
						
											<g id="smart_home"/>
						
											<g id="connection"/>
						
											<g id="game"/>
						
											<g id="drone"/>
						
											<g id="smart_car"/>
						
											<g id="camera"/>
						
											<g id="online_business"/>
						
											<g id="smartwatch"/>
						
											<g id="online_shopping"/>
						
											<g id="smart_Television">
						
											<g>
						
											<path d="M60,10H4c-0.6,0-1,0.4-1,1v36c0,0.6,0.4,1,1,1h3.1l-3,4.4c-0.2,0.3-0.2,0.7,0,1C4.3,53.8,4.6,54,5,54h4    c0.3,0,0.6-0.2,0.8-0.4l3.7-5.6h36.9l3.7,5.6c0.2,0.3,0.5,0.4,0.8,0.4h4c0.4,0,0.7-0.2,0.9-0.5c0.2-0.3,0.2-0.7,0-1l-3-4.4H60    c0.6,0,1-0.4,1-1V11C61,10.4,60.6,10,60,10z M8.5,52H6.9l2.7-4h1.6L8.5,52z M57.1,52h-1.6l-2.7-4h1.6L57.1,52z M59,46h-4h-4H13H9    H5V12h54V46z"/>
						
											<path d="M32,30c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S34.8,30,32,30z M32,38c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S33.7,38,32,38z    "/>
						
											<path d="M32,26c-2.7,0-5.2,1.3-6.7,3.6c-0.3,0.5-0.2,1.1,0.3,1.4c0.5,0.3,1.1,0.2,1.4-0.3c1.1-1.7,3-2.7,5-2.7s3.9,1,5,2.7    c0.2,0.3,0.5,0.4,0.8,0.4c0.2,0,0.4-0.1,0.6-0.2c0.5-0.3,0.6-0.9,0.3-1.4C37.2,27.3,34.7,26,32,26z"/>
						
											<path d="M32,22c-3.8,0-7.2,1.7-9.5,4.7c-0.3,0.4-0.3,1.1,0.2,1.4c0.4,0.3,1.1,0.3,1.4-0.2C26,25.4,28.9,24,32,24s6,1.4,7.9,3.9    c0.2,0.3,0.5,0.4,0.8,0.4c0.2,0,0.4-0.1,0.6-0.2c0.4-0.3,0.5-1,0.2-1.4C39.2,23.7,35.8,22,32,22z"/>
						
											<path d="M32,18c-4.8,0-9.3,2.1-12.3,5.8c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C23.9,21.9,27.8,20,32,20    s8.1,1.9,10.8,5.1c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2c0.4-0.4,0.5-1,0.1-1.4C41.3,20.1,36.8,18,32,18z"/>
						
											<path d="M8,44h48c0.6,0,1-0.4,1-1V15c0-0.6-0.4-1-1-1H8c-0.6,0-1,0.4-1,1v28C7,43.6,7.4,44,8,44z M9,16h46v26H9V16z"/>
						
											</g>
						
											</g>
						
											<g id="security"/>
						
											<g id="communication"/>
						
											<g id="remote_control"/>
						
											<g id="satelite_dish"/>
										</motion.svg>
									</div>
									<h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-[var(--color-primary)] to-[#f15a22] bg-clip-text text-transparent mb-2 flex items-center gap-3">
										<motion.span
										className="bg-gradient-to-r from-white via-[#9a5d9d] to-[#f15a22] bg-clip-text text-transparent"
										initial={{ backgroundPosition: "0% 50%" }}
										animate={{ backgroundPosition: "100% 50%" }}
										transition={{ 
											duration: 3,
											repeat: Infinity,
											repeatType: "reverse"
										}}
										style={{ backgroundSize: "200% 200%" }}
										>Physical Security</motion.span>
										
									</h3>
								</div>
							<div className="w-full h-1 bg-gradient-to-r from-transparent via-[#9a5d9d]/20 to-transparent rounded-full" style={{ opacity: 0.93979 }}></div>
							<div className="relative w-full py-4">
							{/* 1. Custom Left Navigation Button */}
							{/* <button className="prev-btn-pysical absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
								<ChevronLeftIcon className="w-6 h-6" />
							</button> */}
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
								{[...securitySections]
								.sort((a, b) => a.title.charAt(0).localeCompare(b.title.charAt(0)))
								.map((section: SecuritySection, cardIndex: number) => {
									// TypeScript safely checks that the dataKey matches a valid string array
									const items: SolutionItem[] = section.solution_items || [];
									// const firstChar: string = section.title.charAt(0);
									
								   if(section.cat === "Physical Security"){
									   return (
									   <SwiperSlide key={section.id}>
										   <motion.div
										   className=" rounded-xl shadow-lg cursor-pointer border-t-0 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
										   initial={{ opacity: 0, y: 30 }}
										   whileInView={{ opacity: 1, y: 0 }}
										   viewport={{ once: true }}
										   transition={{ duration: 0.6, delay: cardIndex * 0.1 }}
										   >
										   {/* Card Header */}
										   <div className="p-6 text-white bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22]">
											   <div className="flex items-center mb-4">
											   <div className="bg-white/20 p-3 rounded-lg mr-4">
												   {section.icon}
											   </div>
											   <div>
												   <h3 className="text-2xl font-bold">
												   {section.subtitle}
												   </h3>
											   </div>
											   </div>
										   </div>
   
										   {/* Card Body */}
										   <div className="relative p-6 flex-grow">
											   <div className="grid grid-cols-1 gap-">
												   <div className="grid grid-cols-1 gap-2">
													   <div className="grid grid-cols-1 gap-2">
													   {[...items]
														   .sort((a, b) => a.title.localeCompare(b.title))
														   .map((solution: SolutionItem, itemIndex: number) => (
															   <div 
																   className="flex-1 relative  flex items-center bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-800/40 border border-slate-800/80 hover:border-[#f15a22]/30 transition-all duration-300 overflow-hidden shadow-2xl rounded-r-md"
																   style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)', boxShadow:'0 0 50px rgba(241, 89, 34, 0.494)' }}
																   key={itemIndex}
																   >
																	   {/* Asymmetric Left Accent Ribbon */}
																	   <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#f15a22] to-[#f15a22] opacity-40 group-hover:opacity-100 transition-opacity" />
   
																	   {/* Text Content Holder */}
																	   <div className="pl-3 pr-4 py-3">
																		   <span className="text-slate-200 group-hover:text-white tracking-wide transition-colors">
																			   {solution.title}
																		   </span>
																	   </div>
   
																	   {/* Right Geometric Accent Wingtip (Inspired by image_b2c723.png) */}
																	   <div 
																	   className="absolute right-0 top-0 bottom-0 w-8 bg-[#f15a22]/30 group-hover:bg-[#f15a22]/10 transition-colors"
																	   style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
																	   />
															   </div>
														   // <motion.div 
														   // 	key={solution.id || itemIndex}
														   // 	className="border border-purple-100 rounded-lg p-4 hover:bg-purple-100 transition-colors cursor-pointer"
														   // 	initial={{ opacity: 0, x: -20 }}
														   // 	whileInView={{ opacity: 1, x: 0 }}
														   // 	viewport={{ once: true }}
														   // 	transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
														   // 	whileHover={{ scale: 1.02 }}
														   // >
														   // 	<div className="flex items-center">
														   // 	<div className="w-2 h-2 bg-[#743f77]/95 rounded-full mr-3" />
														   // 	<span className="text-gray-800 font-medium text-sm">
														   // 		{solution.title}
														   // 	</span>
														   // 	</div>
														   // </motion.div>
														   ))}
													   </div>
												   </div>
											   </div>
										   </div>
										   </motion.div>
									   </SwiperSlide>
									   );
								   }
								})}
							</div>
							{/* 3. Custom Right Navigation Button */}
							{/* <button className="next-btn-pysical absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
								<ChevronRightIcon className="w-6 h-6" />
							</button>


							<div className="custom-dots-pysical flex justify-center items-center gap-2 mt-6 w-full" /> */}
						</div>
					</div>
				</div>
            </section>

			{/* CTA Section */}
			<section className="relative py-20 bg-gradient-to-b from-[#111828] to-[#743f77] text-white overflow-hidden">
				<motion.div 
				className="absolute inset-0 bg-repeat"
				style={{
					backgroundImage: `
					linear-gradient(rgba(116, 63, 119, 0.2) 1px, transparent 1px),
					linear-gradient(90deg, rgba(116, 63, 119, 0.2) 1px, transparent 1px)
					`,
					backgroundSize: '60px 60px'
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "linear"
				}}
				/>
				{/* Enhanced floating particles */}
				<div className="absolute inset-0">
					{[...Array(30)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute rounded-full"
						style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						width: Math.random() * 6 + 2,
						height: Math.random() * 6 + 2,
						backgroundColor: '#f1592295',
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
				<div className="absolute inset-0 bg-[url('/network-bg.svg')] opacity-10"></div>
				<div className="absolute inset-0 bg-[url('/dot-pattern.svg')] opacity-5"></div>

				{/* Shield animation background */}
				<div className="absolute inset-0">
					<motion.div
						className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: [0.05, 0.1, 0.05] }}
						transition={{ duration: 5, repeat: Infinity }}
					>
						<svg width="800" height="800" viewBox="0 0 24 24" className="text-[#f15a22]">
							<path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
						</svg>
					</motion.div>
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

					<motion.h2
						className="text-3xl md:text-4xl font-bold mb-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Ready to enhance your security posture?
					</motion.h2>

					<motion.div
						className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"
						initial={{ width: 0 }}
						whileInView={{ width: "6rem" }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					></motion.div>

					<motion.p
						className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Contact our team of security professionals to discuss how we can help you address your specific security and networking challenges with our enterprise-grade solutions.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="flex flex-col sm:flex-row justify-center gap-6"
					>
					 
						<Link href="/contact-us#form" className="bg-gradient-to-r from-[var(--color-primary)] to-[#f15a22] hover:from-[#f15a22] hover:to-[var(--color-primary)] text-white font-bold py-4 px-8 rounded-md text-lg transition-all duration-300 shadow-lg hover:shadow-xl ease-in-out flex items-center justify-center">
							<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
							</svg>
							Get in Touch
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default SolutionsClient;
