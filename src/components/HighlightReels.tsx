
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Video, Zap, Camera, Award } from "lucide-react";
import AnimatedButton from "./ui/AnimatedButton";

const HighlightReels = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const highlights = [
    {
      id: 1,
      image: "/lovable-uploads/13d93fef-223a-4823-9e47-debd07660e5a.png",
      title: "Pro Tournament Series",
      description: "Official tournaments with advanced analytics tracking"
    },
    {
      id: 2,
      image: "/lovable-uploads/b26b1a66-b5dd-4b2a-a5f9-1cf3651c0aa0.png",
      title: "Night Play Innovation",
      description: "Advanced lighting systems for 24/7 gameplay"
    },
    {
      id: 3,
      image: "/lovable-uploads/ff48a1e0-d070-43db-a4b7-b411e373a2f7.png",
      title: "Pro Tournament Series",
      description: "Competitive gameplay with real-time stats"
    },
    {
      id: 4,
      image: "/lovable-uploads/2892bb26-6063-4124-8931-b973703f4d88.png",
      title: "Professional Tournaments",
      description: "Championship tournaments with packed stands"
    },
    {
      id: 5,
      image: "/lovable-uploads/518b77bf-b394-4e03-9fda-33e363d16cc8.png",
      title: "Technical Play",
      description: "Advanced players with technical skill tracking"
    }
  ];

  const features = [
    {
      icon: <Camera className="w-5 h-5" />,
      title: "AI Video Capture",
      description: "Automated camera systems track every movement and generate highlight reels in real-time."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Instant Highlights",
      description: "Key moments automatically detected and compiled into shareable clips."
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Performance Analysis",
      description: "Frame-by-frame breakdown with actionable insights to improve your game."
    }
  ];

  // Setup autoplay
  useEffect(() => {
    startSlideInterval();
    
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, []);

  // Reset interval when active slide changes manually
  useEffect(() => {
    if (!isPaused) {
      startSlideInterval();
    }
  }, [activeSlide, isPaused]);

  const startSlideInterval = () => {
    // Clear any existing interval
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
    
    // Set new interval
    slideIntervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev === highlights.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds
  };

  const pauseAutoplay = () => {
    setIsPaused(true);
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = null;
    }
  };

  const resumeAutoplay = () => {
    setIsPaused(false);
    startSlideInterval();
  };

  const nextSlide = () => {
    pauseAutoplay();
    setActiveSlide((prev) => (prev === highlights.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    pauseAutoplay();
    setActiveSlide((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    pauseAutoplay();
    setActiveSlide(index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Featured Highlight Reels
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our AI-powered video system automatically captures the best moments from every game.
            No camera operators required—just pure, action-packed highlights ready to share.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side: Feature description */}
          <div className="order-2 md:order-1">
            <div className="p-1 md:p-6">
              <h3 className="text-2xl font-bold text-navy mb-4">
                Capture Every Winning Shot
              </h3>
              
              <p className="text-gray-600 mb-6">
                Our cutting-edge video capture technology transforms how players experience the game.
                SwingNet's AI cameras track every movement, automatically generating highlight reels
                that can be instantly shared with friends or analyzed for performance improvement.
              </p>
              
              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <AnimatedButton withArrow size="md">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  <span>View All Highlights</span>
                </div>
              </AnimatedButton>
            </div>
          </div>
          
          {/* Right side: Image slider */}
          <div className="order-1 md:order-2 relative">
            <div className="bg-navy-dark rounded-xl overflow-hidden relative aspect-[4/3] shadow-xl">
              {/* Slides with transition effect */}
              {highlights.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent"></div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="animate-pulse w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-white/80 text-sm uppercase tracking-wider">Live Highlight</span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-1">{slide.title}</h3>
                    <p className="text-white/80">{slide.description}</p>
                  </div>
                </div>
              ))}
              
              {/* "Video" playback indicator */}
              <div className="absolute top-4 right-6 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white/80 text-xs border border-white/10 flex items-center gap-2">
                <div className="animate-pulse w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Auto-Playing Highlights</span>
              </div>
              
              {/* Progress bar moved to bottom right */}
              <div className="absolute bottom-6 right-6 flex gap-2">
                {highlights.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeSlide 
                        ? 'bg-primary w-8' 
                        : 'bg-white/30 hover:bg-white/50 w-2'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* More prominent slider controls - Left and Right navigation buttons */}
              <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-colors transform hover:scale-105 pointer-events-auto"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-colors transform hover:scale-105 pointer-events-auto"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#0EA5E9]/10 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightReels;
