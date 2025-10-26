"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  backgroundType: string
  cta: string
  ctaLink: string
  stats: string
  primaryColor: string
  secondaryColor: string
}

interface BackgroundProps {
  primaryColor: string
  secondaryColor: string
}

export function EmotionalHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const slides: Slide[] = [
    {
      id: 1,
      title: "Your Voice Matters",
      subtitle: "Join thousands of Kenyan youth demanding change",
      description: "From protests to policies - be the change. The future of Kenya is in your hands.",
      backgroundType: "network",
      cta: "Start Your Journey",
      ctaLink: "/voter-registration",
      stats: "50,000+ Youth Mobilized",
      primaryColor: "from-cyan-500 to-blue-500",
      secondaryColor: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      title: "Democracy is Action",
      subtitle: "From protests to policies - be the change",
      description: "From the streets of Nairobi to Mombasa, Kenyan youth are waking up. We saw it in the demos - our power when united.",
      backgroundType: "wave",
      cta: "Get Involved",
      ctaLink: "/community",
      stats: "23 Cities Active",
      primaryColor: "from-purple-500 to-pink-500",
      secondaryColor: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      title: "Register. Vote. Lead.",
      subtitle: "The future of Kenya is in your hands",
      description: "They want us to remain silent while they loot our country. Your voter card is your weapon against corruption.",
      backgroundType: "particles",
      cta: "Register to Vote",
      ctaLink: "/voter-registration",
      stats: "12,000+ New Voters",
      primaryColor: "from-green-500 to-teal-500",
      secondaryColor: "from-blue-500 to-indigo-500"
    },
    {
      id: 4,
      title: "OUR TAXES, THEIR EMPIRES",
      subtitle: "Stop Funding Political Elites",
      description: "Every shilling in their pockets comes from our taxes. It's time we take back control of our resources and our future.",
      backgroundType: "matrix",
      cta: "Register to Vote",
      ctaLink: "/voter-registration",
      stats: "50,000+ Youth Mobilized",
      primaryColor: "from-red-500 to-orange-500",
      secondaryColor: "from-yellow-500 to-amber-500"
    },
    {
      id: 5,
      title: "GEN Z RISING",
      subtitle: "The Revolution Has Begun",
      description: "From the streets of Nairobi to Mombasa, Kenyan youth are waking up. We saw it in the demos - our power when united.",
      backgroundType: "geometric",
      cta: "Join Movement",
      ctaLink: "/community",
      stats: "23 Cities Active",
      primaryColor: "from-pink-500 to-rose-500",
      secondaryColor: "from-purple-500 to-indigo-500"
    },
    {
      id: 6,
      title: "YOUR VOTE IS YOUR VOICE",
      subtitle: "Make It Count",
      description: "They want us to remain silent while they loot our country. Your voter card is your weapon against corruption.",
      backgroundType: "constellation",
      cta: "Register Now",
      ctaLink: "/voter-registration",
      stats: "12,000+ New Voters",
      primaryColor: "from-blue-500 to-cyan-500",
      secondaryColor: "from-green-500 to-lime-500"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000) // Balanced timing for comfortable viewing
    return () => clearInterval(interval)
  }, [slides.length])

  // Generate deterministic positions only on client
  const generatePositions = (count: number) => {
    if (!isClient) return Array(count).fill(null).map((_, i) => ({
      left: (i * 10) % 100,
      top: (i * 15) % 100,
      delay: (i * 0.2) % 3
    }))
    
    return Array(count).fill(null).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3
    }))
  }

  // Futuristic background components
  const NetworkBackground: React.FC<BackgroundProps> = ({ primaryColor, secondaryColor }) => {
    const nodes = generatePositions(15)
    const lines = generatePositions(8)
    
    return (
      <div className="absolute inset-0">
        {/* Animated Network Nodes */}
        <div className="absolute inset-0">
          {nodes.map((pos, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${pos.delay}s`,
                background: `linear-gradient(135deg, ${primaryColor.includes('cyan') ? '#00ffff' : primaryColor.includes('purple') ? '#a855f7' : '#10b981'}, ${secondaryColor.includes('blue') ? '#3b82f6' : secondaryColor.includes('green') ? '#10b981' : '#f59e0b'})`,
                boxShadow: `0 0 20px ${primaryColor.includes('cyan') ? '#00ffff' : primaryColor.includes('purple') ? '#a855f7' : '#10b981'}`
              }}
            />
          ))}
        </div>
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {lines.map((pos, i) => (
            <line
              key={i}
              x1={`${pos.left}%`}
              y1={`${pos.top}%`}
              x2={`${(pos.left + 20) % 100}%`}
              y2={`${(pos.top + 30) % 100}%`}
              stroke="url(#gradient)"
              strokeWidth="1"
              opacity="0.3"
              className="animate-pulse"
              style={{ animationDelay: `${pos.delay * 0.7}s` }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  const WaveBackground: React.FC<BackgroundProps> = ({ primaryColor, secondaryColor }) => (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-32 bg-gradient-to-r opacity-20"
          style={{
            background: `linear-gradient(90deg, transparent, ${primaryColor.includes('purple') ? '#a855f7' : '#f97316'}, transparent)`,
            top: `${i * 20}%`,
            animation: `wave ${8 + i * 2}s ease-in-out infinite`,
            transform: `translateX(-100%) skewY(-3deg)`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateX(-100%) skewY(-3deg); }
          50% { transform: translateX(100%) skewY(-3deg); }
        }
      `}</style>
    </div>
  )

  const ParticlesBackground: React.FC<BackgroundProps> = ({ primaryColor, secondaryColor }) => {
    const particles = generatePositions(50)
    
    return (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-teal-900/20"></div>
        {particles.map((pos, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-ping"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              animationDelay: `${pos.delay * 1.7}s`,
              animationDuration: `${3 + (pos.delay * 1.3)}s`
            }}
          />
        ))}
      </div>
    )
  }

  const MatrixBackground: React.FC<BackgroundProps> = ({ primaryColor, secondaryColor }) => {
    const matrixData = generatePositions(20)
    
    return (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 0, 0.03) 2px, rgba(255, 0, 0, 0.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 165, 0, 0.03) 2px, rgba(255, 165, 0, 0.03) 4px)`,
          backgroundSize: '40px 40px'
        }}></div>
        {matrixData.map((pos, i) => (
          <div
            key={i}
            className="absolute text-red-500 font-mono text-xs animate-pulse"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              animationDelay: `${pos.delay}s`,
              opacity: 0.3 + (pos.delay * 0.23)
            }}
          >
            {i % 2 === 0 ? '01' : '10'}
          </div>
        ))}
      </div>
    )
  }

  const GeometricBackground: React.FC<BackgroundProps> = ({ primaryColor, secondaryColor }) => {
    const shapes = generatePositions(8)
    
    return (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-black to-purple-900/20"></div>
        {shapes.map((pos, i) => (
          <div
            key={i}
            className="absolute border-2 animate-spin"
            style={{
              width: `${50 + (pos.left * 1.5)}px`,
              height: `${50 + (pos.top * 1.5)}px`,
              left: `${pos.left * 0.8}%`,
              top: `${pos.top * 0.8}%`,
              borderColor: primaryColor.includes('pink') ? '#ec4899' : '#8b5cf6',
              animationDuration: `${20 + (pos.delay * 6.7)}s`,
              animationDelay: `${pos.delay * 1.7}s`,
              opacity: 0.1 + (pos.delay * 0.067)
            }}
          />
        ))}
      </div>
    )
  }

  const ConstellationBackground: React.FC<BackgroundProps> = ({ primaryColor, secondaryColor }) => {
    const stars = generatePositions(12)
    const lines = generatePositions(6)
    
    return (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>
        <svg className="absolute inset-0 w-full h-full">
          {stars.map((pos, i) => (
            <circle
              key={i}
              cx={`${pos.left}%`}
              cy={`${pos.top}%`}
              r="2"
              fill="#00ffff"
              className="animate-pulse"
              style={{ animationDelay: `${pos.delay}s` }}
            />
          ))}
          {lines.map((pos, i) => (
            <line
              key={`line-${i}`}
              x1={`${pos.left}%`}
              y1={`${pos.top}%`}
              x2={`${(pos.left + 25) % 100}%`}
              y2={`${(pos.top + 35) % 100}%`}
              stroke="#00ffff"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}
        </svg>
      </div>
    )
  }

  const getBackground = (slide: Slide) => {
    switch (slide.backgroundType) {
      case 'network': return <NetworkBackground primaryColor={slide.primaryColor} secondaryColor={slide.secondaryColor} />
      case 'wave': return <WaveBackground primaryColor={slide.primaryColor} secondaryColor={slide.secondaryColor} />
      case 'particles': return <ParticlesBackground primaryColor={slide.primaryColor} secondaryColor={slide.secondaryColor} />
      case 'matrix': return <MatrixBackground primaryColor={slide.primaryColor} secondaryColor={slide.secondaryColor} />
      case 'geometric': return <GeometricBackground primaryColor={slide.primaryColor} secondaryColor={slide.secondaryColor} />
      case 'constellation': return <ConstellationBackground primaryColor={slide.primaryColor} secondaryColor={slide.secondaryColor} />
      default: return <div className="absolute inset-0 bg-black"></div>
    }
  }

  return (
    <section className="relative h-[700px] md:h-[800px] overflow-hidden bg-black">
      {/* Futuristic Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {getBackground(slide)}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
            {/* Digital Grid Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full" style={{
                backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 0, 0, 0.05) 25%, rgba(255, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, 0.05) 75%, rgba(0, 255, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 0, 0, 0.05) 25%, rgba(255, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, 0.05) 75%, rgba(0, 255, 0, 0.05) 76%, transparent 77%, transparent)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-white max-w-4xl mx-auto"
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

            {/* Live Stats */}
            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-2xl font-bold text-white">{slides[currentSlide].stats}</span>
              </div>
              <div className="text-lg text-white">
                Join revolution now
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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