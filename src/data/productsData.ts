import screwConveyorImg from '@/assets/products/screw-conveyor-new.png';
import shaftlessConveyorImg from '@/assets/products/shaftless-conveyors.png';
import verticalScrewImg from '@/assets/products/vertical-screw-new.png';
import liveBottomFeederImg from '@/assets/products/live-bottom-feeders.png';
import bucketElevatorImg from '@/assets/products/bucket-elevator-new.png';
import dragConveyorImg from '@/assets/products/drag-conveyor-new.png';
import cemaComponentsImg from '@/assets/products/cema-components-new.png';
import beltConveyorImg from '@/assets/products/belt-conveyor.png';
import mixersBlendersImg from '@/assets/products/mixers-blenders.png';
import customFabricationImg from '@/assets/products/custom-fabrication.png';

export interface Product {
  id: string;
  name: string;
  category: 'Conveyors' | 'Feeders & Mixers' | 'Components & Accessories';
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  applications: string[];
}

export const productsData: Product[] = [
  {
    id: 'screw-conveyor-feeder',
    name: 'Screw Conveyor / Screw Feeder',
    category: 'Conveyors',
    image: screwConveyorImg,
    shortDescription: 'Reliable bulk material transport and regulated, volumetric feeding using rotating helical flighting.',
    description: 'Archimedes in the 3rd century BC developed the first screw conveyor, and today they remain a reliable method of transporting a broad range of bulk materials. Screw Feeders are similar but are designed to operate flood-loaded (100% full) in the inlet section and regulate or meter the flow of product to a downstream process. Screw conveyors move product by shearing and pushing the product causing it to tumble in the direction of the rotating inclined helical flight. We design and build both systems to standard CEMA or custom dimensions.',
    features: [
      'Totally enclosed system allowing for minimal product spillage and dust containment.',
      'Variable Pitch, Mass Flow Cone, or Tapered Flight screws to draw material uniformly.',
      'Minimal maintenance due to very few moving parts.',
      'Convey a wide variety of products from free-flowing to sluggish.',
      'Accurate volumetric metering to downstream processing equipment.'
    ],
    specs: {
      'CEMA Standard': 'Yes',
      'Inlet Control': 'Control fed (conveyors) or 100% flood loaded (feeders)',
      'Agitator Options': 'Available for non-free-flowing powders',
      'Drive Control': 'Variable speed VFD ready',
      'Enclosure': 'Totally enclosed to prevent spillage and contain dust'
    },
    applications: [
      'Free Flowing Bulk Materials',
      'Sluggish bulk processing industries',
      'Surge Bin and Silo Discharge',
      'Dosing Systems and Chemical Metering',
      'Agricultural Grain Processing'
    ]
  },
  {
    id: 'bucket-elevator-fabricated-buckets',
    name: 'Bucket Elevator & Fabricated Buckets',
    category: 'Conveyors',
    image: bucketElevatorImg,
    shortDescription: 'Efficient vertical conveyance of bulk materials combined with heavy-duty custom metal buckets fabricated to exact specifications.',
    description: 'Bucket elevators are one of the most efficient ways of conveying bulk materials vertically, maintaining material integrity throughout the process. They consist of spaced or continuous buckets attached to a high-capacity belt or chain. We fabricate heavy-duty replacement metal buckets and custom attachments designed for maximum durability in high-capacity elevators. As the buckets pass over the head pulley, materials are centrifugal, positive, or continuously discharged into downstream spouts.',
    features: [
      'Centrifugal discharge - buckets are mounted at a spaced interval, loaded by scooping or direct feeding, and discharged by centrifugal force.',
      'Positive discharge - designed to operate at lower speeds, suitable for handling light, fluffy and fragile materials.',
      'Continuous discharge - buckets are spaced continuously and loaded by direct feeding, minimizing product spillage.',
      'Custom fabricated metal buckets built with AR400 plate, stainless steel, or polyurethane linings.'
    ],
    specs: {
      'Discharge Styles': 'Centrifugal, Positive, or Continuous discharge',
      'Media Type': 'Heavy-duty rubberized belt or alloy custom steel chain',
      'Bucket Fabrication': 'CNC-cut, folded, and welded mild steel, stainless steel, or wear alloys',
      'Interchangeability': '100% drop-in fit for existing industry elevator casings'
    },
    applications: [
      'Fragile bulk materials vertical elevation',
      'Heavy minerals and quarry aggregate vertical transport',
      'Agricultural grains, corn, and fertilizer plants',
      'High-capacity severe-duty industrial elevators'
    ]
  },
  {
    id: 'drag-conveyors',
    name: 'Drag Conveyors',
    category: 'Conveyors',
    image: dragConveyorImg,
    shortDescription: 'Energy-efficient chain-drag conveying systems for agricultural and industrial bulk solids.',
    description: 'Drag Conveyors are one of the most energy-efficient ways to convey bulk materials over short or long distances. Utilizing heavy-duty chains and flights to gently drag material along the bottom of a steel housing, they offer a totally enclosed, dust-tight, and highly compact design. They are available in Round Bottom and Flat Bottom configurations depending on the specific application.',
    features: [
      'Round Bottom Housing - identified by the U-Trough housing and generally used for agricultural industries.',
      'Flat Bottom Housing - identified by the square or rectangular housing and generally used for heavy industrial applications.',
      'Highly energy-efficient en-masse conveying principles reducing power consumption.',
      'Totally enclosed dust-tight and rain-proof housing for environmental safety.',
      'High-strength forged steel drag chains with wear-resistant UHMW flight paddles.'
    ],
    specs: {
      'Housing Styles': 'Round Bottom (U-Trough) or Flat Bottom (Square/Rectangular)',
      'Flight Paddles': 'Standard bolt-on wear-resistant UHMW-PE',
      'Enclosure': 'Dust-tight and weather-tight bolted steel panels',
      'Chain Design': 'High-tensile forged steel conveyor chains'
    },
    applications: [
      'Agricultural seed and grain handling terminals',
      'Coal, coke, and fly ash industrial handling',
      'Wood processing mills and sawdust processing',
      'Heavy minerals and dry granular industrial transport'
    ]
  },
  {
    id: 'custom-fabrication',
    name: 'Custom Fabrication',
    category: 'Feeders & Mixers',
    image: customFabricationImg,
    shortDescription: 'Tailored components, double-ribbon blenders, and classifiers built to solve wear, layout, and performance problems.',
    description: 'Custom Fabrication at Conveyors Inc. leverages state-of-the-art metalworking and ASME-certified fabrication to manufacture high-performance components tailored precisely to customer drawings. This includes industrial mixers, double-ribbon blenders for uniform batch mixing, and classifier washers designed to separate sand or grit from liquid slurries. Every piece is built to solve specific system wear, layout compatibility, or capacity limitations.',
    features: [
      'Double-helical ribbon or paddle mixers for uniform batch mixing shear.',
      'Agitates and washes slurry mixtures to separate light organics from heavy grits.',
      'Thick sectional flighting with hardsurfaced wear edges for highly abrasive materials.',
      'Keyed shafts, special flanges, split packing glands, and custom air-purged seals.',
      'Longer wear life with high-hardness alloys (chromium carbide overlay, AR400 plate).'
    ],
    specs: {
      'Fabrication Quality': 'Certified ASME Section IX and AWS welding standards',
      'Wear Alloys': 'Chromium carbide overlay, AR400 plate, Hardox, and tool steel',
      'Separation Method': 'Gravity sedimentation combined with inclined screw washing',
      'Agitator Type': 'Double-Helical Ribbon or Paddle Agitators'
    },
    applications: [
      'Chemical powders, plastics, and resin compounding',
      'Aggregate sand washing and fine mesh classification',
      'Upgrading heavy-duty industrial drive hubs and shafts',
      'Obsolete components and layout modifications'
    ]
  },
  {
    id: 'complete-systems',
    name: 'Complete Systems',
    category: 'Conveyors',
    image: liveBottomFeederImg,
    shortDescription: 'Fully integrated, single-source bulk material handling systems designed for seamless operational flow.',
    description: 'Conveyors Inc. designs and manufactures complete, integrated bulk material handling systems customized for specific plant layouts. This includes multi-screw live bottom feeders for drawing extremely sluggish materials, connected transitions, bins, hoppers, and automated gates. We act as a single source of design and manufacturing, providing peace of mind that all components are aligned and everything will field fit as required.',
    features: [
      'Live bottom feeders with multiple parallel screws acting in unison to discharge sluggish materials.',
      'Integrated hoppers, bins, chutes, and gates designed for custom layouts.',
      'Automated slide gates (electric, pneumatic, or hydraulic) for flow control.',
      '100% guaranteed field-fit alignment across all integrated equipment.',
      'Designed to operate under massive material head loads with zero material bridging.'
    ],
    specs: {
      'System Components': 'Screws, Elevators, Feeders, Bins, Chutes, and Gates',
      'Operator Systems': 'Integrated electric, hydraulic, or pneumatic automated control',
      'Loading Duty': 'Severe-duty continuous operation',
      'Silo Discharge': 'Prevent bridging, packing, and silo arching'
    },
    applications: [
      'Wet Municipal Wastewater Cake Storage Bins',
      'Silo and hopper discharge systems',
      'Bulk raw material intake and distribution lines',
      'Multi-stage chemical or agricultural processing loops'
    ]
  },
  {
    id: 'belt-conveyors',
    name: 'Belt Conveyors',
    category: 'Conveyors',
    image: beltConveyorImg,
    shortDescription: 'Versatile bulk material transport over short or long distances at high speeds.',
    description: 'Belt Conveyors provide an efficient method of conveying a wide range of materials, varying in particle size and densities. They can also be designed to transport these products over short or long distances, working around existing equipment. Belt conveyors are also versatile enough to move the product horizontally, inclined and even vertical if necessary, utilizing cleated belts and/or sidewall pocketed belting.',
    features: [
      'Versatile layouts conveying products horizontally, inclined, or vertically.',
      'Custom configurations like Belt Feeders (flood loading), Trippers, and Shuttles.',
      'Uses heavy-duty structural channel frames or long-span custom truss designs.',
      'Handles a very wide range of material particle sizes and extreme densities.',
      'Optional overland profiles, radial stackers, and pit portable units.'
    ],
    specs: {
      'Conveying Centers': '10 ft to 1,000 ft or longer custom spans',
      'Frame Options': 'Standard channel frame or high-strength custom truss',
      'Belt Type': 'High-performance multi-ply rubber, cleated, or sidewall pocketed belting',
      'Spacing Capacity': 'Truss designs allow support spacing of 40, 60, or 90 feet'
    },
    applications: [
      'Mining and Minerals processing plants',
      'Cement, Concrete and Asphalt yards',
      'Trash and Recycling Industries sorting lines',
      'Sand, Gravel and Lime washing terminals'
    ]
  },
  {
    id: 'shaftless-conveyors',
    name: 'Shaftless Conveyors',
    category: 'Conveyors',
    image: shaftlessConveyorImg,
    shortDescription: 'Specialized screw conveyors without a center shaft, designed to convey wet, sticky, and sluggish bulk materials efficiently.',
    description: 'Shaftless Screw Conveyors are a specialized alternative to the standard Shafted Screw Conveyor. The elimination of the center pipe/shaft allows for the conveying of sluggish, wet and sticky bulk materials that would typically wrap around or pack inside a shafted conveyor. The shaftless spiral rests directly on a low-friction replaceable trough liner, allowing for efficient, high-loading volume transfer of complex municipal or industrial sludge.',
    features: [
      'Perfect for sludge, wet, stringy, and sticky products.',
      'No center pipe/shaft preventing material wrap-around and packing issues.',
      'Replaceable low-friction UHMW or premium alloy trough liners.',
      'Allows higher loading efficiency and larger cross-sectional area.',
      'Fully enclosed design for odor control and zero leakage.'
    ],
    specs: {
      'Trough Lining': 'High-performance replaceable UHMW-PE',
      'Spiral Material': 'Heavy-duty high-tensile micro-alloy steel',
      'Shaft Type': 'Shaftless configuration',
      'Odor Containment': 'Fully enclosed dust-tight and vapor-tight'
    },
    applications: [
      'Wastewater treatment plants and dewatered sludge',
      'Rendering and other meat processing waste',
      'Pulp and paper plants and wood shavings',
      'Sugar Mill plants and bagasse handling'
    ]
  },
  {
    id: 'vertical-screw-conveyors',
    name: 'Vertical Screw Conveyor',
    category: 'Conveyors',
    image: verticalScrewImg,
    shortDescription: 'Space-saving vertical elevation systems for granular bulk materials in a compact footprint.',
    description: 'Vertical Screw Conveyors are designed to move bulk materials vertically. It is a specialized screw feeder that is capable of conveying materials where a very small footprint is required. A Vertical Screw Conveyor consists of a conveyor screw rotating in a tubular housing with a suitable inlet at the lower end and an outlet at the upper end. Drives are generally located at the top of the vertical conveyor, optimized to handle both the radial and thrust loads.',
    features: [
      'Very small physical footprint for tight structural layouts.',
      'Consists of a high-speed conveyor screw rotating in a tubular housing.',
      'Top-mounted drive configuration designed to handle radial and thrust loads.',
      'Typically fed by a controlled horizontal feeder screw to prevent fallback.',
      'Maintains material linear velocity to overcome the pull of gravity.'
    ],
    specs: {
      'Operation Layout': 'Tubular housing configuration',
      'Drive Location': 'Top-mounted drive assembly',
      'Feeding Method': 'Controlled and uniform volume feed (gravity hopper or horizontal screw)',
      'Velocity Factor': 'Linear velocity optimized to overcome fallback'
    },
    applications: [
      'Compact bulk materials vertical elevation',
      'Controlled horizontal-to-vertical transfer lines',
      'Non-fragile chemical powders and granular lift',
      'Dry cement, sand, and aggregate elevation'
    ]
  },
  {
    id: 'repair-replacement-parts',
    name: 'Repair / Replacement parts',
    category: 'Components & Accessories',
    image: cemaComponentsImg,
    shortDescription: 'High-quality CEMA-standard and custom replacement parts to maintain and upgrade conveyor systems.',
    description: 'Our Repair and Replacement Parts catalog features a complete selection of CEMA-standard and custom-machined components for material handling equipment. Regulated dimensionally through the Conveyor Equipment Manufacturers Association, our parts provide complete consistency in fit-up and interchangeability. We offer hanger bearings, coupling shafts, trough ends, covers, and hardware precision-machined from carbon steel, stainless steel, or custom alloys to resist operational wear.',
    features: [
      'Regulated dimensionally through the Conveyor Equipment Manufacturers Association.',
      'Ensures complete consistency in fit-up and assembly of bulk material handling equipment.',
      'High interchangeability of common parts within the material handling industry.',
      'Full catalog of hanger bearings, coupling shafts, trough ends, and hardware.',
      'Precision machined from high-tensile alloys to resist operational wear.'
    ],
    specs: {
      'Standards Compliance': 'CEMA 300 & 350 Standard Specifications',
      'Component Directory': 'Screws, Hangers, Bearings, Troughs, Covers, Coupling Shafts',
      'Materials': 'Hardened Carbon Steel, 304/316 Stainless Steel, Custom Alloys',
      'Interchangeability': '100% Industry Standard drop-in replacement guarantee'
    },
    applications: [
      'Replacing worn standard components in the field',
      'Upgrading conveyor system bearing and shaft seals',
      'System retrofits and CEMA conversion modifications',
      'Plant operational parts inventory stocking'
    ]
  }
];
