import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone / Fax',
    value: '(817) 473-4645',
    subvalue: 'Fax: (817) 473-3024',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@conveyorsinc.com',
    subvalue: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: '620 S. 4th Ave',
    subvalue: 'Mansfield, Texas 76063',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Monday - Friday',
    subvalue: '8:00 AM - 5:00 PM CST',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                  Contact Us
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Let's Start a Conversation
              </h1>
              <p className="text-primary-foreground/70 text-xl">
                Ready to discuss your material handling needs? Our team is here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-6"
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-foreground">{info.value}</p>
                      <p className="text-muted-foreground text-sm">{info.subvalue}</p>
                    </div>
                  </div>
                ))}

                {/* Find A Rep CTA */}
                <div className="p-5 bg-card border border-border rounded-lg space-y-3 mt-6 shadow-sm">
                  <h3 className="font-heading font-bold text-foreground text-lg flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    Find a Local Rep
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    We have dedicated sales and support representative teams across the United States, Canada, Mexico, and the Caribbean.
                  </p>
                  <Link to="/find-a-rep" className="block w-full">
                    <Button variant="outline" className="w-full justify-between group hover:bg-accent hover:text-white transition-all duration-300">
                      <span>Locate Representative</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="bg-card border border-border rounded-lg p-8">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                          placeholder="Company Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="quote">Request a Quote</option>
                        <option value="product">Product Inquiry</option>
                        <option value="training">Training Information</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-background border border-border rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                    <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                      Send Message
                      <Send className="w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
