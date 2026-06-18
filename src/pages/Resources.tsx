import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  FileText, 
  Search, 
  ArrowRight, 
  FileDown, 
  X, 
  Sliders, 
  CheckCircle2, 
  Database, 
  BookOpen, 
  Eye,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

// Import flyer images
import beltFlyer from '@/assets/literature/Belt_Conveyor_Flyer_new-01.jpg';
import bucketFlyer from '@/assets/literature/Bucket_Elevator_Flyer_new-01.jpg';
import dragFlyer from '@/assets/literature/DRAG_CONVEYORS_Flyer_new-01.jpg';
import screwFlyer from '@/assets/literature/Screw_Conveyors_Flyer_new-01.jpg';

// Import book images
import bookEngineering from '@/assets/literature/book-engineering.png';
import bookLiterature from '@/assets/literature/book-literature.png';
import bookDesign from '@/assets/literature/book-design.png';
import bookScrewConveyorGuide from '@/assets/literature/book-screw-conveyor-guide.jpg';
import bookBucketElevatorGuide from '@/assets/literature/book-bucket-elevator-guide.jpg';

// Import worksheet cover images
import bookScrewOnly from '@/assets/literature/book-screw-only.jpg';
import bookScrewConveyor from '@/assets/literature/book-screw-conveyor.jpg';
import bookScrewFeeder from '@/assets/literature/book-screw-feeder.jpg';
import bookBucketElevator from '@/assets/literature/book-bucket-elevator.jpg';
import bookDragConveyor from '@/assets/literature/book-drag-conveyor.jpg';
import bookComponent from '@/assets/literature/book-component.jpg';
import bookBeltConveyor from '@/assets/literature/book-belt-conveyor.jpg';
import bookFolletoGeneral from '@/assets/literature/book-folleto-general.jpg';
import bookHojaHelicoidal from '@/assets/literature/book-hoja-helicoidal.jpg';
import bookHojaCangilon from '@/assets/literature/book-hoja-cangilon.jpg';

// Design Guides & Literature Catalog
const designBooks = [
  {
    id: 'screw-guide',
    title: 'Screw Conveyor & Feeder Engineering Guide',
    description: 'Detailed guide containing engineering specifications, CEMA capacity tables, flight options, horsepower calculations, and dimension metrics for Screw Conveyors.',
    image: bookScrewConveyorGuide,
    type: 'guide',
    pdfUrl: '/docs/ScrewConveyorEngineeringGuide.pdf',
    fileName: 'ScrewConveyorEngineeringGuide.pdf',
  },
  {
    id: 'bucket-guide',
    title: 'Bucket Elevator Engineering Guide',
    description: 'Reference manual for bucket elevator design, including speed ratios, casing layouts, centrifugal vs continuous discharge charts, and component designs.',
    image: bookBucketElevatorGuide,
    type: 'guide',
    pdfUrl: '/docs/BucketElevatorEngineeringGuide.pdf',
    fileName: 'BucketElevatorEngineeringGuide.pdf',
  },
  {
    id: 'product-literature',
    title: 'Corporate Product Catalog & Brochure',
    description: 'A comprehensive collection of corporate brochures, component photos, and layout descriptions designed for bulk material handling solutions.',
    image: bookLiterature,
    type: 'brochure',
    pdfUrl: '/docs/OurProductsFlyer.pdf',
    fileName: 'ConveyorsInc-CorporateCatalog.pdf',
  },
  {
    id: 'design-reference',
    title: 'Engineering Reference Worksheets Book',
    description: 'Reference design worksheets and calculation support templates to help capture conveyor design specifications.',
    image: bookDesign,
    type: 'worksheet',
    pdfUrl: 'https://www.conveyorsinc.net/portals/0/docs/ScrewConv_DWS_2020.pdf',
    fileName: 'ConveyorsInc-DesignWorksheetsBook.pdf',
  },
];

// Flyer specifications
const flyers = [
  {
    id: 'screw',
    title: 'Screw Conveyors Technical Flyer',
    description: 'Technical details, casing options, screw flight configurations, and standard dimensions for Screw Conveyors.',
    image: screwFlyer,
    fileName: 'Screw_Conveyors_Flyer_new-01.jpg',
  },
  {
    id: 'belt',
    title: 'Belt Conveyor Technical Flyer',
    description: 'Troughing idler details, belt width selections, drive configurations, and general specifications for Belt Conveyors.',
    image: beltFlyer,
    fileName: 'Belt_Conveyor_Flyer_new-01.jpg',
  },
  {
    id: 'drag',
    title: 'Drag Conveyors Technical Flyer',
    description: 'Drag chain options, flight styles, casing thickness, and layout arrangements for Drag Conveyors.',
    image: dragFlyer,
    fileName: 'DRAG_CONVEYORS_Flyer_new-01.jpg',
  },
  {
    id: 'bucket',
    title: 'Bucket Elevator Technical Flyer',
    description: 'Centrifugal vs. continuous discharge models, bucket casing arrangements, belt/chain options, and capacity guides.',
    image: bucketFlyer,
    fileName: 'Bucket_Elevator_Flyer_new-01.jpg',
  },
];

