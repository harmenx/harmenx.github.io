import { Button } from "@/components/ui/button";

type HeroContent = { title?: string; subtitle?: string; description?: string };
const Hero = ({
  content,
  onViewWork,
}: {
  content?: HeroContent;
  onViewWork?: () => void;
}) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="relative z-30 flex items-center justify-between p-8 lg:p-12">
        <div className="text-white font-light tracking-wide text-xl">
          {content?.title || "Harmen Dark"}
        </div>

        <Button
          variant="outline"
          size="default"
          onClick={onViewWork}
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
            {content?.subtitle || "Technical Lead · Distributed Systems · AI-Augmented Platforms"}
          </p>

          {/* Main Headlines */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none text-white mb-2">
              {content?.title || "Harmen Dark"}
            </h1>
          </div>

          {/* Description Paragraph */}
          <div className="lg:max-w-md">
            <p className="text-white/70 font-light leading-relaxed">
              {content?.description || "Staff Software Engineer with 13+ years setting technical direction and owning distributed systems end-to-end at scale — Amazon, Xero, and five years running an independent consultancy."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;