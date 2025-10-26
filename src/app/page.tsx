"use client"

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, ArrowRight, BarChart3, Award, Target, TrendingUp, Shield, BookOpen, Zap, Globe, Heart } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { EmotionalHero } from "@/components/emotional-hero";

export default function Home() {
  // Remove automatic redirect - allow authenticated users to access landing page
  // Users can navigate to dashboard via navigation menu

  const impactStats = [
    { label: "Youth Mobilized", value: "50,000+", icon: Users, color: "text-green-600" },
    { label: "Cities Active", value: "23", icon: Globe, color: "text-blue-600" },
    { label: "New Voters", value: "12,000+", icon: Shield, color: "text-purple-600" },
    { label: "Civic Actions", value: "1,200+", icon: Zap, color: "text-orange-600" }
  ]

  // Original powerful messaging with futuristic design
  const activismSections = [
    {
      title: "OUR TAXES, THEIR EMPIRES",
      subtitle: "Stop Funding Political Elites",
      description: "Every shilling in their pockets comes from our taxes. It's time we take back control of our resources and our future.",
      image: "https://images.unsplash.com/photo-1559028012-c746a5aee2db?w=1200&h=600&fit=crop&crop=entropy&auto=format",
      cta: "Register to Vote",
      ctaLink: "/voter-registration",
      overlay: "bg-gradient-to-r from-black/90 via-red-900/80 to-black/90"
    },
    {
      title: "GEN Z RISING",
      subtitle: "The Revolution Has Begun",
      description: "From the streets of Nairobi to Mombasa, Kenyan youth are waking up. We saw it in the demos - our power when united.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&crop=entropy&auto=format",
      cta: "Join Movement",
      ctaLink: "/community",
      overlay: "bg-gradient-to-l from-black/90 via-green-900/80 to-black/90"
    },
    {
      title: "YOUR VOTE IS YOUR VOICE",
      subtitle: "Make It Count",
      description: "They want us to remain silent while they loot our country. Your voter card is your weapon against corruption.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=600&fit=crop&crop=entropy&auto=format",
      cta: "Register Now",
      ctaLink: "/voter-registration",
      overlay: "bg-gradient-to-br from-black/90 via-white/10 to-black/90"
    }
  ]

  // Original powerful messaging with futuristic design
  const actionCards = [
    {
      title: "STOP BEING USED",
      description: "Political elites use our taxes to build their empires while we struggle. Break the chains.",
      icon: Shield,
      color: "bg-gradient-to-br from-red-600 to-red-800",
      image: "https://images.unsplash.com/photo-1559028012-c746a5aee2db?w=400&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "REGISTER AS VOTER",
      description: "Your voter card is your power. Without it, you're just watching them steal our future.",
      icon: Users,
      color: "bg-gradient-to-br from-green-600 to-green-800",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=entropy&auto=format",
      link: "/voter-registration"
    },
    {
      title: "UNITE FOR CHANGE",
      description: "Together we are millions. Divided we are nothing. Join the youth revolution.",
      icon: Target,
      color: "bg-gradient-to-br from-white to-gray-800",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "DEMAND ACCOUNTABILITY",
      description: "They work for us, not the other way around. Make them answer to the people.",
      icon: Award,
      color: "bg-gradient-to-br from-red-700 to-black",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "PROTECT OUR RESOURCES",
      description: "Our taxes fund their lifestyles. Our resources build their empires. Take back what's ours.",
      icon: Globe,
      color: "bg-gradient-to-br from-green-700 to-black",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "LEAD THE REVOLUTION",
      description: "The future of Kenya is in our hands. Are you ready to lead the change?",
      icon: Zap,
      color: "bg-gradient-to-br from-white via-red-600 to-black",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=entropy&auto=format"
    }
  ]

  const features = [
    {
      icon: BookOpen,
      title: "Civic Education",
      description: "Learn about your constitutional rights, voting process, and democratic participation",
      color: "bg-blue-100 text-blue-600",
      link: "/learn"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connect with like-minded youth and build networks for change",
      color: "bg-green-100 text-green-600",
      link: "/community"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Data-driven insights on voting patterns and political trends",
      color: "bg-purple-100 text-purple-600",
      link: "/predictive"
    },
    {
      icon: Award,
      title: "Leadership Academy",
      description: "Develop skills to become effective civic leaders and organizers",
      color: "bg-orange-100 text-orange-600",
      link: "/leadership"
    },
    {
      icon: Target,
      title: "Campaign Tools",
      description: "Organize campaigns, rallies, and voter registration drives",
      color: "bg-red-100 text-red-600",
      link: "/campaign"
    },
    {
      icon: BarChart3,
      title: "Impact Tracking",
      description: "Measure your civic influence and contribution to democracy",
      color: "bg-indigo-100 text-indigo-600",
      link: "/analytics"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <EmotionalHero />

      {/* Sections are now consolidated into the EmotionalHero component */}

      {/* Horizontal Action Cards - Futuristic Sci-Fi Design */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0">
          {/* Digital Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, 0.05) 75%, rgba(255, 0, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, 0.05) 75%, rgba(255, 0, 255, 0.05) 76%, transparent 77%, transparent)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          {/* Animated Data Streams */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-pulse"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-magenta-500/20 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-600 to-magenta-600 text-white border-2 border-cyan-400 text-lg px-6 py-3 font-bold shadow-lg shadow-cyan-500/30">
              ⚡ ACTIVATION PROTOCOLS
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-400">Revolution Path</span>
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
              Select your mission. Each path is designed to maximize your impact in the fight for Kenya's future.
            </p>
          </div>

          {/* Horizontal Scrolling Container */}
          <div className="relative">
            {/* Scroll Indicators */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
              <div className="bg-gradient-to-r from-gray-900 to-transparent w-8 h-full"></div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
              <div className="bg-gradient-to-l from-gray-900 to-transparent w-8 h-full"></div>
            </div>
            
            <div className="overflow-x-auto scrollbar-hide pb-6">
              <div className="flex gap-6 min-w-max px-4 lg:px-0">
                {actionCards.map((card, index) => (
                  <div key={index} className="group relative w-80 flex-shrink-0">
                    {/* Futuristic Card Design */}
                    <div className="relative h-96 bg-gradient-to-br from-gray-800/90 via-black/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:transform hover:scale-105 overflow-hidden">
                      {/* Corner Tech Brackets */}
                      <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-magenta-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-magenta-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="h-full w-full" style={{
                          backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(0, 255, 255, 0.1) 49%, rgba(0, 255, 255, 0.1) 51%, transparent 52%), linear-gradient(-45deg, transparent 48%, rgba(255, 0, 255, 0.1) 49%, rgba(255, 0, 255, 0.1) 51%, transparent 52%)`,
                          backgroundSize: '20px 20px'
                        }}></div>
                      </div>
                      
                      {/* Icon Container with Glow */}
                      <div className="flex justify-center pt-8 pb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-magenta-500 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity"></div>
                          <div className="relative p-4 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30">
                            <card.icon className="h-10 w-10 text-cyan-400" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="text-center px-6">
                        <h3 className="text-xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-magenta-400 transition-all duration-300">
                          {card.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                          {card.description}
                        </p>
                        
                        {/* Futuristic Button */}
                        {card.link ? (
                          <Link href={card.link}>
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-magenta-600/20 border border-cyan-500/30 rounded-full hover:border-cyan-400 hover:from-cyan-600/30 hover:to-magenta-600/30 transition-all duration-300 group">
                              <span className="text-cyan-400 font-bold text-sm">EXECUTE</span>
                              <ArrowRight className="h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </Link>
                        ) : (
                          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-full">
                            <span className="text-red-400 font-bold text-sm">ACTIVATED</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Scanning Line Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Data Points Animation */}
                      <div className="absolute top-4 right-4 flex gap-1">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-magenta-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom Status Indicator */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-6 bg-gradient-to-r from-cyan-900/30 to-magenta-900/30 backdrop-blur-sm px-8 py-4 rounded-full border border-cyan-500/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 font-bold text-sm">PROTOCOLS ACTIVE</span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-white font-medium text-sm">6 MISSION PATHS READY</span>
              <span className="text-gray-500">•</span>
              <span className="text-magenta-400 font-bold text-sm">REVOLUTION MODE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Futuristic Design */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0">
          {/* Digital Grid Pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, 0.08) 25%, rgba(0, 255, 0, 0.08) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, 0.08) 25%, rgba(0, 255, 0, 0.08) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          {/* Animated Data Streams */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent animate-pulse"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-white text-black border-2 border-green-400 text-lg px-6 py-3 font-bold shadow-lg shadow-green-500/30">
              ⚡ PLATFORM ARSENAL
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Revolutionary Tools for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">Digital Activism</span>
            </h2>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
              Cutting-edge technology and strategic resources engineered specifically for Kenyan youth 
              to dismantle corrupt systems and build a new democratic future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                {/* Futuristic Card */}
                <div className="relative bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 hover:transform hover:scale-105 h-full">
                  {/* Corner Tech Brackets */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-red-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-red-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Icon Container with Glow */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`absolute inset-0 ${feature.color} rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                      <div className={`relative p-4 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-700 ${feature.color}`}>
                        <feature.icon className="h-8 w-8" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-red-400 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Futuristic Button */}
                    <Link href={feature.link}>
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600/20 to-red-600/20 border border-green-500/30 rounded-full hover:border-green-400 hover:from-green-600/30 hover:to-red-600/30 transition-all duration-300 group">
                        <span className="text-green-400 font-bold text-sm">ACTIVATE</span>
                        <ArrowRight className="h-4 w-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                  
                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Status Indicator */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-6 bg-gradient-to-r from-green-900/30 to-red-900/30 backdrop-blur-sm px-8 py-4 rounded-full border border-green-500/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-bold text-sm">SYSTEMS ONLINE</span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-white font-medium text-sm">6 ACTIVATION MODULES READY</span>
              <span className="text-gray-500">•</span>
              <span className="text-red-400 font-bold text-sm">REVOLUTION MODE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section - Futuristic Design */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0">
          {/* Digital Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, 0.05) 25%, rgba(0, 255, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.05) 75%, rgba(255, 0, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, 0.05) 25%, rgba(0, 255, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.05) 75%, rgba(255, 0, 0, 0.05) 76%, transparent 77%, transparent)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          {/* Animated Scanning Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-red-600 text-white border-2 border-green-400 text-lg px-6 py-3 font-bold shadow-lg shadow-green-500/30">
              📊 LIVE IMPACT METRICS
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Making Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">Impact</span>
            </h2>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
              Across Kenya, youth are rising up and taking back power. These aren't just numbers - 
              they're revolution in motion, powered by your voter registration and civic action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="relative group">
                {/* Card with futuristic styling */}
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:transform hover:scale-105">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500 rounded-br-lg"></div>
                  
                  {/* Icon with glow effect */}
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-xl ${stat.color} bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg`}>
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Value with animated effect */}
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-red-400 transition-all duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Subtle data stream effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom call-to-action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-900/50 to-red-900/50 backdrop-blur-sm px-8 py-4 rounded-full border border-green-500/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-bold">LIVE DATA</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-white font-medium">Updated in real-time as youth register</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - More Powerful */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-black to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-600 text-white border-red-500">Our Revolution</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                They Built Empires With Our Taxes
              </h2>
              <p className="text-xl text-white mb-6 leading-relaxed">
                For decades, political elites have used our hard-earned taxes to build their business empires, 
                fund their lavish lifestyles, and maintain their grip on power. They fly in private jets while we 
                struggle to afford basic necessities. They send their children to elite schools abroad while our 
                public education system crumbles.
              </p>
              <p className="text-xl text-white mb-8 leading-relaxed">
                VotizenKE is our answer. We're the generation that says "ENOUGH!" We're using their own system 
                against them - registering to vote in massive numbers, uniting across tribal lines, and taking 
                back control of our country. Your voter card is your weapon. Unity is our strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/voter-registration">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold w-full sm:w-auto">
                    Register to Vote Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/community">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-bold w-full sm:w-auto btn-outline-dark-bg">
                    Join the Revolution
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                <Users className="h-8 w-8 text-red-400 mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2 text-white text-center">Youth Unity</h3>
                <p className="text-gray-300 text-center">
                  Breaking tribal chains that politicians use to divide us
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                <Shield className="h-8 w-8 text-green-400 mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2 text-white text-center">Voter Power</h3>
                <p className="text-gray-300 text-center">
                  Millions of youth votes can change Kenya's destiny forever
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                <Target className="h-8 w-8 text-blue-400 mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2 text-white text-center">Resource Justice</h3>
                <p className="text-gray-300 text-center">
                  Taking back our taxes and resources from political thieves
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center">
                <Zap className="h-8 w-8 text-yellow-400 mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2 text-white text-center">Revolution Now</h3>
                <p className="text-gray-300 text-center">
                  The time for talk is over. The revolution starts with you.
                </p>
              </div>
            </div>
            <div className="lg:hidden">
              <Tabs defaultValue="youth-unity" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="youth-unity">Youth Unity</TabsTrigger>
                  <TabsTrigger value="voter-power">Voter Power</TabsTrigger>
                  <TabsTrigger value="resource-justice">Resource Justice</TabsTrigger>
                  <TabsTrigger value="revolution-now">Revolution Now</TabsTrigger>
                </TabsList>
                <TabsContent value="youth-unity">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 mt-4 text-center">
                    <Users className="h-8 w-8 text-red-400 mb-4 mx-auto" />
                    <h3 className="font-semibold text-lg mb-2 text-white text-center">Youth Unity</h3>
                    <p className="text-gray-300 text-center">
                      Breaking tribal chains that politicians use to divide us
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="voter-power">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 mt-4 text-center">
                    <Shield className="h-8 w-8 text-green-400 mb-4 mx-auto" />
                    <h3 className="font-semibold text-lg mb-2 text-white text-center">Voter Power</h3>
                    <p className="text-gray-300 text-center">
                      Millions of youth votes can change Kenya's destiny forever
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="resource-justice">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 mt-4 text-center">
                    <Target className="h-8 w-8 text-blue-400 mb-4 mx-auto" />
                    <h3 className="font-semibold text-lg mb-2 text-white text-center">Resource Justice</h3>
                    <p className="text-gray-300 text-center">
                      Taking back our taxes and resources from political thieves
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="revolution-now">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 mt-4 text-center">
                    <Zap className="h-8 w-8 text-yellow-400 mb-4 mx-auto" />
                    <h3 className="font-semibold text-lg mb-2 text-white text-center">Revolution Now</h3>
                    <p className="text-gray-300 text-center">
                      The time for talk is over. The revolution starts with you.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Ultimate Futuristic Design */}
      <section className="py-24 bg-gradient-to-br from-black via-red-950 to-black relative overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0">
          {/* Digital Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 0, 0, 0.03) 25%, rgba(255, 0, 0, 0.03) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, 0.03) 75%, rgba(0, 255, 0, 0.03) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 0, 0, 0.03) 25%, rgba(255, 0, 0, 0.03) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, 0.03) 75%, rgba(0, 255, 0, 0.03) 76%, transparent 77%, transparent)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          {/* Scanning Lines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-8 bg-gradient-to-r from-red-600 to-green-600 text-white border-2 border-red-400 text-lg px-8 py-4 font-bold shadow-lg shadow-red-500/30">
            ⚡ REVOLUTION ACTIVATED
          </Badge>
          <h2 className="text-4xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            Are You Ready to<br/>Take Back Kenya?
          </h2>
          <p className="text-xl md:text-3xl text-white mb-16 max-w-5xl mx-auto leading-relaxed font-medium">
            Political elites have stolen our future for too long. They've built empires on our taxes, 
            divided us along tribal lines, and treated our country like their personal ATM.<br/><br/>
            <span className="text-red-400 font-black text-2xl md:text-4xl">ENOUGH IS ENOUGH.</span><br/>
            The revolution starts with your voter registration. It continues with your vote. 
            It ends with us taking back our country.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
            <Link href="/voter-registration">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-12 py-8 text-2xl font-black border-2 border-red-400 shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 transition-all transform hover:scale-105 w-full sm:w-auto">
                REGISTER AS VOTER NOW <ArrowRight className="ml-4 h-8 w-8" />
              </Button>
            </Link>
            <Link href="/analytics" className="w-full sm:w-auto sm:flex">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-8 text-2xl font-bold transition-all transform hover:scale-105">
                SEE IMPACT
              </Button>
            </Link>
            <Link href="/community" className="hidden sm:flex">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-8 text-2xl font-bold transition-all transform hover:scale-105 w-full sm:w-auto btn-outline-dark-bg">
                JOIN MOVEMENT
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <p className="text-white text-2xl font-bold mb-4">
              #GenZRevolution #TakeBackKenya #OurTaxesOurFuture
            </p>
            <div className="flex justify-center gap-8 text-white">
              <span className="text-sm">🇰🇪 50,000+ YOUTH MOBILIZED</span>
              <span className="text-sm">📍 42/47 COUNTIES ACTIVE</span>
              <span className="text-sm">⚡ REVOLUTION IS NOW</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
