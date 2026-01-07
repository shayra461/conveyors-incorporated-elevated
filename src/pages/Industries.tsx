import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Factory, Wheat, Mountain, Fuel, Package, Recycle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = [
  {
    icon: Mountain,
    name: 'Mining & Aggregates',
    description: 'Heavy-duty conveyor systems designed to withstand the harshest mining environments. Our solutions handle everything from coal and ore to sand and gravel with exceptional reliability.',
    applications: ['Coal handling', 'Ore processing', 'Quarry operations', 'Aggregate conveying'],
  },
  {
    icon: Wheat,
    name: 'Agriculture & Grain',
    description: 'Efficient grain handling solutions that protect product integrity while maximizing throughput. Ideal for farms, elevators, mills, and food processing facilities.',
    applications: ['Grain elevators', 'Feed mills', 'Food processing', 'Seed handling'],
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Custom conveyor systems that integrate seamlessly into production lines, improving efficiency and reducing manual handling across manufacturing operations.',
    applications: ['Assembly lines', 'Material handling', 'Parts conveying', 'Automated systems'],
  },
  {
    icon: Fuel,
    name: 'Energy & Power',
    description: 'Reliable material handling systems for power generation facilities, handling coal, biomass, ash, and other materials with precision and safety.',
    applications: ['Coal-fired plants', 'Biomass facilities', 'Ash handling', 'Fuel processing'],
  },
  {
    icon: Package,
    name: 'Warehousing & Distribution',
    description: 'Efficient material flow solutions that optimize warehouse operations, from receiving to shipping, improving throughput and reducing labor costs.',
    applications: ['Distribution centers', 'E-commerce fulfillment', 'Cross-docking', 'Sorting systems'],
  },
  {
    icon: Recycle,
    name: 'Recycling & Waste',
    description: 'Durable conveyor systems built to handle the demanding conditions of recycling and waste management facilities, processing diverse materials reliably.',
    applications: ['Material recovery', 'Waste sorting', 'Compost handling', 'Scrap processing'],
  },
];

const Industries = () => {
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
                  Industries
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Solutions for Every Industry
              </h1>
              <p className="text-primary-foreground/70 text-xl">
                Trusted by leading companies across diverse industries worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded bg-accent/10 flex items-center justify-center">
                        <industry.icon className="w-7 h-7 text-accent" />
                      </div>
                      <h2 className="font-heading text-3xl font-bold text-foreground">
                        {industry.name}
                      </h2>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    <Button variant="outline" className="group">
                      View Solutions
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className={`bg-muted rounded-lg p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                      Key Applications
                    </h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {industry.applications.map((app) => (
                        <li key={app} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-accent" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
