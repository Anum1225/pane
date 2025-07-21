export default function TechnicalDiagrams() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 border-t">
      <h2 className="font-bebas text-3xl text-black mb-8 text-center">Technical Information</h2>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Glass Configuration Diagrams */}
        <div>
          <h3 className="font-bebas text-2xl text-black mb-6">Glass Configurations</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="w-full h-32 bg-white rounded mb-3 flex items-center justify-center">
                <div className="w-16 h-20 border-2 border-gray-300 relative">
                  <div className="absolute inset-1 border border-gray-200"></div>
                </div>
              </div>
              <p className="font-poppins text-sm font-semibold">Double Pane</p>
              <p className="font-poppins text-xs text-gray-600">Standard IGU</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="w-full h-32 bg-white rounded mb-3 flex items-center justify-center">
                <div className="w-16 h-20 border-2 border-gray-300 relative">
                  <div className="absolute inset-1 border border-gray-200"></div>
                  <div className="absolute left-2 right-2 top-1/2 h-px bg-gray-200"></div>
                </div>
              </div>
              <p className="font-poppins text-sm font-semibold">Triple Pane</p>
              <p className="font-poppins text-xs text-gray-600">Enhanced Performance</p>
            </div>
          </div>
        </div>

        {/* Performance Charts */}
        <div>
          <h3 className="font-bebas text-2xl text-black mb-6">Performance Comparison</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-poppins text-sm">Clear Glass</span>
                  <span className="font-poppins text-sm font-semibold">U-Factor: 0.48</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-400 h-2 rounded-full" style={{ width: "48%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-poppins text-sm">Low-E</span>
                  <span className="font-poppins text-sm font-semibold">U-Factor: 0.30</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-orange h-2 rounded-full" style={{ width: "30%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-poppins text-sm">Low-E + Argon</span>
                  <span className="font-poppins text-sm font-semibold">U-Factor: 0.25</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-accent-green h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-poppins text-sm">Triple Silver</span>
                  <span className="font-poppins text-sm font-semibold">U-Factor: 0.20</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-accent-skyblue h-2 rounded-full" style={{ width: "20%" }}></div>
                </div>
              </div>
            </div>
            <p className="font-poppins text-xs text-gray-600 mt-4">Lower U-Factor = Better Insulation Performance</p>
          </div>
        </div>
      </div>
    </section>
  )
}
