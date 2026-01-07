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

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 100px),
                            repeating-linear-gradient(0deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 100px)`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-accent" />
              <span className="text-accent font-medium uppercase tracking-widest text-sm">
                Who We Are
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Built on a Foundation of{' '}
              <span className="text-accent">Engineering Excellence</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For over four decades, Conveyors Incorporated has been at the forefront of bulk 
              material handling innovation. Our commitment to quality, precision, and customer 
              success has made us the trusted partner for industries worldwide.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="default" size="lg">
              Learn More About Us
            </Button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="bg-card rounded-lg p-8 shadow-lg hover-lift flex items-center gap-6 border border-border"
              >
                <div className="w-16 h-16 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
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
