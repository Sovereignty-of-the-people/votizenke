"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Activity, 
  Users, 
  MapPin, 
  Calendar,
  Target,
  Brain,
  Zap,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react"

interface ElectionPrediction {
  candidate: string
  party: string
  currentSupport: number
  predictedSupport: number
  confidence: number
  trend: "up" | "down" | "stable"
  keyIssues: string[]
}

interface RegionalData {
  region: string
  registeredVoters: number
  youthTurnout: number
  swingPotential: number
  keyIssues: string[]
}

interface TrendAnalysis {
  topic: string
  mentions: number
  sentiment: number
  growth: number
  prediction: string
}

export function PredictiveTools() {
  const [selectedRegion, setSelectedRegion] = useState("national")
  const [timeframe, setTimeframe] = useState("7days")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const electionPredictions: ElectionPrediction[] = [
    {
      candidate: "Raila Odinga",
      party: "Azimio",
      currentSupport: 48.2,
      predictedSupport: 51.3,
      confidence: 78,
      trend: "up",
      keyIssues: ["Economic Reform", "Healthcare", "Education"]
    },
    {
      candidate: "William Ruto",
      party: "Kenya Kwanza",
      currentSupport: 46.8,
      predictedSupport: 47.1,
      confidence: 82,
      trend: "stable",
      keyIssues: ["Infrastructure", "Agriculture", "Digital Economy"]
    },
    {
      candidate: "Martha Karua",
      party: "NARC Kenya",
      currentSupport: 3.1,
      predictedSupport: 1.6,
      confidence: 65,
      trend: "down",
      keyIssues: ["Gender Equality", "Judicial Reform", "Anti-Corruption"]
    }
  ]

  const regionalData: RegionalData[] = [
    {
      region: "Nairobi",
      registeredVoters: 2450000,
      youthTurnout: 68,
      swingPotential: 12,
      keyIssues: ["Housing", "Transport", "Jobs"]
    },
    {
      region: "Mombasa",
      registeredVoters: 680000,
      youthTurnout: 62,
      swingPotential: 8,
      keyIssues: ["Tourism", "Port Development", "Security"]
    },
    {
      region: "Kisumu",
      registeredVoters: 890000,
      youthTurnout: 71,
      swingPotential: 5,
      keyIssues: ["Agriculture", "Healthcare", "Education"]
    },
    {
      region: "Eldoret",
      registeredVoters: 520000,
      youthTurnout: 65,
      swingPotential: 10,
      keyIssues: ["Agriculture", "Infrastructure", "Sports"]
    }
  ]

  const trendAnalysis: TrendAnalysis[] = [
    {
      topic: "Cost of Living",
      mentions: 45200,
      sentiment: -0.3,
      growth: 23,
      prediction: "Will remain top issue through election"
    },
    {
      topic: "Youth Employment",
      mentions: 38900,
      sentiment: -0.2,
      growth: 18,
      prediction: "Growing concern among 18-35 demographic"
    },
    {
      topic: "Corruption",
      mentions: 32100,
      sentiment: -0.6,
      growth: 12,
      prediction: "Stable high negative sentiment"
    },
    {
      topic: "Climate Change",
      mentions: 18700,
      sentiment: 0.1,
      growth: 45,
      prediction: "Rapidly growing issue among youth"
    }
  ]

  const runAnalysis = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 3000)
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-600" />
      default:
        return <Activity className="h-4 w-4 text-blue-600" />
    }
  }

  const getSentimentColor = (sentiment: number) => {
    if (sentiment > 0.2) return "text-green-600"
    if (sentiment < -0.2) return "text-red-600"
    return "text-yellow-600"
  }

  const getSentimentLabel = (sentiment: number) => {
    if (sentiment > 0.2) return "Positive"
    if (sentiment < -0.2) return "Negative"
    return "Neutral"
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Brain className="h-8 w-8 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">Predictive Analytics</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-powered insights for election forecasting, trend analysis, and strategic decision-making
        </p>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <div className="flex gap-2">
          <Button
            variant={selectedRegion === "national" ? "default" : "outline"}
            onClick={() => setSelectedRegion("national")}
          >
            National View
          </Button>
          <Button
            variant={selectedRegion === "county" ? "default" : "outline"}
            onClick={() => setSelectedRegion("county")}
          >
            County Breakdown
          </Button>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant={timeframe === "7days" ? "default" : "outline"}
            onClick={() => setTimeframe("7days")}
          >
            7 Days
          </Button>
          <Button
            variant={timeframe === "30days" ? "default" : "outline"}
            onClick={() => setTimeframe("30days")}
          >
            30 Days
          </Button>
          <Button
            variant={timeframe === "90days" ? "default" : "outline"}
            onClick={() => setTimeframe("90days")}
          >
            90 Days
          </Button>
        </div>

        <Button 
          onClick={runAnalysis} 
          disabled={isAnalyzing}
          className="bg-purple-600 hover:bg-purple-700"
        >
          {isAnalyzing ? (
            <>
              <Clock className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Zap className="mr-2 h-4 w-4" />
              Run AI Analysis
            </>
          )}
        </Button>
      </motion.div>

      {/* Election Predictions */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-purple-600" />
              2027 Presidential Election Forecast
            </CardTitle>
            <CardDescription>
              AI-powered predictions based on social sentiment, polling data, and historical trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {electionPredictions.map((prediction, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{prediction.candidate}</h3>
                      <p className="text-sm text-gray-600">{prediction.party}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getTrendIcon(prediction.trend)}
                      <span className="text-sm font-medium">
                        {prediction.confidence}% Confidence
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Current Support</span>
                        <span className="font-medium">{prediction.currentSupport}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${prediction.currentSupport}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Predicted Support</span>
                        <span className="font-medium">{prediction.predictedSupport}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${prediction.predictedSupport}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Key Issues:</p>
                    <div className="flex flex-wrap gap-2">
                      {prediction.keyIssues.map((issue, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {issue}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Regional Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-purple-600" />
              Regional Youth Engagement Analysis
            </CardTitle>
            <CardDescription>
              Voter registration and turnout predictions by key regions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {regionalData.map((region, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3">{region.region}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Registered Voters</span>
                      <span className="font-medium">{region.registeredVoters.toLocaleString()}</span>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Youth Turnout</span>
                        <span className="font-medium">{region.youthTurnout}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${region.youthTurnout}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Swing Potential</span>
                        <span className="font-medium">{region.swingPotential}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-600 h-2 rounded-full"
                          style={{ width: `${region.swingPotential}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Key Issues:</p>
                      <div className="flex flex-wrap gap-1">
                        {region.keyIssues.map((issue, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                          >
                            {issue}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Trend Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              Social Media Trend Analysis
            </CardTitle>
            <CardDescription>
              Real-time sentiment analysis and trend predictions from social platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trendAnalysis.map((trend, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{trend.topic}</h3>
                      <p className="text-sm text-gray-600">
                        {trend.mentions.toLocaleString()} mentions
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${getSentimentColor(trend.sentiment)}`}>
                        {getSentimentLabel(trend.sentiment)}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        {trend.growth > 0 ? (
                          <TrendingUp className="h-3 w-3 text-green-600" />
                        ) : (
                          <TrendingDown className="h-3 w-3 text-red-600" />
                        )}
                        <span className={trend.growth > 0 ? "text-green-600" : "text-red-600"}>
                          {Math.abs(trend.growth)}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>AI Prediction:</strong> {trend.prediction}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* AI Insights */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              AI Strategic Insights
            </CardTitle>
            <CardDescription>
              Key recommendations based on predictive analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Youth Mobilization Opportunity</h4>
                    <p className="text-sm text-gray-600">
                      68% youth turnout potential in Nairobi - focus digital campaigns here
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Economic Concern Rising</h4>
                    <p className="text-sm text-gray-600">
                      Cost of living mentions up 23% - address in messaging strategy
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Swing Region Focus</h4>
                    <p className="text-sm text-gray-600">
                      Eldoret shows 10% swing potential - high-priority campaigning area
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Climate Issue Growth</h4>
                    <p className="text-sm text-gray-600">
                      Climate change mentions up 45% - emerging youth priority
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}