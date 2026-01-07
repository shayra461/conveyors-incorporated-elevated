import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To provide innovative, high-quality conveyor solutions that optimize our customers\' material handling operations.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be the global leader in bulk material handling systems, recognized for engineering excellence and customer success.',
  },
  {
    icon: Award,
    title: 'Values',
    description: 'Integrity, innovation, quality, and customer focus guide every decision we make.',
  },
];

const timeline = [
  { year: '1977', event: 'Founded in Texas as a small conveyor component supplier' },
  { year: '1985', event: 'Expanded manufacturing capabilities with new 50,000 sq ft facility' },
  { year: '1995', event: 'Achieved ISO 9001 certification' },
  { year: '2005', event: 'Launched comprehensive training program' },
  { year: '2015', event: 'Expanded to 200,000+ sq ft of manufacturing space' },
  { year: '2024', event: 'Celebrating 45+ years of industry leadership' },
];

const About = () => {
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
                  About Us
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Engineering Excellence Since 1977
              </h1>
              <p className="text-primary-foreground/70 text-xl">
                Four decades of innovation, quality, and customer success in bulk material handling.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                  Our <span className="text-accent">Story</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Conveyors Incorporated was founded with a simple mission: to engineer the most 
                  reliable and efficient bulk material handling solutions in the industry. What 
                  started as a small operation has grown into a leading manufacturer trusted by 
                  industries worldwide.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Today, we continue to push the boundaries of innovation while maintaining our 
                  commitment to quality craftsmanship and exceptional customer service.
                </p>
                <Button variant="default" size="lg">
                  View Our Capabilities
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="bg-card rounded-lg p-6 border border-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
                Our <span className="text-accent">Journey</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 mb-8"
                >
                  <div className="font-heading text-2xl font-bold text-accent w-20 flex-shrink-0">
                    {item.year}
                  </div>
                  <div className="flex-1 bg-card rounded-lg p-4 border border-border">
                    <p className="text-foreground">{item.event}</p>
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

export default About;
