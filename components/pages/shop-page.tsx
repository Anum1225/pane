import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, ShoppingCart, Star, Eye } from "lucide-react"
import Link from "next/link"

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Double Hung Window",
      category: "Windows",
      price: "$299",
      originalPrice: "$349",
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=200&width=200",
      inStock: true,
      features: ["Energy Efficient", "Easy Operation", "Low Maintenance"],
    },
    {
      id: 2,
      name: "Casement Window",
      category: "Windows",
      price: "$329",
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg?height=200&width=200",
      inStock: true,
      features: ["Maximum Ventilation", "Secure Locking", "Weather Resistant"],
    },
    {
      id: 3,
      name: "Sliding Patio Door",
      category: "Doors",
      price: "$899",
      originalPrice: "$999",
      rating: 4.7,
      reviews: 67,
      image: "/placeholder.svg?height=200&width=200",
      inStock: true,
      features: ["Large Glass Area", "Smooth Operation", "Security Features"],
    },
    {
      id: 4,
      name: "Awning Window",
      category: "Windows",
      price: "$279",
      originalPrice: null,
      rating: 4.6,
      reviews: 45,
      image: "/placeholder.svg?height=200&width=200",
      inStock: false,
      features: ["Rain Protection", "Privacy Option", "Energy Efficient"],
    },
    {
      id: 5,
      name: "Picture Window",
      category: "Windows",
      price: "$399",
      originalPrice: "$449",
      rating: 4.8,
      reviews: 156,
      image: "/placeholder.svg?height=200&width=200",
      inStock: true,
      features: ["Maximum Light", "Unobstructed View", "Fixed Installation"],
    },
    {
      id: 6,
      name: "French Patio Door",
      category: "Doors",
      price: "$1299",
      originalPrice: null,
      rating: 4.9,
      reviews: 78,
      image: "/placeholder.svg?height=200&width=200",
      inStock: true,
      features: ["Classic Design", "Full Opening", "Premium Hardware"],
    },
  ]

  const categories = ["All Products", "Windows", "Doors", "Hardware", "Accessories"]
  const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Customer Rating", "Newest"]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-bebas text-5xl md:text-6xl mb-6">Shop Windows Online</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Browse our complete selection of high-quality windows and doors with instant pricing
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search products..." className="pl-10 bg-white text-gray-900" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              <Select defaultValue="All Products">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Filter className="w-4 h-4" />
                More Filters
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select defaultValue="Featured">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                    {!product.inStock && <Badge className="absolute top-2 right-2 bg-gray-500">Out of Stock</Badge>}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-900 hover:bg-gray-100"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Quick View
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <CardTitle className="font-bebas text-xl mb-2">{product.name}</CardTitle>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary-orange">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="bg-primary-orange hover:bg-orange-600 text-white"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl text-gray-900 mb-4">Why Shop With Us?</h2>
            <p className="text-lg text-gray-600">
              Experience the convenience of online window shopping with professional support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-primary-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <h3 className="font-bebas text-xl mb-2">Easy Online Ordering</h3>
                <p className="text-gray-600">
                  Browse, compare, and order windows online with instant pricing and availability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-primary-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="font-bebas text-xl mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">All products come with comprehensive warranties and quality assurance.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-primary-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-bebas text-xl mb-2">Expert Support</h3>
                <p className="text-gray-600">Get professional advice and support throughout your purchase journey.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bebas text-4xl text-gray-900 mb-6">Need Custom Windows?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find what you're looking for? Our custom window configurator lets you build exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/configure/vinyl-windows">
              <Button size="lg" className="bg-primary-orange hover:bg-orange-600 text-white">
                Build Custom Windows
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
              >
                Speak with Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
