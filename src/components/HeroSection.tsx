
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

// App screenshot images
const APP_SCREENSHOT = "/app-screenshot-main.png";

const HeroSection = () => {
  const scrollToDownload = () => {
    const downloadSection = document.getElementById("download");
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-brand-darkerGray to-brand-darkGray">
      {/* Background elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-brand-teal/5 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-lightTeal/5 filter blur-3xl"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-brand-teal/20 animate-float" style={{ animationDelay: "0s" }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 rounded-full bg-brand-lightTeal/20 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/3 w-8 h-8 rounded-full bg-brand-teal/10 animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal className="text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Simplify</span> Your 
            <br /> Financial Life
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            Budget Breezer makes expense tracking, bill splitting, and payments effortless. Keep your finances organized like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button onClick={scrollToDownload} className="btn-primary">
              Get the App
            </Button>
            <Button onClick={scrollToFeatures} variant="outline" className="btn-secondary group">
              Learn More
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        </ScrollReveal>
        
        <ScrollReveal className="order-1 md:order-2 flex justify-center">
          <div className="relative w-[270px] h-[550px] md:w-[300px] md:h-[610px]">
            {/* Phone Frame */}
            <div className="relative w-full h-full bg-brand-darkerGray rounded-[40px] p-3 shadow-2xl">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-brand-darkerGray rounded-b-3xl z-10"></div>
              
              {/* Phone Screen - Using an actual screenshot image */}
              <div className="w-full h-full rounded-[32px] overflow-hidden">
                <img 
                  src={APP_SCREENSHOT}
                  alt="Budget Breezer App Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Reflection */}
            <div 
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-4/5 h-14 rounded-full opacity-20"
              style={{
                background: "radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
                filter: "blur(8px)",
              }}
            ></div>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-brand-teal" />
      </div>
    </section>
  );
};

export default HeroSection;
