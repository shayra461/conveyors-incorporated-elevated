import screwConveyorImg from '@/assets/products/screw-conveyor-new.png';
import screwFeederImg from '@/assets/products/screw-feeders.png';
import shaftlessConveyorImg from '@/assets/products/shaftless-conveyors.png';
import verticalScrewImg from '@/assets/products/vertical-screw-new.png';
import liveBottomFeederImg from '@/assets/products/live-bottom-feeders.png';
import bucketElevatorImg from '@/assets/products/bucket-elevator-new.png';
import dragConveyorImg from '@/assets/products/drag-conveyor-new.png';
import cemaComponentsImg from '@/assets/products/cema-components-new.png';
import classifierWashersImg from '@/assets/products/classifier-washers.png';
import beltConveyorImg from '@/assets/products/belt-conveyor.png';
import mixersBlendersImg from '@/assets/products/mixers-blenders.png';
import hoppersBinsChutesImg from '@/assets/products/hoppers-bins-chutes.png';
import madeToOrderImg from '@/assets/products/fabricated-bucket.png';

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
    id: 'screw-conveyors',
    name: 'Screw Conveyors',
    category: 'Conveyors',
    image: screwConveyorImg,
    shortDescription: 'Reliable bulk material transport using a control-fed rotating helical flight.',
    description: 'Archimedes in the 3rd century BC developed the 1st screw conveyor and still today screw conveyors have provided a reliable method of transporting a broad range of bulk materials for a variety of applications. Screw Conveyors are identified as such because the inlet is always control fed by a piece of equipment that discharges the product at a specific rate. Screw conveyors move product from one location to the next by shearing and pushing the product causing it to tumble in the direction of the rotating inclined helical flight.',
    features: [
      'They are a totally enclosed system allowing for minimal product spillage',
      'They require minimal maintenance due to very few moving parts',
      'They convey a wide variety of products from free flowing to sluggish'
    ],
    specs: {
      'CEMA Standard': 'Yes',
      'Inlet Control': 'Control fed by upstream equipment at a specific discharge rate',
      'Conveying Mechanism': 'Shearing and pushing action causing material to tumble',
      'Enclosure': 'Totally enclosed to prevent spillage and contain dust'
    },
    applications: [
      'Free Flowing Bulk Materials',
      'Sluggish bulk processing industries',
      'Industrial Powder Handling',
      'Agricultural Grain Processing'
    ]
  },
  {
    id: 'screw-feeders',
    name: 'Screw Feeders',
    category: 'Feeders & Mixers',
    image: screwFeederImg,
    shortDescription: 'Regulated, volumetric feeders designed to flood-load and meter sluggish or bulk materials.',
    description: 'Screw Feeders are similar to Screw Conveyors because they both move product from one location to the next. They are different in that a Screw Feeder is designed to be flood loaded (100% full) in the inlet section and is designed to regulate or meter the flow of product to a downstream process. Screw Feeders are generally located under a hopper, bin or silo to draw bulk materials at a consistent, specified rate. To draw the material uniformly, specialized designs like Variable Pitch, Mass Flow Cone, or Tapered Flight screws are utilized.',
    features: [
      'Variable Pitch Screw designs to draw material uniformly from bin openings',
      'Mass Flow Cone Screw configurations to prevent material bridging',
      'Tapered Flight Screw & Trough combinations for high loading efficiency',
      'Designed to operate 100% flood loaded in the inlet section',
      'Provides accurate volumetric metering to downstream processing equipment'
    ],
    specs: {
      'Inlet Loading': '100% Flood Loaded',
      'Flow Regulation': 'Accurate metering and rate-control',
      'Agitator Options': 'Available for non-free-flowing powders',
      'Drive Control': 'Variable speed VFD ready'
    },
    applications: [
      'Surge Bin and Silo Discharge',
      'Controlled Batching & Blending',
      'Powder Packaging Machinery Feed',
      'Dosing Systems and Chemical Metering'
    ]
  },
  {
    id: 'shaftless-conveyors',
    name: 'Shaftless Conveyors',
    category: 'Conveyors',
    image: shaftlessConveyorImg,
    shortDescription: 'Specialized screw conveyors without a center shaft, designed for wet and sticky materials.',
    description: 'Shaftless Screw Conveyors are a specialized alternative to the standard Shafted Screw Conveyor. The elimination of the center pipe/shaft allows for the conveying of sluggish, wet and sticky bulk materials that would typically wrap around or pack inside a shafted conveyor. The shaftless spiral rests directly on a low-friction replaceable trough liner, allowing for efficient, high-loading volume transfer of complex municipal or industrial sludge.',
    features: [
      'Perfect for sludge, wet, stringy, and sticky products',
      'No center pipe/shaft preventing material wrap-around and packing issues',
      'Replaceable low-friction UHMW or premium alloy trough liners',
      'Allows higher loading efficiency and larger cross-sectional area',
      'Fully enclosed design for odor control and zero leakage'
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
      'Fruit and vegetable processing plant waste',
      'Pulp and paper plants and wood shavings',
      'Chemical manufacturers and sticky compounds',
      'Sugar Mill plants and bagasse handling'
    ]
  },
  {
    id: 'vertical-screw-conveyors',
    name: 'Vertical Screw Conveyors',
    category: 'Conveyors',
    image: verticalScrewImg,
    shortDescription: 'Space-saving vertical elevation systems for granular bulk materials in a compact footprint.',
    description: 'Vertical Screw Conveyors are designed to move bulk materials vertically. It is a specialized screw feeder that is capable of conveying materials where a very small footprint is required. Although Vertical Screw Conveyors perform wonderfully in specific applications they do have limitations when it comes to discharge height and types of materials they are able to convey. A Vertical Screw Conveyor consists of a conveyor screw rotating in a tubular housing with a suitable inlet at the lower end and an outlet at the upper end. Drives are generally located at the top of the vertical conveyor. The top bearing or drive unit must be able to handle both the radial and thrust loads.',
    features: [
      'Very small physical footprint for tight structural layouts',
      'Consists of a high-speed conveyor screw rotating in a tubular housing',
      'Top-mounted drive configuration designed to handle radial and thrust loads',
      'Typically fed by a controlled horizontal feeder screw to prevent fallback',
      'Maintains material linear velocity to overcome the pull of gravity'
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
    id: 'live-bottom-feeders',
    name: 'Live Bottom Feeders',
    category: 'Feeders & Mixers',
    image: liveBottomFeederImg,
    shortDescription: 'Multiple parallel screw feeder systems designed to draw extremely sluggish materials.',
    description: 'Live Bottom Feeders utilize multiple parallel screws to extract extremely sluggish, sticky, or high-head-load bulk materials from large bins or rectangular hoppers. Similar to single-screw feeders, they operate 100% flood loaded. The multi-screw configuration prevents material bridging, funneling, or structural arching by continuously moving the entire bottom layer of the storage vessel, ensuring a smooth, highly regulated discharge.',
    features: [
      'Multiple parallel screws acting in unison to discharge materials',
      'Perfect for sluggish, packed, or highly cohesive bulk materials',
      'Operates 100% flood loaded under massive material head loads',
      'Designed to prevent bridging, packing, and silo arching',
      'Utilizes Variable Pitch or Tapered Flight profiles for even extraction'
    ],
    specs: {
      'Screw Layout': '2, 3, 4, or 6 parallel screws',
      'Inlet Configuration': 'Wide rectangular flood inlet',
      'Speed Regulation': 'Independently controlled or common drive options',
      'Construction': 'Severe-duty heavy steel plate'
    },
    applications: [
      'Wet Municipal Wastewater Cake Storage Bins',
      'Sticky Chemical Slurry Hoppers',
      'Wood Chips, Bark, and Biomass Bin Discharge',
      'Cohesive Mineral Concentrates & Ore Extraction'
    ]
  },
  {
    id: 'bucket-elevators',
    name: 'Bucket Elevators',
    category: 'Conveyors',
    image: bucketElevatorImg,
    shortDescription: 'Efficient vertical conveyance of bulk materials while maintaining particle integrity.',
    description: 'Bucket elevators are one of the most efficient ways of conveying bulk materials vertically and due to the nature of the equipment they typically maintain the integrity of the bulk materials being conveyed. They consist of spaced or continuous buckets attached to a high-capacity belt or chain. As the buckets pass over the head pulley, materials are centrifugal, positive, or continuously discharged into downstream spouts.',
    features: [
      'Centrifugal discharge - buckets are mounted at a spaced interval, loaded by scooping or direct feeding, and discharged by centrifugal force.',
      'Positive discharge - designed to operate at lower speeds, suitable for handling light, fluffy and fragile materials, preventing sticking.',
      'Continuous discharge - buckets are spaced continuously and loaded by direct feeding, minimizing product spillage into the boot.'
    ],
    specs: {
      'Discharge Styles': 'Centrifugal, Positive, or Continuous discharge',
      'Materials of Construction': 'Mild Steel, Stainless Steel, and specialty alloys',
      'Bucket Material': 'HDPE, Nylon, Carbon Steel, or Fabricated Stainless Steel',
      'Media Type': 'Heavy-duty rubberized belt or alloy engineering steel chain'
    },
    applications: [
      'Fragile bulk materials vertical elevation',
      'Heavy minerals and quarry aggregate vertical transport',
      'Agricultural grains, corn, and fertilizer plants',
      'Light, fluffy powders requiring positive inversion discharge'
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
      'Highly energy-efficient en-masse conveying principles reducing power consumption',
      'Totally enclosed dust-tight and rain-proof housing for environmental safety',
      'High-strength forged steel drag chains with wear-resistant UHMW flight paddles'
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
    id: 'cema-components',
    name: 'CEMA Components',
    category: 'Components & Accessories',
    image: cemaComponentsImg,
    shortDescription: 'CEMA-standard replacement components for interchanging and maintaining conveyor systems.',
    description: 'CEMA Screw components consist of standard components for screw conveyors and feeders. They are regulated dimensionally through the Conveyor Equipment Manufacturers Association. This organization is made up of a small group of manufacturers that wanted to standardize the products that they manufactured in common. They wanted to be able to interchange common components within the industry. Having these standards for member companies provided consistency in fit up and assembly of screw conveyors and like bulk material handling equipment.',
    features: [
      'Regulated dimensionally through the Conveyor Equipment Manufacturers Association',
      'Ensures complete consistency in fit up and assembly of bulk material handling equipment',
      'Provides high interchangability of common parts within the material handling industry',
      'Full catalog of hanger bearings, coupling shafts, trough ends, and hardware',
      'Precision machined from high-tensile alloys to resist operational wear'
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
  },
  {
    id: 'classifier-washers',
    name: 'Classifier & Washers',
    category: 'Components & Accessories',
    image: classifierWashersImg,
    shortDescription: 'Specialized systems designed to separate aggregate fines or grit from liquid slurries or sludge.',
    description: 'Classifiers and Washers are used to separate sand or grit from a liquid slurry or sludge. By agitating the mixture inside a settling tank using an inclined screw conveyor, lighter fine aggregates and organic silts are washed away and carried over the overflow weir. The heavier sand and grit settle to the bottom and are carried up the incline by the screw, dewatering on the way, to discharge a clean, dry, sand product.',
    features: [
      'Agitates and washes slurry mixtures to separate light organics from heavy grits',
      'Heavy-duty inclined screw carries settled material upwards for gravity dewatering',
      'Adjustable weir gates to control fluid flow, aggregate retention, and cut-point',
      'Thick sectional flighting with hardsurfaced wear edges for highly abrasive slurry',
      'Rugged structural settling tank with reinforced side plates'
    ],
    specs: {
      'Separation Method': 'Gravity sedimentation combined with inclined screw washing',
      'Flight Profile': 'Extra-thick hardsurfaced sectional flights',
      'Tank Configuration': 'Heavy reinforced structural steel settling pool',
      'Wear Protection': 'High-hardness alloy plating or polyurethane spray liners'
    },
    applications: [
      'Aggregate sand washing and fine mesh classification',
      'Industrial wastewater grit removal and separating systems',
      'Mining slurry dewatering and tailings processing',
      'Environmental silt cleanup and aggregate reclaiming plants'
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
      'Versatile layouts conveying products horizontally, inclined, or vertically',
      'Custom configurations like Belt Feeders (flood loading), Trippers, and Shuttles',
      'Uses heavy-duty structural channel frames or long-span engineered truss designs',
      'Handles a very wide range of material particle sizes and extreme densities',
      'Optional overland profiles, radial stackers, and pit portable units'
    ],
    specs: {
      'Conveying Centers': '10 ft to 1,000 ft or longer custom spans',
      'Frame Options': 'Standard channel frame or high-strength engineered truss',
      'Belt Type': 'High-performance multi-ply rubber, cleated, or sidewall pocketed belting',
      'Spacing Capacity': 'Truss designs allow support spacing of 40, 60, or 90 feet'
    },
    applications: [
      'Mining and Minerals processing plants',
      'Cement, Concrete and Asphalt yards',
      'Metal foundries and metal scrap recovery',
      'Sand, Gravel and Lime washing terminals',
      'Trash and Recycling Industries sorting lines',
      'Salt and Sugar Industries processing mills',
      'Agricultural and Food Industries storage facilities',
      'Oil and Gas, Energy (Frac sand, Biomass plants)',
      'Paper and Pulp wood chip handling',
      'Building Products (Wood, Lumber and Gypsum Board)'
    ]
  },
  {
    id: 'mixers-blenders',
    name: 'Mixers & Blenders',
    category: 'Feeders & Mixers',
    image: mixersBlendersImg,
    shortDescription: 'Premium industrial mixers and double-ribbon blenders for uniform batch mixing.',
    description: 'Mixers & Blenders are engineered for outstanding batch mixing homogeneity. Featuring custom paddle or double-helical inner and outer ribbon agitators, they create a balanced, three-dimensional material movement. This high-efficiency design guarantees that multiple bulk powders, colorants, or liquid additions are thoroughly blended and unified in minimal cycle times.',
    features: [
      'Double-helical inner/outer ribbon or paddle agitators for maximum mixing shear',
      'Custom liquid spray bars for uniform oil/liquid blending additions',
      'Air-purged shaft seals and split packing glands for zero powder leakage',
      'Heavy-gauge carbon or highly polished 304/316 stainless steel bodies',
      'Quick-opening pneumatic slide gate valves for clean, rapid batch discharge'
    ],
    specs: {
      'Agitator Type': 'Double-Helical Ribbon or Paddle Agitators',
      'Body Finish': 'Industrial carbon steel or sanitary polished stainless steel',
      'Discharge Valve': 'Pneumatic slide gate or manual butterfly valve',
      'Seal Assemblies': 'Air-Purged Gland Seals with split packing'
    },
    applications: [
      'Dry food ingredient seasoning and baking mix blending',
      'Chemical powders, plastics, and resin compounding',
      'Nutritional animal feed and agricultural grain mixtures',
      'Dry cement mortars, pigments, and stucco blend batching'
    ]
  },
  {
    id: 'hoppers-bins-chutes',
    name: 'Hoppers, Bins & Chutes',
    category: 'Components & Accessories',
    image: hoppersBinsChutesImg,
    shortDescription: 'Seamless connections and flow control to link upstream and downstream equipment.',
    description: 'These components connect each of your upstream conveying equipment inlets and discharges to the downstream. Conveyors Inc. is a single source for conveying equipment and accessory components allowing for peace of mind that each unit will be right and that everything will field fit as required. CI offers the hoppers and bins in all shapes and sizes tailored to fit the customer\'s needs. The chutes provide a seamless connection between pieces of equipment.',
    features: [
      'Hoppers, Bins, Chutes, and Gates designed for custom bulk layouts',
      'Single-source engineering guarantees that everything will field fit as required',
      'Hoppers and bins are offered in all shapes and sizes tailored to customer needs',
      'Chutes provide a seamless, wear-resistant connection between pieces of equipment',
      'Gates are offered in CEMA standard or custom sizes with variable operators'
    ],
    specs: {
      'Connective Directory': 'Hoppers, Bins, Chutes, and Discharge Gates',
      'Gate Sizes': 'CEMA Standard sizes and fully custom tailored dimensions',
      'Gate Operators': 'Electric, Hydraulic, Pneumatic, or Mechanical action',
      'Dimensional Fit': '100% Guaranteed field-fit alignment'
    },
    applications: [
      'Upstream to downstream conveyor connective transitions',
      'Material surge storage and gravity-flow bin hoppers',
      'Conveyor discharge control using pneumatic slider gates',
      'High-wear bulk material gravity flow chuting systems'
    ]
  },
  {
    id: 'made-to-order-components',
    name: 'Made to Order Components',
    category: 'Components & Accessories',
    image: madeToOrderImg,
    shortDescription: 'Custom OEM-manufactured components designed to solve wear, layout, and performance problems.',
    description: 'Made to Order Components are custom-engineered and fabricated pieces built to solve specific system wear, layout compatibility, or capacity limitations. Conveyors Inc. leverages state-of-the-art metalworking and ASME-certified fabrication to manufacture high-performance components tailored precisely to customer drawings, ensuring a perfect fit and a significantly improved service life.',
    features: [
      'Increased conveying performance - improved design for more efficiency',
      'Longer wear life - improved material of construction (high-hardness alloys)',
      'Less Maintenance - improved, robust engineering design reducing failure points',
      'Less stocking of Parts - improved design utilizing common replacement components'
    ],
    specs: {
      'Fabrication Quality': 'Certified ASME Section IX and AWS welding standards',
      'Wear Alloys': 'Chromium carbide overlay, AR400 plate, Hardox, and tool steel',
      'Design Integration': 'Custom CNC-machined keyed shafts, flanges, and flights',
      'Quality Control': 'Full material certification (MTR) and laser measurement alignment'
    },
    applications: [
      'Replacing obsolete conveyor equipment parts in existing plants',
      'Highly corrosive chemical or high-heat material handling processes',
      'Upgrading heavy-duty industrial drive hubs and shafts',
      'Severe abrasive aggregate and sand handling systems'
    ]
  }
];
