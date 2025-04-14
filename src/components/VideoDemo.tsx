
import { useState, useRef } from 'react';
import { Play, Pause, Maximize2, Volume2, VolumeX } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Button } from './ui/button';

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="video" className="py-24 bg-gradient-to-b from-brand-darkGray to-brand-darkerGray">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-offWhite">
              Watch <span className="gradient-text">Budget Breezer</span> in Action
            </h2>
            <p className="text-lg text-brand-offWhite/80 max-w-2xl mx-auto">
              See how easy it is to manage your expenses, split bills, and send money to friends
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-brand-darkerGray border border-brand-teal/20">
            <div className="relative aspect-video">
              {/* Replace with your actual video source */}
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="https://placehold.co/1920x1080/26A69A/FFFFFF/png?text=Budget+Breezer+Demo"
              >
                <source src="public/assets/BUDGET-BREEZER - Made with Clipchamp.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play Button Overlay (visible when video is paused) */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                  onClick={togglePlay}
                >
                  <div className="bg-brand-teal/90 rounded-full p-5 hover:bg-brand-teal transition-all transform hover:scale-110">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
              )}
              
              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={togglePlay}
                    className="text-white hover:bg-white/20"
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                  
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={toggleMute}
                      className="text-white hover:bg-white/20"
                    >
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={handleFullscreen}
                      className="text-white hover:bg-white/20"
                    >
                      <Maximize2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal className="mt-12 text-center">
          <p className="text-brand-offWhite/80 max-w-2xl mx-auto">
            Budget Breezer makes financial management intuitive and seamless. Download now and experience it yourself!
          </p>
          <Button className="btn-primary mt-6" asChild>
            <a href="#download">Download the App</a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VideoDemo;
