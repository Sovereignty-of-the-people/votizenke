"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { X, Users, CheckCircle, Share2, Calendar, MapPin, Camera, MessageCircle, Star, Clock, TrendingUp, Sparkles, Zap, Target } from "lucide-react"

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
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full max-w-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 border-green-500/30 shadow-2xl shadow-green-500/20">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-red-600"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 animate-pulse delay-1000"></div>
              </div>

              <motion.div
                className="absolute right-2 top-2 z-20"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="bg-black/50 hover:bg-black/70 text-white border border-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>

              {step === 1 && (
                <>
                  <CardHeader className="text-center pb-4 relative z-10">
                    <motion.div 
                      className="mx-auto w-20 h-20 bg-gradient-to-r from-red-600 via-green-600 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/30"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.1, rotate: 0 }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      >
                        <Users className="h-10 w-10 text-white" />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <CardTitle className="text-3xl font-black text-white mb-2">
                        Voter Registration Hub 🇰🇪
                      </CardTitle>
                      <CardDescription className="text-lg text-green-400 font-medium">
                        Plan, track, and mobilize for Kenya's democratic future!
                      </CardDescription>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="space-y-6 relative z-10">
                    <motion.div 
                      className="grid grid-cols-3 gap-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          variant={registrationStatus === "planning" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setRegistrationStatus("planning")}
                          className={`text-xs font-bold relative overflow-hidden group ${
                            registrationStatus === "planning" 
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 border-0' 
                              : 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 border-gray-600 hover:border-blue-500/50'
                          }`}
                        >
                          <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                          <div className="relative flex items-center">
                            <motion.div
                              animate={registrationStatus === "planning" ? { scale: [1, 1.2, 1] } : {}}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              <Calendar className="h-3 w-3 mr-1" />
                            </motion.div>
                            Plan
                          </div>
                        </Button>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          variant={registrationStatus === "registered" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setRegistrationStatus("registered")}
                          className={`text-xs font-bold relative overflow-hidden group ${
                            registrationStatus === "registered" 
                              ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-500/30 border-0' 
                              : 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 border-gray-600 hover:border-green-500/50'
                          }`}
                        >
                          <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                          <div className="relative flex items-center">
                            <motion.div
                              animate={registrationStatus === "registered" ? { scale: [1, 1.2, 1] } : {}}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              <CheckCircle className="h-3 w-3 mr-1" />
                            </motion.div>
                            Registered
                          </div>
                        </Button>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          variant={registrationStatus === "experienced" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setRegistrationStatus("experienced")}
                          className={`text-xs font-bold relative overflow-hidden group ${
                            registrationStatus === "experienced" 
                              ? 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white shadow-lg shadow-yellow-500/30 border-0' 
                              : 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 border-gray-600 hover:border-yellow-500/50'
                          }`}
                        >
                          <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                          <div className="relative flex items-center">
                            <motion.div
                              animate={registrationStatus === "experienced" ? { scale: [1, 1.2, 1] } : {}}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              <Star className="h-3 w-3 mr-1" />
                            </motion.div>
                            Experience
                          </div>
                        </Button>
                      </motion.div>
                    </motion.div>

                    <AnimatePresence mode="wait">
                      {registrationStatus === "planning" && (
                        <motion.div
                          key="planning"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 space-y-4"
                        >
                          <motion.h3 
                            className="font-bold text-white flex items-center text-lg"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Calendar className="h-5 w-5 mr-2 text-blue-400" />
                            </motion.div>
                            Plan Your Registration
                          </motion.h3>
                          
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-3"
                          >
                            <div className="relative">
                              <Input
                                placeholder="📅 Target date (e.g., This Friday)"
                                value={registrationPlan.date}
                                onChange={(e) => setRegistrationPlan({...registrationPlan, date: e.target.value})}
                                className="text-sm bg-black/30 border-blue-500/30 text-white placeholder-blue-300 focus:border-blue-400 focus:ring-blue-400/20"
                              />
                              <motion.div
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <Sparkles className="h-4 w-4 text-blue-400" />
                              </motion.div>
                            </div>
                            
                            <div className="relative">
                              <Input
                                placeholder="📍 IEBC Center location (e.g., KICC, Nairobi)"
                                value={registrationPlan.location}
                                onChange={(e) => setRegistrationPlan({...registrationPlan, location: e.target.value})}
                                className="text-sm bg-black/30 border-blue-500/30 text-white placeholder-blue-300 focus:border-blue-400 focus:ring-blue-400/20"
                              />
                              <motion.div
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                              >
                                <MapPin className="h-4 w-4 text-blue-400" />
                              </motion.div>
                            </div>
                            
                            <div className="relative">
                              <Input
                                placeholder="📝 Notes (e.g., Bring ID, passport photo)"
                                value={registrationPlan.notes}
                                onChange={(e) => setRegistrationPlan({...registrationPlan, notes: e.target.value})}
                                className="text-sm bg-black/30 border-blue-500/30 text-white placeholder-blue-300 focus:border-blue-400 focus:ring-blue-400/20"
                              />
                              <motion.div
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                              >
                                <Zap className="h-4 w-4 text-blue-400" />
                              </motion.div>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}

                      {registrationStatus === "registered" && (
                        <motion.div
                          key="registered"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 space-y-4"
                        >
                          <motion.h3 
                            className="font-bold text-white flex items-center text-lg"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                            </motion.div>
                            Registration Status
                          </motion.h3>
                          
                          <motion.div 
                            className="space-y-3"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <motion.div
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-4 py-2 shadow-lg shadow-green-500/30">
                                🎉 Registered Voter
                              </Badge>
                            </motion.div>
                            <p className="text-green-300 font-medium">Share your success and inspire others!</p>
                            <motion.div 
                              className="flex items-center gap-2 text-green-400"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <TrendingUp className="h-4 w-4" />
                              </motion.div>
                              <span className="font-medium">You're part of 50,000+ youth registered!</span>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      )}

                      {registrationStatus === "experienced" && (
                        <motion.div
                          key="experienced"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 space-y-4"
                        >
                          <motion.h3 
                            className="font-bold text-white flex items-center text-lg"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 15, -15, 0] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <MessageCircle className="h-5 w-5 mr-2 text-purple-400" />
                            </motion.div>
                            Share Your Experience
                          </motion.h3>
                          
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-3"
                          >
                            <textarea
                              placeholder="How was your registration experience? Tips for others?"
                              className="w-full p-3 bg-black/30 border-purple-500/30 rounded-lg text-sm text-white placeholder-purple-300 focus:border-purple-400 focus:ring-purple-400/20 resize-none"
                              rows={3}
                            />
                            <motion.div 
                              className="flex items-center gap-2 text-purple-400"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <Camera className="h-4 w-4" />
                              </motion.div>
                              <span className="text-sm font-medium">Add photo of your voter card (optional)</span>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.div 
                      className="space-y-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          onClick={() => setStep(2)} 
                          className="w-full bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white font-bold shadow-lg shadow-green-500/30 border-2 border-white/20 relative overflow-hidden group"
                        >
                          <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                          <div className="relative flex items-center justify-center">
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              <Share2 className="mr-2 h-4 w-4" />
                            </motion.div>
                            Mobilize Friends & Community
                          </div>
                        </Button>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          onClick={onClose} 
                          variant="outline" 
                          className="w-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 border-gray-600 hover:border-white/50 font-bold"
                        >
                          Continue Exploring
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </>
              )}

              {step === 2 && (
                <>
                  <CardHeader className="text-center pb-4 relative z-10">
                    <motion.div 
                      className="mx-auto w-20 h-20 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.1, rotate: 0 }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      >
                        <Share2 className="h-10 w-10 text-white" />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <CardTitle className="text-3xl font-black text-white mb-2">
                        Mobilize Kenya 📣
                      </CardTitle>
                      <CardDescription className="text-lg text-purple-400 font-medium">
                        Share powerful messages across platforms!
                      </CardDescription>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="space-y-4 relative z-10">
                    <motion.div 
                      className="space-y-3"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="text-sm font-bold text-white">Customize Your Message:</label>
                      <textarea
                        value={shareMessage.text}
                        onChange={(e) => setShareMessage({...shareMessage, text: e.target.value})}
                        className="w-full p-3 bg-black/30 border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:border-purple-400 focus:ring-purple-400/20 resize-none"
                        rows={3}
                      />
                    </motion.div>

                    <motion.div 
                      className="grid grid-cols-2 gap-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={handleShareToWhatsApp}
                          className="bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg shadow-green-500/30"
                        >
                          <Share2 className="mr-2 h-4 w-4" />
                          WhatsApp
                        </Button>
                      </motion.div>
                      
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={handleShareToTwitter}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/30"
                        >
                          <Share2 className="mr-2 h-4 w-4" />
                          Twitter
                        </Button>
                      </motion.div>
                      
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={handleShareToFacebook}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-500/30"
                        >
                          <Share2 className="mr-2 h-4 w-4" />
                          Facebook
                        </Button>
                      </motion.div>
                      
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={handleCopyMessage}
                          variant="outline"
                          className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 border-gray-600 hover:border-white/50 font-bold"
                        >
                          <Share2 className="mr-2 h-4 w-4" />
                          Copy Link
                        </Button>
                      </motion.div>
                    </motion.div>

                    <motion.div 
                      className="bg-purple-900/30 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="font-bold text-white mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-purple-400" />
                        Pro Tips for Maximum Impact:
                      </h4>
                      <ul className="text-sm text-purple-300 space-y-1">
                        <li>• Share in WhatsApp family groups</li>
                        <li>• Post on your Instagram story</li>
                        <li>• Send to community leaders</li>
                        <li>• Use local hashtags like #NairobiVotes</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          onClick={() => setStep(1)} 
                          variant="outline" 
                          className="w-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 border-gray-600 hover:border-white/50 font-bold"
                        >
                          ← Back to Planning
                        </Button>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          onClick={onClose} 
                          className="w-full bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white font-bold shadow-lg shadow-green-500/30 border-2 border-white/20 relative overflow-hidden group"
                        >
                          <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                          <div className="relative flex items-center justify-center">
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              <Target className="mr-2 h-4 w-4" />
                            </motion.div>
                            Done! Continue to Dashboard
                          </div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </>
              )}
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}