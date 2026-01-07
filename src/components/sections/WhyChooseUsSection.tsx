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

export function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 bg-muted" ref={ref}>
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
              Why Choose Us
            </span>
            <span className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            The <span className="text-accent">Conveyors Inc.</span> Difference
          </h2>
          <p className="text-muted-foreground text-lg">
            What sets us apart is our unwavering commitment to excellence in 
            every aspect of our business.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              {/* Icon */}
              <motion.div
                className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <reason.icon className="w-10 h-10 text-primary-foreground" />
              </motion.div>

              {/* Stat */}
              <div className="font-heading text-2xl font-bold text-accent mb-2">
                {reason.stat}
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
