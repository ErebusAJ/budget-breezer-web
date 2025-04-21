
import { Mail, Phone, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-brand-lightTeal">Budget Breezer</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Making personal finance management and expense splitting simple, intuitive, and stress-free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-teal transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-teal transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/devErebus" className="bg-gray-800 p-2 rounded-full hover:bg-brand-teal transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-teal transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-lightTeal transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-brand-lightTeal transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#screenshots" className="text-gray-400 hover:text-brand-lightTeal transition-colors">
                  App Preview
                </a>
              </li>
              <li>
                <a href="#download" className="text-gray-400 hover:text-brand-lightTeal transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-lightTeal transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-lightTeal transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-lightTeal mr-3" />
                <a href="mailto:contact@budgetbreezer.com" className="text-gray-400 hover:text-white transition-colors">
                  dev.erebusaj@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-lightTeal mr-3" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md bg-gray-800 border-gray-700 focus:outline-none focus:ring-1 focus:ring-brand-teal flex-1"
                />
                <button className="px-4 py-2 bg-brand-teal text-white rounded-r-md hover:bg-brand-lightTeal transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Budget Breezer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
