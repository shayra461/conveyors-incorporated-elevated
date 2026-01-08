import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Download, ExternalLink, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import book images
import bookEngineering from '@/assets/literature/book-engineering.png';
import bookLiterature from '@/assets/literature/book-literature.png';
import bookDesign from '@/assets/literature/book-design.png';

const literatureItems = [
  {
    id: 1,
    title: 'Engineering Guides',
    description: 'Booklets that contain in-depth details of engineering specifications for Screw Conveyors and Bucket Elevators.',
    image: bookEngineering,
    type: 'guide',
  },
  {
    id: 2,
    title: 'Product Literature',
    description: 'A collection of single page or multifold brochures of equipment and component pictures and descriptions. Perfect for handouts to customers!',
    image: bookLiterature,
    type: 'brochure',
  },
  {
    id: 3,
    title: 'Design Worksheets',
    description: 'Bulk Material Handling equipment specific documents to help record the necessary information needed to receive a quote.',
    image: bookDesign,
    type: 'worksheet',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

function LiteratureCard({ item, index }: { item: typeof literatureItems[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-accent/50">
        {/* Book Image Container */}
        <div className="relative h-64 bg-gradient-to-br from-muted to-secondary flex items-center justify-center p-8 overflow-hidden">
          {/* Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{ opacity: isHovered ? 0.2 : 0.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }} />
          </motion.div>

          {/* Book Image */}
          <motion.img
            src={item.image}
            alt={item.title}
            className="h-48 w-auto object-contain relative z-10 drop-shadow-2xl"
            animate={{
              scale: isHovered ? 1.1 : 1,
              y: isHovered ? -8 : 0,
              rotate: isHovered ? 3 : 0,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />

          {/* Hover Overlay with Button */}
          <motion.div
            className="absolute inset-0 bg-primary/95 flex items-center justify-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Button variant="heroOutline" size="default" className="group/btn">
                <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                View Resources
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.div
            className="flex items-center gap-2 mb-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <BookOpen className="w-5 h-5 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {item.type === 'guide' ? 'Technical Guide' : item.type === 'brochure' ? 'Brochure' : 'Worksheet'}
            </span>
          </motion.div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function LiteratureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="pt-12 pb-24 lg:pb-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.span
              className="h-px bg-accent"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-accent font-medium uppercase tracking-widest text-sm">
              Resources
            </span>
            <motion.span
              className="h-px bg-accent"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technical <span className="text-accent">Literature</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Access our collection of engineering guides, product brochures, and design worksheets
            for bulk material handling equipment.
          </motion.p>
        </motion.div>

        {/* Literature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {literatureItems.map((item, index) => (
            <LiteratureCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button variant="default" size="lg" className="group">
              View All Literature
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
