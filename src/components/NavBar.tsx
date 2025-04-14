
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Budget Breezer</span>
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-brand-teal transition-colors`}>
            Features
          </a>
          <a href="#screenshots" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-brand-teal transition-colors`}>
            App
          </a>
          <a href="#download" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-brand-teal transition-colors`}>
            Download
          </a>
        </div>
        <Button asChild variant="ghost" className="hidden md:inline-flex">
          <a href="#download" className="btn-primary">
            Get the App
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
