import { motion } from "framer-motion";
import { Shield, Droplets, Anchor, Link2, ArrowRight } from "lucide-react";

const details = [
  {
    icon: Shield,
    title: "Galvanized Steel + ZN",
    subtitle: "Galvanized steel worthy of the biggest projects.",
    description:
      "Our galvanizing process protects the steel from corrosion to ensure maximum product longevity. No matter where they are installed, GoliathTech screw piles will withstand the elements for years to come. The result is a pile system built for permanence — in any climate, any soil.",
    accent: "bg-primary/10",
  },
  {
    icon: Droplets,
    title: "GoliathTech's Double Protection",
    subtitle: "Superior resistance to ground movement due to freezing and thawing.",
    description:
      "GoliathTech screw piles are filled with polyurethane to prevent ice formation on the inside. 60 Ksi steel piles are also fully galvanized to protect the tubes, heads, and helices from physical deterioration — both inside and outside the pile. This dual-layer approach means your foundation stays rock-solid through every Canadian winter.",
    accent: "bg-blue-50",
  },
  {
    icon: Anchor,
    title: "Exclusive Anchoring Solution",
    subtitle: "A detail that makes all the difference.",
    description:
      "GoliathTech helical pile heads are equipped with a nut-type fastening system. This innovative anchoring solution allows the structure to be attached directly to the piles, preventing lateral and vertical movement. It also offers high resistance to tearing — zero movement, guaranteed.",
    accent: "bg-zinc-50",
  },
  {
    icon: Link2,
    title: "GoliathConnect Technology",
    subtitle: "From helical piles to reinforced joints.",
    description:
      "The GoliathConnect joint system allows a screw pile to be extended by connecting two tubes with stop bolts. Unlike what the competition offers, this innovation increases strength and eliminates any risk of movement when a longer helical pile is needed. Your foundation, extended without compromise.",
    accent: "bg-primary/5",
  },
];

export function ProductDetail() {
  return (
    <section id="product-detail" className="py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Product Technology
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight mb-6">
            Benefits of GoliathTech
            <br />
            <span className="text-primary">Screw Piles</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            GoliathTech outperforms the competition by providing a product that
            surpasses the highest industry standards — featuring galvanized steel,
            double protection, exclusive movement brakes, reinforced joints, and
            adjustable end caps. Nothing can move us. It's guaranteed.
          </p>
        </motion.div>

        {/* Detail cards — alternating layout */}
        <div className="space-y-16">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  isEven ? "" : "md:direction-rtl"
                }`}
              >
                {/* Icon / visual side */}
                <div className={`${isEven ? "md:order-1" : "md:order-2"}`}>
                  <div className={`${detail.accent} p-10 flex items-center justify-center`}>
                    <div className="w-24 h-24 bg-zinc-900 flex items-center justify-center border-2 border-primary/30">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-1 bg-primary" />
                    <span className="text-primary font-bold uppercase tracking-widest text-xs">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    {detail.title}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {detail.subtitle}
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Screw pile size categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-zinc-800"
        >
          <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
            A Screw Pile for <span className="text-primary">Every Project</span>
          </h3>
          <p className="text-zinc-400 mb-12 max-w-2xl">
            GoliathTech offers a wide range of tubes and helices to suit the load
            to be supported and the soil type — every pile is perfectly suited to
            your project.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                category: "Light Structures",
                examples: "Balconies, Patios, Sheds, Fences",
              },
              {
                category: "Average Structures",
                examples: "Docks, Solariums, Walkways, Garages",
              },
              {
                category: "Heavy Structures",
                examples: "Cabins, Building Foundations, Extensions, Bridges",
              },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-zinc-800 p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-primary" />
                  <h4 className="text-lg font-bold uppercase tracking-wide">
                    {tier.category}
                  </h4>
                </div>
                <p className="text-zinc-500 text-sm">{tier.examples}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-yellow-500 text-black font-bold uppercase px-8 py-3 tracking-widest transition-colors text-sm"
          >
            Ready for a Quote?
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
