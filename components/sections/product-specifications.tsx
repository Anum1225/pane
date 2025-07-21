export default function ProductSpecifications() {
  const specs = [
    {
      category: "Glass Options",
      items: [
        "Clear glass",
        "Low-E coated glass",
        "Low-E Plus coated glass",
        "Triple Silver Low-E",
        "Tempered glass available",
        "Laminated glass available",
      ],
    },
    {
      category: "Spacer Options",
      items: ["Aluminum spacer", "Warm-edge spacer", "Super Spacer", "Stainless steel spacer"],
    },
    {
      category: "Gas Fills",
      items: ["Air fill (standard)", "Argon gas fill", "Krypton gas fill", "90% gas retention guarantee"],
    },
    {
      category: "Decorative Options",
      items: [
        "Colonial grids",
        "Prairie grids",
        "Diamond grids",
        "Custom grid patterns",
        "Between-glass grids",
        "Surface-applied grids",
      ],
    },
    {
      category: "Size Range",
      items: ['Minimum: 12" x 12"', 'Maximum: 96" x 96"', "Custom shapes available", "Radius corners available"],
    },
    {
      category: "Performance",
      items: ["U-Factor as low as 0.20", "SHGC as low as 0.18", "VT up to 0.70", "Energy Star qualified"],
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 border-t">
      <h2 className="font-bebas text-3xl text-black mb-8 text-center">Specifications</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specs.map((spec, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bebas text-xl text-black mb-4">{spec.category}</h3>
            <ul className="space-y-2">
              {spec.items.map((item, itemIndex) => (
                <li key={itemIndex} className="font-poppins text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-primary-orange text-xs mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
