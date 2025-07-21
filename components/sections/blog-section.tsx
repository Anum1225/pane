import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function BlogSection() {
  const blogPosts = [
    {
      title: "What makes a company reputable?",
      subtitle: "See why RAF is the industry leader!",
      image: "/placeholder.svg?height=200&width=300",
      link: "/blog/what-makes-company-reputable",
    },
    {
      title: "Is condensation normal on high-efficiency windows?",
      subtitle: "Understanding window condensation",
      image: "/placeholder.svg?height=200&width=300",
      link: "/blog/window-condensation-normal",
    },
    {
      title: "Black Windows Are on Trend For 2023",
      subtitle: "Discover the modern appeal of black window frames",
      image: "/placeholder.svg?height=200&width=300",
      link: "/blog/black-windows-trend-2023",
    },
  ]

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-bebas text-3xl text-black text-center mb-8">Latest Blog Entries</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bebas text-xl text-black mb-2">{post.title}</h3>
                  {post.subtitle && (
                    <p className="text-sm font-poppins text-gray-600 mb-3 leading-relaxed">{post.subtitle}</p>
                  )}
                  <Link
                    href={post.link}
                    className="text-primary-orange hover:text-orange-700 font-poppins font-medium transition-colors"
                  >
                    Read more +
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
