
const WhereWeOperate = () => {
  return (
    <section id="where" className="py-20 bg-gray-900">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Where You Can Play</h2>
          <p className="text-xl text-white/80">Available in select US states</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Map Placeholder */}
          <div className="relative">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-transparent rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-white/70">US States Map</p>
                  <p className="text-sm text-white/50">Eligible states highlighted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - State List */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">18+ Players Eligible:</h3>
              <p className="text-white/80 leading-relaxed">
                AL, AK, CA, CO, FL, GA, IL, IN, KS, KY, MN, MO, NE, NM, NC, ND, OK, OR, RI, SC, SD, TN, TX, UT, VT, VA, WV, WI, WY
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">21+ Players Eligible:</h3>
              <p className="text-white/80 leading-relaxed">
                AZ, MA, NH
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-white/70 text-sm mb-2">
                Play responsibly. If you or someone you know has a gambling problem, call 
                <span className="text-blue-400 font-semibold"> 1-800-GAMBLER</span>
              </p>
              <button className="text-blue-400 text-sm underline hover:no-underline">
                Full Contest Rules
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeOperate;
