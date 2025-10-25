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
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop",
      cta: "Start Your Journey",
      stats: "50,000+ Youth Mobilized"
    },
    {
      id: 2,
      title: "Democracy is Action",
      subtitle: "From protests to policies - be the change",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=600&fit=crop",
      cta: "Get Involved",
      stats: "23 Cities Active"
    },
    {
      id: 3,
      title: "Register. Vote. Lead.",
      subtitle: "The future of Kenya is in your hands",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b55038a29?w=1200&h=600&fit=crop",
      cta: "Register to Vote",
      stats: "12,000+ New Voters"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-[600px] overflow-hidden">
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <Badge className="mb-6 bg-red-600 text-white text-lg px-6 py-3">
              🇰🇪 Movement for Change
            </Badge>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-red-500">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl md:text-3xl mb-12 text-red-400 max-w-3xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/auth/signin">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-xl font-bold">
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              
              <Link href="/analytics">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-10 py-6 text-xl font-bold"
                >
                  <ArrowRight className="mr-3 h-6 w-6" />
                  See Impact
                </Button>
              </Link>
            </div>

            {/* Live Stats */}
            <div className="flex items-center justify-center gap-8">
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
            className={`w-3 h-3 rounded-full transition-all ${
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