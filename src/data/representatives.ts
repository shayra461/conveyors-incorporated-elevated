import joseBautistaImg from '@/assets/managers/jose_bautista.jpg';
import carlSimpsonImg from '@/assets/managers/carl_simpson.jpg';
import wayneSimmons from '@/assets/managers/wayne_simmons.png';
import masonRoseImg from '@/assets/managers/mason_rose.jpg';


export interface Manager {
  id: string;
  name: string;
  role: string;
  photo: string;
  phone: string;
  email: string;
}

export const managersMap: Record<string, Manager> = {
  jose_bautista: {
    id: 'jose_bautista',
    name: 'Jose Bautista',
    role: 'Regional Sales Manager',
    photo: joseBautistaImg,
    phone: '682-553-1043',
    email: 'jbautista@conveyorsinc.net'
  },
  carl_simpson: {
    id: 'carl_simpson',
    name: 'Carl Simpson',
    role: 'National Sales Manager',
    photo: carlSimpsonImg,
    phone: '928-978-3486',
    email: 'csimpson@conveyorsinc.net'
  },
  wayne_simmons: {
    id: 'wayne_simmons',
    name: 'Wayne Simmons',
    role: 'Regional Sales Manager',
    photo: wayneSimmons,
    phone: '770-540-8743',
    email: 'wsimmons@conveyorsinc.net'
  },
  mason_rose: {
    id: 'mason_rose',
    name: 'Mason Rose',
    role: 'Regional Sales Manager',
    photo: masonRoseImg,
    phone: '346-336-1215',
    email: 'mrose@conveyorsinc.net'
  }
};

export interface Representative {
  id: string;
  name: string;
  territory: string;
  managerId: string; // Key Contact (Conveyors Inc rep)
  contactPerson?: string; // Secondary Contact person
  role?: string;
  address?: string;
  phone?: string;
  officePhone?: string;
  email?: string;
  quotesEmail?: string;
  color: string;
  textColor: string;
}