// Design Worksheets configurations
const worksheets = [
  {
    id: 'screw-worksheet',
    title: 'Screw Conveyor Design Worksheet',
    description: 'Record specific parameters required to size and engineer a Screw Conveyor.',
    icon: Sliders,
    image: bookScrewConveyor,
    pdfUrl: 'https://www.conveyorsinc.net/portals/0/docs/ScrewConv_DWS_2020.pdf',
    fields: [
      { id: 'length', label: 'Conveyor Length (feet)', type: 'number', placeholder: 'e.g. 20', required: true },
      { id: 'capacity', label: 'Required Capacity (TPH or CFH)', type: 'text', placeholder: 'e.g. 15 TPH', required: true },
      { id: 'material', label: 'Material to be Handled', type: 'text', placeholder: 'e.g. Portland Cement', required: true },
      { id: 'density', label: 'Material Bulk Density (lbs/cu ft)', type: 'number', placeholder: 'e.g. 94', required: true },
      { id: 'incline', label: 'Conveyor Incline Angle (Degrees)', type: 'select', options: ['0° (Horizontal)', '5°', '10°', '15°', '20°', '25°+ (Contact Engineering)'], required: true },
      { id: 'flight', label: 'Screw Flight Type Preferred', type: 'select', options: ['Standard Pitch', 'Short Pitch (for inclines)', 'Ribbon Flight', 'Cut & Folded Flight'], required: false },
    ],
  },
  {
    id: 'screw-only-worksheet',
    title: 'Screw Only Design Worksheet',
    description: 'Specify standard helicoid or sectional screw sections, pipe/shaft connections, and flight details.',
    icon: Sliders,
    image: bookScrewOnly,
    pdfUrl: 'https://www.conveyorsinc.net/portals/0/docs/ScrewOnly_DWS_2020.pdf',
    fields: [
      { id: 'screwDiameter', label: 'Screw Diameter (inches)', type: 'number', placeholder: 'e.g. 9', required: true },
      { id: 'pitch', label: 'Screw Pitch (inches)', type: 'number', placeholder: 'e.g. 9', required: true },
      { id: 'flightType', label: 'Flight Type', type: 'select', options: ['Helicoid (Continuous)', 'Sectional (Individual flights)'], required: true },
      { id: 'shaftDiameter', label: 'Shaft/Pipe Size (inches)', type: 'select', options: ['2"', '2-7/16"', '3"', '3-7/16"', '4"'], required: true },
      { id: 'quantity', label: 'Quantity Needed', type: 'number', placeholder: 'e.g. 3', required: true },
    ],
  },
  {
    id: 'screw-feeder-worksheet',
    title: 'Screw Feeder Design Worksheet',
    description: 'Size and design screw feeders with shroud covers, variable pitch, or tapered flights for bin withdrawal.',
    icon: Sliders,
    image: bookScrewFeeder,
    pdfUrl: 'https://www.conveyorsinc.net/portals/0/docs/ScrewFeeder_DWS_2020.pdf',
    fields: [
      { id: 'inletLength', label: 'Inlet Opening Length (inches)', type: 'number', placeholder: 'e.g. 48', required: true },
      { id: 'capacity', label: 'Required Capacity (TPH or CFH)', type: 'text', placeholder: 'e.g. 35 TPH', required: true },
      { id: 'material', label: 'Material to be Handled', type: 'text', placeholder: 'e.g. Coal', required: true },
      { id: 'density', label: 'Material Bulk Density (lbs/cu ft)', type: 'number', placeholder: 'e.g. 50', required: true },
      { id: 'feederType', label: 'Feeder Type', type: 'select', options: ['Variable Pitch', 'Tapered O.D.', 'Stepped Pitch'], required: true },
    ],
  },
  {
    id: 'belt-worksheet',
    title: 'Belt Conveyor Design Worksheet',
    description: 'Specify belt width, speed, idler configuration, and structural requirements for a Belt Conveyor.',
    icon: BookOpen,
    image: bookBeltConveyor,
    pdfUrl: 'https://www.conveyorsinc.net/portals/0/docs/BeltConveyor_DWS_2020.pdf',
    fields: [
      { id: 'length', label: 'Conveyor Center-to-Center Length (feet)', type: 'number', placeholder: 'e.g. 120', required: true },
      { id: 'beltWidth', label: 'Preferred Belt Width (inches)', type: 'select', options: ['18"', '24"', '30"', '36"', '42"', '48"', '60"'], required: true },
      { id: 'capacity', label: 'Required Capacity (TPH)', type: 'number', placeholder: 'e.g. 250', required: true },
      { id: 'material', label: 'Material to be Handled', type: 'text', placeholder: 'e.g. Coal', required: true },
      { id: 'speed', label: 'Target Belt Speed (FPM)', type: 'number', placeholder: 'e.g. 300', required: false },
      { id: 'troughAngle', label: 'Troughing Idler Angle', type: 'select', options: ['20°', '35° (Standard)', '45°'], required: true },
    ],
  },
  {
    id: 'bucket-worksheet',
    title: 'Bucket Elevator Design Worksheet',
    description: 'Provide spacing, height, casing, and bucket details to outline a Bucket Elevator design.',
    icon: Database,
    image: bookBucketElevator,
    pdfUrl: 'https://www.conveyorsinc.net/portals/0/docs/BucketElevator_DWS_2020.pdf',
    fields: [
      { id: 'height', label: 'Discharge Height (feet)', type: 'number', placeholder: 'e.g. 60', required: true },
      { id: 'capacity', label: 'Required Capacity (TPH)', type: 'number', placeholder: 'e.g. 80', required: true },
      { id: 'material', label: 'Material to be Handled', type: 'text', placeholder: 'e.g. Wheat', required: true },
      { id: 'elevatorType', label: 'Elevator Discharge Type', type: 'select', options: ['Centrifugal (High speed)', 'Continuous (Low speed, fragile materials)'], required: true },
      { id: 'medium', label: 'Conveying Medium', type: 'select', options: ['Rubber Belting', 'Single Strand Chain', 'Double Strand Chain'], required: true },
      { id: 'bucketStyle', label: 'Preferred Bucket Style', type: 'select', options: ['Polyethylene (Plastic)', 'Ductile Iron', 'Fabricated Steel'], required: false },
    ],
  },
  {
    id: 'drag-worksheet',
    title: 'Drag Conveyor Design Worksheet',
    description: 'Capture parameters for sizing En-Masse Drag Conveyors or Flat Bottom Drag Conveyors.',
    icon: FileText,
    image: bookDragConveyor,
    pdfUrl: 'https://www.conveyorsinc.net/portals/0/docs/DragConv_DWS_2020.pdf',
    fields: [
      { id: 'length', label: 'Conveyor Length (feet)', type: 'number', placeholder: 'e.g. 50', required: true },
      { id: 'capacity', label: 'Required Capacity (TPH or CFH)', type: 'text', placeholder: 'e.g. 100 TPH', required: true },
      { id: 'material', label: 'Material to be Handled', type: 'text', placeholder: 'e.g. Soybeans', required: true },
      { id: 'layout', label: 'Conveyor Layout / Path', type: 'select', options: ['Horizontal', 'Inclined (0-15°)', 'L-Path (Horizontal + Incline)', 'Z-Path'], required: true },
      { id: 'width', label: 'Casing Width Preferred (inches)', type: 'select', options: ['9"', '12"', '16"', '20"', '24"', '32"'], required: false },
    ],
  },
  {
    id: 'component-worksheet',
    title: 'Component Order Worksheet',
    description: 'Specify standard CEMA replacement parts like hanger bearings, troughs, couplings, covers, or spouts.',
    icon: FileText,
    image: bookComponent,
    pdfUrl: 'https://www.conveyorsinc.net/portals/0/docs/Components_DWS_2020.pdf',
    fields: [
      { id: 'componentName', label: 'Component / Part Description', type: 'text', placeholder: 'e.g. Hanger Bearing Woodflex 2"', required: true },
      { id: 'quantity', label: 'Quantity Needed', type: 'number', placeholder: 'e.g. 10', required: true },
      { id: 'cemaSize', label: 'Conveyor size (inches)', type: 'select', options: ['6"', '9"', '12"', '14"', '16"', '18"', '20"', '24"'], required: true },
      { id: 'material', label: 'Material Preference', type: 'select', options: ['Carbon Steel', 'Hot Dip Galvanized', '304 Stainless Steel', '316 Stainless Steel'], required: true },
    ],
  },
  {
    id: 'folleto-general',
    title: 'Folleto General (Catálogo)',
    description: 'Folleto general de productos y componentes en español para la manipulación de materiales a granel.',
    icon: FileText,
    image: bookFolletoGeneral,
    pdfUrl: 'https://www.conveyorsinc.net/portals/0/docs/Folleto_General_2020.pdf',
    fields: [],
  },
  {
    id: 'transportador-helicoidal',
    title: 'Hoja Técnica - Transportador Helicoidal',
    description: 'Formulario técnico de diseño y especificaciones para transportadores helicoidales de tornillo en español.',
    icon: Sliders,
    image: bookHojaHelicoidal,
    pdfUrl: 'https://www.conveyorsinc.net/portals/0/docs/Hoja_Tecnica_para_Transportador_Helicoidal.pdf',
    fields: [],
  },
  {
    id: 'elevador-cangilon',
    title: 'Hoja Técnica - Elevador de Cangilón',
    description: 'Formulario técnico de diseño y especificaciones para elevadores de cangilones (elevación de granos) en español.',
    icon: Database,
    image: bookHojaCangilon,
    pdfUrl: 'https://www.conveyorsinc.net/portals/0/docs/Hoja_Tecnica_para_Elevador_de_Cangilon.pdf',
    fields: [],
  },
];

