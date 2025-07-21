import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ProductCards() {
  const products = [
    {
      title: "CUSTOM WINDOWS",
      description:
        "We can build windows to your exact specifications! No problem! Our trained craftspeople allow you to be creative and design the perfect window project at your own pace.",
      additionalText: "If you prefer that we help you, we can do that too!",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "IN-STOCK WINDOWS",
      description:
        "We maintain an extensive inventory for the production of custom windows! Our stock windows are available to be shipped the same day and can be at your project in 2-3 days.",
      additionalText:
        "Panes maintains the most popular sizes for quick turn-around times! So stock windows are available to be shipped the same day.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "REPLACEMENT GLASS",
      description:
        "Did you break a window? Don't worry, we can help! We can make the sealed glass unit! Panes has you covered!",
      additionalText:
        "Industry-best pricing, quick production and fast delivery! We make sealed glass ensure your windows are working at peak performance.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PATIO DOORS",
      description: "High-quality sliding doors that you can rely on.",
      additionalText:
        "Unbeatable prices, selection and turn-around time. Let Panes take care of the things that matter for your patio door project. We make it simple and easy.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-0">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-3">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <p className="text-sm text-gray-600 mb-4">{product.additionalText}</p>
                  <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">Shop Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
