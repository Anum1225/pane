import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, MapPin, Clock, DollarSign, Package, Shield } from "lucide-react"

export default function ShippingPage() {
  const shippingOptions = [
    {
      name: "Standard Delivery",
      icon: <Truck className="w-6 h-6" />,
      timeframe: "5-10 business days",
      cost: "Free on orders $2,000+",
      description: "Our most popular delivery option for most Ontario locations",
      coverage: "Most of Ontario",
    },
    {
      name: "Express Delivery",
      icon: <Clock className="w-6 h-6" />,
      timeframe: "2-5 business days",
      cost: "$150-$300",
      description: "Faster delivery for urgent projects in major cities",
      coverage: "GTA & Major Cities",
    },
    {
      name: "White Glove Service",
      icon: <Shield className="w-6 h-6" />,
      timeframe: "Scheduled",
      cost: "$200-$500",
      description: "Premium delivery with unpacking and placement service",
      coverage: "Select Areas",
    },
    {
      name: "Customer Pickup",
      icon: <Package className="w-6 h-6" />,
      timeframe: "Same day",
      cost: "Free",
      description: "Pick up your order directly from our facility",
      coverage: "Mississauga Location",
    },
  ]

  const deliveryZones = [
    {
      zone: "Zone 1 - GTA Core",
      areas: ["Toronto", "Mississauga", "Brampton", "Markham", "Richmond Hill"],
      standardCost: "Free over $2,000",
      expressCost: "$150",
      timeframe: "2-3 days",
    },
    {
      zone: "Zone 2 - GTA Extended",
      areas: ["Oakville", "Burlington", "Vaughan", "Aurora", "Newmarket"],
      standardCost: "Free over $2,500",
      expressCost: "$200",
      timeframe: "3-5 days",
    },
    {
      zone: "Zone 3 - Central Ontario",
      areas: ["Barrie", "Orillia", "Peterborough", "Oshawa", "Whitby"],
      standardCost: "Free over $3,000",
      expressCost: "$250",
      timeframe: "5-7 days",
    },
    {
      zone: "Zone 4 - Extended Ontario",
      areas: ["Ottawa", "Kingston", "London", "Windsor", "Kitchener"],
      standardCost: "$200-$400",
      expressCost: "$300-$500",
      timeframe: "7-10 days",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Truck className="w-16 h-16 text-primary-orange" />
          </div>
          <h1 className="font-bebas text-5xl md:text-6xl mb-6">Shipping Policy</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Fast, reliable delivery across Ontario with flexible shipping options to meet your needs
          </p>
          <Button size="lg" className="bg-primary-orange hover:bg-orange-600 text-white px-8 py-3">
            Calculate Shipping
          </Button>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl text-gray-900 mb-4">Shipping Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the delivery method that works best for your project timeline and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary-orange text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {option.icon}
                  </div>
                  <CardTitle className="font-bebas text-xl">{option.name}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{option.timeframe}</Badge>
                    <Badge variant="outline">{option.cost}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{option.description}</p>
                  <p className="text-sm text-gray-500">Coverage: {option.coverage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl text-gray-900 mb-4">Delivery Zones & Pricing</h2>
            <p className="text-lg text-gray-600">Shipping costs and timeframes vary by location</p>
          </div>

          <div className="space-y-6">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="font-bebas text-xl flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary-orange" />
                        {zone.zone}
                      </CardTitle>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{zone.timeframe}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Coverage Areas</h4>
                      <div className="flex flex-wrap gap-1">
                        {zone.areas.map((area, areaIndex) => (
                          <span key={areaIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Standard Delivery</h4>
                      <p className="text-gray-600">{zone.standardCost}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Express Delivery</h4>
                      <p className="text-gray-600">{zone.expressCost}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl flex items-center gap-2">
                  <Package className="w-6 h-6 text-primary-orange" />
                  Packaging & Handling
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  All windows and doors are carefully packaged to ensure they arrive in perfect condition:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Protection Features</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Protective corner guards</li>
                      <li>• Moisture-resistant wrapping</li>
                      <li>• Cushioned packaging materials</li>
                      <li>• Secure strapping and bracing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Handling Procedures</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Trained delivery professionals</li>
                      <li>• Specialized equipment for large items</li>
                      <li>• Careful loading and unloading</li>
                      <li>• Inspection before delivery</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary-orange" />
                  Delivery Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-primary-orange text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      1
                    </div>
                    <h4 className="font-semibold mb-2">Order Processing</h4>
                    <p className="text-gray-600 text-sm">Your order is prepared and packaged at our facility</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-orange text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      2
                    </div>
                    <h4 className="font-semibold mb-2">Delivery Scheduling</h4>
                    <p className="text-gray-600 text-sm">We'll contact you to schedule a convenient delivery time</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-orange text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      3
                    </div>
                    <h4 className="font-semibold mb-2">Delivery & Inspection</h4>
                    <p className="text-gray-600 text-sm">Items are delivered and inspected for any damage</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-primary-orange" />
                  Shipping Costs & Policies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Free Shipping Qualifications</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Orders over $2,000 in Zone 1 (GTA Core)</li>
                    <li>• Orders over $2,500 in Zone 2 (GTA Extended)</li>
                    <li>• Orders over $3,000 in Zone 3 (Central Ontario)</li>
                    <li>• Custom orders may have different thresholds</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Additional Fees</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Residential delivery surcharge: $50-$100</li>
                    <li>• Appointment delivery: $75</li>
                    <li>• Inside delivery: $100-$200</li>
                    <li>• Stairs/elevator access: $50-$150</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">Important Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 p-1 rounded">
                      <Shield className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Delivery Inspection</h4>
                      <p className="text-gray-600 text-sm">
                        Please inspect all items upon delivery and note any damage on the delivery receipt.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-1 rounded">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Weather Delays</h4>
                      <p className="text-gray-600 text-sm">
                        Severe weather conditions may cause delivery delays for safety reasons.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded">
                      <MapPin className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Access Requirements</h4>
                      <p className="text-gray-600 text-sm">
                        Ensure clear access to delivery location and inform us of any access restrictions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bebas text-4xl text-gray-900 mb-6">Questions About Shipping?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our shipping specialists can help you choose the best delivery option for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-orange hover:bg-orange-600 text-white">
              Get Shipping Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
            >
              Track Your Order
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
