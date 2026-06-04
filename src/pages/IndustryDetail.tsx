import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { industriesData } from '@/data/industriesData';
import { 
  ArrowLeft, 
  Settings, 
  ChevronRight, 
  HelpCircle, 
  Layers, 
  Info,
  Calendar,
  PhoneCall
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const IndustryDetail = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const navigate = useNavigate();
  
  // Find current industry
  const industry = industriesData.find(ind => ind.id === industryId);

  if (!industry) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-40">
          <div className="text-center max-w-md px-6">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Sector Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested industrial sector does not exist or has been updated.</p>
            <Button onClick={() => navigate('/industries')} className="bg-accent hover:bg-accent/90 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Industries
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumb Navigation */}
        <div className="bg-muted/30 border-b border-border/40 pt-28 pb-4">
          <div className="container mx-auto px-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/industries" className="hover:text-accent transition-colors">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-semibold">{industry.name}</span>
          </div>
        </div>

        {/* Industrial Section Hero */}
        <section className="relative py-24 bg-gradient-dark overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Hero Left: Title and Icon */}
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                    <Icon className="w-3.5 h-3.5" />
                    <span>Conveyors, Inc. Industrial Sector</span>
                  </div>
                  
                  <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
                    {industry.name} <span className="text-accent">Solutions</span>
                  </h1>
                  
                  <p className="text-primary-foreground/80 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                    {industry.shortDescription}
                  </p>
                </motion.div>
              </div>

              {/* Hero Right: High-Contrast Industry Image Card */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full max-w-sm aspect-[4/3] lg:aspect-square rounded-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden group hover:border-accent/40 transition-all duration-300"
                >
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Circular Icon overlay */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-accent flex items-center justify-center border border-white/10 shadow-xl">
                    <Icon className="w-5 h-5 text-white animate-pulse" />
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Detailed Content Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              
              {/* Content Left Column: Overview and Process Analysis */}
              <div className="lg:col-span-7 space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-8 md:p-10 rounded-2xl bg-muted/20 border border-border/50 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Info className="w-6 h-6 text-accent" />
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                      Process Overview & Design Strategy
                    </h2>
                  </div>
                  
                  <div className="text-muted-foreground text-base leading-relaxed space-y-6 whitespace-pre-line">
                    {industry.description}
                  </div>
                </motion.div>

                {/* Severe Duty Checklist */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="p-8 md:p-10 rounded-2xl bg-card border border-border/60 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-accent" />
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                      Custom Standards & Advantages
                    </h2>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground"><strong className="text-foreground">CEMA Dimension Fit:</strong> Perfect retrofit for standard machinery catalogs.</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground"><strong className="text-foreground">Dust-Tight Seals:</strong> Minimizes plant emissions, odors, or hazard concerns.</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground"><strong className="text-foreground">Abrasion Shielding:</strong> Hardox linings and chromium overlay screws.</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground"><strong className="text-foreground">Severe High-Heat:</strong> Custom thermal cooling spirals built up to 1,800°F.</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Right Column: Materials Handled & Equipment Solutions */}
              <div className="lg:col-span-5 space-y-12">
                
                {/* Handled Materials List */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-8 rounded-2xl bg-card border border-border/50 shadow-md"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Layers className="w-6 h-6 text-accent" />
                    <h2 className="font-heading text-xl font-bold text-foreground">
                      Typical Handled Materials
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {industry.materials.map((material, idx) => (
                      <div 
                        key={material} 
                        className="flex items-center gap-3 px-4 py-3 bg-muted/40 rounded-lg border border-border/40 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                      >
                        <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">
                          {idx + 1}
                        </span>
                        <span className="text-sm font-semibold text-muted-foreground">
                          {material}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Equipment Supplied Lineup */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border/50 shadow-md"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-accent" />
                    <h2 className="font-heading text-xl font-bold text-foreground">
                      Supplied Material Handling Machinery
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    {industry.equipment.map((equip) => (
                      <div 
                        key={equip} 
                        className="flex items-center justify-between px-4 py-3.5 bg-muted/30 hover:bg-muted/70 rounded-xl border border-border/40 transition-colors"
                      >
                        <span className="text-sm font-bold text-foreground">{equip}</span>
                        <ChevronRight className="w-4 h-4 text-accent" />
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Call To Action Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-8 rounded-2xl bg-gradient-dark border border-accent/20 text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:12px_12px]" />
                  <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-3 relative z-10">
                    Need Custom Solutions?
                  </h3>
                  <p className="text-primary-foreground/70 text-sm mb-6 max-w-sm mx-auto relative z-10">
                    Our team specializes in designing bespoke components matching specific system layouts, high-heat specifications, or wear issues.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
                    <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-xl font-semibold shadow-lg transition-colors text-sm">
                      <Calendar className="w-4 h-4 mr-2" /> Request Quote
                    </Link>
                    <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-primary-foreground rounded-xl font-semibold transition-colors text-sm">
                      <PhoneCall className="w-4 h-4 mr-2" /> Contact Specialist
                    </Link>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndustryDetail;
