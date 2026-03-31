'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  Layers,
  Fence,
  Warehouse,
  Building2,
  Sun,
  Car,
  Ship,
  Blocks,
  ArrowUpRight,
  TreePine,
  Container,
  Tent,
  LayoutGrid,
  Waves,
  GlassWater,
  Signpost,
  ArrowDown,
  Building,
  Zap,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const applications = [
  { icon: Home, label: 'Home Foundations' },
  { icon: Layers, label: 'Decks' },
  { icon: Fence, label: 'Fences' },
  { icon: Warehouse, label: 'Sheds' },
  { icon: Building2, label: 'Home Additions' },
  { icon: Sun, label: 'Solar Panels' },
  { icon: Car, label: 'Garages' },
  { icon: Ship, label: 'Docks & Boathouses' },
  { icon: Blocks, label: 'Retaining Walls' },
  { icon: ArrowUpRight, label: 'Exterior Stairs' },
  { icon: TreePine, label: 'Cottages & Cabins' },
  { icon: Container, label: 'Containers' },
  { icon: Tent, label: 'Gazebos' },
  { icon: LayoutGrid, label: 'Modular Homes' },
  { icon: Waves, label: 'Swimming Pools' },
  { icon: GlassWater, label: 'Sunrooms' },
  { icon: Signpost, label: 'Signage & Billboards' },
  { icon: ArrowDown, label: 'Underpinning' },
  { icon: Building, label: 'Balconies' },
  { icon: Zap, label: 'Electric Charging Stations' },
];

export function ApplicationsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="applications" className="bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-widest text-white mb-4">
            Types of Applications:
          </h2>
          <p className="text-primary font-bold text-lg">
            A helical pile foundation system for a level of support that is
            unmatched
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-8">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-primary hover:bg-yellow-500 transition-colors rounded-none p-2 hidden md:flex items-center justify-center w-10 h-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>

          {/* Carousel */}
          <div
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex gap-4 pb-2 min-w-min">
              {/* Duplicate list for infinite effect */}
              {[...applications, ...applications].map((app, idx) => {
                const Icon = app.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-zinc-900 border border-gray-700 rounded-none p-4 flex flex-col items-center justify-center text-center w-36 flex-shrink-0 hover:border-primary transition-colors"
                  >
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <p className="text-white text-xs font-bold uppercase tracking-wide">
                      {app.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-primary hover:bg-yellow-500 transition-colors rounded-none p-2 hidden md:flex items-center justify-center w-10 h-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <a
            href="#contact"
            className="bg-primary hover:bg-yellow-500 text-black font-bold uppercase px-8 py-3 rounded-none tracking-widest transition-colors inline-block"
          >
            Ready for a Quote?
          </a>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
