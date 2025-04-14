
import { Button } from "@/components/ui/button";
import { Download, PanelRight, Star } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-brand-teal text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full border-2 border-white"></div>
        <div className="absolute bottom-1/4 -right-10 w-60 h-60 rounded-full border-2 border-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-white"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Breeze Through Your Finances?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10">
            Download Budget Breezer today and start managing your money with confidence and ease.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5 mb-12">
            {/* Google Play Button */}
            <Button className="bg-white text-brand-teal hover:bg-gray-100 flex items-center justify-center gap-3 py-6 rounded-xl">
              <div>
                <PanelRight className="h-8 w-8" />
              </div>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-xl font-semibold">Google Play</div>
              </div>
            </Button>

            {/* App Store Button (Coming Soon) */}
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 flex items-center justify-center gap-3 py-6 rounded-xl cursor-not-allowed opacity-70">
              <div>
                <Star className="h-8 w-8" />
              </div>
              <div className="text-left">
                <div className="text-xs">Coming Soon TO</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </Button>

            {/* Direct APK Download */}
            <Button asChild className="bg-white/20 hover:bg-white/30 text-white border border-white/40 flex items-center justify-center gap-3 py-6 rounded-xl">
              <a href="/assets/budget-breezer.apk" download>
                <Download className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">DOWNLOAD</div>
                  <div className="text-xl font-semibold">APK File</div>
                </div>
              </a>
            </Button>

          </div>

          {/* Trust elements */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Download className="h-5 w-5" />
              </div>
              <span>100+ Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5" />
              </div>
              <span>4.8 Star Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <span>Secure Transactions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
