"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FixedElements from "@/components/fixed-elements"
import FormBlock from "@/components/form-block"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function CreateAccountPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verifyPassword: "",
    phoneNumber: "",
    referredBy: "",
    newsletter: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Create account:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <FormBlock title="Create an account...">
            <p className="text-gray-700 mb-8">Your account is used to track and place orders.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="verifyPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Verify Password
                </label>
                <Input
                  id="verifyPassword"
                  type="password"
                  value={formData.verifyPassword}
                  onChange={(e) => handleInputChange("verifyPassword", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="referredBy" className="block text-sm font-medium text-gray-700 mb-2">
                  Referred by
                </label>
                <Select onValueChange={(value) => handleInputChange("referredBy", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Internet Search" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="internet-search">Internet Search</SelectItem>
                    <SelectItem value="friend-family">Friend/Family</SelectItem>
                    <SelectItem value="social-media">Social Media</SelectItem>
                    <SelectItem value="advertisement">Advertisement</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I'd like to receive sales, promotions or new product alerts (we would never spam you!)
                </label>
                <Select onValueChange={(value) => handleInputChange("newsletter", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-md font-medium"
                >
                  Create Account
                </Button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/" className="text-blue-600 hover:text-blue-800">
                    Sign In.
                  </Link>
                </p>
              </div>
            </form>
          </FormBlock>
        </div>
      </main>

      <Footer />
      <FixedElements />
    </div>
  )
}
