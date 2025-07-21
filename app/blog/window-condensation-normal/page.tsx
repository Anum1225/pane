import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Is Condensation Normal on High-Efficiency Windows? | RAF Windows Blog",
  description:
    "Learn about window condensation, why it occurs, and what it means for your high-efficiency windows. Expert advice from RAF Windows.",
}

export default function WindowCondensationBlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-bebas text-5xl md:text-6xl text-white mb-4">
            Is Condensation Normal on High-Efficiency Windows?
          </h1>
          <p className="font-poppins text-xl text-white/90 mb-6">
            Understanding window condensation and what it means for your home
          </p>
          <div className="flex items-center justify-center space-x-4 text-white/80 font-poppins">
            <span>Published: February 28, 2024</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Window with condensation droplets"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg mb-8"
          />

          <h2 className="font-bebas text-3xl text-black mb-4">Understanding Window Condensation</h2>
          <p className="font-poppins text-gray-700 leading-relaxed mb-6">
            If you've recently installed high-efficiency windows and noticed condensation forming on the glass, you
            might be wondering if this is normal. The short answer is: it depends on where the condensation is
            occurring. Let's break down the different types of condensation and what they mean for your windows.
          </p>

          <h3 className="font-bebas text-2xl text-black mb-4">Types of Window Condensation</h3>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h4 className="font-bebas text-xl text-green-800 mb-3">1. Exterior Condensation (Normal)</h4>
            <p className="font-poppins text-gray-700 leading-relaxed">
              Condensation on the outside of your windows is actually a good sign! It indicates that your windows are
              doing their job by preventing heat transfer. This typically occurs on cool mornings when the outdoor glass
              surface is cooler than the dew point of the surrounding air.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h4 className="font-bebas text-xl text-yellow-800 mb-3">2. Interior Condensation (Manageable)</h4>
            <p className="font-poppins text-gray-700 leading-relaxed">
              Condensation on the inside of your windows usually indicates high humidity levels in your home. While not
              necessarily a window problem, it's something that should be addressed through proper ventilation and
              humidity control.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h4 className="font-bebas text-xl text-red-800 mb-3">3. Between-Glass Condensation (Concerning)</h4>
            <p className="font-poppins text-gray-700 leading-relaxed">
              Condensation between the panes of glass in a double or triple-pane window indicates a seal failure. This
              is not normal and typically requires window replacement or repair.
            </p>
          </div>

          <h3 className="font-bebas text-2xl text-black mb-4">Why High-Efficiency Windows Show More Condensation</h3>
          <p className="font-poppins text-gray-700 leading-relaxed mb-6">
            High-efficiency windows are designed to minimize heat transfer, which means the exterior glass surface stays
            closer to the outdoor temperature. This increased efficiency can actually make exterior condensation more
            likely, especially during certain weather conditions.
          </p>

          <h3 className="font-bebas text-2xl text-black mb-4">Managing Interior Condensation</h3>
          <ul className="font-poppins text-gray-700 space-y-3 mb-6">
            <li>• Use exhaust fans in bathrooms and kitchens</li>
            <li>• Maintain indoor humidity levels between 30-50%</li>
            <li>• Ensure proper ventilation throughout your home</li>
            <li>• Consider a whole-home dehumidifier if necessary</li>
            <li>• Open window coverings during the day to allow air circulation</li>
          </ul>

          <h3 className="font-bebas text-2xl text-black mb-4">When to Be Concerned</h3>
          <p className="font-poppins text-gray-700 leading-relaxed mb-6">
            While exterior condensation is normal and interior condensation is manageable, you should contact a
            professional if you notice:
          </p>
          <ul className="font-poppins text-gray-700 space-y-2 mb-8">
            <li>• Condensation between glass panes</li>
            <li>• Persistent interior condensation despite humidity control</li>
            <li>• Ice formation on the interior of windows</li>
            <li>• Water damage around window frames</li>
          </ul>

          <Card className="bg-blue-600 text-white mb-8">
            <CardContent className="p-6">
              <h4 className="font-bebas text-2xl mb-3">Need Expert Advice?</h4>
              <p className="font-poppins mb-4">
                Our window experts can help you understand your specific situation and provide solutions.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-poppins font-semibold">
                  Contact Our Experts
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-bebas text-3xl text-black text-center mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bebas text-xl text-black mb-2">What makes a company reputable?</h3>
                <p className="font-poppins text-gray-600 mb-4">
                  See why RAF is the industry leader in windows and doors.
                </p>
                <Link
                  href="/blog/what-makes-company-reputable"
                  className="text-primary-orange hover:text-orange-700 font-poppins font-medium"
                >
                  Read more +
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bebas text-xl text-black mb-2">Black Windows Are on Trend For 2023</h3>
                <p className="font-poppins text-gray-600 mb-4">
                  Discover why black window frames are becoming the preferred choice for modern homes.
                </p>
                <Link
                  href="/blog/black-windows-trend-2023"
                  className="text-primary-orange hover:text-orange-700 font-poppins font-medium"
                >
                  Read more +
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
