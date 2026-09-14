import HeroSection from '@/components/about/HeroSection';
import VisionMissionSection from '@/components/about/VisionMissionSection';
import GetToKnowUsSection from '@/components/about/GetToKnowUsSection';
//import TeamMembers from '@/components/about/TeamMembers';
import OurCustomersSection from '@/components/about/OurCustomers';

export const metadata = {
  title: 'About Us - FranklinOne',
  description: 'Learn about FranklinOne, our history, mission, and commitment to cybersecurity excellence.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-4">
      {/* 1. Hero Section - Introduction */}
      <HeroSection />
      
      {/* 2. Stats Section - Our Numbers */}
      {/* <AboutStatsSection /> */}
      
      {/* 3. Vision & Mission - Our Purpose & Direction */}
      <VisionMissionSection />
      {/* 6. Get to Know Us - Our Background & Principles */}
      <GetToKnowUsSection />
      {/* 7. Our Customers - Who We Serve */}
      {/* <OurCustomersSection /> */}
      {/* 5. Team Members - Our Leadership */}
      {/* <TeamMembers /> */}
      {/* 5. Company Story - Our Journey */}
      {/* <CompanyStorySection /> */}
      
      {/* 5. Call to Action - Next Steps */}
      {/* <AboutCTASection /> */}
    </div>
  );
}