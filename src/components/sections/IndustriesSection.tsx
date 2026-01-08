import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import {
  Factory,
  Wheat,
  Fuel,
  Package,
  Recycle,
  ArrowRight
} from 'lucide-react';

// Import existing images
import miningImg from '@/assets/industries/mining-real.jpg';
import agricultureImg from '@/assets/industries/agriculture-real.jpg';
import manufacturingImg from '@/assets/industries/manufacturing.png'; // Keeping original for now
import energyImg from '@/assets/industries/energy-real.jpg';
import warehousingImg from '@/assets/industries/warehousing-real.jpg';
import recyclingImg from '@/assets/industries/recycling-real.jpg';

const industries = [
  {
    id: 1,
    icon: Mining,
    name: 'Mining & Aggregates',
    description: 'Heavy-duty systems for mining operations. Built to withstand the harshest environments with impact-resistant technology.',
    image: miningImg,
    overlay: 'bg-slate-900/40 mix-blend-multiply'
  },
  {
    id: 2,
    icon: Wheat,
    name: 'Agriculture & Grain',
    description: 'Efficient grain handling solutions using food-grade materials and gentle handling mechanisms.',
    image: agricultureImg,
    overlay: 'bg-stone-900/40 mix-blend-multiply'
  },
  {
    id: 3,
    icon: Factory,
    name: 'Manufacturing',
    description: 'Custom conveyor systems for assembly lines. Optimized for precision, modularity, and automated routing.',
    image: manufacturingImg,
    overlay: 'bg-blue-900/40 mix-blend-multiply'
  },
  {
    id: 4,
    icon: Fuel,
    name: 'Energy & Power',
    description: 'Reliable systems for coal handling and biomass. Designed for continuous critical operation in power plants.',
    image: energyImg,
    overlay: 'bg-yellow-900/60 mix-blend-multiply'
  },
  {
    id: 5,
    icon: Package,
    name: 'Warehousing',
    description: 'Smart sorting and efficient material flow solutions for modern automated distribution centers.',
    image: warehousingImg,
    overlay: 'bg-blue-900/60 mix-blend-multiply'
  },
  {
    id: 6,
    icon: Recycle,
    name: 'Recycling & Waste',
    description: 'Durable sorting and processing systems. Corrosion resistant and built for heavy-duty waste management.',
    image: recyclingImg,
    overlay: 'bg-green-900/60 mix-blend-multiply'
  },
];

// Custom Mining icon
function Mining({ className }: { className?: string }) { return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20h20" /><path d="M5 20V10l7-7 7 7v10" /><path d="M9 20v-6h6v6" /><path d="M12 3v4" /></svg>; }


function IndustryCard({ industry, index, range, targetScale, progress }: {
  industry: typeof industries[0];
  index: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const isEven = index % 2 === 0;
  const isDark = !isEven; // Alternate Theme
  const Icon = industry.icon;

  return (
    <div className="h-screen flex items-center justify-center sticky top-0 py-10">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
        className={`relative flex flex-col md:flex-row w-full max-w-6xl h-[70vh] rounded-3xl overflow-hidden shadow-2xl border ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'} origin-top`}
      >
        {/* Visual Side (Left) */}
        <div className="w-full md:w-1/2 relative overflow-hidden group">
          <motion.div className={`absolute inset-0 ${industry.overlay} z-10 transition-opacity duration-500`} />
          <motion.div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-20" />

          <motion.img
            src={industry.image}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7 }}
          />

          <div className="absolute top-6 left-6 z-30">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Icon className="text-white w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Content Side (Right) */}
        <div className={`w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative transition-colors duration-300 ${isDark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
          <div className="absolute top-10 right-10 text-9xl font-heading font-bold opacity-10 select-none">
            0{industry.id}
          </div>

          <div className="relative z-10">
            <h3 className={`text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {industry.name}
            </h3>
            <p className={`text-lg md:text-xl leading-relaxed mb-10 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {industry.description}
            </p>

            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-3 text-lg font-bold uppercase tracking-wider text-accent group"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function IndustriesSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} className="relative z-10 bg-slate-950 pt-24 pb-24">
      {/* Changed background to dark (slate-950) to fix 'too much white' and removed huge top margin */}

      <div className="sticky top-0 h-[20vh] flex flex-col items-center justify-center bg-slate-950 z-20 mb-12">
        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3">What We Do</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 text-center">
          Industries <span className="text-accent">Served</span>
        </h2>
        <div className="h-1 w-24 bg-accent rounded-full"></div>
      </div>

      <div className="px-4">
        {industries.map((industry, i) => {
          const targetScale = 1 - ((industries.length - i) * 0.05);
          return (
            <IndustryCard
              key={i}
              industry={industry}
              index={i}
              range={[i * 0.16, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
}
