import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Animated background circles */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1.3, 1, 1.3], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to Transform Your{' '}
            <motion.span 
              className="text-accent"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Material Handling?
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss your project requirements and discover how our solutions 
            can improve your operational efficiency.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero" size="xl" className="group">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="outline" size="xl" className="group">
                <Phone className="w-5 h-5" />
                Call 1-800-555-1234
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
