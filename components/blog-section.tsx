import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function BlogSection() {
  const blogPosts = [
    {
      title: "What makes a company reputable?",
      subtitle: "See why Panes is the industry leader!",
      image: "/placeholder.svg?height=200&width=300",
      link: "Read more +",
    },
    {
      title: "Is condensation normal on high-efficiency windows?",
      subtitle: "Understanding window condensation",
      image: "/placeholder.svg?height=200&width=300",
      link: "Read more +",
    },
    {
      title: "Black Windows Are on Trend For 2023",
      subtitle: "",
      image: "/placeholder.svg?height=200&width=300",
      link: "Read more +",
    },
  ]

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Latest Blog Entries</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-2">{post.title}</h3>
                  {post.subtitle && <p className="text-sm text-gray-600 mb-3">{post.subtitle}</p>}
                  <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    {post.link}
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
