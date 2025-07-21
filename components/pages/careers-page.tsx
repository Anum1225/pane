import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Users, Award, Heart } from "lucide-react"

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Window Installation Specialist",
      department: "Operations",
      location: "Toronto, ON",
      type: "Full-time",
      salary: "$45,000 - $65,000",
      description: "Join our installation team and help bring quality windows to customers across Ontario.",
      requirements: ["2+ years installation experience", "Valid driver's license", "Physical fitness required"],
    },
    {
      title: "Sales Representative",
      department: "Sales",
      location: "Remote/Ontario",
      type: "Full-time",
      salary: "$40,000 - $80,000 + Commission",
      description: "Drive sales growth by connecting with customers and providing expert window solutions.",
      requirements: ["Sales experience preferred", "Excellent communication skills", "Customer-focused mindset"],
    },
    {
      title: "Manufacturing Technician",
      department: "Production",
      location: "Mississauga, ON",
      type: "Full-time",
      salary: "$35,000 - $50,000",
      description: "Work in our state-of-the-art manufacturing facility producing high-quality windows.",
      requirements: ["Manufacturing experience", "Attention to detail", "Team player attitude"],
    },
  ]

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage for you and your family.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Pay",
      description: "Fair wages with performance bonuses and annual salary reviews.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible schedules, paid time off, and statutory holidays.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Growth Opportunities",
      description: "Training programs, skill development, and career advancement paths.",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-bebas text-5xl md:text-6xl mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Build your career with Panes Window Manufacturing - where quality craftsmanship meets innovation
          </p>
          <Button size="lg" className="bg-primary-orange hover:bg-orange-600 text-white px-8 py-3">
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl text-gray-900 mb-4">Why Choose Panes?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're more than just a window manufacturer - we're a family-oriented company that values our employees
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="font-bebas text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl text-gray-900 mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600">Explore exciting career opportunities with our growing team</p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="font-bebas text-2xl text-gray-900">{job.title}</CardTitle>
                      <CardDescription className="text-lg">{job.description}</CardDescription>
                    </div>
                    <Button className="bg-primary-orange hover:bg-orange-600 text-white">Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {job.department}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {job.type}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      {job.salary}
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl text-gray-900 mb-4">How to Apply</h2>
            <p className="text-lg text-gray-600">Ready to join our team? Here's how to get started</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bebas text-xl mb-2">Submit Application</h3>
              <p className="text-gray-600">
                Send us your resume and cover letter for the position you're interested in.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bebas text-xl mb-2">Interview Process</h3>
              <p className="text-gray-600">We'll schedule a phone or in-person interview to get to know you better.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bebas text-xl mb-2">Welcome Aboard</h3>
              <p className="text-gray-600">
                Join our team and start your career journey with comprehensive onboarding.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Don't see a position that fits? We're always looking for talented individuals.
            </p>
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
              Send General Application
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
