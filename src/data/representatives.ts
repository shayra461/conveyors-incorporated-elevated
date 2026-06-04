import joseBautistaImg from '@/assets/managers/jose_bautista.png';
import carlSimpsonImg from '@/assets/managers/carl_simpson.png';
import wayneSimmons from '@/assets/managers/wayne_simmons.png';
import masonRoseImg from '@/assets/managers/mason_rose.png';

export interface Manager {
  id: string;
  name: string;
  role: string;
  photo: string;
}

export const managersMap: Record<string, Manager> = {
  jose_bautista: {
    id: 'jose_bautista',
    name: 'Jose Bautista',
    role: 'Regional Sales Manager',
    photo: joseBautistaImg
  },
  carl_simpson: {
    id: 'carl_simpson',
    name: 'Carl Simpson',
    role: 'National Sales Manager',
    photo: carlSimpsonImg
  },
  wayne_simmons: {
    id: 'wayne_simmons',
    name: 'Wayne Simmons',
    role: 'Regional Sales Manager',
    photo: wayneSimmons
  },
  mason_rose: {
    id: 'mason_rose',
    name: 'Mason Rose',
    role: 'Sales Manager',
    photo: masonRoseImg
  }
};

export interface Representative {
  id: string;
  name: string;
  territory: string;
  managerId: string; // Key into managersMap
  contactPerson?: string;
  role?: string;
  address?: string;
  phone?: string;
  officePhone?: string;
  email?: string;
  quotesEmail?: string;
  conveyorsContact?: {
    name: string;
    role: string;
    address?: string;
    phone?: string;
    email?: string;
  };
  color: string;
  textColor: string;
}

