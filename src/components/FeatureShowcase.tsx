
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

// Mock screenshot data with real image paths
const screenshots = [
  {
    title: "Dashboard Overview",
    description: "Get a complete view of your expenses and balances at a glance",
    image: "/assets/screenshots/dashboard.jpg",
    features: [
      "Intuitive user interface",
      "Easy navigation between features",
      "Designed for daily use"
    ]
  },
  {
    title: "Expense Analytics",
    description: "Visualize your spending patterns with detailed charts",
    image: "/assets/screenshots/analytics.jpg",
    features: [
      "Monthly spending breakdown",
      "Category-wise analysis",
      "Spending trends over time"
    ]
  },
  {
    title: "Expense Groups",
    description: "Organize your expenses by creating dedicated groups for trips, events, or households.",
    image: "/assets/screenshots/group.jpg",
    features: [
      "Create and manage multiple groups",
      "Invite members to join",
      "View group-wise totals and balances"
    ]
  },
  {
    title: "Split Expenses",
    description: "Easily split bills among friends, roommates or travel groups",
    image: "/assets/screenshots/split-expense.jpg",
    features: [
      "Equal or custom splits",
      "Track who paid what",
      "Settle debts easily"
    ]
  },
  {
    title: "Send & Receive Money",
    description: "Transfer funds directly to friends using multiple payment methods",
    image: "/assets/screenshots/payment.jpg",
    features: [
      "Multiple payment options",
      "Secure transactions",
      "Transaction history"
    ]
  },
];

const FeatureShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const nextFeature = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const prevFeature = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      nextFeature();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentFeature = screenshots[activeIndex];

  return (
    <section id="screenshots" className="py-24 bg-brand-darkGray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-teal"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-brand-lightTeal"></div>
        </div>
      </div>

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover how Budget Breezer simplifies your financial management with its intuitive interface
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto">
          <div
            ref={constraintsRef}
            className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 relative"
          >
            {/* Feature Text */}
            <ScrollReveal className="md:w-1/2 order-2 md:order-1 px-4">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.5 }}
                className="p-6 md:p-8 rounded-2xl glass-card"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                  {currentFeature.title}
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  {currentFeature.description}
                </p>

                <div className="space-y-3">
                  {currentFeature.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="h-2 w-2 bg-brand-teal rounded-full mr-3"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center md:justify-start space-x-2 mt-8">
                  {screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > activeIndex ? 1 : -1);
                        setActiveIndex(idx);
                      }}
                      className={`h-3 w-3 rounded-full transition-all ${idx === activeIndex
                        ? "bg-brand-teal w-8"
                        : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      aria-label={`Go to feature ${idx + 1}`}
                    ></button>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Phone Display with real screenshot */}
            <ScrollReveal className="md:w-1/2 order-1 md:order-2">
              <div className="relative h-[500px] md:h-[700px] flex items-center justify-center perspective">
                <motion.div
                  drag
                  dragConstraints={constraintsRef}
                  whileTap={{ cursor: "grabbing" }}
                  className="h-[450px] w-[250px] md:h-[600px] md:w-[320px] cursor-grab"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateY(15deg) rotateX(5deg)"
                  }}
                >
                  {/* Phone Frame */}
                  <div className="absolute inset-0 bg-brand-darkerGray rounded-[30px] p-2 shadow-xl"
                    style={{
                      transform: "translateZ(0px)",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-brand-darkerGray rounded-b-xl z-10"></div>

                    {/* Phone Screen with Image */}
                    <div className="w-full h-full rounded-[25px] overflow-hidden">
                      <img
                        src={currentFeature.image}
                        alt={currentFeature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Decorative elements floating in 3D space */}
                  <div
                    className="absolute h-16 w-16 glass-card shadow-lg"
                    style={{
                      transform: "translateZ(40px) translateX(-100px) translateY(-80px) rotate(15deg)",
                    }}
                  >
                    <div className="h-full flex flex-col justify-center items-center p-2">
                      <div className="h-3 w-10 bg-white/40 rounded-full mb-1"></div>
                      <div className="h-5 w-8 bg-white/30 rounded-full"></div>
                    </div>
                  </div>

                  {/* <div
                    className="absolute h-20 w-20 glass-card shadow-lg"
                    style={{
                      transform: "translateZ(60px) translateX(100px) translateY(60px) rotate(-10deg)",
                    }}
                  >
                    <div className="h-full flex flex-col justify-center items-center p-2">
                      <div className="h-8 w-8 rounded-full bg-white/20 mb-2"></div>
                      <div className="h-3 w-12 bg-white/40 rounded-full"></div>
                    </div>
                  </div> */}
                </motion.div>

                {/* Reflection/shadow */}
                <div
                  className="absolute bottom-20 w-40 h-10 rounded-full"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
                    filter: "blur(8px)",
                  }}
                ></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
