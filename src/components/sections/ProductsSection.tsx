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
      className="group relative min-h-[350px] md:min-h-[400px] rounded-lg" // Removed overflow-hidden from root
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ zIndex: isHovered ? 50 : 1 }} // Ensure pop-out overlaps neighbors
    >
      {/* Clipped Card Base (Background + Text + SlideUp) */}
      <div className="absolute inset-0 flex flex-col bg-card rounded-lg overflow-hidden shadow-md border border-border transition-shadow duration-300 group-hover:shadow-2xl">

        {/* Dynamic Background */}
        <motion.div
          className="absolute inset-0 bg-slate-50 z-0"
          animate={{
            background: isHovered
              ? 'linear-gradient(135deg, hsl(var(--accent) / 0.1), #ffffff)'
              : '#f8fafc'
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Category Badge */}
        <motion.div
          className="absolute top-3 left-3 md:top-4 md:left-4 z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 + 0.3 }}
        >
          <span className="px-2 py-1 md:px-3 md:py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded shadow-sm">
            {product.category}
          </span>
        </motion.div>

        {/* Spacer to push content down (Image sits here visibly but logically outside) */}
        <div className="flex-1" />

        {/* Content & Hidden Overlay */}
        <div className="relative z-20 bg-card p-3 md:p-4 border-t border-border/50">
          <h3 className="font-heading text-base md:text-lg font-bold text-foreground text-center mb-1 group-hover:text-accent transition-colors duration-300">
            {product.name}
          </h3>

          {/* Slide-up Details Panel */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-card border-t border-accent/20 p-4 md:p-6 flex flex-col items-center text-center shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: isHovered ? 0 : "100%", opacity: isHovered ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 line-clamp-3">
              {product.description}
            </p>
            <Button variant="default" size="sm" className="w-full group/btn bg-accent hover:bg-accent/90 text-white text-xs md:text-sm">
              View Details
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Pop-out Image Layer (Unclipped) */}
      <div className="absolute inset-0 flex items-center justify-center pb-12 md:pb-16 pointer-events-none z-30">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
          animate={{
            scale: isHovered ? 1.8 : 1, // Huge 3D Zoom
            y: isHovered ? -40 : 0, // Popping UP
            rotate: isHovered ? -12 : 0, // Tilt
            filter: isHovered
              ? 'drop-shadow(0 30px 40px rgba(0,0,0,0.35))' // Deep shadow for height
              : 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        />
      </div>
    </motion.div>
  );
}

// Wavy Background Component
const WavyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-slate-50/50" />
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 opacity-[0.03]"
          style={{
            zIndex: 0,
            width: '200%', // Increased width to prevent cut-off during animation
            left: '0%',
            background: `repeating-linear-gradient(
              ${45 + i * 15}deg,
              transparent,
              transparent 100px,
              #000 100px,
              #000 200px
            )`
          }}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20 - i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      <svg
        className="absolute bottom-0 left-0 w-full h-[50vh] opacity-10"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="#3b82f6"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,128L48,149.3C96,171,192,213,288,229.3C384,245,480,235,576,202.7C672,171,768,117,864,112C960,107,1056,149,1152,170.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          fill="#facc15"
          fillOpacity="0.4"
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,176C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,176C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,192L48,176C96,160,192,128,288,117.3C384,107,480,117,576,138.7C672,160,768,192,864,192C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,176C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            ]
          }}
          transition={{
            duration: 9, // Slightly different speed for parallax feel
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
};

export function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden bg-white" ref={ref}>
      <WavyBackground />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.span
              className="h-px bg-accent"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-accent font-medium uppercase tracking-widest text-xs sm:text-sm">
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
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Precision-Engineered <span className="text-accent">Components</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-base md:text-lg"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
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
          className="text-center mt-12 md:mt-16"
        >
          <Button variant="default" size="lg" className="group shadow-xl shadow-accent/20">
            View All Products
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
