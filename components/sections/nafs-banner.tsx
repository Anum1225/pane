export default function NafsBanner() {
  return (
    <section
      className="py-16 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/placeholder.svg?height=400&width=1200')",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <div className="flex justify-center mb-6">
          <div className="bg-accent-skyblue px-6 py-3 rounded">
            <div className="flex items-center space-x-3">
              <div className="text-white">
                <div className="font-poppins text-xs">ENERGY STAR</div>
                <div className="font-poppins text-xs">QUALIFIED</div>
              </div>
              <div className="font-bebas text-2xl font-bold">NAFS-11</div>
            </div>
          </div>
        </div>

        <h2 className="font-bebas text-4xl mb-4">Certified. Experienced. Trusted</h2>

        <div className="space-y-2 font-poppins text-sm">
          <p>Our windows are Energy Star rated and NAFS-11 tested.</p>
          <p>Our installers are trained, certified and always follow your local building code.</p>
        </div>
      </div>
    </section>
  )
}
