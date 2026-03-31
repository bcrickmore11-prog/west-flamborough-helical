'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

const certifications = [
  'ISO 9001:2015',
  'ISO 14001:2015',
  'CCMC',
  'ICC-ES ESR-3726',
  'CWB',
  'AWS D1.1',
];

const guaranteeItems = [
  {
    icon: ShieldCheck,
    title: 'Lifetime Warranty on Screw Piles',
    description:
      'We guarantee that our screw piles are free of manufacturing or material defects.',
  },
  {
    icon: Award,
    title: 'Certified Installer',
    description:
      'At GoliathTech, our certified installers are fully trained and use only the most up-to-date equipment.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function CertificationsSection() {
  return (
    <section id="certifications">
      {/* Part 1: Certifications */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-widest mb-2">
            Certifications
          </h2>
          <p className="text-gray-700 mb-12 text-sm">
            GoliathTech combines engineering and innovation to deliver superior
            quality screw piles that meet the highest industry standards.
          </p>

          {/* Certification Badges */}
          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="border-2 border-zinc-900 px-4 py-2 rounded-none font-bold uppercase text-xs tracking-wide text-zinc-900 hover:bg-primary hover:border-primary hover:text-black transition-colors"
              >
                {cert}
              </motion.div>
            ))}
          </motion.div>

          {/* Certification Text */}
          <p className="text-gray-700 text-sm">
            Our fully galvanized helical (screw) piles surpass all construction
            material standards.
          </p>
        </div>
      </div>

      {/* Part 2: Guarantee */}
      <div className="bg-zinc-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-widest text-white mb-2">
            The GoliathTech Guarantee
          </h2>
          <p className="text-primary font-bold text-lg mb-12">
            A commitment to quality over the long term
          </p>

          {/* Guarantee Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {guaranteeItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-zinc-800 border border-gray-700 p-8 text-center hover:border-primary transition-colors"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold uppercase text-white mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="bg-primary hover:bg-yellow-500 text-black font-bold uppercase px-8 py-3 rounded-none tracking-widest transition-colors inline-block"
            >
              Ready for a Quote?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
