import { useState, useRef, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Wrench, 
  Award, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Plane,
  Car,
  ShieldAlert,
  User,
  Building,
  Mail,
  Phone,
  Plus,
  Trash2,
  Lock,
  Unlock,
  Info,
  Printer,
  CalendarCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

// Import downloaded training facility image
import trainingFacility from '@/assets/training-facility.png';

// Import compressed training videos
import trainingLoop2 from '@/assets/training/training-loop-2.mp4';
import trainingLoop4 from '@/assets/training/training-loop-4.mp4';
import trainingLoop1New from '@/assets/training/training-loop-1-new.mp4';
import trainingLoop2New from '@/assets/training/training-loop-2-new.mp4';

// Features of the training course
const trainingFeatures = [
  {
    icon: Wrench,
    title: '100% Hands-On Training',
    description: 'Work directly with full-size, operational material handling equipment in our dedicated training lab—less PowerPoint, more active learning.',
  },
  {
    icon: GraduationCap,
    title: 'Basics to Advanced Skills',
    description: 'Gain practical experience from basic component identification to advanced design, horsepower calculations, and troubleshooting.',
  },
  {
    icon: Users,
    title: 'Individual & Company Slots',
    description: 'Perfect for individual engineers looking to refine skills or full company teams needing structural training on bulk material systems.',
  },
  {
    icon: Award,
    title: 'All Local Expenses Covered',
    description: 'Conveyors, Inc. covers all hotel lodging, daily lunches, team-building events, and evening dinners. You only cover your flight to DFW.',
  },
];

// 2026 Monthly schedule data
const scheduleMonths = [
  { name: 'January', status: 'no-class', dates: 'No Class Scheduled', year: '2026' },
  { name: 'February', status: 'no-class', dates: 'No Class Scheduled', year: '2026' },
  { name: 'March', status: 'no-class', dates: 'No Class Scheduled', year: '2026' },
  { name: 'April', status: 'no-class', dates: 'No Class Scheduled', year: '2026' },
  { name: 'May', status: 'reserved', dates: 'Fully Booked / Reserved', year: '2026' },
  { name: 'June', status: 'no-class', dates: 'No Class Scheduled', year: '2026' },
  { name: 'July', status: 'available', dates: 'July 20th - 23rd', year: '2026', slotsLeft: 3 },
  { name: 'August', status: 'no-class', dates: 'No Class Scheduled', year: '2026' },
  { name: 'September', status: 'reserved', dates: 'Fully Booked / Reserved', year: '2026' },
  { name: 'October', status: 'reserved', dates: 'Fully Booked / Reserved', year: '2026' },
  { name: 'November', status: 'available', dates: 'November 16th - 20th', year: '2026', slotsLeft: 5 },
  { name: 'December', status: 'reserved', dates: 'Fully Booked / Reserved', year: '2026' },
];

// Event breakdown daily details
const dailySchedule = [
  { day: 'Monday', title: 'Arrival & Welcome', details: 'Arrival day, hotel check-in, and welcome dinner at 6:00 PM.' },
  { day: 'Tuesday', title: 'Plant Tour & Lab Work', details: '8:00 AM – 3:30 PM technical training. Plant tour, team building event at 5:00 PM, dinner at 7:15 PM.' },
  { day: 'Wednesday', title: 'Advanced Sizing & Calculations', details: '8:00 AM – 5:00 PM training. Horsepower calculations, CEMA sizing rules, and group dinner at 6:00 PM.' },
  { day: 'Thursday', title: 'Troubleshooting & Departure', details: '8:00 AM – 1:00 PM troubleshooting fundamentals. Certificates distribution. Free to depart after class.' },
];

export default function Training() {
  const formRef = useRef<HTMLDivElement>(null);
  
  // Registration state
  const [regMode, setRegMode] = useState<'individual' | 'company'>('individual');
  const [selectedSession, setSelectedSession] = useState<string>('july-2026');
  
  // Individual fields state
  const [individualData, setIndividualData] = useState({
    studentName: '',
    companyName: '',
    companyEmail: '',
    branchLocation: '',
    cellPhone: '',
    poloSize: 'L',
    travelChoice: 'Driving',
    flightInfo: ''
  });

  // Company registration fields state
  const [companyDetails, setCompanyDetails] = useState({
    companyName: '',
    branchLocation: '',
    companyEmail: ''
  });
  
  const [attendees, setAttendees] = useState([
    { id: 1, name: '', phone: '', poloSize: 'L', travelChoice: 'Driving', flightInfo: '' }
  ]);

  // Submission/Success UI states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  // Handle month selection
  const handleSelectSession = (monthName: string, status: string) => {
    if (status !== 'available') return;
    
    const targetVal = monthName === 'July' ? 'july-2026' : 'november-2026';
    setSelectedSession(targetVal);
    
    // Smooth scroll to form
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    toast.info(`Selected ${monthName} 2026 Session. Please fill out the registration form below.`);
  };

  // Add/remove attendee fields (Company Mode)
  const addAttendee = () => {
    const nextId = attendees.length > 0 ? Math.max(...attendees.map(a => a.id)) + 1 : 1;
    setAttendees([...attendees, { id: nextId, name: '', phone: '', poloSize: 'L', travelChoice: 'Driving', flightInfo: '' }]);
    toast.success('Added new attendee slot');
  };

  const removeAttendee = (id: number) => {
    if (attendees.length === 1) {
      toast.error('At least one attendee is required for company registration.');
      return;
    }
    setAttendees(attendees.filter(a => a.id !== id));
    toast.info('Removed attendee slot');
  };

  const updateAttendee = (id: number, key: string, value: string) => {
    setAttendees(attendees.map(a => a.id === id ? { ...a, [key]: value } : a));
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple checks
    if (regMode === 'individual') {
      if (!individualData.studentName || !individualData.companyName || !individualData.companyEmail || !individualData.branchLocation || !individualData.cellPhone) {
        toast.error('Please fill out all required fields marked with *');
        return;
      }
    } else {
      if (!companyDetails.companyName || !companyDetails.branchLocation || !companyDetails.companyEmail) {
        toast.error('Please fill out all company details');
        return;
      }
      
      const emptyAttendee = attendees.find(a => !a.name || !a.phone);
      if (emptyAttendee) {
        toast.error('Please provide name and phone number for all attendees');
        return;
      }
    }

    setIsSubmitting(true);
    
    // Simulate API registration call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTicketNumber(`BMH-${Math.floor(100000 + Math.random() * 900000)}`);
      toast.success('Registration request submitted successfully!');
    }, 1800);
  };

  // Print Ticket function
  const handlePrint = () => {
    window.print();
  };

  // Reset form helper
  const handleReset = () => {
    setIndividualData({
      studentName: '',
      companyName: '',
      companyEmail: '',
      branchLocation: '',
      cellPhone: '',
      poloSize: 'L',
      travelChoice: 'Driving',
      flightInfo: ''
    });
    setCompanyDetails({
      companyName: '',
      branchLocation: '',
      companyEmail: ''
    });
    setAttendees([{ id: 1, name: '', phone: '', poloSize: 'L', travelChoice: 'Driving', flightInfo: '' }]);
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="pt-44 pb-20 bg-gradient-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `radial-gradient(circle at 75% 25%, hsl(var(--accent)) 2px, transparent 2px)`,
            backgroundSize: '24px 24px'
          }} />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-12 bg-accent" />
                    <span className="text-accent font-medium uppercase tracking-widest text-sm">
                      Bulk Material Handling School
                    </span>
                  </div>
                  <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                    BMH CLASS <br />
                    <span className="text-accent">Come Learn with us</span>
                  </h1>
                  <p className="text-primary-foreground/85 text-lg md:text-xl leading-relaxed mb-8">
                    Conveyors, Inc. invites you and your engineering or sales team to join our intensive **3-day Bulk Material Handling school** in Mansfield, Texas.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
                    <div className="p-3 bg-accent/20 rounded-lg text-accent self-start">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">We Cover All Local Expenses</h4>
                      <p className="text-xs text-slate-300 leading-normal">
                        We cover your hotel lodging, meals, plant tour transportation, and dinners. You only cover your flight to Dallas/Fort Worth (DFW) or drive-in costs. Let us take care of the rest!
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button 
                      variant="hero" 
                      onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                      className="group"
                    >
                      Register for Class
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <a href="#schedule-section" className="inline-flex items-center">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        View 2026 Schedule
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="grid grid-cols-2 gap-3 h-[380px] md:h-[440px]"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-slate-900 group">
                    <video 
                      src={trainingLoop1New} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                    />
                    <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-[8px] font-bold text-accent uppercase">
                      Training Lab
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-slate-900 group">
                    <video 
                      src={trainingLoop2New} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                    />
                    <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-[8px] font-bold text-white/80 uppercase">
                      Sizing & CAD
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-slate-900 group">
                    <video 
                      src={trainingLoop2} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                    />
                    <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-[8px] font-bold text-white/80 uppercase">
                      Shop Tour
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-slate-900 group">
                    <video 
                      src={trainingLoop4} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                    />
                    <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-[8px] font-bold text-white/80 uppercase">
                      Assembly
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* What you will do & Course benefits */}
        <section className="py-20 bg-background border-b border-border/40">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-4xl font-bold mb-4">Hands-On Equipment Experience</h2>
              <p className="text-muted-foreground text-lg">
                This practical engineering course provides direct exposure to real conveyor systems. You'll gain skills that translate to immediate field advantages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {trainingFeatures.map((feat, i) => (
                <div 
                  key={i} 
                  className="bg-card border border-border/80 hover:border-accent/40 rounded-xl p-6 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-all duration-300">
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feat.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>

            {/* Course Content Details */}
            <div className="p-8 rounded-2xl bg-muted/30 border border-border/40 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">What You'll Do:</h4>
                <ul className="space-y-3">
                  {[
                    'Tour our advanced fabrication plant & meet developers.',
                    'Work with full-size screws, bucket elevators, and belt systems.',
                    'Spend time actively assembling components in the lab.',
                    'Review horsepower requirements and standard gear drives.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">Key Skills Learned:</h4>
                <ul className="space-y-3">
                  {[
                    'Deep understanding of different BMH systems and application constraints.',
                    'Identify business opportunities & learn how to sell custom designs.',
                    'Critical specifications to collect for precise engineering quotes.',
                    'Troubleshooting drive breakdowns and bulk materials flow issues.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mansfield, TX Facility Tour Section */}
        <section className="py-20 bg-muted/30 border-b border-border/40">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <h2 className="font-heading text-4xl font-bold mb-6">Our Mansfield, Texas Facility</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Conveyors, Inc. houses a state-of-the-art manufacturing plant and dedicated training laboratory in Mansfield, Texas. This facility serves as the active testing ground for our custom screw, drag, and belt systems.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Class participants receive a comprehensive tour of the production floor to understand our fabrication processes, precision tolerances, and quality control systems first-hand.
                </p>
                <div className="flex gap-4 items-center p-4 rounded-xl bg-card border border-border/60 shadow-sm max-w-lg">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Facility Location</h4>
                    <p className="text-xs text-muted-foreground">Mansfield, Texas (near Dallas/Fort Worth airport)</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border p-2 bg-card">
                  <img 
                    src={trainingFacility} 
                    alt="Conveyors Inc Mansfield Facility Tour" 
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-white/10 p-3.5 rounded-lg text-white">
                    <p className="text-[10px] text-accent font-bold uppercase tracking-wider mb-0.5">Mansfield, TX Plant</p>
                    <p className="text-xs">Active training lab featuring full-scale conveyor components.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Daily breakdown & Schedule */}
        <section id="schedule-section" className="py-20 bg-muted/15 border-b border-border/40">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Event Breakdown */}
              <div className="lg:col-span-5">
                <div className="sticky top-28">
                  <h2 className="font-heading text-3xl font-bold mb-4">Class Schedule Breakdown</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    A comprehensive, immersive schedule designed to balance classroom theory with shop floor assembly and professional networking.
                  </p>

                  <div className="space-y-4">
                    {dailySchedule.map((day, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-card border border-border/60 shadow-sm flex items-start gap-4">
                        <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-md text-accent text-xs font-bold font-mono">
                          {day.day}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-foreground">{day.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1 leading-normal">{day.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2026 Interactive Calendar */}
              <div className="lg:col-span-7">
                <h2 className="font-heading text-3xl font-bold mb-2 text-center lg:text-left">2026 Course Calendar</h2>
                <p className="text-muted-foreground text-sm mb-8 text-center lg:text-left">
                  Find available dates and select a slot. Available classes have green indicators.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {scheduleMonths.map((m, idx) => {
                    const isAvailable = m.status === 'available';
                    const isReserved = m.status === 'reserved';
                    const isNoClass = m.status === 'no-class';
                    
                    return (
                      <div 
                        key={idx}
                        onClick={() => handleSelectSession(m.name, m.status)}
                        className={`p-4 rounded-xl border flex flex-col justify-between h-40 transition-all duration-300 ${
                          isAvailable 
                            ? 'bg-emerald-500/5 border-emerald-500/30 hover:border-emerald-500 hover:shadow-lg cursor-pointer group' 
                            : isReserved
                            ? 'bg-rose-500/5 border-rose-500/20 opacity-90'
                            : 'bg-muted/10 border-border/40 opacity-55 select-none'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-xs font-bold text-muted-foreground/80 font-mono tracking-wide">{m.year}</span>
                            <h4 className="font-heading text-lg font-bold text-foreground mt-0.5">{m.name}</h4>
                          </div>
                          <div className={`p-1.5 rounded-lg ${
                            isAvailable 
                              ? 'bg-emerald-500/15 text-emerald-500 group-hover:scale-105 transition-transform' 
                              : isReserved 
                              ? 'bg-rose-500/15 text-rose-500' 
                              : 'bg-muted/20 text-muted-foreground/60'
                          }`}>
                            {isAvailable ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                          </div>
                        </div>

                        <div>
                          <p className={`text-xs font-bold ${
                            isAvailable 
                              ? 'text-emerald-500' 
                              : isReserved 
                              ? 'text-rose-500' 
                              : 'text-muted-foreground/50'
                          }`}>
                            {m.dates}
                          </p>
                          {isAvailable && (
                            <div className="flex items-center gap-1.5 mt-2">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                              </span>
                              <span className="text-[10px] font-bold text-emerald-500/90 font-mono">
                                {m.slotsLeft} Slots Available
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20 flex gap-3.5 items-start max-w-2xl">
                  <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-foreground mb-0.5">Private Group Classes</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Need custom training for your entire sales or engineering office? We organize private class schedules for individual organizations. Reach out directly to <a href="mailto:m.quezada@conveyorsinc.net" className="text-accent hover:underline font-bold">m.quezada@conveyorsinc.net</a>.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Signup Form */}
        <section ref={formRef} className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-card border border-border shadow-xl rounded-2xl overflow-hidden"
                >
                  {/* Form Banner image */}
                  <div className="relative h-44 bg-gradient-to-r from-slate-900 to-slate-950 flex items-center p-6 border-b border-border/40 overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `radial-gradient(circle at 10% 50%, hsl(var(--accent)) 3px, transparent 3px)`,
                      backgroundSize: '30px 30px'
                    }} />
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-14 h-14 bg-accent/25 rounded-xl border border-accent/40 flex items-center justify-center text-accent">
                        <CalendarCheck className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white leading-snug">School Registration Form</h2>
                        <p className="text-xs text-slate-400 mt-1 leading-normal">
                          Mansfield, Texas 3-Day Course. Fill details below to secure your spot.
                        </p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                    {/* Toggle Reg Mode */}
                    <div>
                      <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 block">
                        Registration Type:
                      </Label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setRegMode('individual')}
                          className={`flex items-center justify-center gap-2 p-3 rounded-xl border font-bold text-sm transition-all duration-200 ${
                            regMode === 'individual'
                              ? 'bg-accent/10 border-accent text-accent shadow-sm'
                              : 'bg-muted/10 border-border hover:bg-muted/20 text-muted-foreground'
                          }`}
                        >
                          <User className="w-4 h-4" />
                          Individual Student
                        </button>
                        <button
                          type="button"
                          onClick={() => setRegMode('company')}
                          className={`flex items-center justify-center gap-2 p-3 rounded-xl border font-bold text-sm transition-all duration-200 ${
                            regMode === 'company'
                              ? 'bg-accent/10 border-accent text-accent shadow-sm'
                              : 'bg-muted/10 border-border hover:bg-muted/20 text-muted-foreground'
                          }`}
                        >
                          <Building className="w-4 h-4" />
                          Company / Group
                        </button>
                      </div>
                    </div>

                    {/* Class Session Selector */}
                    <div>
                      <Label htmlFor="session-select" className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">
                        Select Training Session *
                      </Label>
                      <Select value={selectedSession} onValueChange={setSelectedSession}>
                        <SelectTrigger id="session-select" className="h-11">
                          <SelectValue placeholder="Choose a date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="july-2026">July 20th - 23rd, 2026 (Open)</SelectItem>
                          <SelectItem value="november-2026">November 16th - 20th, 2026 (Open)</SelectItem>
                          <SelectItem value="private-request">Request Private Organizational Class</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Form Fields - INDIVIDUAL MODE */}
                    {regMode === 'individual' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="student-name">Student Name *</Label>
                            <Input 
                              id="student-name"
                              required 
                              placeholder="e.g. John Doe"
                              value={individualData.studentName}
                              onChange={(e) => setIndividualData({...individualData, studentName: e.target.value})}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="company-name">Company Name *</Label>
                            <Input 
                              id="company-name"
                              required 
                              placeholder="e.g. Acme Industries"
                              value={individualData.companyName}
                              onChange={(e) => setIndividualData({...individualData, companyName: e.target.value})}
                              className="mt-1"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="company-email">Company Email *</Label>
                            <Input 
                              id="company-email"
                              type="email"
                              required 
                              placeholder="e.g. john@company.com"
                              value={individualData.companyEmail}
                              onChange={(e) => setIndividualData({...individualData, companyEmail: e.target.value})}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="branch-location">Branch Location *</Label>
                            <Input 
                              id="branch-location"
                              required 
                              placeholder="City, State"
                              value={individualData.branchLocation}
                              onChange={(e) => setIndividualData({...individualData, branchLocation: e.target.value})}
                              className="mt-1"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="cell-phone">Cell Phone Number *</Label>
                            <Input 
                              id="cell-phone"
                              type="tel"
                              required 
                              placeholder="(555) 555-5555"
                              value={individualData.cellPhone}
                              onChange={(e) => setIndividualData({...individualData, cellPhone: e.target.value})}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="polo-size">Polo Shirt Size *</Label>
                            <Select 
                              value={individualData.poloSize} 
                              onValueChange={(val) => setIndividualData({...individualData, poloSize: val})}
                            >
                              <SelectTrigger id="polo-size" className="mt-1">
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                              <SelectContent>
                                {['S', 'M', 'L', 'XL', 'XXL', '3XL'].map(sz => (
                                  <SelectItem key={sz} value={sz}>{sz}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Travel Choice */}
                        <div className="p-4 rounded-xl border border-border/80 bg-muted/10">
                          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 block">
                            How will you travel to Mansfield, TX? *
                          </Label>
                          <div className="flex gap-6">
                            <label className="flex items-center gap-2 cursor-pointer font-semibold text-sm">
                              <input 
                                type="radio" 
                                name="travel" 
                                value="Driving" 
                                checked={individualData.travelChoice === 'Driving'}
                                onChange={() => setIndividualData({...individualData, travelChoice: 'Driving'})}
                                className="w-4 h-4 text-accent accent-accent focus:ring-accent"
                              />
                              <Car className="w-4 h-4 text-muted-foreground" />
                              Driving
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer font-semibold text-sm">
                              <input 
                                type="radio" 
                                name="travel" 
                                value="Flying" 
                                checked={individualData.travelChoice === 'Flying'}
                                onChange={() => setIndividualData({...individualData, travelChoice: 'Flying'})}
                                className="w-4 h-4 text-accent accent-accent focus:ring-accent"
                              />
                              <Plane className="w-4 h-4 text-muted-foreground" />
                              Flying
                            </label>
                          </div>

                          <div className="mt-4">
                            <Label htmlFor="flight-info" className="text-xs font-bold text-muted-foreground block mb-1">
                              Flight Information / Arrival Details
                            </Label>
                            <Textarea 
                              id="flight-info"
                              placeholder="Include arrival flight dates/times or road arrival details. If unknown, leave blank and email details later."
                              value={individualData.flightInfo}
                              onChange={(e) => setIndividualData({...individualData, flightInfo: e.target.value})}
                              className="h-20 text-xs mt-1"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Form Fields - COMPANY MODE */}
                    {regMode === 'company' && (
                      <div className="space-y-6">
                        {/* Company Level Info */}
                        <div className="p-4 rounded-xl border border-border/80 bg-muted/15 space-y-4">
                          <h4 className="font-bold text-sm text-foreground border-b border-border/60 pb-1.5">Company Office Details</h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="co-name">Company Name *</Label>
                              <Input 
                                id="co-name" 
                                required
                                placeholder="e.g. Acme Corp" 
                                value={companyDetails.companyName}
                                onChange={(e) => setCompanyDetails({...companyDetails, companyName: e.target.value})}
                                className="mt-1 text-xs"
                              />
                            </div>
                            <div>
                              <Label htmlFor="co-branch">Branch Location *</Label>
                              <Input 
                                id="co-branch" 
                                required
                                placeholder="City, State" 
                                value={companyDetails.branchLocation}
                                onChange={(e) => setCompanyDetails({...companyDetails, branchLocation: e.target.value})}
                                className="mt-1 text-xs"
                              />
                            </div>
                            <div>
                              <Label htmlFor="co-email">Corporate Email *</Label>
                              <Input 
                                id="co-email" 
                                type="email"
                                required
                                placeholder="billing@company.com" 
                                value={companyDetails.companyEmail}
                                onChange={(e) => setCompanyDetails({...companyDetails, companyEmail: e.target.value})}
                                className="mt-1 text-xs"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Attendees List */}
                        <div className="space-y-4">
                          <div className="flex justify-between items-center border-b border-border/60 pb-2">
                            <h4 className="font-bold text-sm text-foreground">Registered Class Attendees</h4>
                            <Button 
                              type="button" 
                              variant="outline" 
                              size="sm" 
                              onClick={addAttendee}
                              className="text-xs border-accent/40 text-accent hover:bg-accent/10"
                            >
                              <Plus className="w-3.5 h-3.5 mr-1" />
                              Add Attendee
                            </Button>
                          </div>

                          <div className="space-y-4">
                            {attendees.map((attendee, index) => (
                              <div 
                                key={attendee.id} 
                                className="p-4 rounded-xl border border-border/80 bg-card/60 relative space-y-3 shadow-sm"
                              >
                                <div className="flex justify-between items-center">
                                  <span className="text-xs font-bold text-accent font-mono">Attendee #{index + 1}</span>
                                  {attendees.length > 1 && (
                                    <button
                                      type="button"
                                      onClick={() => removeAttendee(attendee.id)}
                                      className="text-muted-foreground hover:text-red-500 transition-colors"
                                      title="Remove attendee"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div>
                                    <Label htmlFor={`att-name-${attendee.id}`} className="text-xs">Student Name *</Label>
                                    <Input 
                                      id={`att-name-${attendee.id}`} 
                                      required
                                      placeholder="e.g. John Doe"
                                      value={attendee.name}
                                      onChange={(e) => updateAttendee(attendee.id, 'name', e.target.value)}
                                      className="mt-1 text-xs h-9"
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor={`att-phone-${attendee.id}`} className="text-xs">Cell Phone *</Label>
                                    <Input 
                                      id={`att-phone-${attendee.id}`} 
                                      required
                                      placeholder="(555) 555-5555"
                                      value={attendee.phone}
                                      onChange={(e) => updateAttendee(attendee.id, 'phone', e.target.value)}
                                      className="mt-1 text-xs h-9"
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor={`att-polo-${attendee.id}`} className="text-xs">Polo Shirt Size *</Label>
                                    <Select 
                                      value={attendee.poloSize} 
                                      onValueChange={(val) => updateAttendee(attendee.id, 'poloSize', val)}
                                    >
                                      <SelectTrigger id={`att-polo-${attendee.id}`} className="mt-1 h-9 text-xs">
                                        <SelectValue placeholder="Size" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {['S', 'M', 'L', 'XL', 'XXL', '3XL'].map(sz => (
                                          <SelectItem key={sz} value={sz}>{sz}</SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                                  <div className="md:col-span-1">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">Travel Mode *</Label>
                                    <div className="flex gap-4">
                                      <label className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold">
                                        <input 
                                          type="radio" 
                                          name={`travel-${attendee.id}`}
                                          value="Driving" 
                                          checked={attendee.travelChoice === 'Driving'}
                                          onChange={() => updateAttendee(attendee.id, 'travelChoice', 'Driving')}
                                          className="w-3.5 h-3.5 text-accent accent-accent"
                                        />
                                        Driving
                                      </label>
                                      <label className="flex items-center gap-1.5 cursor-pointer text-xs font-semibold">
                                        <input 
                                          type="radio" 
                                          name={`travel-${attendee.id}`}
                                          value="Flying" 
                                          checked={attendee.travelChoice === 'Flying'}
                                          onChange={() => updateAttendee(attendee.id, 'travelChoice', 'Flying')}
                                          className="w-3.5 h-3.5 text-accent accent-accent"
                                        />
                                        Flying
                                      </label>
                                    </div>
                                  </div>
                                  
                                  <div className="md:col-span-2">
                                    <Label htmlFor={`att-flight-${attendee.id}`} className="text-xs">Arrival Flight details (Optional)</Label>
                                    <Input 
                                      id={`att-flight-${attendee.id}`}
                                      placeholder="Arrival times, flight numbers or driving date details"
                                      value={attendee.flightInfo}
                                      onChange={(e) => updateAttendee(attendee.id, 'flightInfo', e.target.value)}
                                      className="mt-1 text-xs h-9"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Dress Code Warning */}
                    <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 flex gap-3.5 items-start">
                      <ShieldAlert className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-xs text-foreground mb-0.5">Required Lab Dress Code</h5>
                        <p className="text-[11px] text-muted-foreground leading-normal">
                          For plant tour and training lab safety, all attendees **MUST wear pants and closed-toe shoes** during active classes. No shorts, sandals, or open footwear will be permitted in the lab.
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 border-t border-border/60 flex justify-end">
                      <Button 
                        type="submit" 
                        variant="accent" 
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto font-bold px-8"
                      >
                        {isSubmitting ? 'Submitting Registration...' : 'Submit Class Registration'}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                /* Success Ticket Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-card border border-border shadow-2xl rounded-2xl overflow-hidden p-6 md:p-8 max-w-2xl mx-auto"
                >
                  <div className="text-center pb-6 border-b border-border/60">
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30 animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-foreground">Registration Submitted!</h2>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                      Thank you! Your training school reservation request has been logged. We will contact you shortly to confirm hotel bookings.
                    </p>
                  </div>

                  {/* ticket details */}
                  <div className="py-6 border-b border-border/60 space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-medium">Ticket Number:</span>
                      <span className="font-mono font-bold text-accent">{ticketNumber}</span>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-medium">Selected Class Session:</span>
                      <span className="font-bold text-foreground">
                        {selectedSession === 'july-2026' ? 'July 20th - 23rd, 2026' : selectedSession === 'november-2026' ? 'November 16th - 20th, 2026' : 'Private Office Class Request'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-medium">Registration Mode:</span>
                      <span className="font-bold capitalize text-foreground">{regMode}</span>
                    </div>

                    <div className="p-4 rounded-xl bg-muted/40 border border-border/40 text-xs space-y-2.5">
                      <h4 className="font-bold text-foreground uppercase tracking-wide">Registration Summary</h4>
                      
                      {regMode === 'individual' ? (
                        <div className="space-y-1.5 text-muted-foreground">
                          <p><strong className="text-foreground">Student Name:</strong> {individualData.studentName}</p>
                          <p><strong className="text-foreground">Company:</strong> {individualData.companyName} ({individualData.branchLocation})</p>
                          <p><strong className="text-foreground">Contact:</strong> {individualData.companyEmail} | {individualData.cellPhone}</p>
                          <p><strong className="text-foreground">Polo Size:</strong> {individualData.poloSize} | <strong className="text-foreground">Travel:</strong> {individualData.travelChoice}</p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="text-muted-foreground">
                            <p><strong className="text-foreground">Company:</strong> {companyDetails.companyName} ({companyDetails.branchLocation})</p>
                            <p><strong className="text-foreground">Corporate Email:</strong> {companyDetails.companyEmail}</p>
                          </div>
                          
                          <div className="border-t border-border/40 pt-2 space-y-2">
                            <p className="font-bold text-foreground">Registered Attendees ({attendees.length}):</p>
                            <div className="grid grid-cols-1 gap-1.5 font-mono text-[10px] text-muted-foreground">
                              {attendees.map((a, idx) => (
                                <p key={a.id}>
                                  {idx + 1}. {a.name} (Polo: {a.poloSize}, Travel: {a.travelChoice}) - Phone: {a.phone}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 flex flex-col sm:flex-row justify-between gap-4">
                    <Button 
                      variant="outline" 
                      onClick={handleReset}
                      className="border-border hover:bg-muted text-foreground font-semibold"
                    >
                      Register Another Team
                    </Button>
                    <div className="flex gap-3">
                      <Button 
                        variant="secondary"
                        onClick={handlePrint}
                        className="font-semibold"
                      >
                        <Printer className="w-4 h-4 mr-2" />
                        Print Confirmation
                      </Button>
                      <a href="mailto:m.quezada@conveyorsinc.net" className="w-full sm:w-auto">
                        <Button 
                          variant="accent" 
                          className="font-semibold w-full"
                        >
                          Email Details
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
