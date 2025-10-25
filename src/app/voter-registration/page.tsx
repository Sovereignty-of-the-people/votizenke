"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Search, Clock, Users, FileText, AlertCircle, CheckCircle, ArrowRight, Phone, Mail, Calendar, Shield, Info } from "lucide-react"
import Link from "next/link"

// Mock registration centers data
const registrationCenters = [
  {
    id: 1,
    name: "Kenyatta International Convention Centre (KICC)",
    address: "Kapital Road, Nairobi CBD",
    county: "Nairobi",
    constituency: "Nairobi Central",
    coordinates: { lat: -1.2921, lng: 36.8219 },
    hours: "8:00 AM - 5:00 PM",
    status: "active",
    phone: "+254 20 271 7000",
    capacity: "High",
    waitTime: "15-30 mins"
  },
  {
    id: 2,
    name: "Huduma Centre - GPO",
    address: "GPO Building, Nairobi",
    county: "Nairobi",
    constituency: "Nairobi Central",
    coordinates: { lat: -1.2833, lng: 36.8167 },
    hours: "8:00 AM - 5:00 PM",
    status: "active",
    phone: "+254 20 271 7000",
    capacity: "Medium",
    waitTime: "30-45 mins"
  },
  {
    id: 3,
    name: "IEBC County Office - Mombasa",
    address: "Mombasa County Headquarters",
    county: "Mombasa",
    constituency: "Mombasa Town",
    coordinates: { lat: -4.0435, lng: 39.6682 },
    hours: "8:00 AM - 5:00 PM",
    status: "active",
    phone: "+254 41 231 0000",
    capacity: "High",
    waitTime: "20-35 mins"
  },
  {
    id: 4,
    name: "Kisumu IEBC Office",
    address: "Kisumu County Headquarters",
    county: "Kisumu",
    constituency: "Kisumu Central",
    coordinates: { lat: -0.0917, lng: 34.7680 },
    hours: "8:00 AM - 5:00 PM",
    status: "active",
    phone: "+254 57 202 0000",
    capacity: "Medium",
    waitTime: "25-40 mins"
  },
  {
    id: 5,
    name: "Nakuru IEBC Office",
    address: "Nakuru County Headquarters",
    county: "Nakuru",
    constituency: "Nakuru Town East",
    coordinates: { lat: -0.3031, lng: 36.0695 },
    hours: "8:00 AM - 5:00 PM",
    status: "active",
    phone: "+254 51 203 0000",
    capacity: "Low",
    waitTime: "10-20 mins"
  }
]

const counties = [
  "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Kitale", "Garissa", 
  "Kakamega", "Nyeri", "Meru", "Kisii", "Bungoma", "Machakos", "Kajiado", "Uasin Gishu"
]

