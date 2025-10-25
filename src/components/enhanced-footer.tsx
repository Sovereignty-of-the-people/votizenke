"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Users,
  HandHeart,
  Award,
  Globe,
  ArrowRight,
  Star
} from "lucide-react"

export function EnhancedFooter() {
  const [email, setEmail] = useState("")
  const [donationAmount, setDonationAmount] = useState("")

  const partners = [
    {
      name: "IEBC Kenya",
      type: "Government",
      description: "Electoral commission partnership",
      logo: "🏛️"
    },
    {
      name: "Youth Fund Kenya",
      type: "Development",
      description: "Youth empowerment programs",
      logo: "💰"
    },
    {
      name: "Amnesty Kenya",
      type: "Human Rights",
      description: "Human rights advocacy",
      logo: "⚖️"
    },
    {
      name: "UNDP Kenya",
      type: "International",
      description: "Democratic governance support",
      logo: "🌍"
    }
  ]

  const donationTiers = [
    { amount: 500, impact: "Register 10 voters", color: "bg-green-100 text-green-800" },
    { amount: 1000, impact: "Support 1 chapter", color: "bg-blue-100 text-blue-800" },
    { amount: 5000, impact: "Train 5 leaders", color: "bg-purple-100 text-purple-800" },
    { amount: 10000, impact: "Fund youth event", color: "bg-orange-100 text-orange-800" }
  ]

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Handle newsletter subscription
      alert(`Thank you for subscribing with: ${email}`)
      setEmail("")
    }
  }

  const handleDonation = (amount: number) => {
    // Handle donation
    alert(`Thank you for your donation of KES ${amount}!`)
    setDonationAmount("")
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Informed, Stay Involved</h2>
            <p className="text-xl mb-8 text-green-100">
              Get updates on civic events, policy changes, and youth opportunities
            </p>
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/60"
                required
              />
              <Button type="submit" className="bg-white text-green-600 hover:bg-gray-100 px-6">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-red-600 rounded-full"></div>
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              <span className="ml-2 text-xl font-bold">VotizenKE</span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering Kenyan youth to build the democracy we deserve through education, mobilization, and action.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <a href="/leadership" className="text-gray-300 hover:text-white transition-colors">
                  Leadership Academy
                </a>
              </li>
              <li>
                <a href="/chapters" className="text-gray-300 hover:text-white transition-colors">
                  Find Local Chapter
                </a>
              </li>
              <li>
                <a href="/volunteer" className="text-gray-300 hover:text-white transition-colors">
                  Volunteer Opportunities
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Civic Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/learn" className="text-gray-300 hover:text-white transition-colors">
                  Civic Education
                </a>
              </li>
              <li>
                <a href="/constitution" className="text-gray-300 hover:text-white transition-colors">
                  Constitution Guide
                </a>
              </li>
              <li>
                <a href="/voter-guide" className="text-gray-300 hover:text-white transition-colors">
                  Voter Registration
                </a>
              </li>
              <li>
                <a href="/policy" className="text-gray-300 hover:text-white transition-colors">
                  Policy Tracking
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog & News
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@votizenke.org</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Partners</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-green-600 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{partner.logo}</div>
                    <h4 className="font-semibold text-white mb-2">{partner.name}</h4>
                    <Badge variant="secondary" className="mb-2">
                      {partner.type}
                    </Badge>
                    <p className="text-sm text-gray-400">{partner.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-green-600 hover:bg-green-700">
              Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Donation Section */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-green-800 to-blue-800 border-green-600">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Heart className="h-6 w-6" />
                Support the Movement
              </CardTitle>
              <CardDescription className="text-gray-300">
                Your donation helps us empower more Kenyan youth to become active citizens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {donationTiers.map((tier, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-green-500 transition-colors cursor-pointer"
                    onClick={() => handleDonation(tier.amount)}
                  >
                    <div className="text-2xl font-bold text-white mb-2">
                      KES {tier.amount.toLocaleString()}
                    </div>
                    <Badge className={tier.color} variant="secondary">
                      {tier.impact}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex-1">
                  <Input
                    type="number"
                    placeholder="Custom amount (KES)"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <Button 
                  onClick={() => handleDonation(parseInt(donationAmount) || 1000)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Donate Now <Heart className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 VotizenKE. All rights reserved. Empowering Kenyan youth for democratic change.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/impact" className="text-gray-400 hover:text-white transition-colors">
                Impact Report
              </a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}