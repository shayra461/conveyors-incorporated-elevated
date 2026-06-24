import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import local article images
import heavyDutyBeltImg from '@/assets/news/6 Advantages of Heavy-Duty Belt Conveyors for Material Handling.jpg';
import conveyorBucketImg from '@/assets/news/Plastic or Steel How to Choose the Right Conveyor Bucket.jpg';
import coreComponentsImg from '@/assets/news/Unlocking Efficiency The Core Components of Conveyor Belt Systems.png';
import customScrewImg from '@/assets/news/Optimize Your Bulk Material Handling with Customized Screw Conveyor Solutions from Martin Sprocket.jpg';
import helicoidSectionalImg from '@/assets/news/Screw Conveyors Helicoid Flighting vs. Sectional Flighting.jpg';

const newsArticles = [
  {
    title: "6 Advantages of Heavy-Duty Belt Conveyors for Material Handling",
    date: "February 5, 2025",
    author: "Featured In IBT Editorial",
    category: "Bulk Handling",
    image: heavyDutyBeltImg,
    excerpt: "Heavy-duty belt conveyors are vital for high-volume bulk material handling in mining, manufacturing, and agriculture. Explore the six key advantages they offer.",
    url: "https://ibtinc.com/6-advantages-of-heavy-duty-belt-conveyors-for-material-handling/"
  },
  {
    title: "Plastic or Steel? How to Choose the Right Conveyor Bucket",
    date: "March 21, 2024",
    author: "Featured In IBT Editorial",
    category: "Product Design",
    image: conveyorBucketImg,
    excerpt: "Conveyor buckets are highly versatile components in material handling. Read our guide on selecting between plastic and steel elevator buckets to optimize your bulk handling system.",
    url: "https://ibtinc.com/plastic-steel-how-to-choose-conveyor-bucket/"
  },
  {
    title: "Unlocking Efficiency: The Core Components of Conveyor Belt Systems",
    date: "October 6, 2023",
    author: "Featured In IBT Editorial",
    category: "Technical Guide",
    image: coreComponentsImg,
    excerpt: "Delve into the fundamental components and functions of conveyor belt systems. Learn how custom configurations and core parts work together to optimize bulk material transport.",
    url: "https://ibtinc.com/unlocking-efficiency-the-core-components-of-conveyor-belt-systems/"
  },
  {
    title: "Optimize Your Bulk Material Handling with Custom Screw Conveyor Solutions",
    date: "February 21, 2023",
    author: "Featured In IBT Editorial",
    category: "Technical Guide",
    image: customScrewImg,
    excerpt: "Learn how custom screw conveyor solutions optimize productivity, maximize conveyor component life, and protect your equipment from material wear to reduce unplanned downtime.",
    url: "https://ibtinc.com/do-you-need-a-screw-conveyor-or-a-feeder-screw/"
  },
  {
    title: "Screw Conveyors: Helicoid Flighting vs. Sectional Flighting",
    date: "July 25, 2022",
    author: "Featured In IBT Editorial",
    category: "Technical Guide",
    image: helicoidSectionalImg,
    excerpt: "Understand the key differences between helicoid and sectional flighting for screw conveyors. Learn when to use continuous rolled vs. segmented plate flighting to maximize system life.",
    url: "https://ibtinc.com/screw-conveyors-helicoid-flighting-vs-sectional-flighting/"
  }
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-44 pb-20 bg-gradient-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-accent" />
                <span className="text-accent font-medium uppercase tracking-widest text-sm">Latest Updates</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-8">
                News & <span className="text-accent">Insights</span>
              </h1>
              <p className="text-primary-foreground/70 text-xl leading-relaxed">
                Stay updated with the latest developments, innovations, and stories from the world of bulk material handling.
              </p>
            </motion.div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {newsArticles.map((article, index) => (
                <motion.a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex flex-col h-full bg-card/50 rounded-2xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                    </div>
                    
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors leading-tight">
                      {article.title}
                    </h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                      {article.excerpt}
                    </p>
                    
                    <Button variant="ghost" className="p-0 h-auto hover:bg-transparent hover:text-accent group/link flex items-center gap-2 font-bold text-sm uppercase tracking-wider pointer-events-none">
                      Read Full Article 
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-muted relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-slate-950 rounded-3xl p-12 md:p-16 text-center border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Never Miss an Update
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest industry news, technical guides, and company announcements directly in your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                />
                <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 h-auto font-bold rounded-xl">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
