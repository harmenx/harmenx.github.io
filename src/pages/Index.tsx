import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Hero from "@/components/Hero";
import WorkSection from "@/components/MissionSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import SecondarySection from "@/components/SecondarySection";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import content from "@/lib/content.json";

const sections = [
  { key: "hero", label: "Home", component: Hero },
  { key: "work", label: "Work", component: WorkSection },
  { key: "skills", label: "Skills", component: SkillsSection },
  { key: "about", label: "About", component: AboutSection },
  { key: "secondary", label: "Contact", component: SecondarySection },
] as const;

type SectionKey = (typeof sections)[number]["key"];

const Index = () => {
  const [active, setActive] = useState<SectionKey>("hero");
  const [fade, setFade] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const handleSelect = (key: SectionKey) => {
    setMobileNavOpen(false);
    setFade(true);
    setTimeout(() => {
      setActive(key);
      setFade(false);
    }, 350);
  };

  const renderSection = () => {
    switch (active) {
      case "hero":
        return (
          <Hero
            content={content.hero}
            onViewWork={() => handleSelect("work")}
          />
        );
      case "work":
        return <WorkSection content={content.work} />;
      case "skills":
        return <SkillsSection content={content.skills} />;
      case "about":
        return <AboutSection content={content.about} />;
      case "secondary":
        return (
          <SecondarySection
            content={content.secondary}
            onViewWork={() => handleSelect("work")}
          />
        );
      default:
        return (
          <Hero
            content={content.hero}
            onViewWork={() => handleSelect("work")}
          />
        );
    }
  };

  const navButtons = sections.map((s) => (
    <button
      key={s.key}
      type="button"
      onClick={() => handleSelect(s.key)}
      aria-current={active === s.key ? "page" : undefined}
      className={`px-4 py-2 rounded-full font-light text-white/80 transition-all duration-300 ${
        active === s.key ? "bg-white/20 text-white" : "hover:bg-white/10"
      }`}
    >
      {s.label}
    </button>
  ));

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>

      {!prefersReducedMotion && (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg"
          className="fixed inset-0 w-full h-full object-cover z-0"
          onError={(e) => {
            (e.target as HTMLVideoElement).style.display = "none";
          }}
        >
          <source
            src="https://cdn.midjourney.com/video/cb84f296-92a0-4a37-a0e3-1c9c95299488/0.mp4"
            type="video/mp4"
          />
        </video>
      )}

      {prefersReducedMotion && (
        <div
          className="fixed inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/placeholder.svg)" }}
          aria-hidden="true"
        />
      )}

      <div className="fixed inset-0 bg-black/50 z-10" aria-hidden="true" />

      <nav
        aria-label="Section navigation"
        className="fixed top-8 left-1/2 -translate-x-1/2 z-30"
      >
        {isMobile ? (
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-white/80 shadow-lg hover:bg-black/60"
              >
                <Menu className="h-5 w-5" />
                <span className="font-light">{sections.find((s) => s.key === active)?.label}</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-white/10">
              <SheetHeader>
                <SheetTitle className="text-white font-light">Navigation</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-2">{navButtons}</div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex gap-4 bg-black/40 rounded-full px-6 py-2 shadow-lg">
            {navButtons}
          </div>
        )}
      </nav>

      <main id="main" className="relative z-20">
        <div
          className={`transition-opacity duration-350 ${fade ? "opacity-0" : "opacity-100"}`}
        >
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Index;
