"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Handshake, 
  Share2, 
  Heart, 
  Users, 
  Target, 
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Globe,
  Building,
  Award,
  ArrowRight
} from "lucide-react"

export default function Partners() {
  const [showPartnerForm, setShowPartnerForm] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)

  const partners = [
    { name: "Kenya Youth Network", logo: "/partners/kyn.png", type: "NGO", impact: "Reached 50,000+ youth" },
    { name: "Sauti Zetu", logo: "/partners/sauti-zetu.png", type: "Media Partner", impact: "Amplified youth voices" },
    { name: "Democracy Watch", logo: "/partners/dw.png", type: "Civic Organization", impact: "Monitored 47 counties" },
    { name: "Youth for Change", logo: "/partners/yfc.png", type: "Movement", impact: "Trained 10,000+ leaders" },
  ]

  const partnershipBenefits = [
    {
      icon: Users,
      title: "Access to Youth Network",
      description: "Connect with over 100,000 engaged young Kenyans across all 47 counties"
    },
    {
      icon: Target,
      title: "Measurable Impact",
      description: "Track your contribution to youth empowerment and democratic participation"
    },
    {
      icon: TrendingUp,
      title: "Brand Visibility",
      description: "Showcase your commitment to youth development and social change"
    },
    {
      icon: Award,
      title: "Recognition & Awards",
      description: "Annual partnership awards and recognition in national forums"
    }
  ]

  const handleBecomePartner = () => {
    setShowPartnerForm(true)
  }

  const handleContactUs = () => {
    setShowContactForm(true)
  }

  const handleDonate = () => {
    window.location.href = "/donate"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <Badge className="mb-6 bg-green-600/20 text-green-300 border border-green-500/30 px-6 py-2 text-sm font-semibold">
              Partnership Opportunities
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Partner with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> VotizenKE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
              Together, we can empower a generation of young Kenyans to build a more democratic and prosperous future. 
              Join our movement for transformative change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={handleBecomePartner}
              >
                <Handshake className="mr-2 h-5 w-5" />
                Become a Partner
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-green-400 text-green-300 hover:bg-green-500 hover:text-white font-bold px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={handleContactUs}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={handleDonate}
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the benefits of joining Kenya's largest youth democracy movement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-white/10 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Impact */}
      <section className="py-20 md:py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Make Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Impact</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Empower Youth Voices</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Help us reach 1 million young Kenyans with civic education and voter registration tools
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Drive Democratic Change</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Support initiatives that increase youth participation in elections and governance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Build Sustainable Programs</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Create lasting impact through educational programs and community engagement
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Partnership Tiers</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-600/20 border border-green-500/30 rounded-xl">
                  <h4 className="text-lg font-bold text-green-300 mb-2">Impact Partner</h4>
                  <p className="text-gray-300 text-sm">Annual support of KES 1M+ with comprehensive benefits</p>
                </div>
                <div className="p-4 bg-blue-600/20 border border-blue-500/30 rounded-xl">
                  <h4 className="text-lg font-bold text-blue-300 mb-2">Strategic Partner</h4>
                  <p className="text-gray-300 text-sm">Annual support of KES 500K - 1M with targeted benefits</p>
                </div>
                <div className="p-4 bg-purple-600/20 border border-purple-500/30 rounded-xl">
                  <h4 className="text-lg font-bold text-purple-300 mb-2">Community Partner</h4>
                  <p className="text-gray-300 text-sm">Annual support of KES 100K - 500K with core benefits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are proud to collaborate with these organizations in empowering Kenyan youth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-white/10 group">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Building className="h-12 w-12 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <Badge className="mb-3 bg-green-600/20 text-green-300 border-green-500/30">
                    {partner.type}
                  </Badge>
                  <p className="text-gray-400 text-sm">{partner.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-green-600/10 to-emerald-600/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join us in building a more democratic Kenya where every young person has a voice and the power to shape their future.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={handleBecomePartner}
            >
              <Handshake className="mr-2 h-5 w-5" />
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-red-400 text-red-300 hover:bg-red-500 hover:text-white font-bold px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={handleDonate}
            >
              <Heart className="mr-2 h-5 w-5" />
              Support Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Form Modal */}
      {showPartnerForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900">Become a Partner</h3>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowPartnerForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </Button>
              </div>
              
              <PartnerForm onClose={() => setShowPartnerForm(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900">Contact Us</h3>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </Button>
              </div>
              
              <ContactForm onClose={() => setShowContactForm(false)} />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

// Partner Form Component
function PartnerForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationType: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    description: '',
    partnershipInterest: '',
    annualBudget: '',
    previousExperience: '',
    expectations: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Partner form submitted:', formData)
    alert('Thank you for your partnership interest! We will contact you within 48 hours.')
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name *</label>
          <input
            type="text"
            name="organizationName"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type *</label>
          <select
            name="organizationType"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            onChange={handleChange}
          >
            <option value="">Select type</option>
            <option value="ngo">NGO</option>
            <option value="corporate">Corporate</option>
            <option value="government">Government</option>
            <option value="academic">Academic Institution</option>
            <option value="media">Media Organization</option>
            <option value="community">Community Group</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
          <input
            type="text"
            name="contactPerson"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
          <input
            type="url"
            name="website"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Organization Description *</label>
        <textarea
          name="description"
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Tell us about your organization and mission..."
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Interest *</label>
        <select
          name="partnershipInterest"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          onChange={handleChange}
        >
          <option value="">Select interest area</option>
          <option value="voter-education">Voter Education</option>
          <option value="youth-empowerment">Youth Empowerment</option>
          <option value="civic-tech">Civic Technology</option>
          <option value="community-outreach">Community Outreach</option>
          <option value="policy-advocacy">Policy Advocacy</option>
          <option value="research">Research & Data</option>
          <option value="general">General Partnership</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Annual Partnership Budget</label>
        <select
          name="annualBudget"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          onChange={handleChange}
        >
          <option value="">Select budget range</option>
          <option value="100k-500k">KES 100,000 - 500,000</option>
          <option value="500k-1m">KES 500,000 - 1,000,000</option>
          <option value="1m-5m">KES 1,000,000 - 5,000,000</option>
          <option value="5m+">KES 5,000,000+</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Previous Experience</label>
        <textarea
          name="previousExperience"
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Describe any previous partnerships or similar initiatives..."
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Expectations from Partnership</label>
        <textarea
          name="expectations"
          required
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="What do you hope to achieve through this partnership?"
          onChange={handleChange}
        />
      </div>

      <div className="flex gap-4 pt-6">
        <Button
          type="submit"
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3"
        >
          Submit Partnership Application
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="px-8"
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}

// Contact Form Component
function ContactForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submitted:', formData)
    alert('Thank you for contacting us! We will respond within 24 hours.')
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">partnerships@votizenke.org</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">+254 700 123456</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">Nairobi, Kenya</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-green-600" />
            <span className="text-gray-700">www.votizenke.org</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
          <select
            name="inquiryType"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            onChange={handleChange}
          >
            <option value="">Select inquiry type</option>
            <option value="partnership">Partnership Inquiry</option>
            <option value="donation">Donation Question</option>
            <option value="media">Media Inquiry</option>
            <option value="technical">Technical Support</option>
            <option value="general">General Question</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
          <input
            type="text"
            name="subject"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="How can we help you?"
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-4 pt-6">
          <Button
            type="submit"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3"
          >
            Send Message
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="px-8"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}