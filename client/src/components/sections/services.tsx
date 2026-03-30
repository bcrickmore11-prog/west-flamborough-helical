import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Layers, Home, Building2, Sun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const applications = [
  {
    icon: Home,
    title: "Home Foundations",
    description: "Start your home construction on the most solid footing available with our screw pile system.",
  },
  {
    icon: Layers,
    title: "Decks & Patios",
    description: "Stable support for your outdoor living spaces that won't shift with frost or soil movement.",
  },
  {
    icon: Building2,
    title: "Home Additions",
    description: "Expand your living space without the heavy excavation and mess of traditional concrete.",
  },
  {
    icon: Sun,
    title: "Solar Panels",
    description: "Precision-installed foundations ideal for ground-mounted solar energy systems.",
  },
];

const features = [
  "No Damage to Landscape",
  "Perfectly Level Structure",
  "Ready to Build Immediately",
  "Removable & Reusable"
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zinc-50 rounded-full translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          <div>
             <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Applications</span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase leading-none text-black mb-6">
              A Foundation for <br/><span className="text-zinc-400">Every Project</span>
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed max-w-md">
              From residential decks to commercial structures, GoliathTech screw piles offer superior performance in all soil conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {features.map((feature, i) => (
               <div key={i} className="flex items-center gap-3 p-4 bg-zinc-50 border-l-4 border-primary">
                 <Check className="h-5 w-5 text-primary" />
                 <span className="font-bold uppercase text-sm tracking-wide">{feature}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border border-zinc-100 shadow-none hover:shadow-2xl hover:border-primary/20 transition-all duration-300 h-full bg-white group rounded-none">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-primary transition-colors duration-300">
                    <app.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-serif text-xl uppercase tracking-wide group-hover:text-primary transition-colors">{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-zinc-500">
                    {app.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
