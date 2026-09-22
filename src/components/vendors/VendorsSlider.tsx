import React from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import MarqueeRow from './MarqueeRow';

interface Vendor {
    name: string;
    logo: string;
    description: string;
    solutions: string[];
    website: string;
    category: "Cybersecurity, Network, and IT Operation" | "Physical Security";
}

// FIX: Explicitly assign the : Vendor[] type here so TypeScript knows these exact categories match your interface
const vendors: Vendor[] = [
    // IT, Network, and Security Vendors
    {
        name: 'SentinelOne',
        logo: '/images/source_fix/Logo-SenntinelOne.png', 
        description: 'SentinelOne is a leader in AI-powered cybersecurity, providing autonomous endpoint protection, detection, and response through their Singularity platform...',
        solutions: ['Endpoint Security', 'XDR Platform', 'AI-Powered Threat Detection', 'Automated Response'],
        website: 'https://www.sentinelone.com',
        category: 'Cybersecurity, Network, and IT Operation'
    },
    {
        name: 'Netskope',
        logo: '/images/source_fix/net.png', 
        description: 'Netskope is a SASE leader delivering secure access service edge solutions. Their cloud-native platform provides comprehensive security...',
        solutions: ['SASE', 'Zero Trust Network Access', 'Cloud Security', 'Secure Web Gateway'],
        website: 'https://www.netskope.com',
        category: 'Cybersecurity, Network, and IT Operation'
    },
    {
        name: 'Qualys',
        logo: '/images/source_fix/gptQualys.png',
        description: 'Qualys is a leading provider of cloud-based IT, security, and compliance solutions. Their Enterprise TruRisk Platform helps organizations measure, manage, and reduce cyber risk...',
        solutions: ['Vulnerability Management', 'Asset Discovery', 'Compliance Management', 'Cloud Security'],
        website: 'https://www.qualys.com',
        category: 'Cybersecurity, Network, and IT Operation'
    },
    {
        name: 'Varonis',
        logo: '/images/source_fix/varonis.png', 
        description: 'Varonis is the #1 Data Security Platform that automatically finds critical data, remediates exposure, and stops threats in the cloud and on-premises...',
        solutions: ['Data Security', 'Data Discovery & Classification', 'Insider Threat Detection', 'Data Access Governance'],
        website: 'https://www.varonis.com',
        category: 'Cybersecurity, Network, and IT Operation'
    },
    {
        name: 'Blancco',
        logo: '/images/blancco.webp', 
        description: 'Blancco is the industry standard for secure data erasure and mobile device diagnostics. Their solutions ensure complete data sanitization and device lifecycle management...',
        solutions: ['Data Erasure', 'Mobile Diagnostics', 'Device Lifecycle Management', 'Compliance Reporting'],
        website: 'https://www.blancco.com',
        category: 'Cybersecurity, Network, and IT Operation'
    },
    {
        name: 'Gurucul',
        logo: '/images/source_fix/gurucul-logo.png', 
        description: 'Gurucul is a leading provider of AI-powered cybersecurity solutions. Their platform helps organizations detect and respond to threats in real-time...',
        solutions: ['Threat Detection', 'Behavioral Analytics', 'Incident Response', 'Compliance Management'],
        website: 'https://www.gurucul.com',
        category: 'Cybersecurity, Network, and IT Operation'
    },
    {
        name: 'Promon',
        logo: '/images/source_fix/promon-logotype-blue.png', // You can replace with actual logo path
        description: '60+ Years of Innovation in Intelligent Edge Devices.',
        solutions: ['Perimeter Security', 'Access Control', 'Intrusion Detection', 'Command & Control'],
        website: 'https://promon.io',
        category: 'Cybersecurity, Network, and IT Operation'
    },
    {
        name: 'BeyondTrust',
        logo: '/images/source_fix/beyondtrust.png', // You can replace with actual logo path
        description: 'BeyondTrust is a global leader in privileged access management (PAM) and vulnerability management solutions. Their platform helps organizations secure and manage privileged accounts, credentials, and access across on-premises, cloud, and hybrid environments...',
        solutions: ['Perimeter Security', 'Access Control', 'Intrusion Detection', 'Command & Control'],
        website: 'https://www.beyondtrust.com',
        category: 'Cybersecurity, Network, and IT Operation'
    },
    {
        name: 'Fastly',
        logo: '/images/source_fix/fastly.png', // You can replace with actual logo path
        description: 'Fastly is a global leader in edge cloud services. Their platform helps organizations deliver faster, more secure, and more reliable web experiences...',
        solutions: ['Edge Cloud', 'Content Delivery', 'Security', 'Performance'],
        website: 'https://www.fastly.com',
        category: 'Cybersecurity, Network, and IT Operation'
    },
    // Physical Security Vendors
    {
        name: 'Milestone Systems',
        logo: '/images/mil_scal.png', 
        description: 'Milestone Systems is a leading provider of open platform IP video management software. Their XProtect platform enables organizations to manage and view video surveillance systems...',
        solutions: ['Video Management Software', 'IP Surveillance', 'Access Control Integration', 'Analytics Platform'],
        website: 'https://www.milestonesys.com',
        category: 'Physical Security'
    },
    {
        name: 'Gallagher',
        logo: '/images/Logo-gallagher.png', 
        description: 'Gallagher Security is a global leader in perimeter protection, access control, and alarm monitoring solutions...',
        solutions: ['Perimeter Security', 'Access Control', 'Intrusion Detection', 'Command & Control'],
        website: 'https://security.gallagher.com',
        category: 'Physical Security'
    },
    {
        name: 'Vaxtor',
        logo: '/images/image_2025-11-19_20-57-47.png', 
        description: 'Gallagher Security is a global leader in perimeter protection, access control, and alarm monitoring solutions...',
        solutions: ['Perimeter Security', 'Access Control', 'Intrusion Detection', 'Command & Control'],
        website: 'https://www.vaxtor.com/',
        category: 'Physical Security'
    },
    // {
    //     name: 'i-PRO',
    //     logo: '/images/i-pro-logo.svg', // You can replace with actual logo path
    //     description: '60+ Years of Innovation in Intelligent Edge Devices.',
    //     solutions: ['Perimeter Security', 'Access Control', 'Intrusion Detection', 'Command & Control'],
    //     website: 'https://i-pro.com/',
    //     category: 'Physical Security'
    // }
];

export const VendorSlider: React.FC = () => {
  // Group vendors by category cleanly
  const groupedVendors = vendors.reduce((acc, vendor) => {
    if (!acc[vendor.category]) {
      acc[vendor.category] = [];
    }
    acc[vendor.category].push(vendor);
    return acc;
  }, {} as Record<Vendor['category'], Vendor[]>);

  return (
    <div className="w-full flex flex-col gap-3">
      
      {Object.entries(groupedVendors).map(([category, list], i) => (
		<div
		className="
			rounded-3xl
			border border-purple-400/20
			backdrop-blur-md
			shadow-lg
			p-4 md:p-8
		"
		key={category}
		>
			<MarqueeRow 
			  key={category} 
			  category={category} 
			  vendors={list} 
			  reverse={i % 2 === 1} 
			/>
		</div>
      ))}
    </div>
  );
};

export default VendorSlider;