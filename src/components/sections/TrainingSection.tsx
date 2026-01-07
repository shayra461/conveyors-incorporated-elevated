import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Users, Wrench, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    description: 'Learn from industry veterans with decades of hands-on experience',
  },
  {
    icon: Wrench,
    title: 'Live Equipment',
    description: 'Train on full-scale, operational conveyor systems and components',
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    description: 'Personalized attention ensuring comprehensive skill development',
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Industry-recognized certification upon successful completion',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function TrainingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 bg-gradient-dark relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent" />
        <motion.div
          className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-60 h-60 rounded-full bg-primary-foreground/5 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.span 
                className="h-px bg-accent"
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <span className="text-accent font-medium uppercase tracking-widest text-sm">
                Training Program
              </span>
            </motion.div>

            <motion.h2 
              className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Best-in-Class{' '}
              <span className="text-accent">Technical Training</span>
            </motion.h2>

            <motion.p 
              className="text-primary-foreground/70 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our comprehensive training program offers hands-on experience with 
              life-size, operational equipment. Develop the skills you need to 
              optimize conveyor system performance and maintenance.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero" size="lg" className="group">
                  View Training Schedule
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="heroOutline" size="lg">
                  Request Custom Training
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: '0 20px 40px -15px hsl(var(--accent) / 0.3)'
                }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10 hover:border-accent/50 transition-colors duration-300 cursor-pointer"
              >
                <motion.div 
                  className="w-12 h-12 rounded bg-accent/20 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-6 h-6 text-accent" />
                </motion.div>
                <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
