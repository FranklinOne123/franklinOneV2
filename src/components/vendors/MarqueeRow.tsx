import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

interface Vendor {
  name: string;
  logo: string;
  website: string;
  // Added optional solution subtitle text seen in your image mockup layout
  solution?: string; 
}

interface MarqueeRowProps {
  category: string;
  vendors: Vendor[];
  reverse?: boolean;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  category,
  vendors,
  reverse = false,
}) => {
  // Triple the items array list. This creates an exact repeating order structure: 
  // [1,2,3,4, 1,2,3,4, 1,2,3,4]. No elements are ever inverted.
  const trippledVendors = [...vendors, ...vendors, ...vendors];

  // Mathematical bounds mapping to exactly 1/3 (one full dataset block width fraction)
  const initialX = reverse ? "-33.3333%" : "0%";
  const targetX = reverse ? "0%" : "-33.3333%";

  return (
    <div className="w-full">
      {/* Category Header Label Row Area */}
      <div className="mb-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          {category === "Cybersecurity, Network, and IT Operation" && (
            <div>
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
            </div>
          )}
          {category === "Physical Security" && (
            <div>
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
            </div>
          )}
          
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
              >{category == "Cybersecurity, Network, and IT Operation"?"Cybersecurity":category}</motion.span>
            
          </h3>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#9a5d9d]/20 to-transparent rounded-full" style={{ opacity: 0.93979 }}></div>
      </div>

      {/* Infinite Slider Viewport Mask Box Window */}
      <div className="overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        
        <motion.div
          className="flex gap-6 w-max pr-6"
          initial={{ x: initialX }}
          animate={{ x: targetX }}
          transition={{
            duration: vendors.length * 6, // Scales dynamically based on item count to normalize speed
            ease: "linear",
            repeat: Infinity,
          }}
          // Uses hardware-accelerated pause states to safely freeze components mid-animation frame
          whileHover={{ animationPlayState: "paused" }}
          style={{ willChange: "transform" }}
        >
          {trippledVendors.map((vendor, index) => (
            <a
              key={`${vendor.name}-${index}`}
              href={vendor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 block w-[260px] md:w-[280px] group/card transition-all duration-300 transform py-4"
            >
              {/* Premium Dark Glass Card Wrapper (Matches your visual images layout) */}
              <div className="relative h-[160px]  border border-white/5 rounded-xl p-5 flex flex-col justify-between items-start transition-all duration-300  group-hover/card: group-hover/card:shadow-[0_0_20px_#f15a22] shadow-xl"
              >
                

                {/* Logo Image Rendering Field Box Container */}
                <div className="w-full flex justify-center items-center h-[55%] mt-2">
                  <Image
                    src={vendor.logo}
                    alt={`${vendor.name} Corporate Identity`}
                    fill
                    sizes="(max-width: 768px) 100vw, 150px)"
                    className="object-scale-down filter brightness-100"
                    draggable={false}
                  />
                </div>

                {/* Bottom Row Information Bar (Label & Interaction Arrow Point) */}
                <div className="w-full flex items-end justify-between border-t border-white/5 pt-3 mt-auto">
                  {/* <div className="flex flex-col truncate pr-4">
                    <span className="text-xs text-white/40 group-hover/card:text-white/60 font-medium transition-colors">
                      {vendor.solution || "Enterprise Solution"}
                    </span>
                  </div> */}
                  
                  {/* Micro Interaction Arrow Anchor Indicator (Matches your visual images layout) */}
                  {/* <div className="text-purple-400 group-hover/card:text-purple-300 group-hover/card:translate-x-1 transition-all transform duration-300 flex-shrink-0 pl-1">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2.5} 
                      stroke="currentColor" 
                      className="w-3.5 h-3.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div> */}
                </div>

              </div>
            </a>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default MarqueeRow;