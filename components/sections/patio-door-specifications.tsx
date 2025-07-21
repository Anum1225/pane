export default function ProductSpecifications() {
  const specifications = [
    "Constructed from heavy-duty extruded aluminum track",
    "Full track fill weather seal included with aluminum screen door that you can from a smooth and effortless gliding action and based on other doors",
    "Patio door is available in White, Beige and Brown finishes that will blend nicely in and out and decorates modern furniture and you can enjoy a fantastic finished look with your home",
    "Patio door is available with grids and without grids",
    "Special multi-finish weatherstrip at both top and bottom reinforced position effectively reduces air infiltration",
    "Dual EPDM pile seals and corner weatherstrip seals to guard from air infiltration",
    "Full mortise and tenon construction provides superior structural integrity and the patio door will provide years of trouble-free function",
    "Patio door is available in standard sizes and custom sizes",
    "2 Patio is glass sealed units backed by different warranty",
    "The industry's most comprehensive warranty and customer support policy",
    "Professional installation available",
    "Financing available",
    "Free quote",
    "Free quote",
  ]

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 border-t">
      <div className="text-center mb-8">
        <h2 className="font-bebas text-3xl text-black">SPECIFICATIONS</h2>
      </div>

      <div className="space-y-3">
        {specifications.map((spec, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-primary-orange text-sm mt-1">•</span>
            <p className="font-poppins text-sm text-gray-700 leading-relaxed">{spec}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
