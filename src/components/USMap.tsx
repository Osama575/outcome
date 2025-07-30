
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const USMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  // States where the platform operates (18+ eligible)
  const eligibleStates18 = [
    'AL', 'AK', 'CA', 'CO', 'FL', 'GA', 'IL', 'IN', 'KS', 'KY', 
    'MN', 'MO', 'NE', 'NM', 'NC', 'ND', 'OK', 'OR', 'RI', 'SC', 
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WV', 'WI', 'WY'
  ];

  // States where platform operates (21+ eligible)
  const eligibleStates21 = ['AZ', 'MA', 'NH'];

  // Coming Soon states
  const comingSoonStates = ['NY', 'PA', 'OH', 'MI', 'NJ'];

  const getStateInfo = (stateCode: string) => {
    if (eligibleStates18.includes(stateCode)) {
      return { 
        status: 'Full Service', 
        ageReq: '18+', 
        color: '#3B82F6',
        hoverColor: '#60A5FA',
        description: 'All duel features available' 
      };
    }
    if (eligibleStates21.includes(stateCode)) {
      return { 
        status: 'Full Service', 
        ageReq: '21+', 
        color: '#8B5CF6',
        hoverColor: '#A78BFA',
        description: 'All duel features available' 
      };
    }
    if (comingSoonStates.includes(stateCode)) {
      return { 
        status: 'Coming Soon', 
        ageReq: 'TBD', 
        color: '#6B7280',
        hoverColor: '#9CA3AF',
        description: 'Being evaluated for expansion' 
      };
    }
    return { 
      status: 'Unavailable', 
      ageReq: 'N/A', 
      color: '#374151',
      hoverColor: '#4B5563',
      description: 'Service not currently offered' 
    };
  };

  // State name mapping
  const stateNames: { [key: string]: string } = {
    'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'CA': 'California', 'CO': 'Colorado',
    'FL': 'Florida', 'GA': 'Georgia', 'IL': 'Illinois', 'IN': 'Indiana', 'KS': 'Kansas',
    'KY': 'Kentucky', 'MN': 'Minnesota', 'MO': 'Missouri', 'NE': 'Nebraska', 'NM': 'New Mexico',
    'NC': 'North Carolina', 'ND': 'North Dakota', 'OK': 'Oklahoma', 'OR': 'Oregon', 'RI': 'Rhode Island',
    'SC': 'South Carolina', 'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah',
    'VT': 'Vermont', 'VA': 'Virginia', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming',
    'MA': 'Massachusetts', 'NH': 'New Hampshire', 'NY': 'New York', 'PA': 'Pennsylvania',
    'OH': 'Ohio', 'MI': 'Michigan', 'NJ': 'New Jersey'
  };

  const StateDialog = ({ stateCode }: { stateCode: string }) => {
    const info = getStateInfo(stateCode);
    const stateName = stateNames[stateCode] || stateCode;
    const isAvailable = info.status === 'Full Service';

    return (
      <Dialog open={selectedState === stateCode} onOpenChange={(open) => !open && setSelectedState(null)}>
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
                className={`border-2 ${
                  info.status === 'Full Service' ? 'border-blue-400 text-blue-400' :
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
    <section id="where-we-operate" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
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
            Click any state to see availability and requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Interactive Map */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
              <div className="relative w-full max-w-4xl mx-auto">
                <svg
                  viewBox="0 0 1000 600"
                  className="w-full h-auto cursor-pointer"
                  style={{ maxHeight: '500px' }}
                >
                  {/* Simplified USA Map with better state positioning */}
                  
                  {/* West Coast */}
                  <g id="CA" className="state-group">
                    <rect 
                      x="50" y="180" width="50" height="120" rx="8"
                      fill={hoveredState === 'CA' ? getStateInfo('CA').hoverColor : getStateInfo('CA').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('CA')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('CA')}
                    />
                    <text x="75" y="245" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">CA</text>
                  </g>

                  <g id="OR" className="state-group">
                    <rect 
                      x="50" y="120" width="45" height="55" rx="6"
                      fill={hoveredState === 'OR' ? getStateInfo('OR').hoverColor : getStateInfo('OR').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('OR')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('OR')}
                    />
                    <text x="72" y="152" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">OR</text>
                  </g>

                  <g id="WA" className="state-group">
                    <rect 
                      x="50" y="60" width="45" height="55" rx="6"
                      fill={hoveredState === 'WA' ? getStateInfo('WA').hoverColor : getStateInfo('WA').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('WA')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('WA')}
                    />
                    <text x="72" y="92" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">WA</text>
                  </g>

                  {/* Mountain States */}
                  <g id="NV" className="state-group">
                    <rect 
                      x="110" y="160" width="35" height="70" rx="5"
                      fill={hoveredState === 'NV' ? getStateInfo('NV').hoverColor : getStateInfo('NV').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('NV')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('NV')}
                    />
                    <text x="127" y="200" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">NV</text>
                  </g>

                  <g id="AZ" className="state-group">
                    <rect 
                      x="150" y="230" width="40" height="55" rx="5"
                      fill={hoveredState === 'AZ' ? getStateInfo('AZ').hoverColor : getStateInfo('AZ').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('AZ')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('AZ')}
                    />
                    <text x="170" y="262" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">AZ</text>
                  </g>

                  <g id="CO" className="state-group">
                    <rect 
                      x="200" y="160" width="50" height="45" rx="5"
                      fill={hoveredState === 'CO' ? getStateInfo('CO').hoverColor : getStateInfo('CO').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('CO')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('CO')}
                    />
                    <text x="225" y="187" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">CO</text>
                  </g>

                  <g id="UT" className="state-group">
                    <rect 
                      x="150" y="140" width="35" height="55" rx="5"
                      fill={hoveredState === 'UT' ? getStateInfo('UT').hoverColor : getStateInfo('UT').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('UT')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('UT')}
                    />
                    <text x="167" y="172" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">UT</text>
                  </g>

                  <g id="WY" className="state-group">
                    <rect 
                      x="200" y="100" width="50" height="35" rx="5"
                      fill={hoveredState === 'WY' ? getStateInfo('WY').hoverColor : getStateInfo('WY').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('WY')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('WY')}
                    />
                    <text x="225" y="122" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">WY</text>
                  </g>

                  <g id="NM" className="state-group">
                    <rect 
                      x="200" y="230" width="40" height="55" rx="5"
                      fill={hoveredState === 'NM' ? getStateInfo('NM').hoverColor : getStateInfo('NM').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('NM')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('NM')}
                    />
                    <text x="220" y="262" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">NM</text>
                  </g>

                  {/* Great Plains */}
                  <g id="ND" className="state-group">
                    <rect 
                      x="280" y="80" width="50" height="35" rx="5"
                      fill={hoveredState === 'ND' ? getStateInfo('ND').hoverColor : getStateInfo('ND').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('ND')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('ND')}
                    />
                    <text x="305" y="102" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">ND</text>
                  </g>

                  <g id="SD" className="state-group">
                    <rect 
                      x="280" y="120" width="50" height="35" rx="5"
                      fill={hoveredState === 'SD' ? getStateInfo('SD').hoverColor : getStateInfo('SD').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('SD')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('SD')}
                    />
                    <text x="305" y="142" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">SD</text>
                  </g>

                  <g id="NE" className="state-group">
                    <rect 
                      x="280" y="160" width="50" height="35" rx="5"
                      fill={hoveredState === 'NE' ? getStateInfo('NE').hoverColor : getStateInfo('NE').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('NE')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('NE')}
                    />
                    <text x="305" y="182" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">NE</text>
                  </g>

                  <g id="KS" className="state-group">
                    <rect 
                      x="280" y="200" width="50" height="35" rx="5"
                      fill={hoveredState === 'KS' ? getStateInfo('KS').hoverColor : getStateInfo('KS').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('KS')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('KS')}
                    />
                    <text x="305" y="222" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">KS</text>
                  </g>

                  <g id="OK" className="state-group">
                    <rect 
                      x="280" y="240" width="60" height="35" rx="5"
                      fill={hoveredState === 'OK' ? getStateInfo('OK').hoverColor : getStateInfo('OK').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('OK')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('OK')}
                    />
                    <text x="310" y="262" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">OK</text>
                  </g>

                  <g id="TX" className="state-group">
                    <rect 
                      x="260" y="280" width="80" height="80" rx="8"
                      fill={hoveredState === 'TX' ? getStateInfo('TX').hoverColor : getStateInfo('TX').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('TX')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('TX')}
                    />
                    <text x="300" y="325" textAnchor="middle" className="fill-white text-sm font-semibold pointer-events-none">TX</text>
                  </g>

                  {/* Midwest */}
                  <g id="MN" className="state-group">
                    <rect 
                      x="350" y="100" width="40" height="60" rx="5"
                      fill={hoveredState === 'MN' ? getStateInfo('MN').hoverColor : getStateInfo('MN').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('MN')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('MN')}
                    />
                    <text x="370" y="135" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">MN</text>
                  </g>

                  <g id="WI" className="state-group">
                    <rect 
                      x="410" y="120" width="35" height="55" rx="5"
                      fill={hoveredState === 'WI' ? getStateInfo('WI').hoverColor : getStateInfo('WI').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('WI')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('WI')}
                    />
                    <text x="427" y="152" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">WI</text>
                  </g>

                  <g id="IL" className="state-group">
                    <rect 
                      x="420" y="180" width="30" height="60" rx="5"
                      fill={hoveredState === 'IL' ? getStateInfo('IL').hoverColor : getStateInfo('IL').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('IL')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('IL')}
                    />
                    <text x="435" y="215" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">IL</text>
                  </g>

                  <g id="IN" className="state-group">
                    <rect 
                      x="455" y="185" width="30" height="50" rx="5"
                      fill={hoveredState === 'IN' ? getStateInfo('IN').hoverColor : getStateInfo('IN').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('IN')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('IN')}
                    />
                    <text x="470" y="215" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">IN</text>
                  </g>

                  <g id="MO" className="state-group">
                    <rect 
                      x="350" y="200" width="45" height="40" rx="5"
                      fill={hoveredState === 'MO' ? getStateInfo('MO').hoverColor : getStateInfo('MO').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('MO')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('MO')}
                    />
                    <text x="372" y="225" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">MO</text>
                  </g>

                  {/* South */}
                  <g id="TN" className="state-group">
                    <rect 
                      x="460" y="230" width="60" height="25" rx="5"
                      fill={hoveredState === 'TN' ? getStateInfo('TN').hoverColor : getStateInfo('TN').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('TN')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('TN')}
                    />
                    <text x="490" y="247" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">TN</text>
                  </g>

                  <g id="KY" className="state-group">
                    <rect 
                      x="470" y="200" width="55" height="25" rx="5"
                      fill={hoveredState === 'KY' ? getStateInfo('KY').hoverColor : getStateInfo('KY').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('KY')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('KY')}
                    />
                    <text x="497" y="217" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">KY</text>
                  </g>

                  <g id="AL" className="state-group">
                    <rect 
                      x="480" y="270" width="30" height="60" rx="5"
                      fill={hoveredState === 'AL' ? getStateInfo('AL').hoverColor : getStateInfo('AL').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('AL')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('AL')}
                    />
                    <text x="495" y="305" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">AL</text>
                  </g>

                  <g id="GA" className="state-group">
                    <rect 
                      x="520" y="260" width="40" height="70" rx="5"
                      fill={hoveredState === 'GA' ? getStateInfo('GA').hoverColor : getStateInfo('GA').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('GA')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('GA')}
                    />
                    <text x="540" y="300" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">GA</text>
                  </g>

                  <g id="FL" className="state-group">
                    <rect 
                      x="550" y="320" width="60" height="60" rx="8"
                      fill={hoveredState === 'FL' ? getStateInfo('FL').hoverColor : getStateInfo('FL').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('FL')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('FL')}
                    />
                    <text x="580" y="355" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">FL</text>
                  </g>

                  <g id="SC" className="state-group">
                    <rect 
                      x="570" y="250" width="35" height="35" rx="5"
                      fill={hoveredState === 'SC' ? getStateInfo('SC').hoverColor : getStateInfo('SC').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('SC')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('SC')}
                    />
                    <text x="587" y="272" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">SC</text>
                  </g>

                  <g id="NC" className="state-group">
                    <rect 
                      x="570" y="210" width="55" height="35" rx="5"
                      fill={hoveredState === 'NC' ? getStateInfo('NC').hoverColor : getStateInfo('NC').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('NC')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('NC')}
                    />
                    <text x="597" y="232" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">NC</text>
                  </g>

                  <g id="VA" className="state-group">
                    <rect 
                      x="590" y="175" width="50" height="30" rx="5"
                      fill={hoveredState === 'VA' ? getStateInfo('VA').hoverColor : getStateInfo('VA').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('VA')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('VA')}
                    />
                    <text x="615" y="195" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">VA</text>
                  </g>

                  <g id="WV" className="state-group">
                    <rect 
                      x="540" y="180" width="35" height="40" rx="5"
                      fill={hoveredState === 'WV' ? getStateInfo('WV').hoverColor : getStateInfo('WV').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('WV')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('WV')}
                    />
                    <text x="557" y="205" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">WV</text>
                  </g>

                  {/* Northeast */}
                  <g id="MA" className="state-group">
                    <rect 
                      x="680" y="140" width="30" height="20" rx="3"
                      fill={hoveredState === 'MA' ? getStateInfo('MA').hoverColor : getStateInfo('MA').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('MA')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('MA')}
                    />
                    <text x="695" y="155" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">MA</text>
                  </g>

                  <g id="NH" className="state-group">
                    <rect 
                      x="680" y="110" width="20" height="25" rx="3"
                      fill={hoveredState === 'NH' ? getStateInfo('NH').hoverColor : getStateInfo('NH').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('NH')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('NH')}
                    />
                    <text x="690" y="127" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">NH</text>
                  </g>

                  <g id="VT" className="state-group">
                    <rect 
                      x="660" y="110" width="15" height="25" rx="3"
                      fill={hoveredState === 'VT' ? getStateInfo('VT').hoverColor : getStateInfo('VT').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('VT')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('VT')}
                    />
                    <text x="667" y="127" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">VT</text>
                  </g>

                  <g id="RI" className="state-group">
                    <rect 
                      x="715" y="150" width="12" height="12" rx="2"
                      fill={hoveredState === 'RI' ? getStateInfo('RI').hoverColor : getStateInfo('RI').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('RI')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('RI')}
                    />
                    <text x="721" y="160" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">RI</text>
                  </g>

                  {/* Coming Soon States */}
                  <g id="NY" className="state-group">
                    <rect 
                      x="640" y="130" width="40" height="45" rx="5"
                      fill={hoveredState === 'NY' ? getStateInfo('NY').hoverColor : getStateInfo('NY').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('NY')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('NY')}
                    />
                    <text x="660" y="157" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">NY</text>
                  </g>

                  <g id="PA" className="state-group">
                    <rect 
                      x="620" y="160" width="50" height="30" rx="5"
                      fill={hoveredState === 'PA' ? getStateInfo('PA').hoverColor : getStateInfo('PA').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('PA')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('PA')}
                    />
                    <text x="645" y="180" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">PA</text>
                  </g>

                  <g id="OH" className="state-group">
                    <rect 
                      x="520" y="170" width="40" height="40" rx="5"
                      fill={hoveredState === 'OH' ? getStateInfo('OH').hoverColor : getStateInfo('OH').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('OH')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('OH')}
                    />
                    <text x="540" y="195" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">OH</text>
                  </g>

                  <g id="MI" className="state-group">
                    <rect 
                      x="460" y="130" width="35" height="50" rx="5"
                      fill={hoveredState === 'MI' ? getStateInfo('MI').hoverColor : getStateInfo('MI').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('MI')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('MI')}
                    />
                    <text x="477" y="160" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">MI</text>
                  </g>

                  <g id="NJ" className="state-group">
                    <rect 
                      x="675" y="170" width="20" height="30" rx="3"
                      fill={hoveredState === 'NJ' ? getStateInfo('NJ').hoverColor : getStateInfo('NJ').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('NJ')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('NJ')}
                    />
                    <text x="685" y="190" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">NJ</text>
                  </g>

                  {/* Alaska */}
                  <g id="AK" className="state-group">
                    <rect 
                      x="80" y="400" width="60" height="40" rx="8"
                      fill={hoveredState === 'AK' ? getStateInfo('AK').hoverColor : getStateInfo('AK').color}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('AK')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('AK')}
                    />
                    <text x="110" y="425" textAnchor="middle" className="fill-white text-sm font-semibold pointer-events-none">AK</text>
                  </g>

                  {/* Hover indicator */}
                  {hoveredState && (
                    <text x="500" y="30" textAnchor="middle" className="fill-white text-lg font-bold animate-fade-in">
                      {stateNames[hoveredState]} - Click for details
                    </text>
                  )}
                </svg>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Full Service</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-3">
                All duel features available
              </p>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-white/70 text-sm">18+ Required ({eligibleStates18.length} states)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-500 rounded"></div>
                <span className="text-white/70 text-sm">21+ Required ({eligibleStates21.length} states)</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-2xl p-6 border border-yellow-500/30">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Coming Soon</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-3">
                Being evaluated for expansion
              </p>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-500 rounded"></div>
                <span className="text-white/70 text-sm">{comingSoonStates.length} states</span>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-gray-400 mb-3">Not Available</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-3">
                Service not currently offered
              </p>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-600 rounded"></div>
                <span className="text-white/70 text-sm">Remaining states</span>
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

      {/* State Detail Dialogs */}
      {selectedState && <StateDialog stateCode={selectedState} />}
    </section>
  );
};

export default USMap;
