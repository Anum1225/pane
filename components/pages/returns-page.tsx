import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RotateCcw, Clock, AlertCircle, CheckCircle, Phone, Mail } from "lucide-react"

export default function ReturnsPage() {
  const returnConditions = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      title: "Standard Products",
      description: "In-stock windows and doors can be returned within 30 days if unopened and in original packaging",
      timeframe: "30 days",
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-yellow-500" />,
      title: "Custom Products",
      description: "Custom-made windows are generally non-returnable unless there's a manufacturing defect",
      timeframe: "Case by case",
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      title: "Installed Products",
      description: "Products that have been installed cannot be returned unless covered by warranty",
      timeframe: "Not applicable",
    },
  ]

  const returnProcess = [
    {
      step: 1,
      title: "Contact Us",
      description:
        "Call our customer service team to initiate the return process and get a Return Authorization (RA) number",
    },
    {
      step: 2,
      title: "Package Items",
      description: "Carefully package items in original packaging with all accessories and documentation",
    },
    {
      step: 3,
      title: "Ship Back",
      description: "Ship items back to us using the provided return label or arrange pickup for large items",
    },
    {
      step: 4,
      title: "Processing",
      description: "We'll inspect returned items and process your refund or exchange within 5-10 business days",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <RotateCcw className="w-16 h-16 text-primary-orange" />
          </div>
          <h1 className="font-bebas text-5xl md:text-6xl mb-6">Returns Policy</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We want you to be completely satisfied with your purchase. Learn about our return process and policies.
          </p>
          <Button size="lg" className="bg-primary-orange hover:bg-orange-600 text-white px-8 py-3">
            Start a Return
          </Button>
        </div>
      </section>

      {/* Return Conditions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl text-gray-900 mb-4">Return Conditions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different return policies apply based on the type of product and its condition
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {returnConditions.map((condition, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    {condition.icon}
                    <Badge variant="secondary">{condition.timeframe}</Badge>
                  </div>
                  <CardTitle className="font-bebas text-xl">{condition.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{condition.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl text-gray-900 mb-4">How to Return Items</h2>
            <p className="text-lg text-gray-600">Follow these simple steps to return your purchase</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {returnProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-bebas text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return Policy Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary-orange" />
                  Return Timeframes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Standard Products</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• In-stock windows: 30 days</li>
                      <li>• Hardware and accessories: 30 days</li>
                      <li>• Glass units: 14 days (unopened only)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Custom Products</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Custom windows: Non-returnable*</li>
                      <li>• Special orders: Non-returnable*</li>
                      <li>• Modified products: Non-returnable*</li>
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">*Except for manufacturing defects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">Refund Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Refund Processing</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Refunds are processed to the original payment method</li>
                    <li>• Processing time: 5-10 business days after we receive the return</li>
                    <li>• Credit card refunds may take 1-2 billing cycles to appear</li>
                    <li>• Original shipping costs are non-refundable (unless our error)</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Restocking Fees</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Standard products: No restocking fee</li>
                    <li>• Special order items: 25% restocking fee</li>
                    <li>• Custom products: Case-by-case basis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">Return Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">To be eligible for a return, items must meet the following conditions:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-600">✓ Acceptable Condition</h4>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Original packaging and materials</li>
                      <li>• All accessories and documentation</li>
                      <li>• No damage or modifications</li>
                      <li>• Clean and unused condition</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-600">✗ Not Acceptable</h4>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Installed or modified products</li>
                      <li>• Damaged packaging or items</li>
                      <li>• Missing parts or accessories</li>
                      <li>• Products exposed to weather</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">Exchanges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We offer exchanges for defective items or if you received the wrong product. Exchanges are subject to
                  product availability.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Exchange Process</h4>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>Contact us to arrange the exchange</li>
                    <li>We'll send the replacement item</li>
                    <li>Return the original item using provided label</li>
                    <li>No additional charges for defective items</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bebas text-4xl text-gray-900 mb-6">Need Help with a Return?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our customer service team is here to help you with your return or exchange.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-orange hover:bg-orange-600 text-white flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call (123) 456-7890
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white flex items-center gap-2 bg-transparent"
            >
              <Mail className="w-4 h-4" />
              Email Support
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">Customer service hours: Monday-Friday 9:00 AM - 4:00 PM EST</p>
        </div>
      </section>
    </main>
  )
}
