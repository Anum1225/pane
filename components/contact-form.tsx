import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  return (
    <div
      className="py-16 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/placeholder.svg?height=400&width=1200')",
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Request In-Home Estimate</h2>
          <p className="text-gray-300">
            If you prefer to have a Panes Certified Assistant come to help you with measurements and to provide you with
            an instant in-home quotation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <Input placeholder="First Name" className="bg-white" />
          <Input placeholder="Phone Number" className="bg-white" />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <Input placeholder="Email" className="bg-white" />
          <Input placeholder="Your Address" className="bg-white" />
        </div>

        <Textarea placeholder="Message" className="bg-white mb-6" rows={4} />

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">SCHEDULE HOME VISIT</Button>
        </div>
      </div>
    </div>
  )
}