// CEMA Material Classification Database
const materials = [
  { name: 'Coal, bituminous', density: 50, flowability: 'Free-flowing (CEMA II)', abrasiveness: 'Mildly Abrasive', code: 'B35', impact: 'Requires standard components. Limit flight tip speeds if dust is a concern.' },
  { name: 'Coal, anthracite', density: 60, flowability: 'Free-flowing (CEMA II)', abrasiveness: 'Abrasive', code: 'C35', impact: 'Abrasive material. Hardened steel troughs and flights are recommended.' },
  { name: 'Wheat', density: 48, flowability: 'Very Free-flowing (CEMA I)', abrasiveness: 'Non-abrasive', code: 'A15', impact: 'Ideal for high-speed drag conveyors and bucket elevators.' },
  { name: 'Corn', density: 45, flowability: 'Very Free-flowing (CEMA I)', abrasiveness: 'Non-abrasive', code: 'A15', impact: 'Non-abrasive. Standard drag/bucket configurations apply.' },
  { name: 'Cement Clinker', density: 85, flowability: 'Sluggish (CEMA III)', abrasiveness: 'Highly Abrasive', code: 'D45', impact: 'Highly abrasive. Heavy-duty casing, slow speeds, and hardened steel/hardfaced screws are required.' },
  { name: 'Portland Cement', density: 94, flowability: 'Sluggish (CEMA III)', abrasiveness: 'Mildly Abrasive', code: 'C25', impact: 'Fluidizes easily. Use tight clearances or short-pitch screws to prevent flushing.' },
  { name: 'Fly Ash', density: 40, flowability: 'Sluggish & Aerated (CEMA IV)', abrasiveness: 'Abrasive', code: 'D35', impact: 'Highly fluid when aerated. Hanger bearings must be well sealed against abrasive dust.' },
  { name: 'Sand, dry', density: 100, flowability: 'Very Free-flowing (CEMA I)', abrasiveness: 'Highly Abrasive', code: 'A45', impact: 'Extremely abrasive. Use heavy-gauge flighting and slow screw rotational speeds.' },
  { name: 'Gravel', density: 100, flowability: 'Very Free-flowing (CEMA I)', abrasiveness: 'Highly Abrasive', code: 'A45', impact: 'Highly abrasive and heavy. Larger horsepower motors and thick flights are standard.' },
  { name: 'Wood Chips', density: 20, flowability: 'Sluggish & Interlocking (CEMA IV)', abrasiveness: 'Non-abrasive', code: 'E15', impact: 'Prone to interlocking. Requires large intake openings and oversized screw diameters.' },
  { name: 'Soybeans', density: 46, flowability: 'Very Free-flowing (CEMA I)', abrasiveness: 'Non-abrasive', code: 'A15', impact: 'Gentle handling required to prevent seed cracking. Plastic buckets preferred.' },
  { name: 'Salt, fine', density: 80, flowability: 'Free-flowing (CEMA II)', abrasiveness: 'Mildly Abrasive', code: 'B25', impact: 'Highly corrosive. Stainless steel fabrication (304 or 316) is highly recommended.' },
  { name: 'Sugar, granular', density: 52, flowability: 'Free-flowing (CEMA II)', abrasiveness: 'Non-abrasive', code: 'B15', impact: 'Food-grade. Stainless steel construction and sanitary shaft seals are mandatory.' },
  { name: 'Lime, hydrated', density: 35, flowability: 'Sluggish (CEMA III)', abrasiveness: 'Non-abrasive', code: 'C15', impact: 'Sticky and dusty. Air-purged shaft seals help protect drive components.' },
  { name: 'Iron Ore', density: 150, flowability: 'Sluggish (CEMA III)', abrasiveness: 'Highly Abrasive', code: 'D45', impact: 'Extremely heavy and abrasive. Structural support and high-torque drives are necessary.' },
];

