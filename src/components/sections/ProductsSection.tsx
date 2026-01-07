import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import product images
import mountingPlate from '@/assets/products/mounting-plate.png';
import shaftPin from '@/assets/products/shaft-pin.png';
import bearingBlock from '@/assets/products/bearing-block.png';
import beltSupport from '@/assets/products/belt-support.png';
import troughLiner from '@/assets/products/trough-liner.png';
import screwFlight from '@/assets/products/screw-flight.png';
import troughSection from '@/assets/products/trough-section.png';
import couplingBolt from '@/assets/products/coupling-bolt.png';

const products = [
  {
    id: 1,
    name: 'Mounting Plates',
    category: 'Structural',
    image: mountingPlate,
    description: 'Heavy-duty mounting plates engineered for maximum stability',
  },
  {
    id: 2,
    name: 'Shaft Pins',
    category: 'Components',
    image: shaftPin,
    description: 'Precision-machined shaft pins for reliable performance',
  },
  {
    id: 3,
    name: 'Bearing Blocks',
    category: 'Components',
    image: bearingBlock,
    description: 'Self-aligning bearing blocks for smooth operation',
  },
  {
    id: 4,
    name: 'Belt Supports',
    category: 'Structural',
    image: beltSupport,
    description: 'Robust belt support frames for heavy loads',
  },
  {
    id: 5,
    name: 'Trough Liners',
    category: 'Wear Parts',
    image: troughLiner,
    description: 'Replaceable liners for extended equipment life',
  },
  {
    id: 6,
    name: 'Screw Flights',
    category: 'Core Parts',
    image: screwFlight,
    description: 'Helical flights for efficient material movement',
  },
  {
    id: 7,
    name: 'Trough Sections',
    category: 'Structural',
    image: troughSection,
    description: 'Modular trough sections for custom configurations',
  },
  {
    id: 8,
    name: 'Coupling Hardware',
    category: 'Fasteners',
    image: couplingBolt,
    description: 'High-strength coupling bolts and fasteners',
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-steel p-8 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            y: isHovered ? -10 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded">
            {product.category}
          </span>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-hero flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.95 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-center p-6"
          >
            <p className="text-primary-foreground/80 text-sm mb-4">
              {product.description}
            </p>
            <Button variant="heroOutline" size="sm">
              View Details
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
      </div>
    </motion.div>
  );
}

export function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 bg-muted" ref={ref}>
      <div className="container mx-auto px-6">
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
              Our Products
            </span>
            <span className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Precision-Engineered <span className="text-accent">Components</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From individual components to complete conveyor systems, we deliver 
            quality that keeps your operations running smoothly.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg" className="group">
            View All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
