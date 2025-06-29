
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Code2 } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-lg animate-pulse delay-500"></div>
        
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="currentColor" className="text-purple-500">
                  <animate attributeName="r" values="1;2;1" dur="3s" repeatCount="indefinite" />
                </circle>
              </pattern>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(219, 39, 119)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <path d="M100,200 Q300,100 500,200 T700,150" stroke="url(#lineGradient)" strokeWidth="2" fill="none">
              <animate attributeName="d" 
                values="M100,200 Q300,100 500,200 T700,150;M100,180 Q300,120 500,180 T700,170;M100,200 Q300,100 500,200 T700,150" 
                dur="6s" repeatCount="indefinite" />
            </path>
            <path d="M150,300 Q350,250 550,300 T750,280" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" opacity="0.7">
              <animate attributeName="d" 
                values="M150,300 Q350,250 550,300 T750,280;M150,320 Q350,270 550,320 T750,300;M150,300 Q350,250 550,300 T750,280" 
                dur="8s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full text-sm font-medium text-purple-700 mb-6 border border-purple-200/50 backdrop-blur-sm">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Developer</span>
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent relative">
                Harika
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-500/20 blur-lg rounded-lg opacity-75 animate-pulse"></div>
              </span>
            </h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed flex items-center gap-2">
                <Code2 className="w-6 h-6 text-purple-600" />
                Aspiring Developer | Web & Embedded Systems Enthusiast
              </p>
              <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                Passionate about creating innovative solutions in both software development and electronics, 
                with a focus on cutting-edge web technologies and embedded systems design powered by modern AI principles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative group"
                onClick={() => scrollToSection("#projects")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center gap-2">
                  View My Work
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                onClick={() => scrollToSection("#contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            {/* Main Card */}
            <div className="relative z-10 bg-gradient-to-br from-white/80 to-purple-50/80 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-white/20">
              <div className="bg-white/90 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
                <div className="w-full h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Profile Picture */}
                  <img 
                    src="/lovable-uploads/44113c33-abd7-4d30-9717-3e170ee77311.png" 
                    alt="Harika - Professional Photo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  
                  {/* Overlay for better text visibility */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <p className="text-white font-medium text-center">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-70 animate-bounce shadow-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-70 animate-bounce delay-500 shadow-lg"></div>
            
            {/* Tech Icons */}
            <div className="absolute top-10 left-10 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg animate-pulse">
              <Code2 className="w-6 h-6 text-purple-600" />
            </div>
            <div className="absolute bottom-10 right-10 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg animate-pulse delay-1000">
              <Brain className="w-6 h-6 text-pink-600" />
            </div>
            
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
              <defs>
                <linearGradient id="heroLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="rgb(219, 39, 119)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path 
                d="M50,100 Q200,50 350,100" 
                stroke="url(#heroLineGradient)" 
                strokeWidth="2" 
                fill="none"
                className="animate-pulse"
              />
              <path 
                d="M100,300 Q250,250 400,300" 
                stroke="url(#heroLineGradient)" 
                strokeWidth="1.5" 
                fill="none"
                className="animate-pulse delay-500"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
