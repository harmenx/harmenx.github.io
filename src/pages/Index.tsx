// Update this page (the content is just a fallback if you fail to update the page)

import { useState } from "react";
import Hero from "@/components/Hero";
import WorkSection from "@/components/MissionSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import SecondarySection from "@/components/SecondarySection";
import content from "@/lib/content.json";


const sections = [
  { key: "hero", label: "Home", component: Hero },
  { key: "work", label: "Work", component: WorkSection },
  { key: "skills", label: "Skills", component: SkillsSection },
  { key: "about", label: "About", component: AboutSection },
  { key: "secondary", label: "Contact", component: SecondarySection },
];

const Index = () => {
  const [active, setActive] = useState("hero");
  const [fade, setFade] = useState(false);

  // Crossfade logic
  const handleSelect = (key: string) => {
    setFade(true);
    setTimeout(() => {
      setActive(key);
      setFade(false);
    }, 350); // duration matches animation
  };

  const ActiveComponent = sections.find(s => s.key === active)?.component || Hero;

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

      {/* Section Navigation */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-30 flex gap-4 bg-black/40 rounded-full px-6 py-2 shadow-lg">
        {sections.map(s => (
          <button
            key={s.key}
            onClick={() => handleSelect(s.key)}
            className={`px-4 py-2 rounded-full font-light text-white/80 transition-all duration-300 ${active === s.key ? "bg-white/20 text-white" : "hover:bg-white/10"}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Crossfade Section Content */}
      <div className="relative z-20">
        <div
          className={`transition-opacity duration-350 ${fade ? "opacity-0" : "opacity-100"}`}
        >
          <ActiveComponent content={content[active]} />
        </div>
      </div>
    </div>
  );
};

export default Index;
