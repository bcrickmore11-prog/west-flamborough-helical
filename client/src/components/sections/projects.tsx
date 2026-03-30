import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Foundation Repair",
    location: "Brantford, ON",
    description: "Helical pile installation for residential foundation stabilization",
    image: "/attached_assets/IMG_6501_1765762019906.jpeg",
  },
  {
    id: 2,
    title: "Backyard Addition Foundation",
    location: "Brantford, ON",
    description: "Multiple helical piles installed for a new deck structure",
    image: "/attached_assets/IMG_6573_1765762019906.jpeg",
  },
  {
    id: 3,
    title: "Waterfront Dock Installation",
    location: "Ontario",
    description: "Equipment barge work for dock foundation in challenging conditions",
    image: "/attached_assets/IMG_4273_1765762019906.jpeg",
  },
  {
    id: 4,
    title: "Remote Site Foundation",
    location: "Ontario",
    description: "Helical pile installation with excavator in sandy terrain",
    image: "/attached_assets/IMG_4285_1765762019906.jpeg",
  },
  {
    id: 5,
    title: "Deck Extension",
    location: "Ontario",
    description: "Precision-installed piles ready for deck framing",
    image: "/attached_assets/IMG_4326_1765762145037.jpeg",
  },
  {
    id: 6,
    title: "Backyard Patio Foundation",
    location: "Ontario",
    description: "Helical pile brackets installed for patio structure",
    image: "/attached_assets/IMG_4328_1765762145037.jpeg",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase leading-none text-white mb-6">
            Completed <span className="text-zinc-500">Projects</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            See how GoliathTech helical piles have provided solid foundations for homes, 
            decks, and structures across the Brantford and Hamilton regions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden bg-zinc-800"
              data-testid={`card-project-${project.id}`}
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider mb-2">
                  <span data-testid={`text-location-${project.id}`}>{project.location}</span>
                </div>
                <h3 
                  className="text-xl font-bold uppercase text-white mb-2 group-hover:text-primary transition-colors"
                  data-testid={`text-title-${project.id}`}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  data-testid={`text-description-${project.id}`}
                >
                  {project.description}
                </p>
              </div>
              
              {/* Hover indicator */}
              <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-primary text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="h-5 w-5" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider hover:text-white transition-colors group"
            data-testid="link-contact-projects"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
