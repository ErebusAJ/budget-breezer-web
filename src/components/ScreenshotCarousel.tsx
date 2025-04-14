
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

// Screenshots with image paths
const screenshots = [
  {
    title: "Dashboard Overview",
    description: "Get a complete view of your expenses and balances at a glance",
    image: "/app-dashboard.png",
  },
  {
    title: "Split Expenses",
    description: "Easily split bills among friends, roommates or travel groups",
    image: "/app-split.png",
  },
  {
    title: "Expense Analytics",
    description: "Visualize your spending patterns with detailed charts",
    image: "/app-analytics.png",
  },
  {
    title: "Send & Receive Money",
    description: "Transfer funds directly to friends using multiple payment methods",
    image: "/app-payment.png",
  },
];

const ScreenshotCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);
  
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  return (
    <section id="screenshots" className="py-24 bg-brand-darkGray">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See the App <span className="gradient-text">in Action</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Experience how Budget Breezer simplifies your financial management with its intuitive interface
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <div 
            className="relative max-w-6xl mx-auto"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="min-w-full">
                    {/* Content with Screenshot */}
                    <div className="aspect-[9/16] md:aspect-auto md:h-[600px] bg-brand-darkerGray p-4 md:p-8 rounded-2xl">
                      <div className="h-full w-full rounded-xl flex flex-col md:flex-row overflow-hidden bg-brand-darkGray/50 backdrop-blur-sm">
                        {/* Left side: App screenshot */}
                        <div className="md:w-1/2 flex justify-center items-center p-4 md:p-8">
                          <div className="relative w-[200px] md:w-[280px] h-[400px] md:h-[560px] bg-black rounded-[30px] p-2 shadow-xl">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl z-10"></div>
                            <div className="w-full h-full rounded-[25px] overflow-hidden">
                              <img 
                                src={screenshot.image}
                                alt={screenshot.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Right side: Description */}
                        <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-10 text-white">
                          <h3 className="text-2xl md:text-3xl font-bold mb-4">{screenshot.title}</h3>
                          <p className="text-lg md:text-xl mb-6">{screenshot.description}</p>
                          <ul className="space-y-3">
                            <li className="flex items-center">
                              <div className="h-2 w-2 bg-brand-teal rounded-full mr-2"></div>
                              <span>Intuitive user interface</span>
                            </li>
                            <li className="flex items-center">
                              <div className="h-2 w-2 bg-brand-teal rounded-full mr-2"></div>
                              <span>Easy navigation between features</span>
                            </li>
                            <li className="flex items-center">
                              <div className="h-2 w-2 bg-brand-teal rounded-full mr-2"></div>
                              <span>Designed for daily use</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <Button 
              variant="outline" 
              className="absolute top-1/2 left-4 transform -translate-y-1/2 rounded-full p-2 bg-black/50 hover:bg-black/80 border-none text-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline" 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full p-2 bg-black/50 hover:bg-black/80 border-none text-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-brand-teal w-8" : "bg-gray-600"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;
