"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ProductFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What is a feature to learn more?",
      answer:
        "Our IGUs feature advanced Low-E coatings, warm-edge spacers, and argon gas fills for superior energy efficiency. Each unit is custom manufactured with Guardian glass and dual seal construction for long-lasting performance.",
    },
    {
      question: "Returns & Exchanges",
      answer:
        "Custom manufactured IGUs are made to your exact specifications and are generally non-returnable. However, if there's a manufacturing defect or error in our production, we'll replace the unit at no charge within 30 days of delivery.",
    },
    {
      question: "Shipping Policy",
      answer:
        "IGUs are carefully packaged and shipped via freight carrier. Delivery typically takes 5-10 business days after production. White glove delivery service is available for an additional fee, including inside delivery and unpacking.",
    },
    {
      question: "What will my order ship?",
      answer:
        "Orders typically ship within 5-7 business days after approval of shop drawings. You'll receive tracking information via email once your order ships. Rush orders may be available for an additional fee.",
    },
    {
      question: "Shipping your custom order",
      answer:
        "Custom IGUs require special handling and packaging. We use professional glass racks and protective materials to ensure safe delivery. Freight shipping is included in pricing for orders over $500.",
    },
    {
      question: "How much does it cost to ship?",
      answer:
        "Shipping costs vary based on size, weight, and destination. Standard freight shipping ranges from $75-$200 for most orders. We'll provide exact shipping costs with your quote.",
    },
    {
      question: "Where do you ship?",
      answer:
        "We ship throughout Canada and the United States. Some remote locations may require additional shipping time and costs. International shipping is available upon request.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes! You'll receive tracking information via email once your order ships. You can also log into your account to view order status and tracking details at any time.",
    },
    {
      question: "Acceptance of Returns",
      answer:
        "Due to the custom nature of IGUs, returns are only accepted for manufacturing defects or errors. All returns must be reported within 48 hours of delivery and require photo documentation.",
    },
    {
      question: "Can I make delivery if it's damaged?",
      answer:
        "If your IGU arrives damaged, do not accept delivery. Note the damage on the delivery receipt and contact us immediately. We'll arrange for a replacement unit to be manufactured and shipped at no charge.",
    },
    {
      question: "Can I cancel my shipment?",
      answer:
        "Orders can be cancelled before production begins. Once manufacturing starts, cancellation may result in a restocking fee. Contact us as soon as possible if you need to cancel your order.",
    },
    {
      question: "In the case of Damage",
      answer:
        "All shipments are fully insured. If damage occurs during shipping, we'll file the insurance claim and arrange for a replacement unit. Document any damage with photos and contact us within 48 hours.",
    },
  ]

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 border-t">
      <h2 className="font-bebas text-3xl text-black mb-8 text-center">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              aria-expanded={openItems.includes(index)}
            >
              <span className="font-poppins font-semibold text-gray-800">{faq.question}</span>
              {openItems.includes(index) ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {openItems.includes(index) && (
              <div className="px-6 pb-4">
                <p className="font-poppins text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
