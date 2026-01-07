import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cog, Shield, Lightbulb, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Cog,
    title: 'Engineering Expertise',
    description: 'Our team of engineers brings decades of experience in designing solutions for the most demanding applications.',
    stat: '50+ Patents',
  },
  {
    icon: Shield,
    title: 'Manufacturing Excellence',
    description: 'State-of-the-art facilities and rigorous quality control ensure every component meets our exacting standards.',
    stat: 'ISO 9001 Certified',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Leadership',
    description: 'Continuous R&D investment keeps us at the cutting edge of bulk material handling technology.',
    stat: '45+ Years',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Partnership',
    description: 'We work alongside you from initial concept through installation and ongoing support.',
    stat: '98% Satisfaction',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 bg-muted relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
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
              Why Choose Us
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
            The <span className="text-accent">Conveyors Inc.</span> Difference
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What sets us apart is our unwavering commitment to excellence in 
            every aspect of our business.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="text-center group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <motion.div
                className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <reason.icon className="w-10 h-10 text-primary-foreground" />
              </motion.div>

              {/* Stat */}
              <motion.div 
                className="font-heading text-2xl font-bold text-accent mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {reason.stat}
              </motion.div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
