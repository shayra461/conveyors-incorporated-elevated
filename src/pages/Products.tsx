import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Import product images
import mountingPlate from '@/assets/products/mounting-plate.png';
import shaftPin from '@/assets/products/shaft-pin.png';
import bearingBlock from '@/assets/products/bearing-block.png';
import beltSupport from '@/assets/products/belt-support.png';
import troughLiner from '@/assets/products/trough-liner.png';
import screwFlight from '@/assets/products/screw-flight.png';
import troughSection from '@/assets/products/trough-section.png';
import couplingBolt from '@/assets/products/coupling-bolt.png';

const productCategories = [
  {
    name: 'Screw Conveyors',
    description: 'Complete screw conveyor systems for efficient material transport',
    products: [
      { name: 'Screw Flights', image: screwFlight },
      { name: 'Trough Sections', image: troughSection },
      { name: 'Trough Liners', image: troughLiner },
    ],
  },
  {
    name: 'Components & Hardware',
    description: 'Precision-engineered components for all conveyor applications',
    products: [
      { name: 'Mounting Plates', image: mountingPlate },
      { name: 'Shaft Pins', image: shaftPin },
      { name: 'Bearing Blocks', image: bearingBlock },
      { name: 'Coupling Bolts', image: couplingBolt },
      { name: 'Belt Supports', image: beltSupport },
    ],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-dark">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-accent" />
                <span className="text-accent font-medium uppercase tracking-widest text-sm">
                  Products
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Precision-Engineered Solutions
              </h1>
              <p className="text-primary-foreground/70 text-xl">
                From individual components to complete systems, engineered for reliability and performance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Categories */}
        {productCategories.map((category, catIndex) => (
          <section key={category.name} className={`py-20 ${catIndex % 2 === 0 ? 'bg-background' : 'bg-muted'}`}>
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="font-heading text-3xl font-bold text-foreground mb-3">
                  {category.name}
                </h2>
                <p className="text-muted-foreground text-lg">{category.description}</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-square bg-gradient-steel p-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Our engineering team can design custom components and systems tailored to your specific requirements.
            </p>
            <Button variant="hero" size="lg" className="group">
              Request Custom Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
