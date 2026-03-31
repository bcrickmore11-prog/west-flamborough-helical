import { motion } from "framer-motion";
import { Shield, Snowflake, Anchor, Link2 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Steel + ZN",
    description: "High-quality galvanized steel.",
  },
  {
    icon: Snowflake,
    title: "Double Protection",
    description: "Materials designed to withstand freeze and thaw movements.",
  },
  {
    icon: Anchor,
    title: "Exclusive Anchoring System",
    description: "Superior resistance to lateral and vertical structure movement.",
  },
  {
    icon: Link2,
    title: "GoliathTech Reinforced Seals",
    description: "Possible to extend the piles while maintaining high stability.",
  },
];

export function ProductFeatures() {
  return (
    <section id="product-features" className="py-24 bg-white border-t border-zinc-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-zinc-600 text-lg mb-4">
            Our screw piles are designed to surpass the highest industry standards.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold uppercase text-black leading-tight">
            Consistency. Precision.<br />
            <span className="text-primary">Strength.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border border-zinc-100 p-8 text-center hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-zinc-900 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
