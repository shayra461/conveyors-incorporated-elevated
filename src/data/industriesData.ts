import { 
  Wheat, 
  Flame, 
  FlaskConical, 
  Droplets, 
  Utensils, 
  Trees, 
  Mountain, 
  Fuel, 
  Zap, 
  FileText, 
  Recycle, 
  Layers, 
  Trash2,
  LucideIcon
} from 'lucide-react';

import agricultureImg from '@/assets/industries/agriculture.png';
import alternativeFuelsImg from '@/assets/industries/alternative-fuels.png';
import chemicalsImg from '@/assets/industries/chemical-industry.png';
import environmentalImg from '@/assets/industries/environmental.png';
import foodProductsImg from '@/assets/industries/food-industry.png';
import lumberWoodImg from '@/assets/industries/lumber-wood.png';
import miningImg from '@/assets/industries/mining.png';
import oilGasImg from '@/assets/industries/oil-and-gas.png';
import powerImg from '@/assets/industries/power-industry.png';
import pulpPaperImg from '@/assets/industries/pulp-paper.png';
import recyclingImg from '@/assets/industries/recycling-real.jpg';
import stoneConcreteImg from '@/assets/industries/stone-concrete.png';
import refuseSystemsImg from '@/assets/industries/refuse-systems.png';

export interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
  image: string;
  shortDescription: string;
  description: string;
  materials: string[];
  equipment: string[];
}

