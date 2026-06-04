import { useState, useMemo } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight, Filter, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productsData } from '@/data/productsData';

const categories = ['All', 'Conveyors', 'Feeders & Mixers', 'Components & Accessories'] as const;

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');

  // Filter and search logic
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        activeCategory === 'All' || product.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Modern Industrial Hero */}
        <section className="relative pt-48 pb-24 bg-gradient-dark overflow-hidden">
          {/* Subtle atmospheric grids and effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(162,18,11,0.15),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <span className="h-[2px] w-8 bg-accent" />
                <span className="text-accent font-heading font-medium uppercase tracking-widest text-sm md:text-base">
                  Product Catalog
                </span>
                <span className="h-[2px] w-8 bg-accent" />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-6"
              >
                Custom Excellence <br />
                <span className="text-gradient">In Bulk Solids Handling</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary-foreground/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              >
                Explore our full line of CEMA-standard industrial conveyors, high-precision feeders, and custom-fabricated hardware components custom-built for severe-duty performance.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Search, Filters and Products Showcase */}
        <section className="py-16 bg-background relative z-20">
          <div className="container mx-auto px-6">
            
            {/* Interactive Control Panel */}
            <div className="bg-card border border-border/80 rounded-xl shadow-lg p-6 mb-12 -mt-24 relative z-30 max-w-5xl mx-auto backdrop-blur-md">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                
                {/* Search Bar */}
                <div className="relative w-full lg:w-96 group">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground w-4.5 h-4.5 group-focus-within:text-accent transition-colors duration-300" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search conveyors, components..."
                    className="w-full pl-11 pr-4 py-3 bg-muted/50 hover:bg-muted/80 focus:bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 text-sm font-medium"
                  />
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-center lg:justify-end">
                  <div className="flex items-center gap-2 mr-2 text-muted-foreground text-xs font-semibold uppercase tracking-wider hidden sm:flex">
                    <Filter className="w-3.5 h-3.5" />
                    <span>Filter:</span>
                  </div>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
                        activeCategory === category
                          ? 'bg-gradient-accent text-white shadow-md shadow-accent/20 scale-105'
                          : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

              </div>

              {/* Status Bar */}
              <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground font-medium">
                <div className="flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Showing {filteredProducts.length} of {productsData.length} premium solutions</span>
                </div>
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="text-accent hover:underline font-semibold"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <AnimatePresence mode="wait">
              {filteredProducts.length > 0 ? (
                <motion.div 
                  key={activeCategory + searchTerm}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group bg-card hover:bg-card border border-border/70 hover:border-accent/40 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover-lift transition-all duration-300 flex flex-col h-full relative"
                    >
                      {/* Category Label */}
                      <span className="absolute top-4 left-4 z-10 bg-navy/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                        {product.category}
                      </span>

                      {/* Image Frame */}
                      <div className="aspect-[4/3] w-full bg-gradient-steel p-6 flex items-center justify-center overflow-hidden relative border-b border-border/40">
                        {/* Overlay subtle lighting effect */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0.05)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-500 ease-out"
                        />
                      </div>

                      {/* Info Panel */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                            {product.name}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-3 mb-5 leading-relaxed font-medium">
                            {product.shortDescription}
                          </p>
                        </div>

                        {/* CTA Footer */}
                        <Link 
                          to={`/products/${product.id}`}
                          className="inline-flex items-center gap-2 text-accent font-semibold text-sm group/btn hover:text-accent-dark transition-colors duration-300 mt-auto"
                        >
                          <span>Explore Custom Details</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20 bg-muted/30 rounded-2xl border border-dashed border-border"
                >
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">No Products Found</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    We couldn't find any products matching "{searchTerm}" under the selected filter. Try adjusting your parameters.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                    className="border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    Reset All Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Severe Duty Custom Manufacturing Section */}
        <section className="py-24 bg-gradient-dark relative overflow-hidden">
          {/* Subtle backdrops */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(162,18,11,0.1),rgba(255,255,255,0))]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                Need a Custom System?
              </h2>
              <p className="text-primary-foreground/75 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                Conveyors Inc excels at custom, made-to-order solutions. Our veteran design staff utilizes cutting-edge CAD/FEA tools to construct complete, application-specific layouts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/quote">
                  <Button variant="hero" size="lg" className="group w-full sm:w-auto px-8 py-6 text-base font-semibold rounded-lg shadow-lg">
                    Request Custom Quote
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto px-8 py-6 text-base font-semibold rounded-lg">
                    Speak with a Specialist
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
