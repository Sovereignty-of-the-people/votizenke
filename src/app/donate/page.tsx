"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  Smartphone, 
  CreditCard, 
  Banknote,
  CheckCircle,
  Users,
  Target,
  TrendingUp,
  Shield,
  ArrowRight
} from "lucide-react"

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [donationMethod, setDonationMethod] = useState("")
  const [mpesaNumber, setMpesaNumber] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const presetAmounts = [
    { amount: 500, label: "KES 500", impact: "Provides civic education for 10 youth" },
    { amount: 1000, label: "KES 1,000", impact: "Registers 5 new youth voters" },
    { amount: 2500, label: "KES 2,500", impact: "Supports a community outreach event" },
    { amount: 5000, label: "KES 5,000", impact: "Trains 20 youth leaders" },
    { amount: 10000, label: "KES 10,000", impact: "Empowers an entire school" },
    { amount: 25000, label: "KES 25,000", impact: "Funds a county-wide campaign" }
  ]

  const donationMethods = [
    {
      id: "mpesa",
      name: "M-Pesa",
      icon: Smartphone,
      description: "Pay via M-Pesa STK Push",
      color: "text-green-600"
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, American Express",
      color: "text-blue-600"
    },
    {
      id: "bank",
      name: "Bank Transfer",
      icon: Banknote,
      description: "Direct bank deposit",
      color: "text-purple-600"
    }
  ]

  const handleDonate = async () => {
    const amount = customAmount || donationAmount
    if (!amount || !donationMethod) {
      alert("Please select amount and payment method")
      return
    }

    if (donationMethod === "mpesa" && !mpesaNumber) {
      alert("Please enter your M-Pesa number")
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccess(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowSuccess(false)
        setDonationAmount("")
        setCustomAmount("")
        setDonationMethod("")
        setMpesaNumber("")
      }, 3000)
    }, 2000)
  }

  const getImpactMessage = (amount: number) => {
    const impacts = {
      500: "Provides civic education for 10 youth",
      1000: "Registers 5 new youth voters",
      2500: "Supports a community outreach event",
      5000: "Trains 20 youth leaders",
      10000: "Empowers an entire school",
      25000: "Funds a county-wide campaign"
    }
    return impacts[amount as keyof typeof impacts] || "Supports youth democracy initiatives"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <Badge className="mb-6 bg-red-600/20 text-red-300 border border-red-500/30 px-6 py-2 text-sm font-semibold">
              Support Our Mission
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Fuel Kenya's 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400"> Democratic Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
              Your donation empowers young Kenyans to become active citizens, 
              register to vote, and shape the future of our democracy.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Impact */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every contribution creates measurable change in communities across Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-white/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">100,000+</h3>
                <p className="text-gray-300">Youth Reached</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-white/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">47,892</h3>
                <p className="text-gray-300">Voters Registered</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-white/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">68%</h3>
                <p className="text-gray-300">Youth Participation</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-white/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">42/47</h3>
                <p className="text-gray-300">Counties Active</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 md:py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Make Your Donation
            </h2>
            <p className="text-xl text-gray-300">
              Choose an amount that works for you and see your impact immediately
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Amount Selection */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Select Amount</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {presetAmounts.map((preset) => (
                  <Button
                    key={preset.amount}
                    variant={donationAmount === preset.amount.toString() ? "default" : "outline"}
                    className={`h-16 flex-col ${
                      donationAmount === preset.amount.toString()
                        ? "bg-gradient-to-r from-red-600 to-pink-600 text-white"
                        : "border-white/20 text-white hover:bg-white/10"
                    }`}
                    onClick={() => {
                      setDonationAmount(preset.amount.toString())
                      setCustomAmount("")
                    }}
                  >
                    <span className="text-lg font-bold">{preset.label}</span>
                    <span className="text-xs opacity-80">{preset.impact}</span>
                  </Button>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Custom Amount (KES)</label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setDonationAmount("")
                  }}
                  placeholder="Enter custom amount"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {(donationAmount || customAmount) && (
                <div className="mt-6 p-4 bg-green-600/20 border border-green-500/30 rounded-xl">
                  <p className="text-green-300 font-medium">
                    💝 {getImpactMessage(parseInt(customAmount || donationAmount))}
                  </p>
                </div>
              )}
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Payment Method</h3>
              
              <div className="space-y-4 mb-6">
                {donationMethods.map((method) => (
                  <Button
                    key={method.id}
                    variant={donationMethod === method.id ? "default" : "outline"}
                    className={`w-full h-20 justify-start ${
                      donationMethod === method.id
                        ? "bg-gradient-to-r from-red-600 to-pink-600 text-white"
                        : "border-white/20 text-white hover:bg-white/10"
                    }`}
                    onClick={() => setDonationMethod(method.id)}
                  >
                    <method.icon className={`h-6 w-6 mr-4 ${donationMethod === method.id ? "text-white" : method.color}`} />
                    <div className="text-left">
                      <div className="font-bold">{method.name}</div>
                      <div className="text-xs opacity-80">{method.description}</div>
                    </div>
                  </Button>
                ))}
              </div>

              {donationMethod === "mpesa" && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">M-Pesa Number</label>
                  <input
                    type="tel"
                    value={mpesaNumber}
                    onChange={(e) => setMpesaNumber(e.target.value)}
                    placeholder="254 XXX XXX XXX"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-400 mt-2">
                    You will receive an STK push on this number to complete the payment
                  </p>
                </div>
              )}

              {donationMethod === "bank" && (
                <div className="p-4 bg-white/10 border border-white/20 rounded-xl">
                  <h4 className="text-white font-bold mb-3">Bank Transfer Details</h4>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <p><strong>Bank:</strong> Equity Bank Kenya</p>
                    <p><strong>Account Name:</strong> VotizenKE Initiative</p>
                    <p><strong>Account Number:</strong> 0030298374629</p>
                    <p><strong>Branch:</strong> Moi Avenue</p>
                    <p><strong>Swift Code:</strong> EQBLKENA</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Donate Button */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={handleDonate}
              disabled={isProcessing || !donationAmount || !donationMethod}
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold px-12 py-4 text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Heart className="mr-2 h-6 w-6" />
                  Donate {customAmount || donationAmount ? `KES ${customAmount || donationAmount}` : "Now"}
                  <ArrowRight className="ml-2 h-6 w-6" />
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center shadow-2xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your donation of KES {customAmount || donationAmount} has been received successfully. 
              You're making a real difference in Kenya's democracy!
            </p>
            <Button
              onClick={() => setShowSuccess(false)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold"
            >
              Close
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}