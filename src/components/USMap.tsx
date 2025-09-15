import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Annotation
} from "react-simple-maps";

const USMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const geoUrl = "/us-states.json";

  // State labels with approximate center coordinates
  const stateLabels = [
    { name: 'California', abbr: 'CA', coordinates: [-119.4179, 36.7783] },
    { name: 'Texas', abbr: 'TX', coordinates: [-99.9018, 31.9686] },
    { name: 'Florida', abbr: 'FL', coordinates: [-81.5158, 27.6648] },
    { name: 'New York', abbr: 'NY', coordinates: [-75.5, 43] },
    { name: 'Pennsylvania', abbr: 'PA', coordinates: [-77.1945, 41.2033] },
    { name: 'Illinois', abbr: 'IL', coordinates: [-89.3985, 40.6331] },
    { name: 'Ohio', abbr: 'OH', coordinates: [-82.9071, 40.4173] },
    { name: 'Georgia', abbr: 'GA', coordinates: [-82.9, 32.1656] },
    { name: 'North Carolina', abbr: 'NC', coordinates: [-79.0193, 35.7596] },
    { name: 'Michigan', abbr: 'MI', coordinates: [-85.6024, 44.3148] },
    { name: 'New Jersey', abbr: 'NJ', coordinates: [-74.4057, 40.0583] },
    { name: 'Virginia', abbr: 'VA', coordinates: [-78.6569, 37.4316] },
    { name: 'Washington', abbr: 'WA', coordinates: [-120.7401, 47.7511] },
    { name: 'Arizona', abbr: 'AZ', coordinates: [-111.0937, 34.0489] },
    { name: 'Massachusetts', abbr: 'MA', coordinates: [-71.3824, 42.4072] },
    { name: 'Tennessee', abbr: 'TN', coordinates: [-86.5804, 35.5175] },
    { name: 'Indiana', abbr: 'IN', coordinates: [-86.1349, 40.2672] },
    { name: 'Missouri', abbr: 'MO', coordinates: [-91.8318, 37.9643] },
    { name: 'Maryland', abbr: 'MD', coordinates: [-76.6413, 39.0458] },
    { name: 'Wisconsin', abbr: 'WI', coordinates: [-89.616, 43.7844] },
    { name: 'Colorado', abbr: 'CO', coordinates: [-105.7821, 39.5501] },
    { name: 'Minnesota', abbr: 'MN', coordinates: [-94.6859, 46.7296] },
    { name: 'South Carolina', abbr: 'SC', coordinates: [-81.1637, 33.8361] },
    { name: 'Alabama', abbr: 'AL', coordinates: [-86.7911, 32.3182] },
    { name: 'Louisiana', abbr: 'LA', coordinates: [-91.9623, 30.9843] },
    { name: 'Kentucky', abbr: 'KY', coordinates: [-84.2700, 37.8393] },
    { name: 'Oregon', abbr: 'OR', coordinates: [-120.5542, 43.8041] },
    { name: 'Oklahoma', abbr: 'OK', coordinates: [-97.5164, 35.0078] },
    { name: 'Connecticut', abbr: 'CT', coordinates: [-73.0877, 41.6032] },
    { name: 'Utah', abbr: 'UT', coordinates: [-111.0937, 39.3210] },
    { name: 'Iowa', abbr: 'IA', coordinates: [-93.0977, 41.8780] },
    { name: 'Nevada', abbr: 'NV', coordinates: [-116.4194, 38.8026] },
    { name: 'Arkansas', abbr: 'AR', coordinates: [-91.6818, 35.2011] },
    { name: 'Mississippi', abbr: 'MS', coordinates: [-89.3985, 32.3547] },
    { name: 'Kansas', abbr: 'KS', coordinates: [-99.0, 39.0119] },
    { name: 'New Mexico', abbr: 'NM', coordinates: [-105.8701, 34.5199] },
    { name: 'Nebraska', abbr: 'NE', coordinates: [-99.9018, 41.4925] },
    { name: 'West Virginia', abbr: 'WV', coordinates: [-80.4549, 38.5976] },
    { name: 'Idaho', abbr: 'ID', coordinates: [-114.7420, 44.0682] },
    { name: 'Hawaii', abbr: 'HI', coordinates: [-155.5828, 19.8968] },
    { name: 'New Hampshire', abbr: 'NH', coordinates: [-71.5724, 43.1939] },
    { name: 'Maine', abbr: 'ME', coordinates: [-69.4455, 45.2538] },
    { name: 'Rhode Island', abbr: 'RI', coordinates: [-71.4774, 41.5801] },
    { name: 'Montana', abbr: 'MT', coordinates: [-110.3626, 46.8797] },
    { name: 'Delaware', abbr: 'DE', coordinates: [-75.5071, 38.9108] },
    { name: 'South Dakota', abbr: 'SD', coordinates: [-99.9018, 43.9695] },
    { name: 'North Dakota', abbr: 'ND', coordinates: [-101.0020, 47.5515] },
    { name: 'Alaska', abbr: 'AK', coordinates: [-152.4044, 61.3707] },
    { name: 'Vermont', abbr: 'VT', coordinates: [-72.5778, 44.5588] },
    { name: 'Wyoming', abbr: 'WY', coordinates: [-107.2903, 43.0760] }
  ];

  // States where the platform operates (18+ eligible)
  const eligibleStates18 = [
    'Alabama', 'Alaska', 'California', 'Colorado', 'Florida', 'Georgia', 
    'Illinois', 'Indiana', 'Kansas', 'Kentucky', 'Minnesota', 'Missouri', 
    'Nebraska', 'New Mexico', 'North Carolina', 'North Dakota', 'Oklahoma', 
    'Oregon', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 
    'Texas', 'Utah', 'Vermont', 'Virginia', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  // States where platform operates (21+ eligible)
  const eligibleStates21 = ['Arizona', 'Massachusetts', 'New Hampshire'];

  // Coming Soon states
  const comingSoonStates = ['New York', 'Pennsylvania', 'Ohio', 'Michigan', 'New Jersey'];

  const getStateInfo = (stateName: string) => {
    if (eligibleStates18.includes(stateName)) {
      return {
        status: 'Full Service',
        ageReq: '18+',
        color: '#60A5FA',
        hoverColor: '#93BBFC',
        glowColor: 'rgba(96, 165, 250, 0.4)',
        description: 'All duel features available'
      };
    }
    if (eligibleStates21.includes(stateName)) {
      return {
        status: 'Full Service',
        ageReq: '21+',
        color: '#A78BFA',
        hoverColor: '#C4B5FD',
        glowColor: 'rgba(167, 139, 250, 0.4)',
        description: 'All duel features available'
      };
    }
    if (comingSoonStates.includes(stateName)) {
      return {
        status: 'Coming Soon',
        ageReq: 'TBD',
        color: '#FCD34D',
        hoverColor: '#FDE68A',
        glowColor: 'rgba(252, 211, 77, 0.3)',
        description: 'Being evaluated for expansion'
      };
    }
    return {
      status: 'Unavailable',
      ageReq: 'N/A',
      color: '#1F2937',
      hoverColor: '#374151',
      glowColor: 'rgba(31, 41, 55, 0.2)',
      description: 'Service not currently offered'
    };
  };

  const StateDialog = ({ stateName }: { stateName: string }) => {
    const info = getStateInfo(stateName);
    const isAvailable = info.status === 'Full Service';

    return (
      <Dialog open={selectedState === stateName} onOpenChange={(open) => !open && setSelectedState(null)}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              {stateName}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className={`border-2 ${info.status === 'Full Service' ? 'border-blue-400 text-blue-400' :
                    info.status === 'Coming Soon' ? 'border-yellow-400 text-yellow-400' :
                      'border-gray-400 text-gray-400'
                  }`}
              >
                {info.status}
              </Badge>
              {isAvailable && (
                <Badge variant="outline" className="border-purple-400 text-purple-400">
                  {info.ageReq} Required
                </Badge>
              )}
            </div>

            <p className="text-gray-300">{info.description}</p>

            {isAvailable && (
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
                  Sign Up Now
                </Button>
              </div>
            )}

            {info.status === 'Coming Soon' && (
              <p className="text-sm text-gray-400">
                Stay tuned for updates on availability in your state.
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse-glow {
            0%, 100% {
              filter: brightness(1) drop-shadow(0 0 10px currentColor);
            }
            50% {
              filter: brightness(1.2) drop-shadow(0 0 20px currentColor);
            }
          }
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 300% 300%;
            animation: gradient 3s ease infinite;
          }
          .state-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          .legend-item {
            transition: all 0.3s ease;
          }
          .legend-item:hover {
            transform: translateX(5px);
          }
          .usa-map-container {
            filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5));
            transition: all 0.3s ease;
          }
          .usa-map-container:hover {
            filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.7));
          }
        `}
      </style>
      <section id="where-we-operate" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-full px-4 py-2 text-sm font-medium text-blue-400 mb-4">
              🗺️ Coverage Map
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Where You Can
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                {" "}Compete
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Click any state to see availability and requirements
            </p>
          </div>

          <div className="relative">
            {/* Interactive Map with integrated legend */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-gray-700/50 shadow-2xl">
                {/* Geographic US Map */}
                <div className="relative w-full max-w-5xl mx-auto usa-map-container">
                  <ComposableMap
                    projection="geoAlbersUsa"
                    width={975}
                    height={610}
                    style={{ width: "100%", height: "auto" }}
                  >
                    <ZoomableGroup disablePanning disableZooming>
                      <Geographies geography={geoUrl}>
                        {({ geographies }) => (
                          <>
                            {/* Render states */}
                            {geographies.map((geo) => {
                              const stateName = geo.properties.name;
                              const info = getStateInfo(stateName);
                              const isHovered = hoveredState === stateName;
                              
                              return (
                                <Geography
                                  key={geo.rsmKey}
                                  geography={geo}
                                  fill={isHovered ? info.hoverColor : info.color}
                                  stroke="#0a0a0a"
                                  strokeWidth={0.5}
                                  style={{
                                    default: {
                                      outline: "none",
                                      transition: "all 0.2s ease",
                                      cursor: "pointer"
                                    },
                                    hover: {
                                      outline: "none",
                                      fill: info.hoverColor,
                                      strokeWidth: 1.5,
                                      filter: `drop-shadow(0 0 12px ${info.glowColor})`
                                    },
                                    pressed: {
                                      outline: "none",
                                      fill: info.hoverColor
                                    }
                                  }}
                                  onMouseEnter={() => setHoveredState(stateName)}
                                  onMouseLeave={() => setHoveredState(null)}
                                  onClick={() => setSelectedState(stateName)}
                                />
                              );
                            })}
                            {/* Render state labels */}
                            {stateLabels.map((label) => (
                              <Annotation
                                key={label.abbr}
                                subject={label.coordinates}
                                dx={0}
                                dy={0}
                                connectorProps={{}}
                              >
                                <text
                                  x={0}
                                  textAnchor="middle"
                                  alignmentBaseline="middle"
                                  fill="#fff"
                                  style={{
                                    fontSize: 10,
                                    fontWeight: "bold",
                                    pointerEvents: "none",
                                    textShadow: "1px 1px 2px rgba(0,0,0,0.8)"
                                  }}
                                >
                                  {label.abbr}
                                </text>
                              </Annotation>
                            ))}
                          </>
                        )}
                      </Geographies>
                    </ZoomableGroup>
                  </ComposableMap>
                  
                  {/* Hover Info Box */}
                  {hoveredState && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/95 border-2 rounded-xl px-6 py-3 pointer-events-none z-50 animate-fade-in"
                         style={{ borderColor: getStateInfo(hoveredState).color }}>
                      <div className="text-white text-lg font-bold text-center">
                        {hoveredState}
                      </div>
                      <div className="text-sm font-medium text-center mt-1"
                           style={{ color: getStateInfo(hoveredState).color }}>
                        {getStateInfo(hoveredState).status} • {getStateInfo(hoveredState).ageReq}
                      </div>
                      <div className="text-gray-400 text-xs text-center mt-1">
                        Click for details
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Integrated Compact Legend */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="legend-item bg-gradient-to-r from-blue-600/20 to-blue-500/10 rounded-xl p-4 border border-blue-500/30 hover:border-blue-400/50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-400 state-glow"></div>
                        <div className="w-3 h-3 rounded-full bg-purple-400 state-glow" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                      <h3 className="text-sm font-bold text-blue-300">Full Service</h3>
                    </div>
                    <p className="text-xs text-gray-400">18+ ({eligibleStates18.length}) • 21+ ({eligibleStates21.length})</p>
                  </div>

                  <div className="legend-item bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 rounded-xl p-4 border border-yellow-500/30 hover:border-yellow-400/50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-400 state-glow"></div>
                      <h3 className="text-sm font-bold text-yellow-300">Coming Soon</h3>
                    </div>
                    <p className="text-xs text-gray-400">{comingSoonStates.length} states pending</p>
                  </div>

                  <div className="legend-item bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-gray-600">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                      <h3 className="text-sm font-bold text-gray-400">Not Available</h3>
                    </div>
                    <p className="text-xs text-gray-500">Remaining states</p>
                  </div>
                </div>
                
                {/* Responsible Gaming Notice */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500">
                    Play responsibly • Problem gambling? Call
                    <span className="text-blue-400 font-semibold"> 1-800-GAMBLER</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* State Detail Dialogs */}
        {selectedState && <StateDialog stateName={selectedState} />}
      </section>
    </>
  );
};

export default USMap;