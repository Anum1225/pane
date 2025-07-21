import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Poppins } from "next/font/google" // Import fonts from next/font/google
import "./globals.css"

// Define Bebas Neue font
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Specify the weight
  variable: "--font-bebas-neue", // Define a CSS variable for Bebas Neue
  display: "swap",
})

// Define Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Specify multiple weights
  variable: "--font-poppins", // Define a CSS variable for Poppins
  display: "swap",
})

export const metadata: Metadata = {
  title: "RAF Window Manufacturing - Custom Windows & Doors",
  description:
    "Factory-direct custom windows and doors at contractor pricing. Serving Ontario, Quebec, and Maritimes with over 100 years of combined experience.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${poppins.variable}`}>
      <body className="font-poppins">{children}</body>
    </html>
  )
}
