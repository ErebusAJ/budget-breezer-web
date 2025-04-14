
import { useEffect, useRef } from "react";

const ModernPhoneMockup = () => {
  const mockupRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mockupRef.current || !wrapperRef.current) return;
      
      const wrapper = wrapperRef.current;
      const mockup = mockupRef.current;
      const rect = wrapper.getBoundingClientRect();
      
      // Calculate the center of the wrapper
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate the distance from the center (in percentage)
      const distanceX = (e.clientX - centerX) / (rect.width / 2);
      const distanceY = (e.clientY - centerY) / (rect.height / 2);
      
      // Apply rotation based on the distance (limited range for subtle effect)
      const maxRotation = 8; // degrees
      const rotateX = -distanceY * maxRotation;
      const rotateY = distanceX * maxRotation;
      
      // Apply the transformation
      mockup.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (!mockupRef.current) return;
      
      // Reset rotation when mouse leaves the wrapper
      mockupRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      
      // Add a smooth transition only when resetting
      mockupRef.current.style.transition = 'transform 0.5s ease-out';
      
      // Remove the transition after it completes
      setTimeout(() => {
        if (mockupRef.current) {
          mockupRef.current.style.transition = '';
        }
      }, 500);
    };

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("mousemove", handleMouseMove);
      wrapper.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (wrapper) {
        wrapper.removeEventListener("mousemove", handleMouseMove);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div 
      ref={wrapperRef}
      className="relative w-full h-full flex items-center justify-center"
    >
      <div 
        ref={mockupRef}
        className="relative transition-transform duration-75 animate-float will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Phone Frame */}
        <div className="relative w-[270px] h-[550px] md:w-[300px] md:h-[610px] bg-brand-darkerGray rounded-[40px] p-3 shadow-2xl">
          {/* Phone Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-brand-darkerGray rounded-b-3xl z-10"></div>
          
          {/* Phone Screen */}
          <div className="w-full h-full bg-brand-offWhite rounded-[32px] overflow-hidden">
            
            {/* App UI */}
            <div className="w-full h-full bg-gradient-to-br from-brand-teal to-brand-lightTeal p-3 flex flex-col">
              {/* Status Bar */}
              <div className="bg-white/20 rounded-full p-2 mb-3 flex justify-between items-center">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                </div>
                <div className="text-white text-xs font-medium">Budget Breezer</div>
                <div className="flex space-x-1">
                  <div className="h-2 w-6 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Balance Card */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 mb-3">
                <div className="text-white/70 text-xs mb-1">Total Balance</div>
                <div className="text-white text-2xl font-bold mb-1">$2,459.50</div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-xs">Last updated: Today</span>
                  <div className="bg-white/30 rounded-full px-2 py-1 text-xs text-white">+5.2%</div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="flex justify-between mb-3">
                <div className="bg-white/10 rounded-xl p-2 flex flex-col items-center w-[30%]">
                  <div className="bg-white/20 h-8 w-8 rounded-full mb-1 flex items-center justify-center">
                    <div className="h-4 w-4 bg-white/70 rounded-sm"></div>
                  </div>
                  <span className="text-white text-xs">Send</span>
                </div>
                <div className="bg-white/10 rounded-xl p-2 flex flex-col items-center w-[30%]">
                  <div className="bg-white/20 h-8 w-8 rounded-full mb-1 flex items-center justify-center">
                    <div className="h-4 w-4 bg-white/70 rounded-sm"></div>
                  </div>
                  <span className="text-white text-xs">Split</span>
                </div>
                <div className="bg-white/10 rounded-xl p-2 flex flex-col items-center w-[30%]">
                  <div className="bg-white/20 h-8 w-8 rounded-full mb-1 flex items-center justify-center">
                    <div className="h-4 w-4 bg-white/70 rounded-sm"></div>
                  </div>
                  <span className="text-white text-xs">Request</span>
                </div>
              </div>
              
              {/* Recent Transactions */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 flex-1">
                <div className="text-white font-semibold mb-2">Recent Activity</div>
                
                {/* Transaction Items */}
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center justify-between bg-white/5 p-2 rounded-xl">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-white/20 rounded-full mr-2"></div>
                        <div>
                          <div className="text-white text-xs font-medium">Grocery Shopping</div>
                          <div className="text-white/70 text-xs">Yesterday</div>
                        </div>
                      </div>
                      <div className="text-white text-sm font-medium">-$24.50</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom Navigation */}
              <div className="h-14 mt-3 bg-white/10 backdrop-blur-md rounded-full flex justify-around items-center px-4">
                <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="h-3 w-3 bg-white rounded-sm"></div>
                </div>
                <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="h-3 w-3 bg-white rounded-sm"></div>
                </div>
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center -mt-5 border-4 border-brand-teal shadow-lg">
                  <div className="h-4 w-4 bg-brand-teal rounded-sm"></div>
                </div>
                <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="h-3 w-3 bg-white rounded-sm"></div>
                </div>
                <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="h-3 w-3 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reflection */}
        <div 
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-4/5 h-14 rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
            filter: "blur(8px)",
          }}
        ></div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-8 -right-8 w-12 h-12 bg-brand-teal/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-5 -left-8 w-10 h-10 bg-brand-lightTeal/20 rounded-full blur-lg"></div>
      </div>
    </div>
  );
};

export default ModernPhoneMockup;
