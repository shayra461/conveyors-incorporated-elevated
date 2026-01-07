import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import product images with correct names
import screwConveyors from '@/assets/products/screw-conveyors.png';
import screwFeeders from '@/assets/products/screw-feeders.png';
import shaftlessConveyors from '@/assets/products/shaftless-conveyors.png';
import verticalScrew from '@/assets/products/vertical-screw.png';
import bucketElevators from '@/assets/products/bucket-elevators.png';
import dragConveyors from '@/assets/products/drag-conveyors.png';
import cemaComponents from '@/assets/products/cema-components.png';
import classifierWashers from '@/assets/products/classifier-washers.png';

const products = [
  {
    id: 1,
    name: 'Screw Conveyors',
    category: 'Conveyors',
    image: screwConveyors,
    description: 'Archimedes in the 3rd century BC developed the 1st screw conveyor. Today, screw conveyors are used in countless applications.',
  },
  {
    id: 2,
    name: 'Screw Feeders',
    category: 'Feeders',
    image: screwFeeders,
    description: 'Screw Feeders are similar to Screw Conveyors because they both move product from one point to another.',
  },
  {
    id: 3,
    name: 'Shaftless Conveyors',
    category: 'Conveyors',
    image: shaftlessConveyors,
    description: 'Shaftless Screw Conveyors are a specialized alternative to the standard Shafted Screw Conveyor.',
  },
  {
    id: 4,
    name: 'Vertical Screw',
    category: 'Conveyors',
    image: verticalScrew,
    description: 'A specialized screw feeder capable of conveying materials where a very steep incline is required.',
  },
  {
    id: 5,
    name: 'Bucket Elevators',
    category: 'Elevators',
    image: bucketElevators,
    description: 'Bucket elevators are one of the most efficient ways of conveying bulk materials vertically.',
  },
  {
    id: 6,
    name: 'Drag Conveyors',
    category: 'Conveyors',
    image: dragConveyors,
    description: 'Drag Conveyors are one of the most energy efficient ways to convey bulk materials over distances.',
  },
  {
    id: 7,
    name: 'CEMA Components',
    category: 'Components',
    image: cemaComponents,
    description: 'CEMA Screw components consist of standard components for screw conveyors and bucket elevators.',
  },
  {
    id: 8,
    name: 'Classifier & Washers',
    category: 'Equipment',
    image: classifierWashers,
    description: 'Classifiers and Washers are used to separate sand or grit from a liquid slurry or sludge.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
    transition: { duration: 0.5 },
  },
};

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-card rounded-lg overflow-hidden shadow-md border border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        boxShadow: '0 25px 50px -12px hsl(var(--accent) / 0.15)'
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-steel p-8 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
          animate={{ 
            scale: isHovered ? 1.15 : 1,
            y: isHovered ? -10 : 0,
            rotate: isHovered ? 2 : 0,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
        
        {/* Category Badge */}
        <motion.div 
          className="absolute top-4 left-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 + 0.3 }}
        >
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded">
            {product.category}
          </span>
        </motion.div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-hero flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.95 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 20,
              scale: isHovered ? 1 : 0.9
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-center p-6"
          >
            <p className="text-primary-foreground/80 text-sm mb-4">
              {product.description}
            </p>
            <Button variant="heroOutline" size="sm" className="group/btn">
              View Details
              <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
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
    <section className="py-24 lg:py-32 bg-muted relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
              Our Products
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
            Precision-Engineered <span className="text-accent">Components</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From individual components to complete conveyor systems, we deliver 
            quality that keeps your operations running smoothly.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button variant="default" size="lg" className="group">
            View All Products
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
