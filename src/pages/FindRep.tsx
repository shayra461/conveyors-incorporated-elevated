import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { usMapPaths } from '@/data/usMapPaths';
import { usMapCenters } from '@/data/usMapCenters';
import { representativesList, stateToRepMap, managersMap, Representative } from '@/data/representatives';
import { Phone, Mail, MapPin, Building, ArrowRight, Globe, ChevronRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';


const stateNames: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Northern Illinois', ILB: 'Southern Illinois',
  IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana',
  LAR: 'Southern Louisiana', ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts',
  MI: 'Upper Michigan', MIL: 'Lower Michigan', MN: 'Minnesota', MS: 'Mississippi',
  MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire',
  NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York', NC: 'North Carolina',
  ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania',
  RI: 'Rhode Island', SC: 'South Carolina', SD: 'South Dakota', TN: 'Tennessee',
  TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia', WA: 'Washington',
  WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming', DC: 'District of Columbia',
  Canada: 'Canada', Caribbean: 'Caribbean', CentralAmerica: 'Mexico & Central America'
};

const mapCallouts: Record<string, { centerX: number; centerY: number; labelX: number; labelY: number }> = {
  MA: { centerX: 854, centerY: 154, labelX: 910, labelY: 145 },
  RI: { centerX: 862, centerY: 165, labelX: 910, labelY: 170 },
  CT: { centerX: 848, centerY: 172, labelX: 910, labelY: 195 },
  NJ: { centerX: 825, centerY: 208, labelX: 875, labelY: 218 },
  DE: { centerX: 818, centerY: 232, labelX: 875, labelY: 243 },
  MD: { centerX: 792, centerY: 238, labelX: 875, labelY: 268 },
  DC: { centerX: 798, centerY: 246, labelX: 875, labelY: 293 }
};

