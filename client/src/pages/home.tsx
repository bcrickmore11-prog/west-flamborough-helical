import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { BenefitsSection } from "@/components/sections/benefits";
import { About } from "@/components/sections/about";
import { ApplicationsCarousel } from "@/components/sections/applications-carousel";
import { AudienceSegments } from "@/components/sections/audience-segments";
import { Projects } from "@/components/sections/projects";
import { StatsBar } from "@/components/sections/stats-bar";
import { CertificationsSection } from "@/components/sections/certifications";
import { EngineeringServices } from "@/components/sections/engineering-services";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BenefitsSection />
        <About />
        <ApplicationsCarousel />
        <AudienceSegments />
        <Projects />
        <StatsBar />
        <CertificationsSection />
        <EngineeringServices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
