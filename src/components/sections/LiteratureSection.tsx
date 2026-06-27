import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Download, ExternalLink, BookOpen, Eye, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Import book images & toast
import bookScrewConveyorGuide from '@/assets/literature/book-screw-conveyor-guide.jpg';
import bookBucketElevatorGuide from '@/assets/literature/book-bucket-elevator-guide.jpg';
import screwFlyer from '@/assets/literature/Screw_Conveyors_Flyer_new-01.jpg';
import { toast } from 'sonner';

const literatureItems = [
  {
    id: 1,
    title: 'Screw Conveyor Engineering Guide',
    description: 'Our Product Overview Flyers provide a concise introduction to each product, highlighting its purpose, key features, benefits, and available configurations. They offer an easy way to explore our equipment before reviewing detailed technical specifications.',
    image: bookScrewConveyorGuide,
    type: 'guide',
    pdfUrl: '/docs/ScrewConveyorEngineeringGuide.pdf',
    fileName: 'ScrewConveyorEngineeringGuide.pdf',
  },
  {
    id: 2,
    title: 'Bucket Elevator Engineering Guide',
    description: 'Reference manual for bucket elevator design, including speed ratios, casing layouts, centrifugal vs continuous discharge charts, and component designs.',
    image: bookBucketElevatorGuide,
    type: 'guide',
    pdfUrl: '/docs/BucketElevatorEngineeringGuide.pdf',
    fileName: 'BucketElevatorEngineeringGuide.pdf',
  },
  {
    id: 3,
    title: 'Product Overview Flyers',
    description: 'Our Product Overview Flyers provide a concise introduction to each product, highlighting its purpose, key features, benefits, and available configurations. They offer an easy way to explore our equipment before reviewing detailed technical specifications.',
    image: screwFlyer,
    type: 'flyer',
    pdfUrl: screwFlyer,
    fileName: 'Screw_Conveyors_Flyer_new-01.jpg',
  },
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

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

function LiteratureCard({ 
  item, 
  index, 
  onDownload 
}: { 
  item: typeof literatureItems[0]; 
  index: number; 
  onDownload: (pdfUrl: string, fileName: string) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-accent/50 flex flex-col h-full">
        {/* Book Image Container */}
        <div className="relative h-72 bg-gradient-to-br from-muted to-secondary flex items-center justify-center p-6 overflow-hidden">
          {/* Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{ opacity: isHovered ? 0.2 : 0.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }} />
          </motion.div>

          {/* Book Image */}
          <motion.img
            src={item.image}
            alt={item.title}
            className="h-56 w-auto object-contain relative z-10 drop-shadow-2xl"
            animate={{
              scale: isHovered ? 1.05 : 1,
              y: isHovered ? -5 : 0,
              rotate: isHovered ? 2 : 0,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />

          {/* Hover Overlay with Buttons */}
          <motion.div
            className="absolute inset-0 bg-primary/95 flex flex-col gap-3 items-center justify-center z-20 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col gap-3 w-full max-w-[180px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Button 
                variant="heroOutline" 
                size="default" 
                className="w-full group/btn text-white border-white hover:bg-white hover:text-primary transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  onDownload(item.pdfUrl, item.fileName);
                }}
              >
                <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                {item.type === 'flyer' ? 'Download JPG' : 'Download PDF'}
              </Button>
              <Button 
                variant="heroOutline" 
                size="default" 
                className="w-full text-white border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
                  const resolvedUrl = item.pdfUrl.startsWith('http') || item.pdfUrl.startsWith('data:') || item.pdfUrl.startsWith('/conveyors') || item.pdfUrl.startsWith('/src')
                    ? item.pdfUrl
                    : `${baseUrl}${item.pdfUrl}`;
                  window.open(resolvedUrl, '_blank');
                }}
              >
                {item.type === 'flyer' ? <Eye className="w-4 h-4 mr-2" /> : <ExternalLink className="w-4 h-4 mr-2" />}
                {item.type === 'flyer' ? 'Open Lightbox' : 'View Online'}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <motion.div
            className="flex items-center gap-2 mb-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {item.type === 'flyer' ? <FileText className="w-5 h-5 text-accent" /> : <BookOpen className="w-5 h-5 text-accent" />}
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {item.type === 'flyer' ? 'Product Flyer' : item.type === 'guide' ? 'Technical Guide' : item.type === 'brochure' ? 'Brochure' : 'Worksheet'}
            </span>
          </motion.div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function LiteratureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleDownload = async (imageUrl: string, filename: string) => {
    try {
      const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
      const resolvedUrl = imageUrl.startsWith('http') || imageUrl.startsWith('blob:') || imageUrl.startsWith('data:') || (baseUrl && imageUrl.startsWith(baseUrl))
        ? imageUrl
        : `${baseUrl}${imageUrl}`;

      const response = await fetch(resolvedUrl);
      if (!response.ok) throw new Error('Fetch failed');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success(`Started download of ${filename}`);
    } catch (e) {
      // Fallback
      const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
      const resolvedUrl = imageUrl.startsWith('http') || imageUrl.startsWith('blob:') || imageUrl.startsWith('data:') || (baseUrl && imageUrl.startsWith(baseUrl))
        ? imageUrl
        : `${baseUrl}${imageUrl}`;
      window.open(resolvedUrl, '_blank');
    }
  };

  return (
    <section className="pt-12 pb-24 lg:pb-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
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
              Resources
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
            Technical <span className="text-accent">Literature</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Access our collection of custom guides, product brochures, and design worksheets
            for bulk material handling equipment.
          </motion.p>
        </motion.div>

        {/* Literature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {literatureItems.map((item, index) => (
            <LiteratureCard key={item.id} item={item} index={index} onDownload={handleDownload} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link to="/resources">
              <Button variant="default" size="lg" className="group">
                View All Literature
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
