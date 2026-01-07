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

function LiteratureCard({ item, index }: { item: typeof literatureItems[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-border">
        {/* Book Image Container */}
        <div className="relative h-64 bg-gradient-to-br from-muted to-secondary flex items-center justify-center p-8 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }} />
          </div>
          
          {/* Book Image */}
          <motion.img
            src={item.image}
            alt={item.title}
            className="h-48 w-auto object-contain relative z-10 drop-shadow-2xl"
            animate={{ 
              scale: isHovered ? 1.08 : 1,
              rotateY: isHovered ? -5 : 0,
              y: isHovered ? -8 : 0,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-hero flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.95 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.9 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-center"
            >
              <Button variant="heroOutline" size="default" className="group/btn">
                <Download className="w-4 h-4 mr-2" />
                View Resources
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {item.type === 'guide' ? 'Technical Guide' : item.type === 'brochure' ? 'Brochure' : 'Worksheet'}
            </span>
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
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
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-accent font-medium uppercase tracking-widest text-sm">
              Resources
            </span>
            <span className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical <span className="text-accent">Literature</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Access our collection of engineering guides, product brochures, and design worksheets 
            for bulk material handling equipment.
          </p>
        </motion.div>

        {/* Literature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {literatureItems.map((item, index) => (
            <LiteratureCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg" className="group">
            View All Literature
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
