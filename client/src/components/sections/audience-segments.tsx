'use client';

import { motion } from 'framer-motion';
import { HardHat, Landmark, User } from 'lucide-react';

const personas = [
  {
    icon: HardHat,
    labels: ['General Contractors', 'Engineers'],
    description:
      "Are you meticulous and detail oriented? So are we! With the help of precise calculations and cutting-edge technology, we'll support your desire to aim high.",
  },
  {
    icon: Landmark,
    labels: ['Municipal Officials', 'Urban Planners'],
    description:
      'Cities have a vast amount of infrastructure that requires durable and economical solutions for the long term. That\'s why GoliathTech is a safe bet for all your urban development projects.',
  },
  {
    icon: User,
    labels: ['House, Cottage, or Building Owners', 'Independent Contractors'],
    description:
      'Our no-excavation installation technique and superior-quality screw piles allow you to carry out your construction or renovation projects with ease.',
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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function AudienceSegments() {
  return (
    <section id="audience" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-widest mb-4">
            A ground-breaking solution for all your{' '}
            <span className="text-primary">construction project needs</span>
          </h2>
          <p className="text-gray-700 max-w-2xl">
            Whatever the project, GoliathTech has the right solution for you.
            Residential, industrial, commercial, and municipal; GoliathTech's
            superior quality screw piles provide you with lasting support you
            can count on.
          </p>
        </div>

        {/* Persona Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {personas.map((persona, idx) => {
            const Icon = persona.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-zinc-50 border border-gray-200 p-8 text-center hover:border-primary transition-colors"
              >
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className="bg-primary p-4 rounded-none">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                </div>

                {/* Labels */}
                <div className="mb-6">
                  {persona.labels.map((label, i) => (
                    <p
                      key={i}
                      className="font-bold uppercase text-sm tracking-wide mb-1"
                    >
                      {label}
                    </p>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {persona.description}
                </p>
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
    </section>
  );
}
