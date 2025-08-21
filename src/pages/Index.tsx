// Update this page (the content is just a fallback if you fail to update the page)

import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import SecondarySection from "@/components/SecondarySection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Global Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        onError={(e) => {
          console.error("Video failed to load:", e);
          (e.target as HTMLVideoElement).style.display = 'none';
        }}
      >
        <source 
          src="https://cdn.midjourney.com/video/cb84f296-92a0-4a37-a0e3-1c9c95299488/0.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Global Dark Overlay */}
      <div className="fixed inset-0 bg-black/50 z-10" />

      {/* All Content */}
      <div className="relative z-20">
        <Hero />
        <MissionSection />
        <SkillsSection />
        <AboutSection />
        <SecondarySection />
      </div>
    </div>
  );
};

export default Index;
