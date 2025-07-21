"use client"

import { Star } from "lucide-react"

export default function ProductReviews() {
  const reviews = [
    {
      name: "Barry S.",
      location: "ON",
      date: "2023-12-15",
      rating: 5,
      title: "GREAT VALUE FOR PATIO DOOR",
      content:
        "Panes patio door is fantastic! Patio doors from Panes they did not do professional service I recommend to anyone of all my friends because Panes door different and very nice the quality is very good and the price is very reasonable. I am very happy with the installation of patio doors. I will recommend Panes to anyone who is looking for patio doors.",
    },
  ]

  const ratingBreakdown = [
    { stars: 5, count: 1, percentage: 100 },
    { stars: 4, count: 0, percentage: 0 },
    { stars: 3, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 },
  ]

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 border-t">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">★</div>
        <h2 className="font-bebas text-3xl text-black mb-4">REVIEWS</h2>
        <p className="font-poppins text-sm text-gray-600 mb-6">SHARE YOUR THOUGHTS WITH OTHER CUSTOMERS</p>
        <button className="bg-primary-orange hover:bg-orange-700 text-white px-8 py-2 font-poppins font-semibold rounded">
          WRITE REVIEW
        </button>
      </div>

      {/* Rating Summary */}
      <div className="mb-8">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-center font-poppins text-sm text-gray-600 mb-6">1 REVIEWS</p>

        {/* Rating Breakdown */}
        <div className="max-w-md mx-auto space-y-2">
          {ratingBreakdown.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < rating.stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${rating.percentage}%` }}></div>
              </div>
              <span className="font-poppins text-xs text-gray-600 w-8">{rating.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-t pt-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-poppins font-semibold text-gray-800">{review.name}</span>
                  <span className="font-poppins text-sm text-gray-500">{review.location}</span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
              <span className="font-poppins text-xs text-gray-500">{review.date}</span>
            </div>
            <h4 className="font-poppins font-semibold text-gray-800 mb-2">{review.title}</h4>
            <p className="font-poppins text-sm text-gray-700 leading-relaxed">{review.content}</p>
            <div className="flex gap-4 mt-3">
              <button className="font-poppins text-xs text-gray-500 hover:text-gray-700">Helpful</button>
              <button className="font-poppins text-xs text-gray-500 hover:text-gray-700">Not Helpful</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
