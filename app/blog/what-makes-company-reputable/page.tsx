import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "What Makes a Company Reputable? | RAF Windows Blog",
  description:
    "Discover what makes RAF the industry leader in windows and doors. Learn about our commitment to quality, service, and customer satisfaction.",
}

export default function CompanyReputationBlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-orange to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-bebas text-5xl md:text-6xl text-white mb-4">What Makes a Company Reputable?</h1>
          <p className="font-poppins text-xl text-white/90 mb-6">See why RAF is the industry leader!</p>
          <div className="flex items-center justify-center space-x-4 text-white/80 font-poppins">
            <span>Published: March 15, 2024</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="RAF Windows manufacturing facility"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg mb-8"
          />

          <h2 className="font-bebas text-3xl text-black mb-4">Building Trust Through Excellence</h2>
          <p className="font-poppins text-gray-700 leading-relaxed mb-6">
            In the competitive world of windows and doors, reputation isn't built overnight. It's earned through decades
            of consistent quality, exceptional service, and unwavering commitment to customer satisfaction. At RAF,
            we've spent over 100 years combined experience building not just windows, but lasting relationships with our
            customers.
          </p>

          <h3 className="font-bebas text-2xl text-black mb-4">Quality That Speaks for Itself</h3>
          <p className="font-poppins text-gray-700 leading-relaxed mb-6">
            Our reputation starts with the quality of our products. Every window and door that leaves our facility
            undergoes rigorous testing and quality control measures. We use only the finest materials and employ skilled
            craftspeople who take pride in their work. This attention to detail ensures that our products not only meet
            but exceed industry standards.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-bebas text-xl text-black mb-3">Key Quality Indicators:</h4>
            <ul className="font-poppins text-gray-700 space-y-2">
              <li>• Energy efficiency ratings that surpass ENERGY STAR requirements</li>
              <li>• Comprehensive warranty coverage on all products</li>
              <li>• Third-party certifications and industry awards</li>
              <li>• Consistent 5-star customer reviews and ratings</li>
            </ul>
          </div>

          <h3 className="font-bebas text-2xl text-black mb-4">Customer Service Excellence</h3>
          <p className="font-poppins text-gray-700 leading-relaxed mb-6">
            A reputable company doesn't just sell products; it provides solutions and support throughout the entire
            customer journey. From initial consultation to post-installation service, we're committed to making your
            experience as smooth and satisfying as possible.
          </p>

          <h3 className="font-bebas text-2xl text-black mb-4">Industry Recognition</h3>
          <p className="font-poppins text-gray-700 leading-relaxed mb-6">
            Our reputation is validated by numerous industry awards and certifications, including our HomeStars Best of
            Award Winner status from 2017-2024. These accolades reflect not just our commitment to quality, but our
            customers' satisfaction with our products and services.
          </p>

          <Card className="bg-primary-orange text-white mb-8">
            <CardContent className="p-6">
              <h4 className="font-bebas text-2xl mb-3">Ready to Experience the RAF Difference?</h4>
              <p className="font-poppins mb-4">
                Join thousands of satisfied customers who have chosen RAF for their window and door needs.
              </p>
              <Link href="/instant-quote">
                <Button className="bg-white text-primary-orange hover:bg-gray-100 font-poppins font-semibold">
                  Get Your Free Quote Today
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
                <h3 className="font-bebas text-xl text-black mb-2">
                  Is condensation normal on high-efficiency windows?
                </h3>
                <p className="font-poppins text-gray-600 mb-4">
                  Understanding window condensation and what it means for your home.
                </p>
                <Link
                  href="/blog/window-condensation-normal"
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
