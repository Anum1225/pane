import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Database, Mail, Calendar } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-primary-orange" />
          </div>
          <h1 className="font-bebas text-5xl md:text-6xl mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Last updated: January 1, 2024</span>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl flex items-center gap-2">
                  <Database className="w-6 h-6 text-primary-orange" />
                  1. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We collect information you provide directly to us, such as when you create an account, request a
                  quote, make a purchase, or contact us for support.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Personal Information may include:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Name, email address, and phone number</li>
                    <li>Billing and shipping addresses</li>
                    <li>Payment information (processed securely by third-party providers)</li>
                    <li>Project details and specifications</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  We also automatically collect certain information when you visit our website, including your IP
                  address, browser type, operating system, and browsing behavior.
                </p>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary-orange" />
                  2. How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We use the information we collect to provide, maintain, and improve our services, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Processing and fulfilling your orders</li>
                  <li>Providing customer support and responding to inquiries</li>
                  <li>Sending you important updates about your orders and our services</li>
                  <li>Improving our website and user experience</li>
                  <li>Conducting market research and analytics</li>
                  <li>Sending promotional communications (with your consent)</li>
                  <li>Complying with legal obligations</li>
                </ul>
                <p className="text-gray-700">
                  We will not sell, rent, or lease your personal information to third parties without your explicit
                  consent, except as described in this policy.
                </p>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">3. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">We may share your information in the following circumstances:</p>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-semibold">Service Providers</h4>
                    <p className="text-gray-700 text-sm">
                      We work with trusted third-party service providers who assist us in operating our business, such
                      as payment processors, shipping companies, and installation contractors.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-semibold">Legal Requirements</h4>
                    <p className="text-gray-700 text-sm">
                      We may disclose your information if required by law, court order, or government regulation.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-semibold">Business Transfers</h4>
                    <p className="text-gray-700 text-sm">
                      In the event of a merger, acquisition, or sale of assets, your information may be transferred as
                      part of the transaction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl flex items-center gap-2">
                  <Lock className="w-6 h-6 text-primary-orange" />
                  4. Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">Our security measures include:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure payment processing through certified providers</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Employee training on data protection practices</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we
                  strive to protect your information, we cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">5. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">You have certain rights regarding your personal information:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold mb-2">Access and Update</h4>
                    <p className="text-gray-700 text-sm">
                      You can access and update your account information at any time through your online account or by
                      contacting us.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold mb-2">Marketing Communications</h4>
                    <p className="text-gray-700 text-sm">
                      You can opt out of promotional emails by clicking the unsubscribe link or contacting us directly.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold mb-2">Data Deletion</h4>
                    <p className="text-gray-700 text-sm">
                      You can request deletion of your personal information, subject to legal and business requirements.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold mb-2">Data Portability</h4>
                    <p className="text-gray-700 text-sm">
                      You can request a copy of your personal information in a structured, machine-readable format.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">6. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website
                  traffic, and understand user preferences.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold mb-2">Types of cookies we use:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>
                      <strong>Essential cookies:</strong> Required for basic website functionality
                    </li>
                    <li>
                      <strong>Analytics cookies:</strong> Help us understand how visitors use our site
                    </li>
                    <li>
                      <strong>Marketing cookies:</strong> Used to deliver relevant advertisements
                    </li>
                    <li>
                      <strong>Preference cookies:</strong> Remember your settings and preferences
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  You can control cookie settings through your browser preferences. However, disabling certain cookies
                  may affect website functionality.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">7. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Our services are not directed to children under the age of 13. We do not knowingly collect personal
                  information from children under 13. If we become aware that we have collected personal information
                  from a child under 13, we will take steps to delete such information.
                </p>
                <p className="text-gray-700">
                  If you are a parent or guardian and believe your child has provided us with personal information,
                  please contact us immediately.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Privacy Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl">8. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
                  laws. We will notify you of any material changes by posting the updated policy on our website and
                  updating the "Last Updated" date.
                </p>
                <p className="text-gray-700">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your
                  information.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="font-bebas text-2xl flex items-center gap-2">
                  <Mail className="w-6 h-6 text-primary-orange" />
                  9. Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Panes Window Manufacturing Inc.</strong>
                  </p>
                  <p className="text-gray-700">
                    <strong>Privacy Officer</strong>
                  </p>
                  <p className="text-gray-700">Email: privacy@panes.com</p>
                  <p className="text-gray-700">Phone: (123) 456-7890</p>
                  <p className="text-gray-700">Address: [Company Address]</p>
                </div>
                <p className="text-gray-700">
                  We will respond to your inquiry within a reasonable timeframe and in accordance with applicable
                  privacy laws.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