export default function VoterRegistrationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCounty, setSelectedCounty] = useState("")
  const [filteredCenters, setFilteredCenters] = useState(registrationCenters)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)

  useEffect(() => {
    // Filter centers based on search and county
    let filtered = registrationCenters
    
    if (selectedCounty) {
      filtered = filtered.filter(center => center.county === selectedCounty)
    }
    
    if (searchQuery) {
      filtered = filtered.filter(center => 
        center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.constituency.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    setFilteredCenters(filtered)
  }, [searchQuery, selectedCounty])

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        (error) => {
          console.error("Error getting location:", error)
        }
      )
    }
  }

  const registrationSteps = [
    {
      title: "Step 1: Check Eligibility",
      description: "You must be a Kenyan citizen, 18 years or older, and of sound mind.",
      icon: Shield,
      requirements: [
        "Kenyan citizen by birth or registration",
        "18 years of age or older",
        "Of sound mind",
        "Not registered as a voter elsewhere"
      ]
    },
    {
      title: "Step 2: Gather Documents",
      description: "Prepare original and copies of required identification documents.",
      icon: FileText,
      requirements: [
        "Original National ID card or Passport",
        "Copy of ID/Passport",
        "Recent passport-size photo (optional)",
        "Proof of residence (utility bill, rent agreement)"
      ]
    },
    {
      title: "Step 3: Visit Registration Center",
      description: "Go to your nearest IEBC registration center with your documents.",
      icon: MapPin,
      requirements: [
        "Find your nearest registration center below",
        "Visit during working hours (8AM - 5PM)",
        "Bring all original documents",
        "Allow enough time for the process"
      ]
    },
    {
      title: "Step 4: Complete Registration",
      description: "Fill out the registration form and have your photo taken.",
      icon: Users,
      requirements: [
        "Fill out Form B (Voter Registration Form)",
        "Provide biometric data (fingerprints, photo)",
        "Verify all information is correct",
        "Receive voter registration slip"
      ]
    },
    {
      title: "Step 5: Verify Registration",
      description: "Check your registration status after 30 days.",
      icon: CheckCircle,
      requirements: [
        "Wait 30 days for processing",
        "Check registration status via SMS (code to 7002)",
        "Verify online at IEBC portal",
        "Confirm your polling station details"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, 0.05) 25%, rgba(0, 255, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.05) 75%, rgba(255, 0, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, 0.05) 25%, rgba(0, 255, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.05) 75%, rgba(255, 0, 0, 0.05) 76%, transparent 77%, transparent)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-red-600 text-white border-2 border-green-400 text-lg px-6 py-3 font-bold shadow-lg shadow-green-500/30">
              🗳️ VOTER REGISTRATION PORTAL
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Register to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">Vote</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your voter card is your power to change Kenya. Follow the steps below to register 
              and find your nearest registration center. Remember: Register where you'll actually vote!
            </p>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Registration <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              Follow these 5 simple steps to become a registered voter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registrationSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="relative bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center text-white font-black text-lg border-2 border-gray-900">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-green-600/20 to-red-600/20 border border-green-500/30">
                      <step.icon className="h-8 w-8 text-green-400" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-black text-white mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-center leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Requirements */}
                  <div className="space-y-2">
                    {step.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Centers Map */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Find Registration <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">Centers</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Locate IEBC registration centers near you. Register where you'll vote!
            </p>
            
            {/* Important Notice */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/30">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-yellow-400 font-bold text-lg mb-2">Important Registration Advice</h4>
                    <p className="text-gray-300 leading-relaxed">
                      <strong>Register where you will actually vote on election day!</strong> You can only vote at your designated polling station. 
                      Choose a registration center close to where you live or work, not necessarily where you were born. 
                      This ensures you can easily access your polling station on election day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search by center name, address, or constituency..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>
            </div>
            <div>
              <select 
                value={selectedCounty} 
                onChange={(e) => setSelectedCounty(e.target.value)}
                className="w-full h-10 rounded-md border border-gray-700 bg-gray-800/50 px-3 py-2 text-white placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
              >
                <option value="">All Counties</option>
                {counties.map((county) => (
                  <option key={county} value={county}>{county}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Use My Location Button */}
          <div className="text-center mb-12">
            <Button 
              onClick={getUserLocation}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 font-bold"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Use My Current Location
            </Button>
          </div>

          {/* Registration Centers List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCenters.map((center) => (
              <Card key={center.id} className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-white mb-2">
                        {center.name}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {center.address}
                      </CardDescription>
                    </div>
                    <Badge className={`${center.status === 'active' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
                      {center.status === 'active' ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">County:</span>
                      <p className="text-white font-medium">{center.county}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Constituency:</span>
                      <p className="text-white font-medium">{center.constituency}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Hours:</span>
                      <p className="text-white font-medium">{center.hours}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Wait Time:</span>
                      <p className="text-green-400 font-medium">{center.waitTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Phone className="h-4 w-4" />
                    <span>{center.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-400">Capacity:</span>
                    <span className={`font-medium ${
                      center.capacity === 'High' ? 'text-red-400' : 
                      center.capacity === 'Medium' ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      {center.capacity}
                    </span>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCenters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No registration centers found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  What documents do I need to register?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  You need your original National ID card or Passport, plus a copy. You may also need 
                  proof of residence like a utility bill or rent agreement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  How long does the registration process take?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  The actual registration takes about 15-30 minutes, but wait times vary by center. 
                  It's best to go early in the morning to avoid crowds.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  Can I change my polling station later?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Yes, you can transfer your voter registration during the IEBC's mass voter registration 
                  period. You'll need to fill out a transfer form at your new preferred center.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  Is voter registration free?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Yes, voter registration is completely free at all IEBC centers. Beware of anyone 
                  asking for payment to help you register - report them to the authorities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-black to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">Change Kenya?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Your voter registration is the first step in taking back our country from corrupt elites. 
            Register today and join millions of Kenyan youth in the revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/auth/signin">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white px-12 py-6 text-xl font-bold">
                Join VotizenKE <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/community">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-xl font-bold">
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}