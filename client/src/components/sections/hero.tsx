import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-zinc-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}attached_assets/IMG_4285_1765763349044.jpeg`}
          alt="GoliathTech Helical Pile Installation"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 mb-8 border-l-4 border-primary">
              <span className="text-white font-bold uppercase tracking-widest text-sm">
                Certified GoliathTech Installer
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 text-white uppercase italic">
              Stronger. <br />
              Reliable. <br />
              <span className="text-primary">Precise.</span>
            </h1>
            
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-xl font-medium border-l-2 border-white/20 pl-6">
              The best screw pile foundation system. We provide immovable strength for residential and commercial projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg" className="text-base px-10 h-14 font-bold uppercase tracking-wide bg-primary hover:bg-primary/90 text-white border-none rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none transition-all">
                  Request a Quote
                </Button>
              </a>
              <a href="#applications">
                <Button variant="outline" size="lg" className="text-base px-10 h-14 font-bold uppercase tracking-wide border-2 border-white text-white hover:bg-white hover:text-black rounded-none transition-all">
                  Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-white/80 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary" /> Rapid Installation
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary" /> No Excavation
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary" /> Year-Round
              </div>
               <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary" /> 100% Galvanized
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-4 bg-primary" />
      <div className="absolute bottom-4 right-4 w-24 h-24 border-r-4 border-b-4 border-white/20" />
    </section>
  );
}
