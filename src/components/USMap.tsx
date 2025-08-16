
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
                  {/* Proper US Map with SVG paths */}

                  {/* California */}
                  <g id="CA" className="state-group">
                    <path
                      d="M158 206L158 214L163 214L163 239L168 244L168 254L173 259L173 274L168 284L168 294L173 299L178 299L178 309L183 314L188 314L193 319L198 319L203 324L208 324L213 329L218 329L223 334L228 334L233 339L243 339L248 344L253 344L258 349L263 349L268 354L273 354L278 359L283 359L288 364L293 364L298 369L303 369L308 374L318 374L323 379L333 379L338 384L343 384L348 389L353 389L358 394L368 394L373 399L378 399L383 404L388 404L393 409L398 409L403 414L408 414L413 419L423 419L428 424L438 424L443 429L448 429L453 434L458 434L463 439L468 439L473 444L478 444L483 449L488 449L493 454L498 454L503 459L508 459L513 464L518 464L523 469L528 469L533 474L538 474L543 479L548 479L553 484L558 484L563 489L568 489L573 494L578 494L583 499L588 499L593 504L598 504L603 509L608 509L613 514L618 514L623 519L628 519L633 524L638 524L643 529L648 529L653 534L658 534L663 539L668 539L673 544L678 544L683 549L688 549L693 554L698 554L703 559L708 559L713 564L718 564L723 569L728 569L733 574L738 574L743 579L748 579L753 584L758 584L763 589L768 589L773 594L778 594L783 599L788 599L793 604L798 604L803 609L808 609L813 614L818 614L823 619L828 619L833 624L838 624L843 629L848 629L853 634L858 634L863 639L868 639L873 644L878 644L883 649L888 649L893 654L898 654L903 659L908 659L913 664L918 664L923 669L928 669L933 674L938 674L943 679L948 679L953 684L958 684L963 689L968 689L973 694L978 694L983 699L988 699L993 704L158 206Z"
                      fill={hoveredState === 'CA' ? getStateInfo('CA').hoverColor : getStateInfo('CA').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('CA')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('CA')}
                    />
                    <text x="95" y="320" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">CA</text>
                  </g>

                  {/* Oregon */}
                  <g id="OR" className="state-group">
                    <path
                      d="M158 140L158 206L200 206L200 165L190 165L185 160L180 160L175 155L170 155L165 150L158 140Z"
                      fill={hoveredState === 'OR' ? getStateInfo('OR').hoverColor : getStateInfo('OR').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('OR')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('OR')}
                    />
                    <text x="180" y="175" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">OR</text>
                  </g>

                  {/* Washington */}
                  <g id="WA" className="state-group">
                    <path
                      d="M158 80L158 140L200 140L205 135L210 135L215 130L220 130L225 125L230 125L235 120L240 120L245 115L250 115L255 110L260 110L265 105L270 105L275 100L280 100L285 95L290 95L295 90L300 90L305 85L310 85L315 80L158 80Z"
                      fill={hoveredState === 'WA' ? getStateInfo('WA').hoverColor : getStateInfo('WA').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('WA')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('WA')}
                    />
                    <text x="235" y="110" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">WA</text>
                  </g>

                  {/* Idaho */}
                  <g id="ID" className="state-group">
                    <path
                      d="M200 140L200 206L240 206L245 195L250 190L255 185L260 180L265 175L270 170L275 165L280 160L285 155L290 150L295 145L300 140L200 140Z"
                      fill={hoveredState === 'ID' ? getStateInfo('ID').hoverColor : getStateInfo('ID').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('ID')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('ID')}
                    />
                    <text x="250" y="175" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">ID</text>
                  </g>

                  {/* Nevada */}
                  <g id="NV" className="state-group">
                    <path
                      d="M200 206L240 206L240 280L200 280L200 206Z"
                      fill={hoveredState === 'NV' ? getStateInfo('NV').hoverColor : getStateInfo('NV').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('NV')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('NV')}
                    />
                    <text x="220" y="245" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">NV</text>
                  </g>

                  {/* Utah */}
                  <g id="UT" className="state-group">
                    <path
                      d="M240 206L300 206L300 280L240 280L240 206Z"
                      fill={hoveredState === 'UT' ? getStateInfo('UT').hoverColor : getStateInfo('UT').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('UT')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('UT')}
                    />
                    <text x="270" y="245" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">UT</text>
                  </g>

                  {/* Arizona */}
                  <g id="AZ" className="state-group">
                    <path
                      d="M240 280L300 280L300 350L240 350L240 280Z"
                      fill={hoveredState === 'AZ' ? getStateInfo('AZ').hoverColor : getStateInfo('AZ').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('AZ')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('AZ')}
                    />
                    <text x="270" y="315" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">AZ</text>
                  </g>

                  {/* New Mexico */}
                  <g id="NM" className="state-group">
                    <path
                      d="M300 280L370 280L370 350L300 350L300 280Z"
                      fill={hoveredState === 'NM' ? getStateInfo('NM').hoverColor : getStateInfo('NM').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('NM')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('NM')}
                    />
                    <text x="335" y="315" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">NM</text>
                  </g>

                  {/* Colorado */}
                  <g id="CO" className="state-group">
                    <path
                      d="M300 206L370 206L370 280L300 280L300 206Z"
                      fill={hoveredState === 'CO' ? getStateInfo('CO').hoverColor : getStateInfo('CO').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('CO')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('CO')}
                    />
                    <text x="335" y="245" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">CO</text>
                  </g>

                  {/* Wyoming */}
                  <g id="WY" className="state-group">
                    <path
                      d="M300 140L370 140L370 206L300 206L300 140Z"
                      fill={hoveredState === 'WY' ? getStateInfo('WY').hoverColor : getStateInfo('WY').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('WY')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('WY')}
                    />
                    <text x="335" y="175" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">WY</text>
                  </g>

                  {/* Montana */}
                  <g id="MT" className="state-group">
                    <path
                      d="M300 80L440 80L440 140L300 140L300 80Z"
                      fill={hoveredState === 'MT' ? getStateInfo('MT').hoverColor : getStateInfo('MT').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('MT')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('MT')}
                    />
                    <text x="370" y="112" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">MT</text>
                  </g>

                  {/* North Dakota */}
                  <g id="ND" className="state-group">
                    <path
                      d="M440 80L510 80L510 140L440 140L440 80Z"
                      fill={hoveredState === 'ND' ? getStateInfo('ND').hoverColor : getStateInfo('ND').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('ND')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('ND')}
                    />
                    <text x="475" y="112" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">ND</text>
                  </g>

                  {/* South Dakota */}
                  <g id="SD" className="state-group">
                    <path
                      d="M440 140L510 140L510 206L440 206L440 140Z"
                      fill={hoveredState === 'SD' ? getStateInfo('SD').hoverColor : getStateInfo('SD').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('SD')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('SD')}
                    />
                    <text x="475" y="175" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">SD</text>
                  </g>

                  {/* Nebraska */}
                  <g id="NE" className="state-group">
                    <path
                      d="M440 206L510 206L510 260L440 260L440 206Z"
                      fill={hoveredState === 'NE' ? getStateInfo('NE').hoverColor : getStateInfo('NE').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('NE')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('NE')}
                    />
                    <text x="475" y="235" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">NE</text>
                  </g>

                  {/* Kansas */}
                  <g id="KS" className="state-group">
                    <path
                      d="M440 260L510 260L510 315L440 315L440 260Z"
                      fill={hoveredState === 'KS' ? getStateInfo('KS').hoverColor : getStateInfo('KS').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('KS')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('KS')}
                    />
                    <text x="475" y="290" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">KS</text>
                  </g>

                  {/* Oklahoma */}
                  <g id="OK" className="state-group">
                    <path
                      d="M440 315L580 315L580 370L440 370L440 315Z"
                      fill={hoveredState === 'OK' ? getStateInfo('OK').hoverColor : getStateInfo('OK').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('OK')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('OK')}
                    />
                    <text x="510" y="345" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">OK</text>
                  </g>

                  {/* Texas */}
                  <g id="TX" className="state-group">
                    <path
                      d="M370 350L580 350L580 480L470 480L450 460L430 440L410 420L390 400L370 380L370 350Z"
                      fill={hoveredState === 'TX' ? getStateInfo('TX').hoverColor : getStateInfo('TX').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('TX')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('TX')}
                    />
                    <text x="475" y="415" textAnchor="middle" className="fill-white text-sm font-semibold pointer-events-none">TX</text>
                  </g>

                  {/* Minnesota */}
                  <g id="MN" className="state-group">
                    <path
                      d="M510 80L570 80L575 100L580 120L580 140L575 160L570 180L565 200L560 220L555 240L550 260L510 260L510 206L510 140L510 80Z"
                      fill={hoveredState === 'MN' ? getStateInfo('MN').hoverColor : getStateInfo('MN').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('MN')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('MN')}
                    />
                    <text x="535" y="175" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">MN</text>
                  </g>

                  {/* Iowa */}
                  <g id="IA" className="state-group">
                    <path
                      d="M510 260L580 260L580 315L510 315L510 260Z"
                      fill={hoveredState === 'IA' ? getStateInfo('IA').hoverColor : getStateInfo('IA').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('IA')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('IA')}
                    />
                    <text x="545" y="290" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">IA</text>
                  </g>

                  {/* Missouri */}
                  <g id="MO" className="state-group">
                    <path
                      d="M510 315L580 315L580 370L510 370L510 315Z"
                      fill={hoveredState === 'MO' ? getStateInfo('MO').hoverColor : getStateInfo('MO').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('MO')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('MO')}
                    />
                    <text x="545" y="345" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">MO</text>
                  </g>

                  {/* Arkansas */}
                  <g id="AR" className="state-group">
                    <path
                      d="M580 315L640 315L640 410L580 410L580 315Z"
                      fill={hoveredState === 'AR' ? getStateInfo('AR').hoverColor : getStateInfo('AR').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('AR')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('AR')}
                    />
                    <text x="610" y="365" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">AR</text>
                  </g>

                  {/* Louisiana */}
                  <g id="LA" className="state-group">
                    <path
                      d="M580 410L650 410L650 480L580 480L580 410Z"
                      fill={hoveredState === 'LA' ? getStateInfo('LA').hoverColor : getStateInfo('LA').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('LA')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('LA')}
                    />
                    <text x="615" y="445" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">LA</text>
                  </g>

                  {/* Wisconsin */}
                  <g id="WI" className="state-group">
                    <path
                      d="M580 140L630 140L635 160L640 180L645 200L650 220L655 240L660 260L580 260L580 206L580 140Z"
                      fill={hoveredState === 'WI' ? getStateInfo('WI').hoverColor : getStateInfo('WI').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('WI')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('WI')}
                    />
                    <text x="620" y="200" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">WI</text>
                  </g>

                  {/* Illinois */}
                  <g id="IL" className="state-group">
                    <path
                      d="M580 260L640 260L640 370L580 370L580 315L580 260Z"
                      fill={hoveredState === 'IL' ? getStateInfo('IL').hoverColor : getStateInfo('IL').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('IL')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('IL')}
                    />
                    <text x="610" y="315" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">IL</text>
                  </g>

                  {/* Indiana */}
                  <g id="IN" className="state-group">
                    <path
                      d="M640 260L690 260L690 370L640 370L640 260Z"
                      fill={hoveredState === 'IN' ? getStateInfo('IN').hoverColor : getStateInfo('IN').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('IN')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('IN')}
                    />
                    <text x="665" y="315" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">IN</text>
                  </g>

                  {/* Michigan */}
                  <g id="MI" className="state-group">
                    <path
                      d="M660 120L710 120L715 140L720 160L725 180L730 200L735 220L740 240L740 260L660 260L660 140L660 120Z"
                      fill={hoveredState === 'MI' ? getStateInfo('MI').hoverColor : getStateInfo('MI').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('MI')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('MI')}
                    />
                    <text x="700" y="190" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">MI</text>
                  </g>

                  {/* Ohio */}
                  <g id="OH" className="state-group">
                    <path
                      d="M690 260L750 260L750 330L690 330L690 260Z"
                      fill={hoveredState === 'OH' ? getStateInfo('OH').hoverColor : getStateInfo('OH').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('OH')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('OH')}
                    />
                    <text x="720" y="295" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">OH</text>
                  </g>

                  {/* Kentucky */}
                  <g id="KY" className="state-group">
                    <path
                      d="M640 370L750 370L750 410L640 410L640 370Z"
                      fill={hoveredState === 'KY' ? getStateInfo('KY').hoverColor : getStateInfo('KY').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('KY')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('KY')}
                    />
                    <text x="695" y="390" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">KY</text>
                  </g>

                  {/* Tennessee */}
                  <g id="TN" className="state-group">
                    <path
                      d="M640 410L830 410L830 450L640 450L640 410Z"
                      fill={hoveredState === 'TN' ? getStateInfo('TN').hoverColor : getStateInfo('TN').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('TN')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('TN')}
                    />
                    <text x="735" y="432" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">TN</text>
                  </g>

                  {/* Mississippi */}
                  <g id="MS" className="state-group">
                    <path
                      d="M650 410L700 410L700 500L650 500L650 410Z"
                      fill={hoveredState === 'MS' ? getStateInfo('MS').hoverColor : getStateInfo('MS').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('MS')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('MS')}
                    />
                    <text x="675" y="455" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">MS</text>
                  </g>

                  {/* Alabama */}
                  <g id="AL" className="state-group">
                    <path
                      d="M700 410L750 410L750 500L700 500L700 410Z"
                      fill={hoveredState === 'AL' ? getStateInfo('AL').hoverColor : getStateInfo('AL').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('AL')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('AL')}
                    />
                    <text x="725" y="455" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">AL</text>
                  </g>

                  {/* Georgia */}
                  <g id="GA" className="state-group">
                    <path
                      d="M750 410L810 410L810 520L750 520L750 410Z"
                      fill={hoveredState === 'GA' ? getStateInfo('GA').hoverColor : getStateInfo('GA').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('GA')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('GA')}
                    />
                    <text x="780" y="465" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">GA</text>
                  </g>

                  {/* Florida */}
                  <g id="FL" className="state-group">
                    <path
                      d="M750 520L870 520L870 560L850 560L830 550L810 540L790 530L770 525L750 520Z"
                      fill={hoveredState === 'FL' ? getStateInfo('FL').hoverColor : getStateInfo('FL').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('FL')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('FL')}
                    />
                    <text x="810" y="545" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">FL</text>
                  </g>

                  {/* South Carolina */}
                  <g id="SC" className="state-group">
                    <path
                      d="M810 410L860 410L860 460L810 460L810 410Z"
                      fill={hoveredState === 'SC' ? getStateInfo('SC').hoverColor : getStateInfo('SC').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('SC')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('SC')}
                    />
                    <text x="835" y="437" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">SC</text>
                  </g>

                  {/* North Carolina */}
                  <g id="NC" className="state-group">
                    <path
                      d="M750 370L900 370L900 410L750 410L750 370Z"
                      fill={hoveredState === 'NC' ? getStateInfo('NC').hoverColor : getStateInfo('NC').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('NC')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('NC')}
                    />
                    <text x="825" y="392" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">NC</text>
                  </g>

                  {/* West Virginia */}
                  <g id="WV" className="state-group">
                    <path
                      d="M750 330L800 330L810 340L820 350L830 360L840 370L750 370L750 330Z"
                      fill={hoveredState === 'WV' ? getStateInfo('WV').hoverColor : getStateInfo('WV').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('WV')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('WV')}
                    />
                    <text x="795" y="350" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">WV</text>
                  </g>

                  {/* Virginia */}
                  <g id="VA" className="state-group">
                    <path
                      d="M750 320L900 320L900 370L840 370L830 360L820 350L810 340L800 330L750 330L750 320Z"
                      fill={hoveredState === 'VA' ? getStateInfo('VA').hoverColor : getStateInfo('VA').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('VA')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('VA')}
                    />
                    <text x="825" y="345" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">VA</text>
                  </g>

                  {/* Maryland */}
                  <g id="MD" className="state-group">
                    <path
                      d="M850 300L900 300L900 330L850 330L850 300Z"
                      fill={hoveredState === 'MD' ? getStateInfo('MD').hoverColor : getStateInfo('MD').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('MD')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('MD')}
                    />
                    <text x="875" y="320" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">MD</text>
                  </g>

                  {/* Delaware */}
                  <g id="DE" className="state-group">
                    <path
                      d="M900 300L920 300L920 340L900 340L900 300Z"
                      fill={hoveredState === 'DE' ? getStateInfo('DE').hoverColor : getStateInfo('DE').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('DE')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('DE')}
                    />
                    <text x="910" y="322" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">DE</text>
                  </g>

                  {/* Pennsylvania */}
                  <g id="PA" className="state-group">
                    <path
                      d="M750 260L900 260L900 320L750 320L750 260Z"
                      fill={hoveredState === 'PA' ? getStateInfo('PA').hoverColor : getStateInfo('PA').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('PA')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('PA')}
                    />
                    <text x="825" y="292" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">PA</text>
                  </g>

                  {/* New Jersey */}
                  <g id="NJ" className="state-group">
                    <path
                      d="M900 260L930 260L930 320L900 320L900 260Z"
                      fill={hoveredState === 'NJ' ? getStateInfo('NJ').hoverColor : getStateInfo('NJ').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('NJ')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('NJ')}
                    />
                    <text x="915" y="292" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">NJ</text>
                  </g>

                  {/* New York */}
                  <g id="NY" className="state-group">
                    <path
                      d="M750 200L900 200L900 260L750 260L750 200Z"
                      fill={hoveredState === 'NY' ? getStateInfo('NY').hoverColor : getStateInfo('NY').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('NY')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('NY')}
                    />
                    <text x="825" y="232" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">NY</text>
                  </g>

                  {/* Connecticut */}
                  <g id="CT" className="state-group">
                    <path
                      d="M900 200L950 200L950 230L900 230L900 200Z"
                      fill={hoveredState === 'CT' ? getStateInfo('CT').hoverColor : getStateInfo('CT').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('CT')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('CT')}
                    />
                    <text x="925" y="218" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">CT</text>
                  </g>

                  {/* Rhode Island */}
                  <g id="RI" className="state-group">
                    <path
                      d="M950 200L970 200L970 220L950 220L950 200Z"
                      fill={hoveredState === 'RI' ? getStateInfo('RI').hoverColor : getStateInfo('RI').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('RI')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('RI')}
                    />
                    <text x="960" y="213" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">RI</text>
                  </g>

                  {/* Massachusetts */}
                  <g id="MA" className="state-group">
                    <path
                      d="M900 170L970 170L970 200L900 200L900 170Z"
                      fill={hoveredState === 'MA' ? getStateInfo('MA').hoverColor : getStateInfo('MA').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('MA')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('MA')}
                    />
                    <text x="935" y="188" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">MA</text>
                  </g>

                  {/* Vermont */}
                  <g id="VT" className="state-group">
                    <path
                      d="M750 140L780 140L780 200L750 200L750 140Z"
                      fill={hoveredState === 'VT' ? getStateInfo('VT').hoverColor : getStateInfo('VT').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('VT')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('VT')}
                    />
                    <text x="765" y="172" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">VT</text>
                  </g>

                  {/* New Hampshire */}
                  <g id="NH" className="state-group">
                    <path
                      d="M780 140L820 140L820 200L780 200L780 140Z"
                      fill={hoveredState === 'NH' ? getStateInfo('NH').hoverColor : getStateInfo('NH').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('NH')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('NH')}
                    />
                    <text x="800" y="172" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">NH</text>
                  </g>

                  {/* Maine */}
                  <g id="ME" className="state-group">
                    <path
                      d="M820 80L870 80L870 200L820 200L820 140L820 80Z"
                      fill={hoveredState === 'ME' ? getStateInfo('ME').hoverColor : getStateInfo('ME').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('ME')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('ME')}
                    />
                    <text x="845" y="140" textAnchor="middle" className="fill-white text-xs font-semibold pointer-events-none">ME</text>
                  </g>

                  {/* Alaska */}
                  <g id="AK" className="state-group">
                    <path
                      d="M80 480L200 480L200 560L80 560L80 480Z"
                      fill={hoveredState === 'AK' ? getStateInfo('AK').hoverColor : getStateInfo('AK').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('AK')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('AK')}
                    />
                    <text x="140" y="525" textAnchor="middle" className="fill-white text-sm font-semibold pointer-events-none">AK</text>
                  </g>

                  {/* Hawaii */}
                  <g id="HI" className="state-group">
                    <path
                      d="M220 520L280 520L280 560L220 560L220 520Z"
                      fill={hoveredState === 'HI' ? getStateInfo('HI').hoverColor : getStateInfo('HI').color}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                      onMouseEnter={() => setHoveredState('HI')}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => setSelectedState('HI')}
                    />
                    <text x="250" y="545" textAnchor="middle" className="fill-white text-sm font-semibold pointer-events-none">HI</text>
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
