import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageSlider } from '@/components/ui/ImageSlider';

// Import story comparison images
import factoryCurrent from '@/assets/factory-current.jpg';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To provide innovative, high-quality conveyor solutions that optimize our customers\' material handling operations.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be the global leader in bulk material handling systems, recognized for custom excellence and customer success.',
  },
  {
    icon: Award,
    title: 'Values',
    description: 'Integrity, innovation, quality, and customer focus guide every decision we make.',
  },
];

const timeline = [
  { year: '1974', event: 'Founded in Texas as a small conveyor component supplier' },
  { year: '1985', event: 'Expanded manufacturing capabilities with new 50,000 sq ft facility' },
  { year: '1995', event: 'Achieved ISO 9001 certification' },
  { year: '2005', event: 'Launched comprehensive training program' },
  { year: '2015', event: 'Expanded to 200,000+ sq ft of manufacturing space' },
  { year: '2024', event: 'Celebrating 45+ years of industry leadership' },
];

const team = [
  {
    name: "Robert Anderson",
    role: "Chief Executive Officer",
    image: "/conveyors-incorporated-elevated/images/ceo.png",
    bio: "With over 35 years of experience in industrial manufacturing, Robert has led Conveyors Inc. through its most significant growth era."
  },
  {
    name: "Sarah Miller",
    role: "Head of Custom",
    image: "/conveyors-incorporated-elevated/images/hod-engineering.png",
    bio: "Sarah oversees all custom projects, ensuring that every system we design meets the highest standards of efficiency."
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    image: "/conveyors-incorporated-elevated/images/operations-manager.png",
    bio: "Michael coordinates our manufacturing floor and logistics, keeping our projects on track and delivered on time."
  },
  {
    name: "Emily Rodriguez",
    role: "Sales Director",
    image: "/conveyors-incorporated-elevated/images/sales-director.png",
    bio: "Emily works closely with our clients to understand their needs and provide tailored bulk material handling solutions."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-44 pb-20 bg-gradient-dark">
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
                Custom Excellence Since 1974
              </h1>
              <p className="text-primary-foreground/70 text-xl">
                Four decades of innovation, quality, and customer success in bulk material handling.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/30 -skew-x-12 transform translate-x-1/2 z-0" />
          <div className="absolute bottom-10 left-10 text-[10rem] font-bold text-foreground/[0.03] select-none z-0">
            1974
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-12 bg-accent" />
                  <span className="text-accent font-semibold uppercase tracking-wider text-sm">Legacy of Innovation</span>
                </div>
                
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                  Our <span className="text-accent">Story</span> & Evolution
                </h2>

                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Conveyors Inc. was founded in 1974, born out of a need for a reliable and trustworthy partner in the conveyor industry. Six experienced industry professionals—Jo Kathryn “Mickey” West, Dalton Grisham, Kenneth Collins, Dan Baucum, Odis Akins, and Clifford Rayburn—joined forces with a vision: to build a company that could consistently deliver dependable screw conveyors and exceptional service.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With little more than determination and expertise, the company began in a modest 2,000-square-foot tin building set in the middle of a cotton patch outside Venus, Texas. Word quickly spread about the team’s commitment to quality, and orders came in as fast as they could be filled. As demand grew, Conveyors Inc. attracted some of the best talent in the industry—skilled professionals who were not only seeking a place to apply their knowledge but also a company that valued and respected them.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Within just six months, success fueled the purchase of a 45,000-square-foot facility in Mansfield, Texas, where customers responded enthusiastically to the increased capacity. From there, growth accelerated, and the company’s reputation as a trusted leader in bulk material handling solutions was firmly established.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5"
              >
                <div className="p-2 bg-card border border-border/80 shadow-2xl rounded-2xl">
                  <ImageSlider 
                    beforeImage="/conveyors-incorporated-elevated/images/factory-aerial.jpg"
                    afterImage={factoryCurrent}
                    beforeLabel="Then - Mansfield, TX"
                    afterLabel="Today - Mansfield, TX"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Conveyors Inc. remains on the same ten acres in Mansfield’s Industrial Park, now operating with over 100,000 square feet of advanced manufacturing space. From this location, our products and systems serve customers across North America and around the globe.
              </p>

              <p className="text-lg text-foreground font-medium leading-relaxed bg-accent/5 p-8 border-l-4 border-accent rounded-r-lg">
                We specialize in screw conveyor / screw feeder systems, bucket elevators & fabricated buckets, drag conveyors, belt conveyors, shaftless conveyors, vertical screw conveyors, complete custom systems, custom fabrication, and repair/replacement parts designed for the most demanding applications. Our work spans industries including food processing, grain and feed, wastewater treatment, chemicals, and more—delivering solutions in everything from standard carbon steel to exotic alloys.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                What hasn’t changed since 1974 is our foundation. Conveyors Inc. remains committed to the same principles our founders built upon: quality craftsmanship, reliable service, and honest relationships. Those values continue to guide us as we design, build, and support bulk material handling solutions for today and the future.
              </p>

              <div className="pt-8">
                <Button variant="default" size="lg" className="bg-primary hover:bg-accent text-white shadow-xl px-8 py-6 h-auto text-lg group">
                  View Our Capabilities
                  <motion.span 
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-32 bg-background border-t border-border/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <div className="flex justify-center items-center gap-3 mb-6">
                <span className="h-px w-12 bg-accent" />
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">Leadership</span>
                <span className="h-px w-12 bg-accent" />
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Meet Our <span className="text-accent">Expert Team</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5] shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <p className="text-white/90 text-sm leading-relaxed italic border-l-2 border-accent pl-4">
                        "{member.bio}"
                      </p>
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold text-sm uppercase tracking-widest">
                    {member.role}
                  </p>
                </motion.div>
              ))}
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
