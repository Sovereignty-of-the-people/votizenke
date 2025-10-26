"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { X, Users, CheckCircle, Share2, Calendar, MapPin, Camera, MessageCircle, Star, Clock, TrendingUp } from "lucide-react"

interface VoterRegistrationPopupProps {
  isOpen: boolean
  onClose: () => void
}

interface RegistrationPlan {
  date: string
  location: string
  notes: string
}

interface ShareMessage {
  text: string
  platform: string
}

export function VoterRegistrationPopup({ isOpen, onClose }: VoterRegistrationPopupProps) {
  const [step, setStep] = useState(1)
  const [registrationPlan, setRegistrationPlan] = useState<RegistrationPlan>({
    date: "",
    location: "",
    notes: ""
  })
  const [shareMessage, setShareMessage] = useState<ShareMessage>({
    text: "Kenyan youth! Let's register as voters and shape our future. 🇰🇪 I'm planning to register this week - join me! #VotizenKE #GenZVotes",
    platform: "whatsapp"
  })
  const [registrationStatus, setRegistrationStatus] = useState<"planning" | "registered" | "experienced">("planning")

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        // Auto-show popup
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleShareToWhatsApp = () => {
    const message = encodeURIComponent(shareMessage.text)
    const url = encodeURIComponent("https://votizenke.vercel.app")
    window.open(`https://wa.me/?text=${message}%20${url}`, "_blank")
  }

  const handleShareToTwitter = () => {
    const message = encodeURIComponent(shareMessage.text)
    window.open(`https://twitter.com/intent/tweet?text=${message}`, "_blank")
  }

  const handleShareToFacebook = () => {
    const message = encodeURIComponent(shareMessage.text)
    const url = encodeURIComponent("https://votizenke.vercel.app")
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${message}`, "_blank")
  }

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(shareMessage.text + " https://votizenke.vercel.app")
    alert("Message copied! Share it with friends and groups.")
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute right-2 top-2 z-10"
        >
          <X className="h-4 w-4" />
        </Button>

        {step === 1 && (
          <>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-red-600 to-green-600 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Voter Registration Hub 🇰🇪</CardTitle>
              <CardDescription>
                Plan, track, and mobilize for Kenya's democratic future!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                <Button 
                  variant={registrationStatus === "planning" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setRegistrationStatus("planning")}
                  className="text-xs"
                >
                  <Calendar className="h-3 w-3 mr-1" />
                  Plan
                </Button>
                <Button 
                  variant={registrationStatus === "registered" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setRegistrationStatus("registered")}
                  className="text-xs"
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Registered
                </Button>
                <Button 
                  variant={registrationStatus === "experienced" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setRegistrationStatus("experienced")}
                  className="text-xs"
                >
                  <Star className="h-3 w-3 mr-1" />
                  Experience
                </Button>
              </div>

              {registrationStatus === "planning" && (
                <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                  <h3 className="font-semibold text-blue-900 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Plan Your Registration
                  </h3>
                  <Input
                    placeholder="Target date (e.g., This Friday)"
                    value={registrationPlan.date}
                    onChange={(e) => setRegistrationPlan({...registrationPlan, date: e.target.value})}
                    className="text-sm"
                  />
                  <Input
                    placeholder="IEBC Center location (e.g., KICC, Nairobi)"
                    value={registrationPlan.location}
                    onChange={(e) => setRegistrationPlan({...registrationPlan, location: e.target.value})}
                    className="text-sm"
                  />
                  <Input
                    placeholder="Notes (e.g., Bring ID, passport photo)"
                    value={registrationPlan.notes}
                    onChange={(e) => setRegistrationPlan({...registrationPlan, notes: e.target.value})}
                    className="text-sm"
                  />
                </div>
              )}

              {registrationStatus === "registered" && (
                <div className="bg-green-50 p-4 rounded-lg space-y-3">
                  <h3 className="font-semibold text-green-900 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Registration Status
                  </h3>
                  <div className="space-y-2 text-sm">
                    <Badge className="bg-green-600">Registered Voter</Badge>
                    <p className="text-green-800">Share your success and inspire others!</p>
                    <div className="flex items-center gap-2 text-green-700">
                      <TrendingUp className="h-4 w-4" />
                      <span>You're part of 50,000+ youth registered!</span>
                    </div>
                  </div>
                </div>
              )}

              {registrationStatus === "experienced" && (
                <div className="bg-purple-50 p-4 rounded-lg space-y-3">
                  <h3 className="font-semibold text-purple-900 flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Share Your Experience
                  </h3>
                  <textarea
                    placeholder="How was your registration experience? Tips for others?"
                    className="w-full p-2 border rounded text-sm resize-none"
                    rows={3}
                  />
                  <div className="flex items-center gap-2 text-purple-700">
                    <Camera className="h-4 w-4" />
                    <span className="text-sm">Add photo of your voter card (optional)</span>
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <Button onClick={() => setStep(2)} className="w-full bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700">
                  <Share2 className="mr-2 h-4 w-4" />
                  Mobilize Friends & Community
                </Button>
                <Button onClick={onClose} variant="outline" className="w-full">
                  Continue Exploring
                </Button>
              </div>
            </CardContent>
          </>
        )}

        {step === 2 && (
          <>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <Share2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Mobilize Kenya 📣</CardTitle>
              <CardDescription>
                Share powerful messages across platforms!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <label className="text-sm font-medium">Customize Your Message:</label>
                <textarea
                  value={shareMessage.text}
                  onChange={(e) => setShareMessage({...shareMessage, text: e.target.value})}
                  className="w-full p-3 border rounded-lg text-sm resize-none"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button onClick={handleShareToWhatsApp} className="bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
                <Button onClick={handleShareToTwitter} className="bg-blue-600 hover:bg-blue-700">
                  <Share2 className="mr-2 h-4 w-4" />
                  Twitter
                </Button>
                <Button onClick={handleShareToFacebook} className="bg-blue-800 hover:bg-blue-900">
                  <Share2 className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
                <Button onClick={handleCopyMessage} variant="outline">
                  Copy Message
                </Button>
              </div>

              <div className="bg-yellow-50 p-3 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2 text-sm">💡 Pro Tips:</h4>
                <ul className="text-xs text-yellow-800 space-y-1">
                  <li>• Share in family WhatsApp groups</li>
                  <li>• Post on university/college groups</li>
                  <li>• Add to your Instagram story</li>
                  <li>• Send to community leaders</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <Button onClick={() => setStep(1)} variant="outline" className="w-full">
                  ← Back to Planning
                </Button>
                <Button onClick={onClose} className="w-full bg-gradient-to-r from-red-600 to-green-600">
                  Done! Continue to Dashboard
                </Button>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  )
}