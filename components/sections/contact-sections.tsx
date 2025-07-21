import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function ContactSections() {
  return (
    <div className="bg-white">
      {/* Contact Panes Canada */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Panes Canada</h1>

            <div className="mb-6">
              <p className="text-gray-700 font-medium">90 Ronson Dr</p>
              <p className="text-blue-600">Etobicoke, ON, M9W1B6</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-2">Showroom Hours</h3>
              <p className="text-gray-700 text-sm">Monday - Thursday: 8:30 AM - 7:00 PM EST</p>
              <p className="text-gray-700 text-sm">Friday: 8:30 AM - 4:30 PM EST</p>
              <p className="text-gray-700 text-sm">Saturday: 10:00 AM - 4:00 PM EST</p>
              <p className="text-gray-600 text-xs mt-2">Please contact us to book an appointment</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-2">Product Pick-up Hours</h3>
              <p className="text-gray-700 text-sm">Monday - Thursday: 7:00 AM - 3:00 PM EST</p>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 text-sm">
                Email: <span className="text-blue-600">info@panes.com</span>
              </p>
            </div>

            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 mb-4 flex items-center gap-2 mx-auto transition-colors">
              <MessageCircle className="w-4 h-4" />
              Chat with us
            </Button>

            <div className="text-sm text-gray-700 space-y-1">
              <p>Toll Free: 1 (866) 667-0637</p>
              <p>Local: (905) 267-1240</p>
            </div>
          </div>

          {/* Google Maps Embed for Canada */}
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.1234567890123!2d-79.5234567!3d43.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM3JzI0LjQiTiA3OcKwMzEnMjQuNCJX!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Panes Canada Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Panes USA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Panes USA</h2>

            <div className="mb-6">
              <p className="text-gray-700 font-medium">4405 SE Belcour Drive #104</p>
              <p className="text-gray-700">Grimes, IA 50111</p>
              <p className="text-gray-700">United States</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-2">Showroom Hours</h3>
              <p className="text-gray-700 text-sm">Monday - Friday: 9:00 AM - 4:00 PM EST</p>
              <p className="text-gray-600 text-xs mt-2">Please contact us to book an appointment</p>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 text-sm">
                Email: <span className="text-blue-600">info@panes.com</span>
              </p>
            </div>

            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 mb-4 flex items-center gap-2 mx-auto transition-colors">
              <MessageCircle className="w-4 h-4" />
              Chat with us
            </Button>

            <div className="text-sm text-gray-700">
              <p>Toll Free: 1 (515) 652-7017</p>
            </div>
          </div>

          {/* Google Maps Embed for USA */}
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.1234567890123!2d-93.7234567!3d41.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM3JzI0LjQiTiA5M8KwNDMnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Panes USA Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
