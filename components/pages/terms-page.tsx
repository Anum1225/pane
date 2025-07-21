import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Calendar, Shield, AlertTriangle } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <FileText className="w-16 h-16 text-primary-orange" />
          </div>
          <h1 className="font-bebas text-5xl md:text-6xl mb-6">Terms of Use</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our website and services
          </p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Last updated: January 1, 2024</span>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary-orange" />
                  1. Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  By accessing and using the Panes Window Manufacturing Inc. website and services, you accept and agree
                  to be bound by the terms and provision of this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>
                <p className="text-gray-700">
                  These Terms of Use constitute a legally binding agreement between you and Panes Window Manufacturing
                  Inc. regarding your use of our website, products, and services.
                </p>
              </CardContent>
            </Card>

            {/* Use License */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">2. Use License</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Permission is granted to temporarily download one copy of the materials on Panes Window Manufacturing
                  Inc.'s website for personal, non-commercial transitory viewing only. This is the grant of a license,
                  not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>modify or copy the materials</li>
                  <li>
                    use the materials for any commercial purpose or for any public display (commercial or
                    non-commercial)
                  </li>
                  <li>attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
                <p className="text-gray-700">
                  This license shall automatically terminate if you violate any of these restrictions and may be
                  terminated by Panes Window Manufacturing Inc. at any time.
                </p>
              </CardContent>
            </Card>

            {/* Products and Services */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">3. Products and Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Panes Window Manufacturing Inc. provides custom window and door manufacturing services. All product
                  specifications, pricing, and availability are subject to change without notice.
                </p>
                <p className="text-gray-700">
                  Custom orders require a deposit and are subject to our manufacturing timeline. Delivery dates are
                  estimates and may vary based on production schedules and external factors.
                </p>
                <p className="text-gray-700">
                  Installation services are provided by certified professionals and are subject to separate terms and
                  conditions outlined in your installation agreement.
                </p>
              </CardContent>
            </Card>

            {/* Pricing and Payment */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">4. Pricing and Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  All prices are quoted in Canadian dollars and are subject to applicable taxes. Pricing is valid for 30
                  days from the date of quote unless otherwise specified.
                </p>
                <p className="text-gray-700">
                  Payment terms vary by order size and customer type. Custom orders typically require a 50% deposit with
                  the balance due upon completion. We accept various payment methods including cash, check, and major
                  credit cards.
                </p>
                <p className="text-gray-700">
                  Late payments may be subject to interest charges as permitted by law. Orders may be held or cancelled
                  for non-payment.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  5. Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The materials on Panes Window Manufacturing Inc.'s website are provided on an 'as is' basis. Panes
                  Window Manufacturing Inc. makes no warranties, expressed or implied, and hereby disclaims and negates
                  all other warranties including without limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or non-infringement of intellectual property or
                  other violation of rights.
                </p>
                <p className="text-gray-700">
                  Further, Panes Window Manufacturing Inc. does not warrant or make any representations concerning the
                  accuracy, likely results, or reliability of the use of the materials on its website or otherwise
                  relating to such materials or on any sites linked to this site.
                </p>
              </CardContent>
            </Card>

            {/* Limitations */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">6. Limitations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  In no event shall Panes Window Manufacturing Inc. or its suppliers be liable for any damages
                  (including, without limitation, damages for loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on the website, even if Panes Window
                  Manufacturing Inc. or an authorized representative has been notified orally or in writing of the
                  possibility of such damage.
                </p>
                <p className="text-gray-700">
                  Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability
                  for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </CardContent>
            </Card>

            {/* Privacy Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">7. Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                  information when you use our services. By using our services, you agree to the collection and use of
                  information in accordance with our Privacy Policy.
                </p>
                <p className="text-gray-700">
                  We may collect personal information such as your name, contact details, and project specifications to
                  provide our services effectively.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">8. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  These terms and conditions are governed by and construed in accordance with the laws of Ontario,
                  Canada, and you irrevocably submit to the exclusive jurisdiction of the courts in that province.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">9. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Panes Window Manufacturing Inc. reserves the right to revise these terms of use at any time without
                  notice. By using this website, you are agreeing to be bound by the then current version of these terms
                  of use.
                </p>
                <p className="text-gray-700">
                  We recommend reviewing these terms periodically to stay informed of any updates or changes.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  If you have any questions about these Terms of Use, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Panes Window Manufacturing Inc.</strong>
                  </p>
                  <p className="text-gray-700">Email: legal@panes.com</p>
                  <p className="text-gray-700">Phone: (123) 456-7890</p>
                  <p className="text-gray-700">Address: [Company Address]</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
