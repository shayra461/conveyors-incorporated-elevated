import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Award, Users, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'Precision-engineered components',
  'Custom solutions for every application',
  'Industry-leading durability',
  'Expert technical support',
];

const stats = [
  { icon: Factory, value: '200,000+', label: 'Sq. Ft. Manufacturing' },
  { icon: Award, value: '50+', label: 'Patents Held' },
  { icon: Users, value: '500+', label: 'Team Members' },
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 100px),
                            repeating-linear-gradient(0deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 100px)`,
        }} />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <motion.span 
                className="h-px w-12 bg-accent"
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <span className="text-accent font-medium uppercase tracking-widest text-sm">
                Who We Are
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
            >
              Built on a Foundation of{' '}
              <span className="text-accent">Engineering Excellence</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              For over four decades, Conveyors Incorporated has been at the forefront of bulk 
              material handling innovation. Our commitment to quality, precision, and customer 
              success has made us the trusted partner for industries worldwide.
            </motion.p>

            {/* Feature List */}
            <motion.ul variants={containerVariants} className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  </motion.div>
                  <span className="text-foreground font-medium group-hover:text-accent transition-colors duration-300">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants}>
              <Button variant="default" size="lg" className="group">
                Learn More About Us
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: '0 20px 40px -15px hsl(var(--accent) / 0.2)'
                }}
                className="bg-card rounded-lg p-8 shadow-lg flex items-center gap-6 border border-border cursor-pointer transition-colors duration-300 hover:border-accent/50"
              >
                <motion.div 
                  className="w-16 h-16 rounded bg-accent/10 flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-8 h-8 text-accent" />
                </motion.div>
                <div>
                  <motion.div 
                    className="font-heading text-3xl font-bold text-foreground"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.15 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-muted-foreground uppercase tracking-wider text-sm">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
