import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Wrench, Award, Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    description: 'Learn from industry veterans with decades of hands-on experience in conveyor system design and maintenance.',
  },
  {
    icon: Wrench,
    title: 'Hands-On Training',
    description: 'Work with full-scale, operational conveyor equipment in our state-of-the-art training facility.',
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    description: 'Limited enrollment ensures personalized attention and comprehensive skill development.',
  },
  {
    icon: Award,
    title: 'Industry Certification',
    description: 'Receive industry-recognized certification upon successful completion of our programs.',
  },
];

const courses = [
  {
    title: 'Screw Conveyor Fundamentals',
    duration: '2 Days',
    level: 'Beginner',
    topics: ['Component identification', 'Basic maintenance', 'Safety procedures', 'Troubleshooting basics'],
  },
  {
    title: 'Advanced Maintenance',
    duration: '3 Days',
    level: 'Intermediate',
    topics: ['Preventive maintenance', 'Component replacement', 'System optimization', 'Performance analysis'],
  },
  {
    title: 'System Design & Engineering',
    duration: '5 Days',
    level: 'Advanced',
    topics: ['Design principles', 'Material selection', 'Capacity calculations', 'Custom solutions'],
  },
];

const Training = () => {
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
                  Training Programs
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Best-in-Class Technical Training
              </h1>
              <p className="text-primary-foreground/70 text-xl mb-8">
                Hands-on training with life-size, operational equipment. Develop the skills to optimize your conveyor operations.
              </p>
              <Button variant="hero" size="lg" className="group">
                View Training Schedule
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
                Why Train With Us?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our training program is designed to provide practical, applicable skills that improve job performance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
                Available Courses
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold uppercase rounded">
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {course.title}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {course.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Need Custom Training?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              We can develop customized training programs tailored to your organization's specific needs and equipment.
            </p>
            <Button variant="accent" size="lg">
              Request Custom Training
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Training;
