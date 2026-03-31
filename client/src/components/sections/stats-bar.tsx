'use client';

import { motion } from 'framer-motion';
import { Leaf, Award } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function StatsBar() {
  return (
    <section id="stats" className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Stat 1: Eco-Responsible */}
          <motion.div
            variants={itemVariants}
            className="text-center flex flex-col items-center justify-center py-4"
          >
            <Leaf className="w-8 h-8 text-primary mb-2" />
            <p className="font-bold uppercase text-sm tracking-widest text-white mb-1">
              Eco-Responsible
            </p>
            <p className="text-xs text-gray-400 font-medium">ISO 14001:2015</p>
          </motion.div>

          {/* Stat 2: #1 Best Product */}
          <motion.div
            variants={itemVariants}
            className="text-center flex flex-col items-center justify-center py-4"
          >
            <p className="text-primary text-5xl font-bold mb-2">#1</p>
            <p className="text-xs text-gray-300 font-medium max-w-[150px]">
              Best product in the helical pile industry
            </p>
          </motion.div>

          {/* Stat 3: Certified Installers */}
          <motion.div
            variants={itemVariants}
            className="text-center flex flex-col items-center justify-center py-4"
          >
            <p className="text-primary text-5xl font-bold mb-2">150+</p>
            <p className="text-xs text-gray-300 font-medium max-w-[150px]">
              Certified installers globally
            </p>
          </motion.div>

          {/* Stat 4: Installation Time */}
          <motion.div
            variants={itemVariants}
            className="text-center flex flex-col items-center justify-center py-4"
          >
            <p className="text-primary text-5xl font-bold mb-2">~4h</p>
            <p className="text-xs text-gray-300 font-medium max-w-[150px]">
              Average installation time*
            </p>
          </motion.div>

          {/* Stat 5: Lifetime Warranty */}
          <motion.div
            variants={itemVariants}
            className="text-center flex flex-col items-center justify-center py-4"
          >
            <p className="text-primary text-5xl font-bold mb-2">∞</p>
            <p className="text-xs text-gray-300 font-medium max-w-[150px]">
              Lifetime warranty
            </p>
          </motion.div>
        </motion.div>

        {/* Footnote */}
        <div className="text-center mt-8 pt-6 border-t border-gray-700">
          <p className="text-xs text-gray-500">
            *The time required may vary according to project size and complexity
          </p>
        </div>
      </div>
    </section>
  );
}
