import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Industries', path: '/industries' },
  { label: 'Training', path: '/training' },
  { label: 'Contact', path: '/contact' },
];

const productLinks = [
  { label: 'Screw Conveyors', path: '/products' },
  { label: 'Belt Conveyors', path: '/products' },
  { label: 'Bucket Elevators', path: '/products' },
  { label: 'Custom Solutions', path: '/products' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-6">
            <img src={logo} alt="Conveyors Incorporated" className="h-12 md:h-14 lg:h-16 w-auto" />
            <p className="text-primary-foreground/70 text-xs md:text-sm leading-relaxed">
              Industry leaders in bulk material handling and conveyor systems manufacturing.
              Engineering excellence since 1977.
            </p>
            <div className="flex gap-2 md:gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 md:w-10 md:h-10 rounded bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base md:text-lg font-bold mb-4 md:mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-xs md:text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 -ml-5 md:-ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-base md:text-lg font-bold mb-4 md:mb-6 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2 md:space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-xs md:text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 -ml-5 md:-ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-base md:text-lg font-bold mb-4 md:mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a
                  href="tel:+18005551234"
                  className="flex items-start gap-2 md:gap-3 text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-xs md:text-sm"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span>1-800-555-1234</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@conveyorsinc.com"
                  className="flex items-start gap-2 md:gap-3 text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-xs md:text-sm"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span>info@conveyorsinc.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 md:gap-3 text-primary-foreground/70 text-xs md:text-sm">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span>
                    123 Industrial Parkway<br />
                    Manufacturing City, TX 75001
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-primary-foreground/50 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Conveyors Incorporated. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
            <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
