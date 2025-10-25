"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function EmotionalHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Your Voice Matters",
      subtitle: "Join thousands of Kenyan youth demanding change",
      description: "From protests to policies - be the change. The future of Kenya is in your hands.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop",
      cta: "Start Your Journey",
      ctaLink: "/voter-registration",
      stats: "50,000+ Youth Mobilized"
    },
    {
      id: 2,
      title: "Democracy is Action",
      subtitle: "From protests to policies - be the change",
      description: "From the streets of Nairobi to Mombasa, Kenyan youth are waking up. We saw it in the demos - our power when united.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=600&fit=crop",
      cta: "Get Involved",
      ctaLink: "/community",
      stats: "23 Cities Active"
    },
    {
      id: 3,
      title: "Register. Vote. Lead.",
      subtitle: "The future of Kenya is in your hands",
      description: "They want us to remain silent while they loot our country. Your voter card is your weapon against corruption.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b55038a29?w=1200&h=600&fit=crop",
      cta: "Register to Vote",
      ctaLink: "/voter-registration",
      stats: "12,000+ New Voters"
    },
    {
      id: 4,
      title: "OUR TAXES, THEIR EMPIRES",
      subtitle: "Stop Funding Political Elites",
      description: "Every shilling in their pockets comes from our taxes. It's time we take back control of our resources and our future.",
      image: "https://images.unsplash.com/photo-1559028012-c746a5aee2db?w=1200&h=600&fit=crop&crop=entropy&auto=format",
      cta: "Register to Vote",
      ctaLink: "/voter-registration",
      stats: "50,000+ Youth Mobilized"
    },
    {
      id: 5,
      title: "GEN Z RISING",
      subtitle: "The Revolution Has Begun",
      description: "From the streets of Nairobi to Mombasa, Kenyan youth are waking up. We saw it in the demos - our power when united.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&crop=entropy&auto=format",
      cta: "Join Movement",
      ctaLink: "/community",
      stats: "23 Cities Active"
    },
    {
      id: 6,
      title: "YOUR VOTE IS YOUR VOICE",
      subtitle: "Make It Count",
      description: "They want us to remain silent while they loot our country. Your voter card is your weapon against corruption.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=600&fit=crop&crop=entropy&auto=format",
      cta: "Register Now",
      ctaLink: "/voter-registration",
      stats: "12,000+ New Voters"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000) // Increased interval for better readability
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-[700px] md:h-[800px] overflow-hidden bg-black">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
               {/* Digital Grid Effect */}
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full" style={{
                  backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 0, 0, 0.05) 25%, rgba(255, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, 0.05) 75%, rgba(0, 255, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 0, 0, 0.05) 25%, rgba(255, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, 0.05) 75%, rgba(0, 255, 0, 0.05) 76%, transparent 77%, transparent)`,
                  backgroundSize: '50px 50px'
                }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <Badge className="mb-6 bg-gradient-to-r from-red-600 to-green-600 text-white border-2 border-red-400 px-6 py-3 text-sm font-bold backdrop-blur-sm">
              ⚡ {slides[currentSlide].subtitle}
            </Badge>
            
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-3xl">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href={slides[currentSlide].ctaLink}>
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white px-8 py-4 text-lg font-bold border-2 border-white/30 shadow-lg">
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/analytics">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-red-400 bg-red-600 text-white hover:bg-red-700 hover:border-red-300 px-8 py-4 text-lg font-bold shadow-lg"
                >
                  See Impact
                </Button>
              </Link>
            </div>

            {/* Live Stats */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-2xl font-bold text-white">{slides[currentSlide].stats}</span>
              </div>
              <div className="text-lg text-gray-300">
                Join revolution now
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  )
}