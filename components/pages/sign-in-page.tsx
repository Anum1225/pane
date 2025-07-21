"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FixedElements from "@/components/layout/fixed-elements"
import FormBlock from "@/components/ui/form-block"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", { email, password })
    // Add authentication logic here
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <FormBlock title="Sign In...">
            <p className="text-gray-700 mb-8">
              If you are returning customer (Thank you!) You can sign in to your account below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-primary-orange"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-primary-orange"
                  required
                />
              </div>

              <div className="text-left">
                <Link href="#" className="text-sm text-gray-600 hover:text-primary-orange transition-colors">
                  Forgot your password?
                </Link>
              </div>

              <div className="space-y-3">
                <Button
                  type="submit"
                  className="w-full bg-primary-orange hover:bg-orange-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
                >
                  Sign In
                </Button>

                <Link href="/create-account">
                  <Button
                    type="button"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
                  >
                    Create a new account
                  </Button>
                </Link>
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
