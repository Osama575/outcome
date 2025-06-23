
import { useState } from "react";

const USMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  // States where the platform operates (18+ eligible)
  const eligibleStates18 = [
    'AL', 'AK', 'CA', 'CO', 'FL', 'GA', 'IL', 'IN', 'KS', 'KY', 
    'MN', 'MO', 'NE', 'NM', 'NC', 'ND', 'OK', 'OR', 'RI', 'SC', 
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WV', 'WI', 'WY'
  ];

  // States where platform operates (21+ eligible)
  const eligibleStates21 = ['AZ', 'MA', 'NH'];

  const allEligibleStates = [...eligibleStates18, ...eligibleStates21];

  const getStateInfo = (stateCode: string) => {
    if (eligibleStates18.includes(stateCode)) {
      return { eligible: true, ageReq: '18+', color: '#3B82F6' };
    }
    if (eligibleStates21.includes(stateCode)) {
      return { eligible: true, ageReq: '21+', color: '#8B5CF6' };
    }
    return { eligible: false, ageReq: 'N/A', color: '#374151' };
  };

  return (
    <section id="where-we-operate" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-full px-4 py-2 text-sm font-medium text-blue-400 mb-4">
            🗺️ Coverage Map
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Where You Can
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600">
              {" "}Compete
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Available in select US states where skill-based contests are legal
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Map - Takes up 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
              <div className="relative w-full max-w-4xl mx-auto">
                {/* Simplified US Map SVG */}
                <svg
                  viewBox="0 0 1000 600"
                  className="w-full h-auto"
                  style={{ maxHeight: '400px' }}
                >
                  {/* Background */}
                  <rect width="1000" height="600" fill="transparent" />
                  
                  {/* Simplified state representations as circles/rectangles */}
                  {/* West Coast */}
                  <circle cx="100" cy="200" r="25" fill={getStateInfo('CA').color} className="transition-all duration-200 hover:r-30 cursor-pointer" onMouseEnter={() => setHoveredState('CA')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="120" cy="150" r="15" fill={getStateInfo('OR').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('OR')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="180" cy="120" r="12" fill={getStateInfo('WA').color} className="transition-all duration-200 hover:r-15 cursor-pointer" onMouseEnter={() => setHoveredState('WA')} onMouseLeave={() => setHoveredState(null)} />
                  
                  {/* Mountain States */}
                  <circle cx="200" cy="180" r="15" fill={getStateInfo('NV').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('NV')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="250" cy="200" r="18" fill={getStateInfo('AZ').color} className="transition-all duration-200 hover:r-22 cursor-pointer" onMouseEnter={() => setHoveredState('AZ')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="300" cy="160" r="20" fill={getStateInfo('CO').color} className="transition-all duration-200 hover:r-24 cursor-pointer" onMouseEnter={() => setHoveredState('CO')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="280" cy="120" r="15" fill={getStateInfo('UT').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('UT')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="350" cy="120" r="12" fill={getStateInfo('WY').color} className="transition-all duration-200 hover:r-15 cursor-pointer" onMouseEnter={() => setHoveredState('WY')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="300" cy="220" r="18" fill={getStateInfo('NM').color} className="transition-all duration-200 hover:r-22 cursor-pointer" onMouseEnter={() => setHoveredState('NM')} onMouseLeave={() => setHoveredState(null)} />
                  
                  {/* Central States */}
                  <circle cx="400" cy="140" r="15" fill={getStateInfo('ND').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('ND')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="400" cy="170" r="15" fill={getStateInfo('SD').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('SD')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="400" cy="200" r="18" fill={getStateInfo('NE').color} className="transition-all duration-200 hover:r-22 cursor-pointer" onMouseEnter={() => setHoveredState('NE')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="400" cy="230" r="18" fill={getStateInfo('KS').color} className="transition-all duration-200 hover:r-22 cursor-pointer" onMouseEnter={() => setHoveredState('KS')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="400" cy="260" r="20" fill={getStateInfo('OK').color} className="transition-all duration-200 hover:r-24 cursor-pointer" onMouseEnter={() => setHoveredState('OK')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="450" cy="290" r="25" fill={getStateInfo('TX').color} className="transition-all duration-200 hover:r-30 cursor-pointer" onMouseEnter={() => setHoveredState('TX')} onMouseLeave={() => setHoveredState(null)} />
                  
                  {/* Midwest */}
                  <circle cx="450" cy="180" r="15" fill={getStateInfo('MN').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('MN')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="480" cy="200" r="18" fill={getStateInfo('IA').color} className="transition-all duration-200 hover:r-22 cursor-pointer" onMouseEnter={() => setHoveredState('IA')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="450" cy="230" r="18" fill={getStateInfo('MO').color} className="transition-all duration-200 hover:r-22 cursor-pointer" onMouseEnter={() => setHoveredState('MO')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="520" cy="220" r="18" fill={getStateInfo('IL').color} className="transition-all duration-200 hover:r-22 cursor-pointer" onMouseEnter={() => setHoveredState('IL')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="550" cy="210" r="15" fill={getStateInfo('WI').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('WI')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="540" cy="240" r="15" fill={getStateInfo('IN').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('IN')} onMouseLeave={() => setHoveredState(null)} />
                  
                  {/* South */}
                  <circle cx="500" cy="260" r="15" fill={getStateInfo('AR').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('AR')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="520" cy="280" r="18" fill={getStateInfo('LA').color} className="transition-all duration-200 hover:r-22 cursor-pointer" onMouseEnter={() => setHoveredState('LA')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="550" cy="270" r="15" fill={getStateInfo('MS').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('MS')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="580" cy="280" r="18" fill={getStateInfo('AL').color} className="transition-all duration-200 hover:r-22 cursor-pointer" onMouseEnter={() => setHoveredState('AL')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="550" cy="250" r="18" fill={getStateInfo('TN').color} className="transition-all duration-200 hover:r-22 cursor-pointer" onMouseEnter={() => setHoveredState('TN')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="580" cy="240" r="15" fill={getStateInfo('KY').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('KY')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="620" cy="280" r="20" fill={getStateInfo('GA').color} className="transition-all duration-200 hover:r-24 cursor-pointer" onMouseEnter={() => setHoveredState('GA')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="680" cy="290" r="18" fill={getStateInfo('FL').color} className="transition-all duration-200 hover:r-22 cursor-pointer" onMouseEnter={() => setHoveredState('FL')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="650" cy="260" r="15" fill={getStateInfo('SC').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('SC')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="680" cy="240" r="15" fill={getStateInfo('NC').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('NC')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="630" cy="230" r="15" fill={getStateInfo('VA').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('VA')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="600" cy="220" r="12" fill={getStateInfo('WV').color} className="transition-all duration-200 hover:r-15 cursor-pointer" onMouseEnter={() => setHoveredState('WV')} onMouseLeave={() => setHoveredState(null)} />
                  
                  {/* Northeast */}
                  <circle cx="750" cy="180" r="12" fill={getStateInfo('ME').color} className="transition-all duration-200 hover:r-15 cursor-pointer" onMouseEnter={() => setHoveredState('ME')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="730" cy="190" r="10" fill={getStateInfo('NH').color} className="transition-all duration-200 hover:r-13 cursor-pointer" onMouseEnter={() => setHoveredState('NH')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="720" cy="200" r="10" fill={getStateInfo('VT').color} className="transition-all duration-200 hover:r-13 cursor-pointer" onMouseEnter={() => setHoveredState('VT')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="740" cy="210" r="15" fill={getStateInfo('MA').color} className="transition-all duration-200 hover:r-18 cursor-pointer" onMouseEnter={() => setHoveredState('MA')} onMouseLeave={() => setHoveredState(null)} />
                  <circle cx="750" cy="220" r="8" fill={getStateInfo('RI').color} className="transition-all duration-200 hover:r-11 cursor-pointer" onMouseEnter={() => setHoveredState('RI')} onMouseLeave={() => setHoveredState(null)} />
                  
                  {/* Alaska */}
                  <circle cx="150" cy="400" r="20" fill={getStateInfo('AK').color} className="transition-all duration-200 hover:r-24 cursor-pointer" onMouseEnter={() => setHoveredState('AK')} onMouseLeave={() => setHoveredState(null)} />
                  
                  {/* Text labels for hovered state */}
                  {hoveredState && (
                    <text x="500" y="50" textAnchor="middle" className="fill-white text-lg font-bold">
                      {hoveredState} - {getStateInfo(hoveredState).ageReq} {getStateInfo(hoveredState).eligible ? 'Eligible' : 'Not Available'}
                    </text>
                  )}
                </svg>
              </div>
            </div>
          </div>

          {/* Info Panel - Takes up 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold text-blue-400 mb-3">18+ Eligible States</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-3">
                Most states allow participation at 18+
              </p>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-white/70 text-sm">{eligibleStates18.length} states</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-400 mb-3">21+ Eligible States</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-3">
                Some states require 21+ for participation
              </p>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="text-white/70 text-sm">{eligibleStates21.length} states</span>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-gray-400 mb-3">Not Available</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-3">
                Working to expand to more states
              </p>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                <span className="text-white/70 text-sm">Coming soon</span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-white/70 text-sm mb-2">
                Play responsibly. Problem gambling? Call 
                <span className="text-blue-400 font-semibold"> 1-800-GAMBLER</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USMap;
