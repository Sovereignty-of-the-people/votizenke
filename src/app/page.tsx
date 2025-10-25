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
      ctaLink: "/auth/signin",
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
      ctaLink: "/auth/signin",
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
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=entropy&auto=format"
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 text-sm px-4 py-2">
              Platform Features
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to Create Change
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and resources designed specifically for Kenyan youth engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-sm">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={feature.link}>
                    <Button variant="ghost" className="p-0 h-auto font-medium text-green-600 hover:text-green-700">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
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
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                For decades, political elites have used our hard-earned taxes to build their business empires, 
                fund their lavish lifestyles, and maintain their grip on power. They fly in private jets while we 
                struggle to afford basic necessities. They send their children to elite schools abroad while our 
                public education system crumbles.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                VotizenKE is our answer. We're the generation that says "ENOUGH!" We're using their own system 
                against them - registering to vote in massive numbers, uniting across tribal lines, and taking 
                back control of our country. Your voter card is your weapon. Unity is our strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/signin">
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
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Users className="h-8 w-8 text-red-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-white">Youth Unity</h3>
                <p className="text-gray-300">
                  Breaking tribal chains that politicians use to divide us
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Shield className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-white">Voter Power</h3>
                <p className="text-gray-300">
                  Millions of youth votes can change Kenya's destiny forever
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Target className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-white">Resource Justice</h3>
                <p className="text-gray-300">
                  Taking back our taxes and resources from political thieves
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <Zap className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-white">Revolution Now</h3>
                <p className="text-gray-300">
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
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 mt-4">
                    <Users className="h-8 w-8 text-red-400 mb-4" />
                    <h3 className="font-semibold text-lg mb-2 text-white">Youth Unity</h3>
                    <p className="text-gray-300">
                      Breaking tribal chains that politicians use to divide us
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="voter-power">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 mt-4">
                    <Shield className="h-8 w-8 text-green-400 mb-4" />
                    <h3 className="font-semibold text-lg mb-2 text-white">Voter Power</h3>
                    <p className="text-gray-300">
                      Millions of youth votes can change Kenya's destiny forever
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="resource-justice">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 mt-4">
                    <Target className="h-8 w-8 text-blue-400 mb-4" />
                    <h3 className="font-semibold text-lg mb-2 text-white">Resource Justice</h3>
                    <p className="text-gray-300">
                      Taking back our taxes and resources from political thieves
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="revolution-now">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 mt-4">
                    <Zap className="h-8 w-8 text-yellow-400 mb-4" />
                    <h3 className="font-semibold text-lg mb-2 text-white">Revolution Now</h3>
                    <p className="text-gray-300">
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
          <p className="text-xl md:text-3xl text-gray-200 mb-16 max-w-5xl mx-auto leading-relaxed font-medium">
            Political elites have stolen our future for too long. They've built empires on our taxes, 
            divided us along tribal lines, and treated our country like their personal ATM.<br/><br/>
            <span className="text-red-400 font-black text-2xl md:text-4xl">ENOUGH IS ENOUGH.</span><br/>
            The revolution starts with your voter registration. It continues with your vote. 
            It ends with us taking back our country.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
            <Link href="/auth/signin">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-12 py-8 text-2xl font-black border-2 border-red-400 shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 transition-all transform hover:scale-105 w-full sm:w-auto">
                REGISTER AS VOTER NOW <ArrowRight className="ml-4 h-8 w-8" />
              </Button>
            </Link>
            <Link href="/analytics" className="hidden sm:flex">
              <Button size="lg" variant="outline" className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-12 py-8 text-2xl font-bold transition-all transform hover:scale-105 w-full sm:w-auto">
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
            <p className="text-gray-400 text-2xl font-bold mb-4">
              #GenZRevolution #TakeBackKenya #OurTaxesOurFuture
            </p>
            <div className="flex justify-center gap-8 text-gray-400">
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
