import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="relative z-30 flex items-center justify-between p-8 lg:p-12">
        {/* Logo */}
        <div className="text-white font-light tracking-wide text-xl">
          Sandstorm®
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#mission" 
            className="text-white/80 hover:text-white transition-all duration-300 font-light tracking-wide"
          >
            Mission
          </a>
          <a 
            href="#skills" 
            className="text-white/80 hover:text-white transition-all duration-300 font-light tracking-wide"
          >
            Skills
          </a>
          <a 
            href="#about" 
            className="text-white/80 hover:text-white transition-all duration-300 font-light tracking-wide"
          >
            About
          </a>
        </div>

        {/* CTA Button */}
        <Button 
          variant="outline" 
          size="default"
          className="rounded-full border-white/30 text-white/80 hover:border-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 font-light"
        >
          View Work
        </Button>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 flex-1 flex items-end">
        <div className="w-full pb-8 px-8 lg:pb-12 lg:px-12 mt-24">
          {/* Tagline */}
          <p className="text-white/60 text-sm font-light tracking-wide mb-6">
            Crafting digital experiences that leave lasting impressions.
          </p>

          {/* Main Headlines */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none text-white mb-2">
              Build the Future.
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none text-white/90">
              Design the Story.
            </h1>
          </div>

          {/* Description Paragraph */}
          <div className="lg:max-w-md">
            <p className="text-white/70 font-light leading-relaxed">
              Where innovation meets artistry, I create immersive digital experiences that push boundaries. 
              Every project is a journey from concept to reality, crafted with precision and passion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;