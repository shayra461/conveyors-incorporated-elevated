import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/hero-video.mp4';
import badge45Years from '@/assets/45-years-badge.png';
import { useEffect, useRef } from 'react';

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });

  // Extract number and suffix
  const numericValue = parseInt(value.replace(/,/g, ''), 10);
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    if (inView) {
      motionValue.set(numericValue);
    }
  }, [inView, motionValue, numericValue]);

  return (
    <div ref={ref}>
      <div className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent flex items-center">
        <DisplayValue value={springValue} />
        {suffix}
      </div>
      <div className="text-white text-xs sm:text-sm uppercase tracking-wider mt-1 font-bold drop-shadow-md">
        {label}
      </div>
    </div>
  );
}

function DisplayValue({ value }: { value: import("framer-motion").MotionValue<number> }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    return value.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [value]);

  return <span ref={ref}>0</span>;
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen md:min-h-[110vh] md:pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center bg-slate-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-[150vh] min-h-[120vw] w-auto h-auto object-cover transform -rotate-90"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-hero opacity-75 z-10" />
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block">
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-primary-foreground/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full border border-primary-foreground/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 md:pt-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 md:pt-[100px]"
          >
            <span className="h-px w-8 md:w-12 bg-yellow-400/80 shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs md:text-sm drop-shadow-md">
              Industry Leaders Since 1974
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6"
          >
            Engineering Excellence in{' '}
            <span className="text-gradient bg-gradient-to-r from-accent to-crimson-dark bg-clip-text text-transparent">
              Bulk Material Handling
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl lg:text-2xl text-primary-foreground/80 leading-relaxed mb-6 md:mb-10 max-w-2xl"
          >
            Premium conveyor systems designed and manufactured to move your
            business forward. Trusted by industry leaders worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4"
          >
            <Button variant="hero" size="xl" className="group w-full sm:w-auto">
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group w-full sm:w-auto">
              Industries We Serve
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-16 mt-8 md:mt-16 p-4 md:p-6 lg:p-8 bg-slate-950/40 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/10"
          >
            {[
              { value: '45+', label: 'Years Experience' },
              { value: '2,500+', label: 'Projects Completed' },
              { value: '100+', label: 'Industries Served' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Counter value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating 45 Years Badge */}
      <motion.div
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-12 z-20"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.img
          src={badge45Years}
          alt="45 Years - Moving The World - 1974-2019"
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto drop-shadow-2xl"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, delay: 1.2 }
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
