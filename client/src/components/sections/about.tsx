import { motion } from "framer-motion";
import { ShieldCheck, Anchor, Component } from "lucide-react";
import heroImage from "@assets/generated_images/goliathtech_yellow_and_black_helical_pile_installation_equipment.png";

export function About() {
  return (
    <section id="technology" className="py-24 bg-zinc-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
             <div className="relative border-4 border-white/10 p-2">
               <img
                src={heroImage}
                alt="GoliathTech Technology"
                className="w-full h-auto grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary flex items-center justify-center p-4 text-center">
                <span className="font-bold uppercase text-xl leading-none">Lifetime Warranty</span>
              </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 md:order-2"
          >
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">The Technology</span>
              <h2 className="text-4xl md:text-5xl font-bold uppercase leading-none mb-6">
                Engineered to <br/> <span className="text-zinc-500">Surpass Standards</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                As a certified GoliathTech installer, we use piles made from 100% galvanized steel (60 ksi). This innovative technology guarantees a foundation system that is stronger, more precise, and more durable than industry norms.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-lg mb-1">Double Protection</h3>
                  <p className="text-sm text-zinc-400">Inside and outside galvanization protects against corrosion and freeze-thaw cycles.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <Anchor className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-lg mb-1">Exclusive Anchoring</h3>
                  <p className="text-sm text-zinc-400">Our patented system prevents lateral and vertical movement for superior stability.</p>
                </div>
              </div>

               <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <Component className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold uppercase text-lg mb-1">Reinforced Joints</h3>
                  <p className="text-sm text-zinc-400">Allows for pile extension while maintaining structural integrity.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