export default function FindRep() {
  const [selectedRegion, setSelectedRegion] = useState<string>('TX');
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [hoveredRepId, setHoveredRepId] = useState<string | null>(null);

  const selectedRepId = stateToRepMap[selectedRegion] || 'direct';
  const selectedRep = representativesList.find(r => r.id === selectedRepId) || representativesList[representativesList.length - 1];

  const handleStateClick = (stateCode: string) => {
    setSelectedRegion(stateCode);
  };

  const activeRepId = hoveredRepId || (hoveredRegion ? (stateToRepMap[hoveredRegion] || 'direct') : selectedRepId);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-dark py-12 md:py-16 mb-12 border-b border-border/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-accent" />
                <span className="text-accent font-medium uppercase tracking-widest text-sm">
                  Locate Your Representative
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Find A Rep
              </h1>
              <p className="text-primary-foreground/70 text-lg md:text-xl mt-4">
                We have dedicated sales and support representatives across North America, the Caribbean, and Central America to assist you with custom conveying solutions.
              </p>
            </div>
          </div>
        </section>

        {/* time.gov Style Representative Grid */}
        <section className="container mx-auto px-4 md:px-6 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {representativesList.map((rep) => {
              const isActive = activeRepId === rep.id;
              const isSelected = selectedRepId === rep.id;
              return (
                <motion.div
                  key={rep.id}
                  className={`relative p-5 rounded-lg border transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md ${
                    isSelected
                      ? 'bg-muted border-accent shadow-md shadow-accent/15'
                      : 'bg-card/40 border-border/60 hover:bg-card/90'
                  }`}
                  style={{
                    borderTop: `4px solid ${rep.color}`
                  }}
                  onClick={() => {
                    // Pick a default state for this rep to select
                    const firstState = Object.keys(stateToRepMap).find(key => stateToRepMap[key] === rep.id);
                    if (firstState) setSelectedRegion(firstState);
                  }}
                  onMouseEnter={() => setHoveredRepId(rep.id)}
                  onMouseLeave={() => setHoveredRepId(null)}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Region
                    </span>
                    <span
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: rep.color }}
                    />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-base line-clamp-1">
                    {rep.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                    <strong>Covers:</strong> {rep.territory}
                  </p>
                  
                  {isSelected && (
                    <div className="absolute bottom-2 right-2 flex items-center text-[10px] font-bold text-accent">
                      ACTIVE <ChevronRight className="w-3 h-3 ml-0.5" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Map & Detail Cards Section */}
        <section className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive US SVG Map Area */}
            <div className="lg:col-span-8 bg-card/25 border border-border/50 rounded-xl p-6 shadow-xl relative overflow-hidden backdrop-blur-sm">
              <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    Interactive Coverage Map
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Hover over or click states/regions to locate your representative.
                  </p>
                </div>
                
                {/* Mobile Dropdown Selector */}
                <div className="w-full sm:w-auto">
                  <select
                    className="w-full sm:w-64 px-4 py-2.5 bg-background border border-border rounded-md focus:ring-2 focus:ring-accent outline-none text-sm transition-all"
                    value={selectedRegion}
                    onChange={(e) => handleStateClick(e.target.value)}
                  >
                    <option value="" disabled>Select State/Region</option>
                    {Object.entries(stateNames)
                      .sort((a, b) => a[1].localeCompare(b[1]))
                      .map(([code, name]) => (
                        <option key={code} value={code}>
                          {name} ({code})
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              {/* International/External Region Buttons */}
              <div className="flex flex-wrap gap-2 mb-6 p-3 bg-muted/40 rounded-lg border border-border/50">
                <span className="text-xs font-semibold text-muted-foreground flex items-center mr-2">
                  <Globe className="w-3.5 h-3.5 mr-1" /> International:
                </span>
                {['Canada', 'Caribbean', 'CentralAmerica'].map((regionCode) => {
                  const isSelected = selectedRegion === regionCode;
                  const name = stateNames[regionCode];
                  return (
                    <button
                      key={regionCode}
                      className={`px-4 py-2 text-xs font-bold rounded-md transition-all duration-300 ${
                        isSelected 
                          ? 'bg-accent text-white shadow-md shadow-accent/20' 
                          : 'bg-card border border-border hover:bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                      onClick={() => handleStateClick(regionCode)}
                    >
                      {name}
                    </button>
                  );
                })}
              </div>

              {/* SVG US Map */}
              <div className="w-full relative aspect-[950/630] max-h-[600px] overflow-hidden select-none bg-slate-950/20 rounded-lg p-2 border border-border/20">
                <svg
                  viewBox="0 0 950 630"
                  className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinejoin="round"
                >
                  <g id="states">
                    {Object.entries(usMapPaths).map(([stateCode, pathData]) => {
                      const repId = stateToRepMap[stateCode] || 'direct';
                      const rep = representativesList.find(r => r.id === repId);
                      const repColor = rep ? rep.color : '#64748b';
                      
                      const isSelected = selectedRegion === stateCode;
                      const isHighlightedByRep = activeRepId === repId;
                      const isHovered = hoveredRegion === stateCode;
                      
                      let fillOpacity = 0.65;
                      let strokeOpacity = 0.55;
                      let strokeWidth = 0.8;
                      
                      if (isSelected) {
                        fillOpacity = 1.0;
                        strokeOpacity = 1.0;
                        strokeWidth = 2.0;
                      } else if (isHighlightedByRep || isHovered) {
                        fillOpacity = 0.88;
                        strokeOpacity = 0.9;
                        strokeWidth = 1.4;
                      }

                      return (
                        <path
                          key={stateCode}
                          d={pathData}
                          className="transition-all duration-300 cursor-pointer"
                          fill={repColor}
                          fillOpacity={fillOpacity}
                          stroke="#ffffff"
                          strokeOpacity={strokeOpacity}
                          strokeWidth={strokeWidth}
                          onClick={() => handleStateClick(stateCode)}
                          onMouseEnter={() => {
                            setHoveredRegion(stateCode);
                          }}
                          onMouseLeave={() => {
                            setHoveredRegion(null);
                          }}
                        />
                      );
                    })}
                  </g>
                  <g id="state-labels" className="pointer-events-none">
                    {Object.entries(usMapCenters).map(([stateCode, coords]) => {
                      // Correctly map sub-region keys back to standard 2-letter postal codes,
                      // and prevent rendering duplicate labels for sub-regions.
                      const getDisplayLabel = (code: string) => {
                        if (code === 'ILB' || code === 'MIL' || code === 'LAR') return '';
                        return code;
                      };
                      const displayLabel = getDisplayLabel(stateCode);
                      if (!displayLabel) return null;

                      // Adjust centers for VT and NH directly to prevent overlap
                      let x = coords.x;
                      let y = coords.y;
                      if (stateCode === 'VT') { x = 822; y = 125; }
                      if (stateCode === 'NH') { x = 852; y = 125; }

                      const callout = mapCallouts[stateCode];

                      if (callout) {
                        return (
                          <g key={`group-${stateCode}`}>
                            <line
                              x1={callout.centerX}
                              y1={callout.centerY}
                              x2={callout.labelX}
                              y2={callout.labelY}
                              stroke="#ffffff"
                              strokeWidth="1.5"
                              opacity="0.75"
                              strokeDasharray="2,2"
                            />
                            <text
                              x={callout.labelX + 6}
                              y={callout.labelY}
                              fill="#ffffff"
                              textAnchor="start"
                              dominantBaseline="central"
                              fontSize="12"
                              fontWeight="900"
                              style={{
                                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                                letterSpacing: "0.03em",
                                paintOrder: "stroke",
                                stroke: "rgba(15,23,42,0.85)",
                                strokeWidth: "3px"
                              }}
                              className="select-none pointer-events-none"
                            >
                              {displayLabel}
                            </text>
                          </g>
                        );
                      }

                      return (
                         <text
                           key={`label-${stateCode}`}
                           x={x}
                           y={y}
                           fill="#ffffff"
                           textAnchor="middle"
                           dominantBaseline="central"
                           fontSize="13"
                           fontWeight="900"
                           style={{
                             fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                             letterSpacing: "0.03em",
                             paintOrder: "stroke",
                             stroke: "rgba(15,23,42,0.85)", // slate-900 with high opacity for contrast
                             strokeWidth: "3px"
                           }}
                           className="select-none pointer-events-none"
                         >
                           {displayLabel}
                         </text>
                       );
                    })}
                  </g>
                </svg>
              </div>

              {/* Floating state details indicator in map area */}
              <div className="absolute bottom-4 left-6 text-xs text-muted-foreground/80 flex items-center bg-card/85 backdrop-blur-md px-3 py-1.5 rounded border border-border/40">
                <span className="w-2.5 h-2.5 rounded-full mr-2 bg-accent animate-pulse" />
                Active Region: <strong className="text-foreground ml-1">{stateNames[selectedRegion]}</strong>
              </div>
            </div>

            {/* Selected Representative Info Panel */}
            <div className="lg:col-span-4 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedRegion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border border-border rounded-xl shadow-xl overflow-hidden backdrop-blur-sm"
                >
                  {/* Selected Region Banner */}
                  <div
                    className="p-5 text-white flex flex-col justify-end min-h-[100px] relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${selectedRep.color}dd, ${selectedRep.color})`
                    }}
                  >
                    <div className="absolute inset-0 bg-black/10 backdrop-brightness-95 pointer-events-none" />
                    <span className="text-xs uppercase tracking-wider font-bold opacity-80 z-10">
                      Selected Region
                    </span>
                    <h2 className="font-heading text-2xl font-bold z-10 mt-1 leading-tight">
                      {stateNames[selectedRegion]} ({selectedRegion})
                    </h2>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Representative Name and Type */}
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                        Assigned Representative
                      </span>
                      <h3 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
                        <Building className="w-5 h-5 text-muted-foreground" />
                        {selectedRep.name}
                      </h3>
                      {selectedRep.territory && (
                        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                          <strong>Territory:</strong> {selectedRep.territory}
                        </p>
                      )}
                    </div>

                    {/* Manager Headshot (Key Contact) */}
                      {selectedRep.managerId && managersMap[selectedRep.managerId] && (() => {
                        const mgr = managersMap[selectedRep.managerId];
                        return (
                          <div className="pt-4 border-t border-border/50">
                            <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-3">
                              Key Contact (Conveyors Inc. Representative)
                            </span>
                            <div className="flex items-center gap-4 p-3.5 rounded-xl bg-muted/40 border border-border/40">
                              <img
                                src={mgr.photo}
                                alt={mgr.name}
                                className="w-20 h-20 rounded-full object-cover object-top border-2 flex-shrink-0"
                                style={{ borderColor: selectedRep.color }}
                              />
                              <div className="space-y-1">
                                <p className="text-sm font-bold text-foreground leading-tight">{mgr.name}</p>
                                <p className="text-xs text-muted-foreground font-semibold">{mgr.role}</p>
                                <a
                                  href={`tel:${mgr.phone.replace(/[^0-9+]/g, '')}`}
                                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors"
                                >
                                  <Phone className="w-3.5 h-3.5" />
                                  <span>{mgr.phone}</span>
                                </a>
                                <a
                                  href={`mailto:${mgr.email}`}
                                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors break-all"
                                >
                                  <Mail className="w-3.5 h-3.5" />
                                  <span>{mgr.email}</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })()}

                     {/* Contact Person Details (Secondary Contact) */}
                     {selectedRep.contactPerson && (
                       <div className="pt-4 border-t border-border/50">
                         <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                           Secondary Contact
                         </span>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-muted flex items-center justify-center text-muted-foreground">
                              <User className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground leading-tight">
                                {selectedRep.contactPerson}
                              </p>
                              {selectedRep.role && (
                                <p className="text-xs text-muted-foreground">{selectedRep.role}</p>
                              )}
                            </div>
                          </div>

                          {selectedRep.address && (
                            <div className="flex items-start gap-3">
                              <MapPin className="w-4.5 h-4.5 text-muted-foreground mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground leading-normal">
                                {selectedRep.address}
                              </span>
                            </div>
                          )}

                          {selectedRep.phone && (
                            <a
                              href={`tel:${selectedRep.phone.replace(/[^0-9+]/g, '')}`}
                              className="flex items-center gap-3 text-xs text-muted-foreground hover:text-accent transition-colors py-0.5"
                            >
                              <Phone className="w-4.5 h-4.5 text-muted-foreground flex-shrink-0" />
                              <span>{selectedRep.phone} (Cell)</span>
                            </a>
                          )}

                          {selectedRep.officePhone && (
                            <div className="flex items-center gap-3 text-xs text-muted-foreground py-0.5">
                              <Phone className="w-4.5 h-4.5 text-muted-foreground flex-shrink-0" />
                              <span>{selectedRep.officePhone}</span>
                            </div>
                          )}

                          {selectedRep.email && (
                            <a
                              href={`mailto:${selectedRep.email}`}
                              className="flex items-center gap-3 text-xs text-muted-foreground hover:text-accent transition-colors py-0.5 break-all"
                            >
                              <Mail className="w-4.5 h-4.5 text-muted-foreground flex-shrink-0" />
                              <span>{selectedRep.email}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Quotes/Orders Info */}
                    {selectedRep.quotesEmail && (
                      <div className="p-4 bg-muted/50 border border-border/40 rounded-lg">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                          Quotes, Orders, and Invoices
                        </span>
                        <p className="text-xs text-foreground font-medium mb-1">
                          Submit documents to:
                        </p>
                        <span className="text-xs font-semibold text-accent break-all">
                          {selectedRep.quotesEmail}
                        </span>
                      </div>
                    )}

                    {/* Conveyors Inc. Direct Contact (Escalation / Manager Contact) */}
                    {selectedRep.conveyorsContact && (
                      <div className="pt-4 border-t border-border/50">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-2.5">
                          Conveyors Inc. Manager Contact
                        </span>
                        <div className="p-4 rounded-lg bg-card border border-border/40 space-y-2">
                          <p className="text-sm font-bold text-foreground">
                            {selectedRep.conveyorsContact.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {selectedRep.conveyorsContact.role}
                          </p>
                          {selectedRep.conveyorsContact.phone && (
                            <a
                              href={`tel:${selectedRep.conveyorsContact.phone}`}
                              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>{selectedRep.conveyorsContact.phone}</span>
                            </a>
                          )}
                          {selectedRep.conveyorsContact.email && (
                            <a
                              href={`mailto:${selectedRep.conveyorsContact.email}`}
                              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors break-all"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              <span>{selectedRep.conveyorsContact.email}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Call to Actions */}
                    <div className="pt-4 border-t border-border/50 space-y-2">
                      <Link to="/quote">
                        <Button variant="hero" size="lg" className="w-full flex items-center justify-center gap-2 text-sm">
                          Request A Custom Quote
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
