import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "I have had the pleasure of doing business with Conveyors, Inc. for over 25 years, a 1st class organization.",
        author: "D. Clark",
        role: "Local Industrial Distributor",
        rating: 5
    },
    {
        id: 2,
        quote: "It is a masterpiece! A work of art! You guys are very good! You guys are very smart! Most of all you put up with us through engineering changes.",
        author: "R. Stigen",
        role: "Engineering Firm",
        rating: 5
    },
    {
        id: 3,
        quote: "I truly enjoy/appreciate going into these plants and hearing positive things about the products I represent. Its wins like this that keeps us all going!",
        author: "M. Miigerl",
        role: "Manufacture Rep. Firm",
        rating: 5
    },
    {
        id: 4,
        quote: "Conveyors Inc. strives to provide a quality product and superior service beyond what is normally expected.",
        author: "Long-term Partner",
        role: "Industrial Client",
        rating: 5
    }
];

export function TestimonialsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="pt-12 md:pt-20 lg:pt-24 pb-6 md:pb-8 bg-slate-50 relative overflow-hidden" ref={ref}>
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 mb-10 md:mb-16 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 md:mb-3 block">Client Success</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 md:mb-6">
                        Trusted by the <span className="text-accent">Best</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
                        Don't just take our word for it. Here is what industry leaders say about our precision and reliability.
                    </p>
                </motion.div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-4 md:gap-6 lg:gap-8 py-6 md:py-10"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Quadruple list for smooth infinite loop */}
                    {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] flex-shrink-0 p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 whitespace-normal relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <Quote className="absolute top-5 right-5 md:top-8 md:right-8 w-8 h-8 md:w-10 md:h-10 text-accent/10 group-hover:text-accent/20 transition-colors" />

                            <div className="flex gap-1 mb-4 md:mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
                                ))}
                            </div>

                            <blockquote className="text-base md:text-lg lg:text-xl text-slate-700 font-medium leading-relaxed mb-4 md:mb-6 italic">
                                "{t.quote}"
                            </blockquote>

                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-base md:text-lg border border-slate-200">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-sm md:text-base text-slate-900">{t.author}</div>
                                    <div className="text-xs md:text-sm text-accent font-medium uppercase tracking-wider">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradients to fade edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
            </div>

        </section>
    );
}
