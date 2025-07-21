import { Check } from "lucide-react"

export default function OfferList() {
  const offerings = [
    "We offer factory-direct vinyl windows at contractor pricing",
    "Our specialty is energy efficient vinyl windows, sealed glass units, and patio doors",
    "We offer installation of the windows",
    "We have our own highly skilled dedicated installers",
    "We offer flexible financing options",
    "We offer both full-frame and retrofit replacement",
    "We have a qualified service team for after sales service requests",
    "We offer industry-leading warranty",
    "We manufacture, design and assemble all windows in Toronto, Ontario - Our systems are built specifically to withstand the Canadian climate.",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-bebas text-3xl text-black text-center mb-8">What we offer</h2>

        <div className="space-y-4">
          {offerings.map((offering, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
              <p className="font-poppins text-gray-700 leading-relaxed">{offering}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
