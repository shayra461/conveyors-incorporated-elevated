import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Settings, 
  Building2, 
  ShieldCheck,
  Wrench
} from 'lucide-react';
import { productsData } from '@/data/productsData';

type TabType = 'features' | 'applications';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('features');

  // Find current product
  const product = useMemo(() => {
    return productsData.find((p) => p.id === productId);
  }, [productId]);

  // Find related products (same category first, up to 3)
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return productsData
      .filter((p) => p.id !== product.id)
      .sort((a, b) => {
        if (a.category === product.category && b.category !== product.category) return -1;
        if (a.category !== product.category && b.category === product.category) return 1;
        return 0;
      })
      .slice(0, 3);
  }, [product]);

  // If product not found, render fallback/not found state
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-32 px-6">
          <div className="text-center max-w-md">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The product you are looking for does not exist or has been moved.
            </p>
            <Link to="/products">
              <Button className="bg-gradient-accent hover:opacity-90 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products Catalog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Back Link Panel */}
        <div className="bg-muted/40 border-b border-border/50 py-4 mb-12">
          <div className="container mx-auto px-6">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-accent transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
              <span>Back to Products Catalog</span>
            </Link>
          </div>
        </div>

        {/* Product Main Display Section */}
        <section className="container mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: 3D Render Frame */}
            <div className="lg:col-span-5 lg:sticky lg:top-36">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-steel rounded-2xl p-8 border border-border shadow-md aspect-square flex items-center justify-center overflow-hidden relative group"
              >
                {/* Subtle internal background lighting */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,rgba(0,0,0,0.05)_100%)] opacity-100 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Product image with mouse hover interactive effects */}
                <motion.img
                  src={product.image}
                  alt={product.name}
                  whileHover={{ scale: 1.08, rotate: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-full h-full object-contain filter drop-shadow-xl z-10"
                />

                {/* Severe Duty badge bottom right */}
                <span className="absolute bottom-4 right-4 bg-navy/80 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded border border-white/10 z-20 flex items-center gap-1.5 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <span>Severe Duty Certified</span>
                </span>
              </motion.div>
            </div>

            {/* Right Column: Specification and Narrative Panel */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Category & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded">
                    {product.category}
                  </span>
                  <span className="h-px w-8 bg-border" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    CEMA Standards Compliant
                  </span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  {product.name}
                </h1>

                <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed mb-8">
                  {product.shortDescription}
                </p>

                {/* Tab Controls */}
                <div className="flex border-b border-border/80 mb-8 relative">
                  {(['features', 'applications'] as TabType[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative py-4 px-6 font-heading text-base font-bold uppercase tracking-wider transition-colors duration-300 outline-none ${
                        activeTab === tab ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {tab === 'features' && 'Key Features'}
                      {tab === 'applications' && 'Applications & Industries'}
                      {activeTab === tab && (
                        <motion.div 
                          layoutId="activeDetailTab"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent z-10"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab content frames */}
                <div className="mb-10 min-h-[220px]">
                  <AnimatePresence mode="wait">
                    {activeTab === 'features' && (
                      <motion.div
                        key="features"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <h3 className="font-heading text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                          <Wrench className="w-5 h-5 text-accent" />
                          Custom & Operational Advantages
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 bg-muted/30 p-3.5 rounded-lg border border-border/50">
                              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                              <span className="text-foreground text-sm font-semibold leading-normal">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}


                    {activeTab === 'applications' && (
                      <motion.div
                        key="applications"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <h3 className="font-heading text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-accent" />
                          Standard Operating Scenarios
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {product.applications.map((app, idx) => (
                            <div key={idx} className="flex items-center gap-3.5 bg-muted/40 p-4 rounded-xl border border-border/40 hover:border-accent/20 transition-all">
                              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                <span className="font-heading text-accent font-bold text-sm">{idx + 1}</span>
                              </div>
                              <span className="text-foreground text-sm font-bold">{app}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Interactive Detailed Narrative */}
                <div className="bg-muted/30 border border-border/70 rounded-xl p-6 mb-10">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-accent" />
                    Product Overview & Design Philosophy
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-semibold">
                    {product.description}
                  </p>
                </div>

                {/* Call-to-Actions (CTAs) */}
                <div className="flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-dark rounded-xl border border-white/5 shadow-lg">
                  <div className="text-center sm:text-left flex-grow mb-4 sm:mb-0">
                    <h4 className="text-white font-heading text-lg font-bold">Require Pricing or Custom Edits?</h4>
                    <p className="text-primary-foreground/70 text-xs mt-1">Get custom quotes directly from our custom panel.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link to={`/quote?product=${product.id}`}>
                      <Button variant="hero" className="w-full sm:w-auto px-6 py-5 text-sm font-semibold rounded shadow-md group/btn">
                        Request Quote
                        <ArrowRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 px-6 py-5 text-sm font-semibold rounded">
                        Contact Expert
                      </Button>
                    </Link>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </section>

        {/* Related Solutions section */}
        <section className="bg-muted/20 border-t border-border/80 py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-px w-8 bg-accent" />
                  <span className="text-accent text-xs font-bold uppercase tracking-wider">Related Solutions</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Alternative Handling Abstractions
                </h2>
              </div>
              <Link to="/products" className="text-accent hover:text-accent-dark font-semibold text-sm inline-flex items-center gap-1.5 group mt-4 md:mt-0">
                <span>View Full Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-card border border-border/60 hover:border-accent/20 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group h-full cursor-pointer"
                  onClick={() => {
                    navigate(`/products/${p.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="aspect-[4/3] bg-gradient-steel p-6 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2 block">{p.category}</span>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed mb-4">
                        {p.shortDescription}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-accent font-bold text-xs mt-auto">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