export const representativesList: Representative[] = [
  {
    id: 'afi',
    name: 'AFI Industrial',
    territory: 'CO, ID, UT, WY, MT',
    managerId: 'jose_bautista',
    contactPerson: 'Alex Frieling',
    address: '7114 S. Tibet Way, Aurora, CO 80016',
    phone: '720.670.8901',
    email: 'alex@af-industrial.com',
    quotesEmail: 'sales@af-industrial.com',
    conveyorsContact: {
      name: 'Carl Simpson',
      role: 'National Sales Manager',
      address: '620 S. 4th Ave, Mansfield, TX 76063',
      email: 'csimpson@conveyorsinc.net'
    },
    color: '#15803d',
    textColor: 'text-green-500'
  },
  {
    id: 'mcr',
    name: 'MCR (Motion Control Resources)',
    territory: 'MI, IN, OH, KY, WV',
    managerId: 'carl_simpson',
    contactPerson: 'Tom Cifelli',
    address: '19668 Progress Drive, Strongsville, OH 44149',
    phone: '440.343.4500',
    email: 'tcifelli@mcrsales.com',
    quotesEmail: 'tcifelli@mcrsales.com, cdrdek@mcrsales.com',
    conveyorsContact: {
      name: 'Michael Greenlee',
      role: 'Regional Sales Manager',
      address: '620 S. 4th Ave, Mansfield, TX 76063',
      phone: '817.925.5685',
      email: 'mgreenlee@conveyorsinc.net'
    },
    color: '#dc2626',
    textColor: 'text-red-500'
  },
  {
    id: 'mpi',
    name: 'MPI Motion Products',
    territory: 'OK, AR, KS, NE, IA, MO, South IL',
    managerId: 'mason_rose',
    contactPerson: 'Derek Daniels',
    address: '6009 Earnshaw, Shawnee, KS 66216',
    officePhone: '913.649.1100',
    phone: '913.787.3815',
    email: 'derek@mpikc.com',
    quotesEmail: 'derek@mpikc.com',
    conveyorsContact: {
      name: 'Carl Simpson',
      role: 'National Sales Manager',
      address: '620 S. 4th Ave, Mansfield, TX 76063',
      phone: '928.978.3486',
      email: 'csimpson@conveyorsinc.net'
    },
    color: '#eab308',
    textColor: 'text-yellow-500'
  },
  {
    id: 'jmc',
    name: 'JMC Industrial Sales, Inc.',
    territory: 'ND, SD, MN, WI, N.IL, UP.MI',
    managerId: 'jose_bautista',
    contactPerson: 'Joe Johnson',
    address: '4349 N. Alpine Ave, Milwaukee, WI 53211',
    phone: '414.305.2841',
    email: 'joe@indlmotion.com',
    quotesEmail: 'sales@indlmotion.com',
    conveyorsContact: {
      name: 'Michael Greenlee',
      role: 'Regional Sales Manager',
      address: '620 S. 4th Ave, Mansfield, TX 76063',
      phone: '817.925.5685',
      email: 'mgreenlee@conveyorsinc.net'
    },
    color: '#4ade80',
    textColor: 'text-emerald-400'
  },
  {
    id: 'tis',
    name: 'TIS - Taylor Ind Sales',
    territory: 'TN, MS, AL, GA, FL, South LA',
    managerId: 'jose_bautista',
    contactPerson: 'Wayne Simmons',
    role: 'Regional Sales Manager',
    address: '620 S. 4th Ave, Mansfield, TX 76063',
    phone: '1.770.540.8743',
    email: 'wsimmons@conveyorsinc.net',
    color: '#8b5cf6',
    textColor: 'text-violet-400'
  },
  {
    id: 'cnc',
    name: 'CNC - Control Motion',
    territory: 'VA, NC, SC',
    managerId: 'carl_simpson',
    contactPerson: 'Wayne Simmons',
    role: 'Regional Sales Manager',
    address: '620 S. 4th Ave, Mansfield, TX 76063',
    phone: '1.770.540.8743',
    email: 'wsimmons@conveyorsinc.net',
    color: '#ea580c',
    textColor: 'text-orange-500'
  },
  {
    id: 'eip',
    name: 'EIP Custom Industrial Products, Inc.',
    territory: 'CA, NV, AZ, OR, WA',
    managerId: 'carl_simpson',
    contactPerson: 'Corbin Gunstream',
    role: 'Owner/CFO (Covers All Territories)',
    address: '1816 S. Van Ness Avenue, Fresno, CA 93721',
    phone: '209.204.3518',
    email: 'cgunstream@eip-inc.com',
    quotesEmail: 'quotes@eip-inc.com',
    conveyorsContact: {
      name: 'Carl Simpson',
      role: 'National Sales Manager',
      address: '620 S. 4th Ave, Mansfield, TX 76063',
      phone: '928.978.3486',
      email: 'csimpson@conveyorsinc.net'
    },
    color: '#38bdf8',
    textColor: 'text-sky-400'
  },
  {
    id: 'eno',
    name: 'ENO Industrial Sales, LLC',
    territory: 'CT, DE, MA, MD, ME, NJ, NH, NY, PA, RI, VT, DC',
    managerId: 'wayne_simmons',
    contactPerson: 'Michael J. Eno',
    address: '55 Forman St., Cazenovia, NY 13035',
    phone: '315.439.4608',
    email: 'mike@eno-industrial.com',
    quotesEmail: 'mike@eno-industrial.com and doug@eno-industrial.com',
    conveyorsContact: {
      name: 'Jose Bautista',
      role: 'Regional Sales Manager',
      address: '620 S. 4th Ave, Mansfield, TX 76063',
      phone: '682.553.1043',
      email: 'jbautista@conveyorsinc.net'
    },
    color: '#d2b48c',
    textColor: 'text-amber-600'
  },
  {
    id: 'direct',
    name: 'Conveyors, Inc. Direct',
    territory: 'LA, TX, HI, AK, NM, Canada, Caribbean, Mexico & Central America',
    managerId: 'wayne_simmons',
    address: '620 S. Fourth Ave., Mansfield, TX 76063',
    phone: '817-473-4645',
    officePhone: '817-473-3024 (Fax)',
    email: 'sales@conveyorsinc.net',
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

  // CNC
  SC: 'cnc',
  NC: 'cnc',
  VA: 'cnc',

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
