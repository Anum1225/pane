import { Calendar, CreditCard, Smartphone } from "lucide-react"

export default function PaymentOptions() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bebas text-xl text-black mb-4">NO PAYMENTS FOR 90 DAYS</h3>
            <p className="text-sm font-poppins text-gray-600 leading-relaxed">
              Enjoy your new windows for 90 days before your first payment is needed for a full 90 days.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bebas text-xl text-black mb-4">FINANCING AVAILABLE</h3>
            <p className="text-sm font-poppins text-gray-600 leading-relaxed">
              We have several financing options available and get the windows of your dreams.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bebas text-xl text-black mb-4">PAY ONLINE OR IN-PERSON</h3>
            <p className="text-sm font-poppins text-gray-600 leading-relaxed">
              You can make a secure payment through our secure web checkout or come to our showroom and pay in-person.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
