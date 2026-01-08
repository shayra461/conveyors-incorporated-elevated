import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Award, Users, Factory, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import manufacturingImg from '@/assets/industries/manufacturing.png'; // Reusing for "Since 1974" visual
import miningImg from '@/assets/industries/mining.png';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, stiffness: 50 }
    }
  };

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">Excellence</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]"
        >

          {/* Tile 1: Main Story (Large) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 lg:col-span-2 md:row-span-2 bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div>
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                Built on a Foundation of <br />
                <span className="text-white">Engineering Mastery</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                For over five decades, Conveyors Inc. has led the industry in bulk material handling.
                We don't just build conveyors; we engineer the lifeline of your operation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-slate-900 hover:bg-zinc-200 transition-colors rounded-full px-8 py-6 text-base font-bold">
                Our Story <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Tile 2: Legacy Image (Tall) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden group min-h-[300px]"
          >
            <img
              src={miningImg}
              alt="Legacy of heavy industry"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="text-6xl font-heading font-bold text-white/90 mb-2 drop-shadow-lg">1974</div>
              <div className="text-xl font-bold text-white">Established Legacy</div>
              <p className="text-slate-300 text-sm mt-2">Texas-born, globally trusted.</p>
            </div>
          </motion.div>

          {/* Tile 3: Stat 1 (Square) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-2 lg:col-span-1 bg-accent rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent" />
            <Factory className="w-10 h-10 mb-4 text-white/80" />
            <div className="text-4xl font-bold mb-1">200k+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/60">Sq. Ft. Facility</div>
          </motion.div>

          {/* Tile 4: Stat 2 (Wide on mobile, square on desk) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-2 lg:col-span-1 bg-slate-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:bg-slate-800 transition-colors"
          >
            <Award className="w-10 h-10 mb-4 text-accent" />
            <div className="text-4xl font-bold mb-1 text-white">50+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Patents Held</div>
          </motion.div>

          {/* Tile 5: Features (Wide list) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 lg:col-span-2 bg-slate-900 border border-white/5 rounded-3xl p-8 md:p-10 flex items-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 w-full">
              {[
                "Precision Components",
                "Custom Solutions",
                "Industry Durability",
                "Expert Support"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tile 6: Team Stat */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-2 lg:col-span-1 bg-white text-slate-950 rounded-3xl p-8 flex flex-col justify-center items-center text-center"
          >
            <Users className="w-10 h-10 mb-4 text-accent" />
            <div className="text-4xl font-bold mb-1">500+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Team Members</div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
