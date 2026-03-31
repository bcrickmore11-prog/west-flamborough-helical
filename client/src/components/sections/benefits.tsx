'use client';

import { motion } from 'framer-motion';
import {
  Timer,
  Leaf,
  Grid3X3,
  Maximize2,
  Snowflake,
  RefreshCw,
  BadgeCheck,
  ShieldCheck,
} from 'lucide-react';

const benefits = [
  { icon: Timer, label: 'Rapid Installation' },
  { icon: Leaf, label: 'Minimal Impact to the Landscape' },
  { icon: Grid3X3, label: 'No Excavation' },
  { icon: Maximize2, label: 'Ideal for Restricted Spaces' },
  { icon: Snowflake, label: 'Year-Round Installation' },
  { icon: RefreshCw, label: 'Removable and Reusable' },
  { icon: BadgeCheck, label: 'Suitable in All Soil Conditions' },
  { icon: ShieldCheck, label: 'Lifetime Warranty' },
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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-widest mb-4">
            A helical (screw) pile foundation system:{' '}
            <span className="text-primary">immovable strength</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our helical (screw) pile foundation solution combines strength, ease
            of use, and know-how, and is designed to provide lasting support for
            all types of projects.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-zinc-50 border border-gray-200 p-6 text-center hover:border-primary transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <p className="font-bold uppercase text-sm sm:text-base tracking-wide">
                  {benefit.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
