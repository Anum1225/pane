import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, AlertCircle, FileText, Phone } from "lucide-react"

export default function WarrantyPage() {
  const warrantyTypes = [
    {
      type: "Lifetime Warranty",
      coverage: "Frame & Sash",
      duration: "Lifetime",
      description:
        "Our vinyl frames and sashes are guaranteed against defects in materials and workmanship for the lifetime of the original purchaser.",
      color: "bg-green-500",
    },
    {
      type: "Insulated Glass Warranty",
      coverage: "Sealed Units",
      duration: "20 Years",
      description:
        "Protection against seal failure in our insulated glass units, ensuring energy efficiency and clarity.",
      color: "bg-blue-500",
    },
    {
      type: "Hardware Warranty",
      coverage: "Operating Hardware",
      duration: "10 Years",
      description:
        "All window hardware including locks, handles, and operating mechanisms are covered against defects.",
      color: "bg-orange-500",
    },
    {
      type: "Installation Warranty",
      coverage: "Professional Installation",
      duration: "5 Years",
      description: "Our certified installation work is guaranteed against defects in workmanship and materials.",
      color: "bg-purple-500",
    },
  ]

  const coverageDetails = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      title: "Manufacturing Defects",
      description: "Complete coverage for any defects in materials or manufacturing processes",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      title: "Seal Failure",
      description: "Replacement of insulated glass units that experience seal failure",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      title: "Hardware Malfunction",
      description: "Repair or replacement of faulty locks, handles, and operating mechanisms",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      title: "Installation Issues",
      description: "Correction of any problems related to professional installation",
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      title: "Normal Wear & Tear",
      description: "Not covered - includes weatherstripping, caulking, and finish wear",
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      title: "Damage from Misuse",
      description: "Not covered - includes damage from accidents, abuse, or improper maintenance",
    },
  ]

  const claimProcess = [
    {
      step: 1,
      title: "Contact Us",
      description: "Call our warranty department or submit an online claim form",
    },
    {
      step: 2,
      title: "Documentation",
      description: "Provide photos, purchase information, and description of the issue",
    },
    {
      step: 3,
      title: "Assessment",
      description: "Our technician will evaluate the claim and determine coverage",
    },
    {
      step: 4,
      title: "Resolution",
      description: "We'll repair or replace the covered components at no cost to you",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-primary-orange" />
          </div>
          <h1 className="font-bebas text-5xl md:text-6xl mb-6">Warranty Protection</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive warranty coverage that protects your investment and gives you peace of mind
          </p>
          <Button size="lg" className="bg-primary-orange hover:bg-orange-600 text-white px-8 py-3">
            File a Warranty Claim
          </Button>
        </div>
      </section>

      {/* Warranty Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl text-gray-900 mb-4">Warranty Coverage</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We stand behind our products with industry-leading warranty protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {warrantyTypes.map((warranty, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${warranty.color} rounded-full flex items-center justify-center mb-4`}>
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="font-bebas text-xl">{warranty.type}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {warranty.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2 font-semibold">{warranty.coverage}</p>
                  <p className="text-gray-600">{warranty.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl text-gray-900 mb-4">What's Covered</h2>
            <p className="text-lg text-gray-600">Understanding your warranty coverage and exclusions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageDetails.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    {item.icon}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl text-gray-900 mb-4">How to File a Claim</h2>
            <p className="text-lg text-gray-600">Simple steps to get your warranty claim processed quickly</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {claimProcess.map((step, index) => (
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

      {/* Important Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-bebas text-2xl flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary-orange" />
                Important Warranty Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Warranty Registration</h4>
                <p className="text-gray-600">
                  While not required, registering your warranty helps us serve you better and ensures faster claim
                  processing.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Transferability</h4>
                <p className="text-gray-600">
                  Our warranty is transferable to subsequent homeowners for the remaining warranty period, adding value
                  to your home.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Maintenance Requirements</h4>
                <p className="text-gray-600">
                  Regular maintenance is required to keep your warranty valid. This includes cleaning, lubricating
                  hardware, and replacing weatherstripping as needed.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Professional Installation</h4>
                <p className="text-gray-600">
                  Warranty coverage requires professional installation by certified installers. DIY installation may
                  void certain warranty provisions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bebas text-4xl text-gray-900 mb-6">Need Help with Your Warranty?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our warranty specialists are here to help you understand your coverage and file claims.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-orange hover:bg-orange-600 text-white flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Warranty Department
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
            >
              Download Warranty Guide
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