export const industriesData: Industry[] = [
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: Wheat,
    image: agricultureImg,
    shortDescription: 'Conveyors, Inc. manufactures cost-effective and CEMA-standard screw conveyors, belt feeders, and bucket elevators for agricultural grain, feed, and seed handling.',
    description: 'The growing, harvesting and processing of agriculture products such as corn, rice, soybeans and wheat require the use of many different types of bulk material handling equipment. Screw Feeders, Belt Conveyors, Screw Conveyors and Bucket Elevators are used throughout the process for the conveying and elevating of these products. Silos are used for storage of grains and Slide Gates are used for flow control.\n\nConveyors, Inc. manufactures very cost-effective equipment specifically designed for the duty cycle of the agriculture industry. A large inventory of CEMA stock components including helicoid screws and angle flanged troughs are available for immediate shipment. All Conveyors, Inc. CEMA stock components are manufactured to CEMA standards.',
    materials: [
      'Corn',
      'Soybeans',
      'Wheat',
      'Barley',
      'Oats',
      'Animal Feed',
      'Grain Dust'
    ],
    equipment: [
      'Heavy Duty Screw Conveyors',
      'Screw Feeders',
      'Bucket Elevators',
      'Belt Conveyors',
      'Drag Conveyors',
      'Slide Gates'
    ]
  },
  {
    id: 'alternative-fuels',
    name: 'Alternative Fuels',
    icon: Flame,
    image: alternativeFuelsImg,
    shortDescription: 'From swine waste RNG plants to hydrogen pyrolysis, Conveyors, Inc. specializes in custom high-temperature alternative fuel bulk handling.',
    description: 'Conventional fossil fuels such as oil and natural gas produce carbon dioxide (CO2) as a byproduct of the combustion process. The most effective way to reduce carbon dioxide (CO2) emissions is to reduce fossil fuel consumption. Alternative or renewable fuels are alternatives to traditional gasoline and diesel fuels. These fuels are derived from renewable, non-petroleum sources such as crops, animal waste, or municipal solid waste. Increased use of alternative or renewable fuels in the United States can reduce dependence on foreign sources of crude oil and foster development of domestic energy sources, while at the same time providing important reductions in greenhouse gas emissions. Conveyors, Inc. is very active in the Alternative Fuels industry. We have designed and manufactured processing equipment for almost every form of alternative fuel, including high temperature vessels utilizing shaftless screw conveyors for the pyrolysis process.',
    materials: [
      'Wood Chips',
      'Switchgrass',
      'Shredded Tires',
      'Refuse Derived Fuel (RDF)',
      'Municipal Solid Waste',
      'Bagasse'
    ],
    equipment: [
      'Heavy Duty Screw Conveyors',
      'Screw Feeders',
      'Bucket Elevators',
      'Belt Conveyors',
      'Drag Conveyors',
      'Slide Gates'
    ]
  },
  {
    id: 'chemicals',
    name: 'Chemicals',
    icon: FlaskConical,
    image: chemicalsImg,
    shortDescription: 'Highly engineered pressure-tight and corrosion-resistant conveyor systems designed from stainless steel and high-nickel alloys.',
    description: 'The production of organic acids and salts, inorganic catalyst and chlorides and plastics require the use of conveying and processing equipment. Conveyors, Inc. specializes in designing and manufacturing equipment for the harsh and dangerous chemical industry environment. Conveyors, Inc. has built thousands of conveyors for metering and conveying chemicals such as adipic acid, caustic soda, iron oxide, polyethylene and polypropylene. Our conveyors for the chemical industry are highly engineered and very special in design to meet industry requirements. Stainless steel or high-nickel alloy construction is required to withstand the corrosiveness of the chemicals. Vapors and toxic gases are contained with our pressure-tight designs.',
    materials: [
      'Titanium Dioxide',
      'Carbon Black',
      'Calcium Carbonate',
      'Sodium Bicarbonate',
      'Polystyrene Beads',
      'Fertilizer Compounds'
    ],
    equipment: [
      'Heavy Duty Screw Conveyors',
      'Screw Feeders',
      'Bucket Elevators',
      'Belt Conveyors',
      'Drag Conveyors',
      'Slide Gates'
    ]
  },
  {
    id: 'environmental',
    name: 'Environmental',
    icon: Droplets,
    image: environmentalImg,
    shortDescription: 'Premium municipal grit classifiers, dewatered biosolids shaftless conveyors, and odor-tight sludge load-out systems.',
    description: 'Clean water continues to become a more precious commodity each day. The treatment of water and wastewater requires separation of solids from liquids. These solids are grit, screenings, sludge or bio-solids. Conveyors, Inc. Grit Classifiers and Shaftless Conveyors can be found at hundreds of municipalities handling these bulk materials. Centrifuges and belt filter presses are most commonly used to dewater the wastewater. The sludge or bio-solids are conveyed with Conveyors, Inc. Shaftless Conveyors to drying, load-out or incineration. Our unique designs work great for the wet, sticky products. Also, our vapor-tight construction reduces the odors produced by these products and the chance for explosion.',
    materials: [
      'Dewatered Biosolids',
      'Grit Slurry',
      'Screenings',
      'Alum Sludge',
      'Municipal Wastewater Cake',
      'Digested Sludge'
    ],
    equipment: [
      'Shaftless Screw Conveyors',
      'Grit Classifiers',
      'Washer Compactors',
      'Slide Gates',
      'Load-out Systems'
    ]
  },
  {
    id: 'food-products',
    name: 'Food Products',
    icon: Utensils,
    image: foodProductsImg,
    shortDescription: 'Sanitary food-grade conveyor systems built from polished stainless steel to prevent pits and crevices, ideal for human or pet foods.',
    description: 'The manufacturing and processing of food products for human and animal consumption is a huge industry that continues to grow. This industry includes beef, pork and poultry processing, dog and cat food, sugar refining, wet corn milling, coffee processing and the manufacturing of ice. Conveyors, Inc. designs and manufactures equipment specially designed for the food industry. Our food grade conveyors are perfect for food products used for human consumption. Highly polished stainless steel construction with no pits or crevices is our standard for the industry. The equipment used for non-human consumption for the processing of beef, pork and poultry require very heavy-duty construction to handle the meat by-products.',
    materials: [
      'Sugar',
      'Salt',
      'Flour',
      'Starch',
      'Cocoa Beans',
      'Spices',
      'Pet Food Ingredients'
    ],
    equipment: [
      'Food Grade Stainless Screw Conveyors',
      'Continuous Blenders',
      'Bucket Elevators',
      'Slide Gates'
    ]
  },
  {
    id: 'lumber-wood-products',
    name: 'Lumber & Wood',
    icon: Trees,
    image: lumberWoodImg,
    shortDescription: 'Industrial mass-flow hoppers, dust-tight feeders, and mill-duty drag conveyors built to handle sawdust, bark, and chips.',
    description: 'Bulk materials are created in the process of making lumber and various wood products. Saw dust, wood chips and wood shavings that are by-products of one process are used for making particleboard, flakeboard and oriented strandboard in another process. Also, sawdust is formed into pellets and used as an alternative fuel source in many industries. Conveyors, Inc. supplies equipment for storing, elevating, conveying and metering these bulk materials. Process efficiency is critical to the success of the industry. Our mass-flow hopper and feeder designs are very successful in storing and metering bulk materials that arch or bridge. Also, our conveyors are dust-tight to prevent a hazardous condition such as a fire or an explosion.',
    materials: [
      'Wood Chips',
      'Sawdust',
      'Bark',
      'Wood Pellets',
      'Shavings',
      'Planer Shavings'
    ],
    equipment: [
      'Heavy Duty Screw Conveyors',
      'Screw Feeders',
      'Bucket Elevators',
      'Belt Conveyors',
      'Drag Conveyors',
      'Slide Gates'
    ]
  },
  {
    id: 'mining',
    name: 'Metals & Mining',
    icon: Mountain,
    image: miningImg,
    shortDescription: 'Abrasion-resistant screw feeders, long-span belt conveyors, and fly-ash transfer components designed for non-stop uptime.',
    description: 'The mining, crushing, washing and drying of many metals and minerals is accomplished by the use of conveyors. Copper, Iron ore, taconite and uranium are metals that are conveyed using Conveyors, Inc. Screw Conveyors and Belt Conveyors. Coal, limestone, sand, kaolin clay, potash and soda ash are minerals that we have conveyed from the mines to the crushers and other areas of the process. Our conveyors are extremely heavy duty to withstand the harsh conditions. We use abrasion-resistant materials to build our conveyors because we know that downtime is not an option.',
    materials: [
      'Copper Ore',
      'Gold Ore',
      'Iron Ore',
      'Coal',
      'Gypsum',
      'Limestone',
      'Fly Ash'
    ],
    equipment: [
      'Heavy Duty Screw Conveyors',
      'Screw Feeders',
      'Bucket Elevators',
      'Belt Conveyors',
      'Drag Conveyors',
      'Slide Gates'
    ]
  },
  {
    id: 'oil-and-gas',
    name: 'Oil & Gas',
    icon: Fuel,
    image: oilGasImg,
    shortDescription: 'Heavy-duty Continuous Mixers, proppant conveyors, and thermal processors engineered to survive harsh oilfield applications.',
    description: 'Exploration and production of oil and natural gas requires the use of many different types of bulk material handling and processing equipment. Conveyors, Inc. provides equipment for conveying and metering frac sand, proppants, drill cuttings, mud additives and chemicals used in the production process. Drill cuttings disposal is a major issue and Conveyors, Inc. has helped develop processes for both thermal and chemical neutralization. Our heavy-duty Continuous Mixers and Thermal Processors are important components of the process. The operating conditions in the oilfield are very harsh and Conveyors, Inc. equipment is designed and built to withstand even the toughest applications.',
    materials: [
      'Frac Sand',
      'Drill Cuttings',
      'Petroleum Coke',
      'Oil Sands',
      'Sulfide Ore',
      'Chemical Catalyst'
    ],
    equipment: [
      'Heavy Duty Screw Conveyors',
      'Screw Feeders',
      'Bucket Elevators',
      'Belt Conveyors',
      'Drag Conveyors',
      'Slide Gates'
    ]
  },
  {
    id: 'power',
    name: 'Power',
    icon: Zap,
    image: powerImg,
    shortDescription: 'Severe-duty fly ash cooling screws and alternative fuel feeders built to withstand operating temperatures up to 1,800°F.',
    description: 'Electricity is typically generated using fossil fuels, such as coal, oil, or gas in internal combustion or combustion turbine conventional steam processes. Alternative fuels such as biomass and municipal solid waste are gaining in popularity because waste products are converted into usable forms of energy. Many biomass products are based on renewable forms of feedstock such as corn, sugarcane or wood. Conveyors, Inc. has designed and manufactured equipment for conveying and processing coal, petroleum coke and every form of alternative fuel. Our equipment is designed for the extreme conditions of the various processes. We even cool extremely hot ash from coal and wood fired boilers from 1,800-degrees F to temperatures below 200-degrees F.',
    materials: [
      'Bituminous Coal',
      'Sub-bituminous Coal',
      'Fly Ash',
      'Bottom Ash',
      'Biomass Pellets',
      'Petcoke'
    ],
    equipment: [
      'Heavy Duty Screw Conveyors',
      'Screw Feeders',
      'Bucket Elevators',
      'Belt Conveyors',
      'Drag Conveyors',
      'Slide Gates'
    ]
  },
  {
    id: 'pulp-and-paper',
    name: 'Pulp & Paper',
    icon: FileText,
    image: pulpPaperImg,
    shortDescription: 'Corrosion-resistant pulp feeders fabricated from 317L/Hastelloy and wear-protected bark hoppers.',
    description: 'Paper products are made from wood pulp, cellulose fibers or recycled newsprint and paper. Wood chips and many different chemicals are used in the paper making process. These bulk materials are conveyed, metered, elevated and stored using equipment made by Conveyors, Inc.. Our equipment is ideal for the pulp and paper industry. We regularly manufacture using corrosion-resistant alloys such as 317L and Hastelloy. Tree bark is a by-product from the paper making process and is used as a fuel to fire boilers for the pulping process. The bark is extremely abrasive and requires special design considerations. Conveyors, Inc. designs and manufactures bark bins and live-bottom feeders using chromium carbide surfaced plate to resist abrasion.',
    materials: [
      'Wood Chips',
      'Pulp Slurry',
      'Black Liquor Solids',
      'Paper Sludge',
      'Lime Mud',
      'Recycled Fiber'
    ],
    equipment: [
      'Heavy Duty Screw Conveyors',
      'Screw Feeders',
      'Bucket Elevators',
      'Belt Conveyors',
      'Drag Conveyors',
      'Slide Gates'
    ]
  },
  {
    id: 'recycling',
    name: 'Recycling',
    icon: Recycle,
    image: recyclingImg,
    shortDescription: 'Tough, high-capacity shredder discharge screw conveyors and long belt systems for glass cullet, tires, and scrap recovery.',
    description: 'Recycling is the process of converting waste into new, usable materials. The purpose of recycling is to save raw materials and reduce greenhouse gas emissions. Recycling prevents the waste of useful materials as well as reducing energy usage, air and water pollution. Conveyors, Inc. belt conveyors, screw conveyors and bucket elevators are found in many recycling facilities throughout the U.S. Belt conveyors are used to convey sorted materials such as glass, plastic bottles and aluminum to crushing and grinding operations. Screw conveyors are used to convey crushed and ground materials to the next stage of the recycling operation. Bucket elevators typically convey materials vertically to storage silos for load out.',
    materials: [
      'Crushed Glass (Cullet)',
      'Shredded Plastics',
      'E-Waste',
      'Aluminum Cans',
      'Paper and Cardboard Pulp',
      'Tires'
    ],
    equipment: [
      'Heavy Duty Screw Conveyors',
      'Screw Feeders',
      'Bucket Elevators',
      'Belt Conveyors',
      'Drag Conveyors',
      'Slide Gates'
    ]
  },
  {
    id: 'stone-glass-concrete-products',
    name: 'Stone, Glass & Concrete',
    icon: Layers,
    image: stoneConcreteImg,
    shortDescription: 'Industrial high-torque aggregate screw conveyors, cement mixers, and dust-tight structural slide gates.',
    description: 'The minerals mined from the earth must be processed into finished products for consumer use. Glass, cement, concrete, brick, tile, wallboard, hydrated lime, and diatomaceous earth are some of the products we use every day. Conveyors, Inc. equipment is found throughout the minerals processing industry to convey these products. Our heavy duty, high torque conveyors are designed for the harsh conditions and can power through upset conditions to keep the process running. Our unique dust-tight designs reduce emissions and improve working conditions in the plant.',
    materials: [
      'Portland Cement',
      'Sand and Gravel',
      'Crushed Limestone',
      'Soda Ash',
      'Silica Sand',
      'Cullet (Glass)'
    ],
    equipment: [
      'Heavy Duty Screw Conveyors',
      'Screw Feeders',
      'Bucket Elevators',
      'Belt Conveyors',
      'Drag Conveyors',
      'Slide Gates'
    ]
  },
  {
    id: 'refuse-systems',
    name: 'Refuse Systems',
    icon: Trash2,
    image: refuseSystemsImg,
    shortDescription: 'Hazardous waste, combusted bottom residue, and fly ash thermal cooling processors.',
    description: 'Collection and disposal of solid and liquid waste streams is important for the protection of our environment and future. Incineration of hazardous waste materials such as paints, solvents, oils and chemicals reduce the potential for contamination of our environment. Waste-to-Energy creates positive results for the environment. Metals are removed from the waste stream and recycled. By using municipal waste as a fuel source, dependence on landfills can be reduced up to 90-percent and our carbon footprint reduced.\n\nConveyors, Inc. provides equipment to the incineration market for conveying hazardous materials and the resulting ash. Screw conveyors, drag conveyors, bucket elevators and slide gates are used throughout the incineration and waste-to-energy process. Conveyors, Inc. thermal processors cool ash from incinerators and boilers. Temperature, abrasion and corrosion resistant designs are available for the demands of the industry.',
    materials: [
      'Municipal Solid Waste',
      'Fly Ash',
      'Bottom Ash',
      'Hazardous Ash',
      'Combusted Residue'
    ],
    equipment: [
      'Heavy Duty Screw Conveyors',
      'Screw Feeders',
      'Bucket Elevators',
      'Belt Conveyors',
      'Drag Conveyors',
      'Slide Gates'
    ]
  }
];
