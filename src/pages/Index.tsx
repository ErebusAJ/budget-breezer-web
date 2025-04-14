
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import VideoDemo from "@/components/VideoDemo";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Initialize scroll reveal functionality
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal, .staggered-reveal');
      
      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-darkerGray text-white">
      <NavBar />
      <main>
        <HeroSection />
        <FeatureSection />
        <FeatureShowcase />
        <VideoDemo />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