export const representativesList: Representative[] = [
  {
    id: 'afi',
    name: 'AFI Industrial',
    territory: 'CO, ID, UT, WY, MT',
    managerId: 'carl_simpson', // Carl Simpson
    contactPerson: 'Alex Frieling',
    address: '7114 S. Tibet Way, Aurora, CO 80016',
    phone: '720.670.8901',
    email: 'alex@af-industrial.com',
    quotesEmail: 'sales@af-industrial.com',
    color: '#15803d',
    textColor: 'text-green-500'
  },
  {
    id: 'mcr',
    name: 'MCR (Motion Control Resources)',
    territory: 'MI, IN, OH, KY, WV',
    managerId: 'mason_rose', // Mason Rose
    contactPerson: 'Tom Cifelli',
    address: '19668 Progress Drive, Strongsville, OH 44149',
    phone: '440.343.4500',
    email: 'tcifelli@mcrsales.com',
    quotesEmail: 'tcifelli@mcrsales.com, cdrdek@mcrsales.com',
    color: '#dc2626',
    textColor: 'text-red-500'
  },
  {
    id: 'mpi',
    name: 'MPI Motion Products',
    territory: 'OK, AR, KS, NE, IA, MO, South IL',
    managerId: 'carl_simpson', // Carl Simpson
    contactPerson: 'Derek Daniels',
    address: '6009 Earnshaw, Shawnee, KS 66216',
    officePhone: '913.649.1100',
    phone: '913.787.3815',
    email: 'derek@mpikc.com',
    quotesEmail: 'derek@mpikc.com',
    color: '#eab308',
    textColor: 'text-yellow-500'
  },
  {
    id: 'jmc',
    name: 'JMC Industrial Sales, Inc.',
    territory: 'ND, SD, MN, WI, N.IL, UP.MI',
    managerId: 'jose_bautista', // Jose Bautista
    contactPerson: 'Joe Johnson',
    address: '4349 N. Alpine Ave, Milwaukee, WI 53211',
    phone: '414.305.2841',
    email: 'joe@indlmotion.com',
    quotesEmail: 'sales@indlmotion.com',
    color: '#4ade80',
    textColor: 'text-emerald-400'
  },
  {
    id: 'tis',
    name: 'TIS - Taylor Industrial Sales',
    territory: 'TN, MS, AL, GA, FL, South LA',
    managerId: 'wayne_simmons', // Wayne Simmons
    contactPerson: 'William C. ("Bill") Taylor II',
    address: '6362 E. Hanna Avenue, Tampa, FL 33610',
    phone: '813.335.1569',
    officePhone: '813.663.9111',
    quotesEmail: 'Bill@gotisco.com',
    color: '#8b5cf6',
    textColor: 'text-violet-400'
  },
  {
    id: 'cmc', // Changed from cnc to cmc
    name: 'CMC - Control Motion',
    territory: 'VA, NC, SC',
    managerId: 'wayne_simmons', // Wayne Simmons
    contactPerson: 'Chip Harris',
    address: '7130 Matthews Mint Hill Rd., Mint Hill, NC 28227',
    phone: '704.806.0577',
    email: 'charriscmi@aol.com',
    quotesEmail: 'sales@controlledmotioninc.com',
    color: '#ea580c',
    textColor: 'text-orange-500'
  },
  {
    id: 'eip',
    name: 'EIP Custom Industrial Products',
    territory: 'CA, NV, AZ, OR, WA',
    managerId: 'jose_bautista', // Jose Bautista
    contactPerson: 'Corbin Gunstream',
    address: '1816 S. Van Ness Avenue, Fresno, CA 93721',
    officePhone: '209.204.3518',
    email: 'cgunstream@eip-inc.com',
    quotesEmail: 'quotes@eip-inc.com',
    color: '#38bdf8',
    textColor: 'text-sky-400'
  },
  {
    id: 'eno',
    name: 'ENO Industrial Sales, LLC',
    territory: 'CT, DE, MA, MD, ME, NJ, NH, NY, PA, RI, VT, DC',
    managerId: 'jose_bautista', // Jose Bautista
    contactPerson: 'Michael J. Eno',
    address: '55 Forman St., Cazenovia, NY 13035',
    phone: '315.439.4608',
    quotesEmail: 'mike@eno-industrial.com, doug@eno-industrial.com',
    color: '#d2b48c',
    textColor: 'text-amber-600'
  },
  {
    id: 'direct',
    name: 'Conveyors, Inc. Direct',
    territory: 'LA, TX, HI, AK, NM, Canada, Caribbean, Mexico & Central America',
    managerId: 'carl_simpson', // Carl Simpson
    contactPerson: 'Mason Rose', // Mason Rose as secondary contact
    address: '620 S. 4th Ave, Mansfield, TX, 76063',
    phone: '346-336-1215',
    email: 'mrose@conveyorsinc.net',
    quotesEmail: 'csimpson@conveyorsinc.net',
    color: '#1e3a8a',
    textColor: 'text-blue-600'
  }
];

export const stateToRepMap: Record<string, string> = {
  // AFI Industrial
  CO: 'afi',
  WY: 'afi',
  UT: 'afi',
  ID: 'afi',
  MT: 'afi',

  // MCR
  MIL: 'mcr', // Lower Michigan
  IN: 'mcr',
  OH: 'mcr',
  KY: 'mcr',
  WV: 'mcr',

  // MPI
  OK: 'mpi',
  AR: 'mpi',
  KS: 'mpi',
  NE: 'mpi',
  IA: 'mpi',
  MO: 'mpi',
  ILB: 'mpi', // Southern Illinois

  // JMC
  ND: 'jmc',
  SD: 'jmc',
  MN: 'jmc',
  WI: 'jmc',
  IL: 'jmc',  // Northern Illinois
  MI: 'jmc',  // Upper Michigan

  // TIS
  MS: 'tis',
  LAR: 'tis', // Southern Louisiana
  AL: 'tis',
  GA: 'tis',
  FL: 'tis',
  TN: 'tis',

  // CMC - Control Motion
  SC: 'cmc', // Changed from cnc to cmc
  NC: 'cmc',
  VA: 'cmc',

  // EIP
  OR: 'eip',
  WA: 'eip',
  CA: 'eip',
  NV: 'eip',
  AZ: 'eip',

  // ENO
  RI: 'eno',
  CT: 'eno',
  VT: 'eno',
  MA: 'eno',
  ME: 'eno',
  MD: 'eno',
  DE: 'eno',
  NJ: 'eno',
  NY: 'eno',
  PA: 'eno',
  NH: 'eno',
  DC: 'eno',

  // Direct
  LA: 'direct', // Standard Louisiana
  TX: 'direct',
  HI: 'direct',
  AK: 'direct',
  NM: 'direct',
  Canada: 'direct',
  Caribbean: 'direct',
  CentralAmerica: 'direct'
};
