import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import product images with correct names
import beltConveyor from '@/assets/products/belt-conveyor.png';
import bucketElevatorNew from '@/assets/products/bucket-elevator-new.png';
import cemaComponentsNew from '@/assets/products/cema-components-new.png';
import dragConveyorNew from '@/assets/products/drag-conveyor-new.png';
import fabricatedBucket from '@/assets/products/fabricated-bucket.png';
import screwConveyorNew from '@/assets/products/screw-conveyor-new.png';
import verticalScrewNew from '@/assets/products/vertical-screw-new.png';
import shaftlessConveyors from '@/assets/products/shaftless-conveyors.png';

const products = [
  {
    id: 1,
    name: 'Belt Conveyor',
    category: 'Conveyors',
    image: beltConveyor,
    description: 'High-performance belt conveyor systems designed for efficient and reliable transport of bulk materials over long distances.',
  },
  {
    id: 2,
    name: 'Bucket Elevator',
    category: 'Elevators',
    image: bucketElevatorNew,
    description: 'Centrifugal and continuous bucket elevators designed for vertical transport of bulk materials in demanding industrial environments.',
  },
  {
    id: 3,
    name: 'CEMA Components',
    category: 'Components',
    image: cemaComponentsNew,
    description: 'High-quality CEMA standard components including idlers, pulleys, and specialized hardware for conveyor systems.',
  },
  {
    id: 4,
    name: 'Drag Conveyors',
    category: 'Conveyors',
    image: dragConveyorNew,
    description: 'En-masse drag conveyors provide efficient, high-volume material transport with minimal degradation and low power consumption.',
  },
  {
    id: 5,
    name: 'Metal Fabricated Bucket',
    category: 'Components',
    image: fabricatedBucket,
    description: 'Custom-designed, heavy-duty metal buckets fabricated to exact specifications for maximum durability in high-capacity elevators.',
  },
  {
    id: 6,
    name: 'Screw Conveyor',
    category: 'Conveyors',
    image: screwConveyorNew,
    description: 'Custom-engineered screw conveyors designed for efficient bulk material handling, featuring modular construction and precision-flighting.',
  },
  {
    id: 7,
    name: 'Vertical Screw',
    category: 'Conveyors',
    image: verticalScrewNew,
    description: 'High-efficiency vertical screw conveyors designed for elevated material transport in space-constrained industrial environments.',
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    mouseX.set(mouseXFromCenter / width);
    mouseY.set(mouseYFromCenter / height);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      variants={cardVariants}
      className="group relative h-full flex flex-col bg-card rounded-2xl border border-border shadow-md transition-shadow duration-500 hover:shadow-2xl cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        y: -10,
        zIndex: 50,
        transition: { duration: 0.3 }
      }}
      style={{
        perspective: 1000,
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Image Container */}
      <div 
        className="relative h-48 md:h-56 lg:h-64 bg-slate-50 flex items-center justify-center p-8 rounded-t-2xl overflow-visible"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="absolute inset-0 bg-accent/5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ transform: "translateZ(-20px)" }}
        />
        
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain relative z-30"
          animate={{
            scale: isHovered ? 1.35 : 1,
            y: isHovered ? -20 : 0,
            filter: isHovered 
              ? 'drop-shadow(0 30px 40px rgba(0,0,0,0.25))' 
              : 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        />
        
        <div 
          className="absolute top-4 left-4 z-40"
          style={{ transform: "translateZ(40px)" }}
        >
          <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-md shadow-lg">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div 
        className="flex-1 p-6 md:p-8 flex flex-col relative z-20 bg-card rounded-b-2xl border-t border-border/50"
        style={{ transform: "translateZ(30px)" }}
      >
        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
          {product.description}
        </p>

        <Button 
          variant="default" 
          className="w-full group/btn bg-primary hover:bg-accent text-white transition-all duration-300 shadow-xl shadow-primary/10 hover:shadow-accent/30 overflow-hidden"
        >
          <span className="font-bold uppercase tracking-widest text-xs">Explore Product</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Glossy Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transform: "translateZ(50px)" }}
      />
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
            duration: 100 - i * 20,
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
            duration: 40,
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
            duration: 50, // Slightly different speed for parallax feel
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

        {/* Products Grid - 4 on top, 3 centered below */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-2rem)] min-w-[280px] max-w-[350px] flex"
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

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