export default function Resources() {
  const [activeFlyer, setActiveFlyer] = useState<any | null>(null);
  const [activeWorksheet, setActiveWorksheet] = useState<typeof worksheets[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState<typeof materials[0] | null>(null);
  
  // Worksheet form state
  const [clientInfo, setClientInfo] = useState({ name: '', company: '', email: '', phone: '', comments: '' });
  const [worksheetParams, setWorksheetParams] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Download flyer helper
  const handleDownload = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success(`Started download of ${filename}`);
    } catch (e) {
      // Fallback
      window.open(imageUrl, '_blank');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Design Worksheet submitted successfully to our engineering team!');
    }, 1500);
  };

  const handleResetForm = () => {
    setClientInfo({ name: '', company: '', email: '', phone: '', comments: '' });
    setWorksheetParams({});
    setIsSubmitted(false);
    setActiveWorksheet(null);
  };

  // Filtered materials
  const filteredMaterials = materials.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.abrasiveness.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
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
                  Resources & Literature
                </span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Engineering <span className="text-accent">Library</span>
              </h1>
              <p className="text-primary-foreground/70 text-xl">
                Explore our catalog sheets, technical flyers, sizing worksheets, and material design classification data sheets.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="flyers" className="space-y-12">
              <div className="flex justify-center">
                <TabsList className="bg-muted p-1 rounded-xl w-full max-w-2xl grid grid-cols-3 h-12">
                  <TabsTrigger value="flyers" className="rounded-lg text-sm font-semibold uppercase tracking-wider">Flyers & Catalog</TabsTrigger>
                  <TabsTrigger value="worksheets" className="rounded-lg text-sm font-semibold uppercase tracking-wider">Design Worksheets</TabsTrigger>
                  <TabsTrigger value="materials" className="rounded-lg text-sm font-semibold uppercase tracking-wider">Material Guide</TabsTrigger>
                </TabsList>
              </div>

              {/* Tab 1: Flyers & Catalog */}
              <TabsContent value="flyers" className="focus-visible:outline-none">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="font-heading text-3xl font-bold mb-4">Product Flyers</h2>
                  <p className="text-muted-foreground">
                    Download or view detailed visual technical specs, idler arrangements, drive configurations, and dimension metrics.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {flyers.map((flyer) => (
                    <Card key={flyer.id} className="bg-card border-border overflow-hidden hover:shadow-2xl hover:border-accent/40 transition-all duration-300 flex flex-col group">
                      <div className="relative aspect-[3/4] bg-secondary overflow-hidden flex items-center justify-center p-4">
                        <img 
                          src={flyer.image} 
                          alt={flyer.title} 
                          className="w-full h-full object-contain drop-shadow-xl group-hover:scale-[1.03] transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                          <Button 
                            variant="secondary" 
                            size="sm" 
                            className="font-semibold"
                            onClick={() => setActiveFlyer(flyer)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Full
                          </Button>
                          <Button 
                            variant="accent" 
                            size="sm" 
                            className="font-semibold"
                            onClick={() => handleDownload(flyer.image, flyer.fileName)}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                      <CardHeader className="p-5 flex-grow">
                        <CardTitle className="text-lg font-bold group-hover:text-accent transition-colors">{flyer.title}</CardTitle>
                        <CardDescription className="text-xs text-muted-foreground leading-relaxed mt-2">{flyer.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="p-5 pt-0 border-t border-border/50 flex justify-between gap-3 bg-muted/20">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-xs w-full text-foreground/80 hover:text-accent font-semibold"
                          onClick={() => setActiveFlyer(flyer)}
                        >
                          <Eye className="w-4 h-4 mr-1.5" />
                          Open Lightbox
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-xs w-full text-foreground/80 hover:text-accent font-semibold"
                          onClick={() => handleDownload(flyer.image, flyer.fileName)}
                        >
                          <Download className="w-4 h-4 mr-1.5" />
                          Download JPG
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border my-16 max-w-5xl mx-auto" />

                {/* Section 2: Catalog & Engineering Manuals */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="font-heading text-3xl font-bold mb-4">Engineering Guides & Literature</h2>
                  <p className="text-muted-foreground">
                    Detailed engineering manuals, corporate product catalogs, and design reference worksheets.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {designBooks.map((book) => (
                    <Card key={book.id} className="bg-card border-border overflow-hidden hover:shadow-2xl hover:border-accent/40 transition-all duration-300 flex flex-col group">
                      <div className="relative h-64 bg-gradient-to-br from-muted to-secondary flex items-center justify-center p-8 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10" style={{
                          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 1px, transparent 1px)`,
                          backgroundSize: '20px 20px',
                        }} />
                        
                        <img 
                          src={book.image} 
                          alt={book.title} 
                          className="h-48 w-auto object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                        />
                        
                        <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                          <Button 
                            variant="secondary" 
                            size="sm" 
                            className="font-semibold"
                            onClick={() => setActiveFlyer(book)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Cover
                          </Button>
                          <Button 
                            variant="accent" 
                            size="sm" 
                            className="font-semibold"
                            onClick={() => handleDownload(book.pdfUrl || book.image, book.fileName)}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                      <CardHeader className="p-5 flex-grow">
                        <CardTitle className="text-lg font-bold group-hover:text-accent transition-colors leading-snug">{book.title}</CardTitle>
                        <CardDescription className="text-xs text-muted-foreground leading-relaxed mt-2">{book.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="p-5 pt-0 border-t border-border/50 flex justify-between gap-3 bg-muted/20 mt-auto">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-xs w-full text-foreground/80 hover:text-accent font-semibold"
                          onClick={() => setActiveFlyer(book)}
                        >
                          <Eye className="w-4 h-4 mr-1.5" />
                          Open Lightbox
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-xs w-full text-foreground/80 hover:text-accent font-semibold"
                          onClick={() => handleDownload(book.pdfUrl || book.image, book.fileName)}
                        >
                          <Download className="w-4 h-4 mr-1.5" />
                          Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Tab 2: Design Worksheets */}
              <TabsContent value="worksheets" className="focus-visible:outline-none">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="font-heading text-3xl font-bold mb-4">Sizing & Design Worksheets</h2>
                  <p className="text-muted-foreground">
                    Record your design load, material bulk, incline angles, and structural options online to submit them directly to our design office.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {worksheets.map((worksheet) => {
                    const IconComp = worksheet.icon;
                    return (
                      <div 
                        key={worksheet.id} 
                        className="flex flex-col w-full bg-card border border-border hover:border-accent/40 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
                      >
                        {/* Top Side: Cover Image Preview */}
                        <div className="w-full bg-gradient-to-br from-slate-900 to-slate-950 p-6 flex flex-col items-center justify-center relative border-b border-border/40 overflow-hidden min-h-[220px]">
                          {/* Grid Overlay */}
                          <div className="absolute inset-0 opacity-5" style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 1px, transparent 1px)`,
                            backgroundSize: '15px 15px',
                          }} />
                          
                          {/* Glow behind book */}
                          <div className="absolute w-32 h-44 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
                          
                          {/* Book cover image */}
                          <img 
                            src={worksheet.image} 
                            alt={worksheet.title} 
                            className="h-40 w-auto object-contain relative z-10 rounded-md shadow-2xl border border-white/5 transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500"
                          />
                          
                          <span className="absolute bottom-4 left-4 z-20 text-[10px] font-bold tracking-wider uppercase bg-accent/20 backdrop-blur border border-accent/40 text-accent px-2 py-0.5 rounded">
                            PDF Document
                          </span>
                        </div>

                        {/* Bottom Side: Content Details */}
                        <div className="w-full p-6 flex flex-col justify-between flex-grow">
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                <IconComp className="w-5 h-5" />
                              </div>
                              <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                                {worksheet.title}
                              </h3>
                            </div>
                            
                            <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-medium">
                              {worksheet.description}
                            </p>

                            {worksheet.fields && worksheet.fields.length > 0 ? (
                              <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2.5">Captured Specifications:</h4>
                                <div className="flex flex-wrap gap-1.5">
                                  {worksheet.fields.map((field) => (
                                    <span 
                                      key={field.id} 
                                      className="inline-flex items-center text-xs font-semibold bg-muted/65 text-foreground/80 px-2.5 py-1 rounded-md border border-border/40"
                                    >
                                      {field.label.split('(')[0].trim()}
                                    </span>
                                  ))}
                                  <span className="inline-flex items-center text-xs font-semibold bg-muted/65 text-foreground/80 px-2.5 py-1 rounded-md border border-border/40">
                                    Client Details
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-muted/20 border border-border/40">
                                <Info className="w-4.5 h-4.5 text-accent" />
                                <span className="text-xs text-muted-foreground font-medium">
                                  Technical catalog form. Download to fill out offline.
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Footer Actions */}
                          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border/30 mt-6">
                            {worksheet.fields && worksheet.fields.length > 0 && (
                              <Button 
                                variant="default" 
                                className="w-full font-bold group"
                                onClick={() => {
                                  setActiveWorksheet(worksheet);
                                  setIsSubmitted(false);
                                }}
                              >
                                Fill Online
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            )}
                            <a 
                              href={worksheet.pdfUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="w-full"
                            >
                              <Button 
                                variant="outline" 
                                className="w-full font-bold border-accent/60 text-accent hover:bg-accent/10"
                              >
                                <FileDown className="w-4 h-4 mr-2" />
                                Download PDF
                              </Button>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              {/* Tab 3: CEMA Material Guide */}
              <TabsContent value="materials" className="focus-visible:outline-none">
                <div className="text-center max-w-2xl mx-auto mb-8">
                  <h2 className="font-heading text-3xl font-bold mb-4">CEMA Material Classification Lookup</h2>
                  <p className="text-muted-foreground">
                    Quickly check standard bulk material densities, abrasiveness scores, CEMA codes, and how they dictate conveyor specifications.
                  </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                  {/* Search and Filters */}
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input 
                      placeholder="Search material name, CEMA code, or abrasiveness (e.g. Coal, A45, Highly Abrasive)..." 
                      className="pl-12 h-12 bg-muted/50 border-border/80 focus:border-accent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Materials Table */}
                  <div className="border border-border rounded-xl overflow-hidden bg-card shadow-lg">
                    <Table>
                      <TableHeader className="bg-muted/50">
                        <TableRow>
                          <TableHead className="font-bold text-foreground">Material Name</TableHead>
                          <TableHead className="font-bold text-foreground">Bulk Density (lbs/ft³)</TableHead>
                          <TableHead className="font-bold text-foreground">Flowability</TableHead>
                          <TableHead className="font-bold text-foreground">Abrasiveness</TableHead>
                          <TableHead className="font-bold text-foreground text-center">CEMA Code</TableHead>
                          <TableHead className="font-bold text-foreground text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredMaterials.length > 0 ? (
                          filteredMaterials.map((material) => (
                            <TableRow key={material.name} className="hover:bg-muted/30 transition-colors">
                              <TableCell className="font-semibold">{material.name}</TableCell>
                              <TableCell>{material.density} lbs/ft³</TableCell>
                              <TableCell className="text-sm">{material.flowability}</TableCell>
                              <TableCell>
                                <span className={`inline-flex px-2.5 py-0.5 rounded text-xs font-semibold ${
                                  material.abrasiveness === 'Highly Abrasive' ? 'bg-red-500/10 text-red-500' :
                                  material.abrasiveness === 'Abrasive' ? 'bg-amber-500/10 text-amber-500' :
                                  'bg-green-500/10 text-green-500'
                                }`}>
                                  {material.abrasiveness}
                                </span>
                              </TableCell>
                              <TableCell className="font-mono text-center font-bold text-accent">{material.code}</TableCell>
                              <TableCell className="text-right">
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="text-xs hover:text-accent font-semibold"
                                  onClick={() => setSelectedMaterial(material)}
                                >
                                  <Info className="w-4 h-4 mr-1" />
                                  Engineering Note
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                              No materials found matching your search.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      {/* Lightbox Dialog for Flyers */}
      <Dialog open={activeFlyer !== null} onOpenChange={() => setActiveFlyer(null)}>
        <DialogContent className="max-w-4xl bg-slate-950 border-slate-800 text-white p-4">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-bold flex justify-between items-center pr-8">
              {activeFlyer?.title}
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              High resolution technical flyer. Scroll or save using the buttons below.
            </DialogDescription>
          </DialogHeader>
          {activeFlyer && (
            <div className="relative flex flex-col items-center">
              <div className="w-full max-h-[70vh] overflow-y-auto rounded-lg bg-slate-900 border border-slate-800 flex justify-center p-4">
                <img 
                  src={activeFlyer.image} 
                  alt={activeFlyer.title} 
                  className="max-w-full h-auto object-contain drop-shadow-2xl" 
                />
              </div>
              <div className="mt-4 flex gap-4 w-full justify-end">
                <Button 
                  variant="outline" 
                  onClick={() => setActiveFlyer(null)}
                  className="border-slate-700 hover:bg-slate-900 text-white"
                >
                  Close
                </Button>
                <Button 
                  variant="accent"
                  onClick={() => handleDownload(activeFlyer.pdfUrl || activeFlyer.image, activeFlyer.fileName)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {activeFlyer.pdfUrl ? 'Download Document (PDF)' : 'Download Flyer (JPG)'}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Sizing Worksheet Dialog Form */}
      <Dialog open={activeWorksheet !== null} onOpenChange={(open) => { if (!open) handleResetForm(); }}>
        <DialogContent className="max-w-2xl bg-card border-border p-6 md:p-8 overflow-y-auto max-h-[90vh]">
          {activeWorksheet && (
            <div>
              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {activeWorksheet.title}
                </DialogTitle>
                <DialogDescription>
                  Complete this form to submit engineering variables to our estimators.
                </DialogDescription>
              </DialogHeader>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Worksheet Submitted!</h3>
                  <p className="text-muted-foreground mb-6">
                    Our engineering office has received your calculations for {activeWorksheet.title.replace(' Design Worksheet', '')}. We will review the parameters and get back to you shortly.
                  </p>

                  <div className="bg-muted p-5 rounded-lg text-left text-sm space-y-3 mb-6 max-h-60 overflow-y-auto">
                    <h4 className="font-bold text-xs uppercase text-muted-foreground">Summary of parameters:</h4>
                    <div className="grid grid-cols-2 gap-y-2 border-b border-border/60 pb-3">
                      <span className="text-muted-foreground">Client Name:</span>
                      <span className="font-semibold">{clientInfo.name}</span>
                      <span className="text-muted-foreground">Company:</span>
                      <span className="font-semibold">{clientInfo.company || 'N/A'}</span>
                      <span className="text-muted-foreground">Email:</span>
                      <span className="font-semibold">{clientInfo.email}</span>
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="font-semibold">{clientInfo.phone}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 pt-2">
                      {activeWorksheet.fields.map((field) => (
                        <span key={field.id} className="contents">
                          <span className="text-muted-foreground">{field.label.split('(')[0]}:</span>
                          <span className="font-mono text-accent font-semibold">{worksheetParams[field.id] || 'N/A'}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" onClick={() => window.print()}>
                      Print / Save Summary
                    </Button>
                    <Button variant="default" onClick={handleResetForm}>
                      Close
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Client Info Grid */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent border-b border-border pb-1.5">Contact details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="c-name" className="text-xs font-bold uppercase tracking-wider">Contact Name *</Label>
                        <Input 
                          id="c-name" 
                          required 
                          placeholder="e.g. John Miller" 
                          value={clientInfo.name}
                          onChange={(e) => setClientInfo(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-company" className="text-xs font-bold uppercase tracking-wider">Company</Label>
                        <Input 
                          id="c-company" 
                          placeholder="e.g. Acme Materials" 
                          value={clientInfo.company}
                          onChange={(e) => setClientInfo(prev => ({ ...prev, company: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-email" className="text-xs font-bold uppercase tracking-wider">Email Address *</Label>
                        <Input 
                          id="c-email" 
                          type="email" 
                          required 
                          placeholder="e.g. jmiller@company.com" 
                          value={clientInfo.email}
                          onChange={(e) => setClientInfo(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-phone" className="text-xs font-bold uppercase tracking-wider">Phone Number *</Label>
                        <Input 
                          id="c-phone" 
                          type="tel" 
                          required 
                          placeholder="e.g. 555-123-4567" 
                          value={clientInfo.phone}
                          onChange={(e) => setClientInfo(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sizing Parameters Grid */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent border-b border-border pb-1.5">Sizing variables</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeWorksheet.fields.map((field) => (
                        <div key={field.id} className="space-y-2">
                          <Label htmlFor={field.id} className="text-xs font-bold uppercase tracking-wider">
                            {field.label} {field.required ? '*' : ''}
                          </Label>
                          {field.type === 'select' ? (
                            <Select 
                              required={field.required}
                              onValueChange={(val) => setWorksheetParams(prev => ({ ...prev, [field.id]: val }))}
                              value={worksheetParams[field.id] || ''}
                            >
                              <SelectTrigger id={field.id} className="w-full">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent>
                                {field.options?.map(opt => (
                                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          ) : (
                            <Input 
                              id={field.id} 
                              type={field.type} 
                              required={field.required}
                              placeholder={field.placeholder} 
                              value={worksheetParams[field.id] || ''}
                              onChange={(e) => setWorksheetParams(prev => ({ ...prev, [field.id]: e.target.value }))}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message Comments */}
                  <div className="space-y-2">
                    <Label htmlFor="c-comments" className="text-xs font-bold uppercase tracking-wider">Additional Design Notes / Requirements</Label>
                    <Textarea 
                      id="c-comments" 
                      placeholder="e.g. Food-grade sanitary finish, explosion-proof motor class, corrosive environment factors..." 
                      rows={3}
                      value={clientInfo.comments}
                      onChange={(e) => setClientInfo(prev => ({ ...prev, comments: e.target.value }))}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 justify-end border-t border-border pt-4 mt-6">
                    <Button variant="outline" type="button" onClick={handleResetForm}>
                      Cancel
                    </Button>
                    <Button variant="default" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Sizing calculation...' : 'Submit Design Parameters'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Material Engineering Note Dialog */}
      <Dialog open={selectedMaterial !== null} onOpenChange={() => setSelectedMaterial(null)}>
        <DialogContent className="max-w-md bg-card border-border p-6 text-foreground">
          {selectedMaterial && (
            <div className="space-y-4">
              <DialogHeader>
                <div className="flex items-center gap-2 text-accent font-bold uppercase text-xs tracking-wider">
                  <Database className="w-4 h-4" />
                  CEMA Design Guideline
                </div>
                <DialogTitle className="text-2xl font-bold text-foreground mt-1">
                  {selectedMaterial.name}
                </DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-2 gap-4 border-y border-border/60 py-3 text-sm">
                <div>
                  <span className="text-muted-foreground block text-xs uppercase tracking-wider">Bulk Density</span>
                  <span className="font-semibold text-foreground">{selectedMaterial.density} lbs/ft³</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs uppercase tracking-wider">CEMA Code</span>
                  <span className="font-mono font-bold text-accent">{selectedMaterial.code}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs uppercase tracking-wider">Flowability</span>
                  <span className="font-semibold text-foreground">{selectedMaterial.flowability}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs uppercase tracking-wider">Abrasiveness</span>
                  <span className="font-semibold text-foreground">{selectedMaterial.abrasiveness}</span>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-accent block mb-1">Engineering Impact Note:</span>
                <p className="text-sm leading-relaxed text-foreground/90 bg-muted p-4 rounded-lg border border-border/40">
                  {selectedMaterial.impact}
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <Button variant="default" onClick={() => setSelectedMaterial(null)}>
                  Got It
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
