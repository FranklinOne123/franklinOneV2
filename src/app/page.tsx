import HeroSection from '@/components/home/HeroSection';
import WhyChooseFranklinOneSection from '@/components/home/WhyChooseFranklinOneSection';
import StatsSection from '@/components/home/StatsSection';
import SpecializationsSection from '@/components/home/SpecializationsSection';
import TeamSection from '@/components/home/TeamSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Why Choose Section */}
      <WhyChooseFranklinOneSection />
      
      {/* Specializations Section */}
      <SpecializationsSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
