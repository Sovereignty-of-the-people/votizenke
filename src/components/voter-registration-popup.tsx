"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Users, CheckCircle, Share2 } from "lucide-react"

interface VoterRegistrationPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function VoterRegistrationPopup({ isOpen, onClose }: VoterRegistrationPopupProps) {
  const [step, setStep] = useState(1)

  useEffect(() => {
    if (isOpen) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        // Auto-logic for popup display
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleShare = () => {
    const message = encodeURIComponent(
      "I just joined VotizenKE! Let's empower Kenyan youth to register, learn, and mobilize for democracy. 🇰🇪 #VotizenKE"
    )
    const url = encodeURIComponent("https://votizenke.vercel.app")
    
    window.open(
      `https://wa.me/?text=${message}%20${url}`,
      "_blank"
    )
    onClose()
  }

  const handleRegister = () => {
    window.open("https://www.iebc.or.ke/voter-registration/", "_blank")
    setStep(2)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute right-2 top-2"
        >
          <X className="h-4 w-4" />
        </Button>

        {step === 1 && (
          <>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Ready to Vote? 🇰🇪</CardTitle>
              <CardDescription>
                Join thousands of Kenyan youth making their voices heard!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Why Register to Vote?</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Shape Kenya's future</li>
                  <li>• Hold leaders accountable</li>
                  <li>• Make your voice count</li>
                  <li>• Honor those who fought for democracy</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <Button onClick={handleRegister} className="w-full bg-green-600 hover:bg-green-700">
                  Register to Vote Now
                </Button>
                <Button onClick={handleShare} variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Invite Friends to Join
                </Button>
              </div>
            </CardContent>
          </>
        )}

        {step === 2 && (
          <>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Amazing! 🎉</CardTitle>
              <CardDescription>
                You're on your way to making a difference!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Next Steps:</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>✅ Opened IEBC registration portal</li>
                  <li>⏳ Complete your registration</li>
                  <li>📱 Share with friends</li>
                  <li>🎯 Stay informed on civic issues</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <Button onClick={handleShare} className="w-full bg-green-600 hover:bg-green-700">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Your Journey
                </Button>
                <Button onClick={onClose} variant="outline" className="w-full">
                  Continue to Dashboard
                </Button>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  )
}