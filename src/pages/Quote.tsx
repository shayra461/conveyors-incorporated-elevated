import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Send, Upload, FileText, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  company: z.string().optional(),
  message: z.string().min(10, { message: 'Please provide some details about your project.' }),
});

const Quote = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const validFiles = newFiles.filter(file => 
        file.type === 'application/pdf' || 
        file.type === 'image/jpeg' || 
        file.type === 'image/jpg'
      );
      
      if (validFiles.length !== newFiles.length) {
        toast.error('Only PDF and JPEG files are allowed.');
      }
      
      setFiles(prev => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form Values:', values);
    console.log('Files:', files);
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Quote request sent successfully!');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 bg-gradient-dark">
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
                  Get a Quote
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Request a <span className="text-accent">Custom Quote</span>
              </h1>
              <p className="text-primary-foreground/70 text-xl">
                Tell us about your project requirements and our engineering team will provide a tailored solution.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-background relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-accent/20 rounded-2xl p-12 text-center shadow-2xl"
                >
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Your quote request has been received. Our team will review your requirements and get back to you within 24-48 hours.
                  </p>
                  <Button variant="default" size="lg" onClick={() => setIsSubmitted(false)}>
                    Send Another Request
                  </Button>
                </motion.div>
              ) : (
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-semibold">Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} className="h-12 bg-muted/50 border-border/50 focus:border-accent" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-semibold">Email Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="john@company.com" {...field} className="h-12 bg-muted/50 border-border/50 focus:border-accent" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-semibold">Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="(555) 000-0000" {...field} className="h-12 bg-muted/50 border-border/50 focus:border-accent" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-semibold">Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Company LLC" {...field} className="h-12 bg-muted/50 border-border/50 focus:border-accent" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">Project Details *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe the material, capacity, and dimensions required for your conveyor system..." 
                                className="min-h-[150px] bg-muted/50 border-border/50 focus:border-accent resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* File Upload */}
                      <div className="space-y-4">
                        <FormLabel className="text-base font-semibold block">Attachments (PDF, JPEG)</FormLabel>
                        <div 
                          className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center hover:border-accent/50 transition-colors cursor-pointer bg-muted/30 group"
                          onClick={() => document.getElementById('file-upload')?.click()}
                        >
                          <input 
                            id="file-upload" 
                            type="file" 
                            multiple 
                            accept=".pdf,.jpg,.jpeg" 
                            className="hidden" 
                            onChange={handleFileChange}
                          />
                          <Upload className="w-10 h-10 mx-auto mb-4 text-muted-foreground group-hover:text-accent transition-colors" />
                          <p className="text-muted-foreground">
                            <span className="text-foreground font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            PDF, JPEG (max 10MB per file)
                          </p>
                        </div>

                        {/* File List */}
                        {files.length > 0 && (
                          <div className="grid gap-3 mt-4">
                            {files.map((file, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border/50">
                                <div className="flex items-center gap-3">
                                  {file.type === 'application/pdf' ? (
                                    <FileText className="w-5 h-5 text-accent" />
                                  ) : (
                                    <ImageIcon className="w-5 h-5 text-blue-500" />
                                  )}
                                  <span className="text-sm font-medium truncate max-w-[200px] sm:max-w-md">
                                    {file.name}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                  </span>
                                </div>
                                <Button 
                                  type="button" 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(index);
                                  }}
                                  className="text-muted-foreground hover:text-destructive"
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="xl" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            >
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                            </motion.div>
                            Processing...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            Send Quote Request
                            <Send className="w-5 h-5" />
                          </div>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
