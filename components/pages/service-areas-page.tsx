import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Truck } from "lucide-react"

export default function ServiceAreasPage() {
  const serviceAreas = [
    {
      region: "Greater Toronto Area (GTA)",
      cities: ["Toronto", "Mississauga", "Brampton", "Markham", "Richmond Hill", "Vaughan", "Oakville", "Burlington"],
      coverage: "Full Service",
      deliveryTime: "2-3 business days",
    },
    {
      region: "Central Ontario",
      cities: ["Barrie", "Orillia", "Newmarket", "Aurora", "Georgina", "Bradford", "Innisfil"],
      coverage: "Full Service",
      deliveryTime: "3-5 business days",
    },
    {
      region: "Eastern Ontario",
      cities: ["Ottawa", "Kingston", "Belleville", "Peterborough", "Oshawa", "Whitby", "Ajax"],
      coverage: "Delivery & Installation",
      deliveryTime: "5-7 business days",
    },
    {
      region: "Southwestern Ontario",
      cities: ["London", "Windsor", "Kitchener", "Waterloo", "Cambridge", "Guelph", "Brantford"],
      coverage: "Delivery Available",
      deliveryTime: "7-10 business days",
    },
    {
      region: "Northern Ontario",
      cities: ["Sudbury", "North Bay", "Sault Ste. Marie", "Thunder Bay", "Timmins"],
      coverage: "Special Delivery",
      deliveryTime: "10-14 business days",
    },
  ]

  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Delivery",
      description: "Complimentary delivery within our primary service areas for orders over $2,000",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Professional Installation",
      description: "Certified installers available throughout Ontario with full warranty coverage",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "We work around your schedule with evening and weekend installation options",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Local Support",
      description: "Dedicated customer service representatives familiar with your area",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-bebas text-5xl md:text-6xl mb-6">Service Areas</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Proudly serving customers across Ontario with quality windows and professional installation
          </p>
          <Button size="lg" className="bg-primary-orange hover:bg-orange-600 text-white px-8 py-3">
            Check Your Area
          </Button>
        </div>
      </section>

      {/* Service Coverage Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl text-gray-900 mb-4">Where We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive window solutions across Ontario, with varying service levels based on location
            </p>
          </div>

          <div className="grid gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="font-bebas text-2xl text-gray-900 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary-orange" />
                        {area.region}
                      </CardTitle>
                    </div>
                    <div className="flex gap-2">
                      <Badge
                        variant={area.coverage === "Full Service" ? "default" : "secondary"}
                        className={area.coverage === "Full Service" ? "bg-primary-orange" : ""}
                      >
                        {area.coverage}
                      </Badge>
                      <Badge variant="outline">{area.deliveryTime}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {area.cities.map((city, cityIndex) => (
                      <span key={cityIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {city}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600">Comprehensive window solutions tailored to your location</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-bebas text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bebas text-4xl text-gray-900 mb-6">Not Sure If We Serve Your Area?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to discuss your project. We're always expanding our service areas and may be able to accommodate
            special requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-orange hover:bg-orange-600 text-white">
              Call (123) 456-7890
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
