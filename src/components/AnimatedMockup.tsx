
import { useEffect, useRef } from "react";

const AnimatedMockup = () => {
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mockupRef.current) return;
      
      const mockup = mockupRef.current;
      const rect = mockup.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (e.clientX - centerX) / 20;
      const moveY = (e.clientY - centerY) / 20;
      
      mockup.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={mockupRef}
      className="relative transition-transform duration-200 animate-float"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative w-[250px] h-[500px] md:w-[280px] md:h-[560px] bg-black rounded-[36px] p-2 shadow-2xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-10"></div>
        <div className="w-full h-full bg-brand-lightGray rounded-[30px] overflow-hidden">
          {/* App Screenshot */}
          <div className="w-full h-full bg-gradient-to-br from-brand-teal to-brand-lightTeal p-3 flex flex-col">
            <div className="bg-white/20 rounded-lg p-2 mb-2">
              <div className="bg-white rounded-lg p-2 mb-2">
                <div className="h-4 bg-brand-lightGray rounded w-3/4 mb-1"></div>
                <div className="h-3 bg-brand-lightGray rounded w-1/2"></div>
              </div>
              <div className="bg-white/70 rounded-lg p-2">
                <div className="h-3 bg-brand-lightGray rounded w-full mb-1"></div>
                <div className="h-3 bg-brand-lightGray rounded w-3/4 mb-1"></div>
                <div className="h-3 bg-brand-lightGray rounded w-1/2"></div>
              </div>
            </div>
            <div className="flex-1 bg-white/10 rounded-lg p-3">
              <div className="h-5 bg-white/30 rounded mb-2"></div>
              <div className="h-32 bg-white/20 rounded mb-2"></div>
              <div className="h-5 bg-white/30 rounded mb-2"></div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-20 bg-white/20 rounded"></div>
                <div className="h-20 bg-white/20 rounded"></div>
                <div className="h-20 bg-white/20 rounded"></div>
                <div className="h-20 bg-white/20 rounded"></div>
              </div>
            </div>
            <div className="h-12 bg-white/10 rounded-lg mt-2 flex justify-around items-center px-4">
              <div className="h-6 w-6 bg-white/30 rounded-full"></div>
              <div className="h-6 w-6 bg-white/30 rounded-full"></div>
              <div className="h-6 w-6 bg-white/30 rounded-full"></div>
              <div className="h-6 w-6 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reflection */}
      <div 
        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[200px] h-[40px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(5px)",
        }}
      ></div>
    </div>
  );
};

export default AnimatedMockup;
