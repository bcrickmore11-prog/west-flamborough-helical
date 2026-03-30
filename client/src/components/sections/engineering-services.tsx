import { motion } from "framer-motion";
import { DraftingCompass, FileCheck, Zap, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function EngineeringServices() {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Comprehensive Support</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-black mb-6">
            Engineering & Design <br/><span className="text-zinc-500">Excellence</span>
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed">
            We don't just install; we engineer solutions. Our in-house capabilities streamline your project from concept to completion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* In-House Engineering */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-l-4 border-l-primary border-t-0 border-r-0 border-b-0 shadow-lg bg-white rounded-none p-6 md:p-8">
              <CardContent className="p-0 space-y-6">
                <div className="w-16 h-16 bg-zinc-900 flex items-center justify-center text-primary mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold uppercase mb-3">In-House Engineering</h3>
                  <p className="text-zinc-600 mb-6 leading-relaxed">
                    Our dedicated in-house engineering team allows us to bypass third-party delays. We provide rapid project quoting and handle all necessary permitting requirements internally.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <FileCheck className="h-5 w-5 text-primary" />
                      <span className="font-bold text-sm uppercase text-zinc-700">Quick Turnaround on Quotes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FileCheck className="h-5 w-5 text-primary" />
                      <span className="font-bold text-sm uppercase text-zinc-700">Streamlined Permitting Process</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FileCheck className="h-5 w-5 text-primary" />
                      <span className="font-bold text-sm uppercase text-zinc-700">Stamped Engineering Drawings</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Design Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full border-l-4 border-l-black border-t-0 border-r-0 border-b-0 shadow-lg bg-white rounded-none p-6 md:p-8">
              <CardContent className="p-0 space-y-6">
                <div className="w-16 h-16 bg-primary flex items-center justify-center text-black mb-4">
                  <DraftingCompass className="h-8 w-8" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold uppercase mb-3">Design Services</h3>
                  <p className="text-zinc-600 mb-6 leading-relaxed">
                    No plans? No problem. If you haven't secured a design yet, our team can provide full design services tailored to your specific needs and site conditions.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <PenTool className="h-5 w-5 text-black" />
                      <span className="font-bold text-sm uppercase text-zinc-700">Custom Foundation Design</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <PenTool className="h-5 w-5 text-black" />
                      <span className="font-bold text-sm uppercase text-zinc-700">Site-Specific Solutions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <PenTool className="h-5 w-5 text-black" />
                      <span className="font-bold text-sm uppercase text-zinc-700">Load Calculation & Optimization</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
