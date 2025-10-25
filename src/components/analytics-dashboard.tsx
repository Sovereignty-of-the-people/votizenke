"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  MessageSquare, 
  Eye, 
  BarChart3,
  PieChart,
  Activity,
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  ThumbsUp,
  ThumbsDown
} from "lucide-react"

interface ElectionPrediction {
  id: string
  title: string
  date: string
  candidates: Array<{
    name: string
    party: string
    predictedVotes: number
    confidence: number
    trend: "up" | "down" | "stable"
  }>
  turnout: {
    predicted: number
    confidence: number
  }
  keyIssues: Array<{
    issue: string
    sentiment: number
    mentions: number
  }>
}

interface SentimentData {
  topic: string
  positive: number
  negative: number
  neutral: number
  total: number
  trend: "improving" | "declining" | "stable"
}

interface RegionalData {
  region: string
  support: number
  turnout: number
  engagement: number
  keyIssues: string[]
}

export function AnalyticsDashboard() {
  const [predictions, setPredictions] = useState<ElectionPrediction[]>([
    {
      id: "1",
      title: "2027 Presidential Election",
      date: "2027-08-09",
      candidates: [
        { name: "John Kamau", party: "Unity Party", predictedVotes: 48.5, confidence: 72, trend: "up" },
        { name: "Amina Hassan", party: "Progressive Alliance", predictedVotes: 42.3, confidence: 68, trend: "stable" },
        { name: "Peter Ochieng", party: "Reform Movement", predictedVotes: 9.2, confidence: 45, trend: "down" }
      ],
      turnout: {
        predicted: 67.8,
        confidence: 78
      },
      keyIssues: [
        { issue: "Youth Employment", sentiment: 0.65, mentions: 15420 },
        { issue: "Healthcare Reform", sentiment: 0.58, mentions: 12350 },
        { issue: "Education Funding", sentiment: 0.72, mentions: 10890 },
        { issue: "Infrastructure", sentiment: 0.61, mentions: 9870 }
      ]
    }
  ])

  const [sentimentData, setSentimentData] = useState<SentimentData[]>([
    { topic: "Youth Employment", positive: 65, negative: 25, neutral: 10, total: 15420, trend: "improving" },
    { topic: "Healthcare Reform", positive: 58, negative: 32, neutral: 10, total: 12350, trend: "stable" },
    { topic: "Education Funding", positive: 72, negative: 18, neutral: 10, total: 10890, trend: "improving" },
    { topic: "Infrastructure", positive: 61, negative: 29, neutral: 10, total: 9870, trend: "declining" },
    { topic: "Digital Rights", positive: 78, negative: 15, neutral: 7, total: 8760, trend: "improving" },
    { topic: "Climate Action", positive: 69, negative: 21, neutral: 10, total: 7650, trend: "stable" }
  ])

  const [regionalData, setRegionalData] = useState<RegionalData[]>([
    { region: "Nairobi", support: 52.3, turnout: 71.2, engagement: 89.5, keyIssues: ["Youth Employment", "Digital Rights", "Transport"] },
    { region: "Mombasa", support: 48.7, turnout: 65.8, engagement: 76.3, keyIssues: ["Tourism", "Infrastructure", "Healthcare"] },
    { region: "Kisumu", support: 61.2, turnout: 73.4, engagement: 82.1, keyIssues: ["Agriculture", "Education", "Healthcare"] },
    { region: "Eldoret", support: 45.8, turnout: 69.1, engagement: 71.8, keyIssues: ["Agriculture", "Infrastructure", "Youth Programs"] },
    { region: "Nakuru", support: 50.1, turnout: 68.9, engagement: 78.4, keyIssues: ["Healthcare", "Education", "Housing"] }
  ])

  const [selectedTimeframe, setSelectedTimeframe] = useState("7d")
  const [selectedRegion, setSelectedRegion] = useState("all")

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time data updates
      setSentimentData(prev => prev.map(item => ({
        ...item,
        total: item.total + Math.floor(Math.random() * 10),
        positive: Math.max(0, Math.min(100, item.positive + (Math.random() - 0.5) * 2)),
        negative: Math.max(0, Math.min(100, item.negative + (Math.random() - 0.5) * 2))
      })))

      setRegionalData(prev => prev.map(item => ({
        ...item,
        engagement: Math.max(0, Math.min(100, item.engagement + (Math.random() - 0.5) * 1))
      })))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
      case "improving":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "down":
      case "declining":
        return <TrendingDown className="h-4 w-4 text-red-600" />
      default:
        return <Activity className="h-4 w-4 text-gray-600" />
    }
  }

  const getSentimentColor = (sentiment: number) => {
    if (sentiment >= 0.6) return "text-green-600"
    if (sentiment >= 0.4) return "text-yellow-600"
    return "text-red-600"
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 70) return "bg-green-100 text-green-800"
    if (confidence >= 50) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
          <p className="text-gray-600">Real-time election predictions and sentiment analysis</p>
        </div>
        <div className="flex gap-2">
          {["24h", "7d", "30d", "90d"].map((timeframe) => (
            <Button
              key={timeframe}
              variant={selectedTimeframe === timeframe ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTimeframe(timeframe)}
            >
              {timeframe}
            </Button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Target className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Prediction Accuracy</p>
                <p className="text-2xl font-bold text-gray-900">87.3%</p>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  +2.1%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Users className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">People Reached</p>
                <p className="text-2xl font-bold text-gray-900">2.3M</p>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  +15.2%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Sentiment Score</p>
                <p className="text-2xl font-bold text-gray-900">0.68</p>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  +0.04
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Eye className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">Engagement Rate</p>
                <p className="text-2xl font-bold text-gray-900">79.1%</p>
                <div className="flex items-center gap-1 text-sm text-red-600">
                  <TrendingDown className="h-3 w-3" />
                  -1.3%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Election Predictions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Election Predictions
          </CardTitle>
          <CardDescription>
            AI-powered predictions based on social sentiment and historical data
          </CardDescription>
        </CardHeader>
        <CardContent>
          {predictions.map((prediction) => (
            <div key={prediction.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{prediction.title}</h3>
                  <p className="text-sm text-gray-600">{new Date(prediction.date).toLocaleDateString()}</p>
                </div>
                <Badge className={getConfidenceColor(prediction.turnout.confidence)}>
                  {prediction.turnout.confidence}% Confidence
                </Badge>
              </div>

              {/* Candidates */}
              <div className="space-y-3">
                {prediction.candidates.map((candidate, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-medium">{candidate.name}</span>
                          <span className="text-sm text-gray-600 ml-2">({candidate.party})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold">{candidate.predictedVotes}%</span>
                          {getTrendIcon(candidate.trend)}
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${candidate.predictedVotes}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Turnout Prediction */}
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Predicted Turnout</span>
                  <span className="text-lg font-bold text-blue-600">{prediction.turnout.predicted}%</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Sentiment Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Sentiment Analysis by Topic
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sentimentData.map((topic, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{topic.topic}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">{topic.total.toLocaleString()} mentions</span>
                      {getTrendIcon(topic.trend)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 relative">
                      <div 
                        className="bg-green-500 h-2 rounded-l-full"
                        style={{ width: `${topic.positive}%` }}
                      />
                      <div 
                        className="bg-gray-400 h-2"
                        style={{ width: `${topic.neutral}%`, marginLeft: `${topic.positive}%` }}
                      />
                      <div 
                        className="bg-red-500 h-2 rounded-r-full"
                        style={{ width: `${topic.negative}%`, marginLeft: `${topic.positive + topic.neutral}%` }}
                      />
                    </div>
                    <span className={`text-sm font-medium ${getSentimentColor(topic.positive / 100)}`}>
                      {topic.positive}%
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3 text-green-600" />
                      {topic.positive}%
                    </div>
                    <div className="flex items-center gap-1">
                      <Activity className="h-3 w-3 text-gray-600" />
                      {topic.neutral}%
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsDown className="h-3 w-3 text-red-600" />
                      {topic.negative}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Regional Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Regional Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionalData.map((region, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{region.region}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{region.support}% support</Badge>
                      <Badge variant="outline">{region.turnout}% turnout</Badge>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Engagement</span>
                      <span className="font-medium">{region.engagement}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div 
                        className="bg-green-600 h-1 rounded-full"
                        style={{ width: `${region.engagement}%` }}
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-gray-600 mb-1">Key Issues:</p>
                    <div className="flex flex-wrap gap-1">
                      {region.keyIssues.map((issue, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {issue}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Issues Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Key Issues Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {predictions[0]?.keyIssues.map((issue, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{issue.issue}</span>
                  <Badge className={getSentimentColor(issue.sentiment)}>
                    {(issue.sentiment * 100).toFixed(0)}%
                  </Badge>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {issue.mentions.toLocaleString()} mentions
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${issue.sentiment * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}