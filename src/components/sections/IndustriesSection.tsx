import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Factory, 
  Wheat, 
  Mountain, 
  Fuel, 
  Package, 
  Recycle,
  ArrowRight
} from 'lucide-react';

const industries = [
  {
    id: 1,
    icon: Mining,
    name: 'Mining & Aggregates',
    description: 'Heavy-duty systems for mining operations, quarries, and aggregate processing facilities.',
  },
  {
    id: 2,
    icon: Wheat,
    name: 'Agriculture & Grain',
    description: 'Efficient grain handling solutions for farms, elevators, and food processing plants.',
  },
  {
    id: 3,
    icon: Factory,
    name: 'Manufacturing',
    description: 'Custom conveyor systems for assembly lines, material handling, and production facilities.',
  },
  {
    id: 4,
    icon: Fuel,
    name: 'Energy & Power',
    description: 'Reliable systems for coal handling, biomass, and power generation facilities.',
  },
  {
    id: 5,
    icon: Package,
    name: 'Warehousing',
    description: 'Efficient material flow solutions for distribution centers and logistics operations.',
  },
  {
    id: 6,
    icon: Recycle,
    name: 'Recycling & Waste',
    description: 'Durable systems for recycling facilities and waste management operations.',
  },
];

// Custom Mining icon since Lucide doesn't have one
function Mining({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20" />
      <path d="M5 20V10l7-7 7 7v10" />
      <path d="M9 20v-6h6v6" />
      <path d="M12 3v4" />
    </svg>
  );
}

function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = industry.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-card rounded-lg p-8 h-full border border-border overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-xl">
        {/* Background Glow on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="w-16 h-16 rounded bg-primary flex items-center justify-center mb-6"
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              backgroundColor: isHovered ? 'hsl(var(--accent))' : 'hsl(var(--primary))'
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          {/* Content */}
          <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
            {industry.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {industry.description}
          </p>

          {/* Learn More Link */}
          <motion.div
            className="flex items-center gap-2 text-accent font-medium text-sm"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 bg-background" ref={ref}>
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
              Industries We Serve
            </span>
            <span className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Solutions for <span className="text-accent">Every Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From mining to manufacturing, our conveyor systems power operations 
            across diverse industries worldwide.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
