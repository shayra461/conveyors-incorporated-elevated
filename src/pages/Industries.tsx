import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ShieldCheck, Cpu, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { industriesData } from '@/data/industriesData';

const Industries = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter industries by title, description or processed materials
  const filteredIndustries = industriesData.filter(ind => {
    const matchesSearch = 
      ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.materials.some(mat => mat.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Premium Industrial Hero Banner */}
        <section className="relative pt-44 pb-24 bg-gradient-dark overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e11d48_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <span className="h-px w-10 bg-accent" />
                <span className="text-accent font-semibold uppercase tracking-widest text-sm">
                  Industrial Expertise
                </span>
                <span className="h-px w-10 bg-accent" />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight mb-8"
              >
                Solutions for Every <span className="text-accent bg-clip-text">Industrial Sector</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-primary-foreground/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12"
              >
                From highly abrasive mining aggregates to sterile food-grade processing, Conveyors, Inc. engineers rugged, heavy-duty material handling machinery tailored to CEMA specifications.
              </motion.p>

              {/* Interactive Search Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative max-w-xl mx-auto"
              >
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-primary-foreground/45" />
                </div>
                <input
                  type="text"
                  placeholder="Search industries (e.g., Coal, Biosolids, Food-grade)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dynamic Industries Catalog Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            
            {/* Sector Metrics & Trust Badges */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
              <div className="flex gap-4 p-6 rounded-2xl bg-muted/40 border border-border/50">
                <HardHat className="w-10 h-10 text-accent flex-shrink-0" />
                <div>
                  <h4 className="font-heading text-lg font-bold text-foreground mb-1">CEMA Standard Compliance</h4>
                  <p className="text-muted-foreground text-sm">All components conform dimensionally to precision Conveyor Equipment Manufacturers Association blueprints.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl bg-muted/40 border border-border/50">
                <ShieldCheck className="w-10 h-10 text-accent flex-shrink-0" />
                <div>
                  <h4 className="font-heading text-lg font-bold text-foreground mb-1">Severe Duty Custom</h4>
                  <p className="text-muted-foreground text-sm">Specialty wear protection, hard-surface alloys, and abrasion-resistant chromium plates protect against downtime.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl bg-muted/40 border border-border/50">
                <Cpu className="w-10 h-10 text-accent flex-shrink-0" />
                <div>
                  <h4 className="font-heading text-lg font-bold text-foreground mb-1">Custom OEM Retrofitting</h4>
                  <p className="text-muted-foreground text-sm">Obsolete component replacement built exactly to customized client layouts or plant schematics.</p>
                </div>
              </div>
            </div>

            {/* Catalog Grid */}
            <AnimatePresence mode="popLayout">
              <motion.div 
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredIndustries.map((ind, index) => {
                  const Icon = ind.icon;
                  return (
                    <motion.div
                      layout
                      key={ind.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group relative flex flex-col bg-card rounded-2xl border border-border/50 hover:border-accent/40 transition-all duration-300 overflow-hidden shadow-md hover:shadow-2xl"
                    >
                      {/* Card Top Image */}
                      <div className="relative h-48 w-full overflow-hidden bg-muted">
                        <img 
                          src={ind.image} 
                          alt={ind.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                        
                        {/* Floating Sector Badge */}
                        <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase text-white bg-accent/80 backdrop-blur-sm px-2.5 py-1.5 rounded-md border border-white/10 shadow-lg">
                          Sector {index + 1}
                        </span>
                      </div>

                      {/* Card Content Wrapper */}
                      <div className="p-8 pt-10 flex-grow flex flex-col relative">
                        
                        {/* Overlapping Floating Icon Container */}
                        <div className="absolute top-[-28px] left-8 w-14 h-14 rounded-2xl bg-card flex items-center justify-center border border-border/50 group-hover:border-accent/30 shadow-md group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                        </div>
                        
                        {/* Title */}
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                          {ind.name}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                          {ind.shortDescription}
                        </p>
                        
                        {/* Processed Materials Tags */}
                        <div className="mt-auto pt-6 border-t border-border/40">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                            Key Materials Handled:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {ind.materials.slice(0, 3).map(mat => (
                              <span 
                                key={mat} 
                                className="text-[11px] font-medium px-2.5 py-1 rounded bg-muted text-muted-foreground border border-border/60 hover:border-accent/30 hover:bg-accent/5 transition-all"
                              >
                                {mat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Interactive Link Overlay / Learn More Action */}
                      <Link 
                        to={`/industries/${ind.id}`}
                        className="flex items-center justify-between px-8 py-5 bg-muted/40 border-t border-border/40 group-hover:bg-accent/5 transition-colors duration-300 text-sm font-semibold text-foreground group-hover:text-accent"
                      >
                        <span>Learn More & View Solutions</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Empty Search State */}
            {filteredIndustries.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-muted/20 border border-dashed border-border/70 rounded-2xl max-w-xl mx-auto"
              >
                <p className="text-lg text-muted-foreground font-medium mb-3">No Industrial Sectors Match Your Search</p>
                <p className="text-sm text-muted-foreground/80">Try typing general products or ingredients like "Coal", "Sand", "Organics", or "Sugar".</p>
              </motion.div>
            )}

          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Industries;
