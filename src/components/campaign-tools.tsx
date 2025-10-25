"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Megaphone, 
  Users, 
  MessageSquare, 
  Calendar, 
  Target, 
  TrendingUp,
  Share2,
  Mail,
  Phone,
  MapPin,
  Clock,
  Zap,
  BarChart3,
  FileText,
  Video,
  Radio,
  CheckCircle,
  AlertCircle,
  ArrowRight
} from "lucide-react"

interface CampaignTool {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  status: "active" | "setup" | "upgrade"
  progress?: number
  metrics?: {
    label: string
    value: string
  }[]
  action?: string
}

export function CampaignTools() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  const tools: CampaignTool[] = [
    {
      id: "volunteer-mgmt",
      name: "Volunteer Management",
      description: "Organize and coordinate campaign volunteers",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      status: "active",
      progress: 78,
      metrics: [
        { label: "Active Volunteers", value: "234" },
        { label: "Teams Formed", value: "12" },
        { label: "Hours This Week", value: "1,247" }
      ],
      action: "Manage Volunteers"
    },
    {
      id: "canvassing",
      name: "Digital Canvassing",
      description: "Track door-to-door outreach and voter contact",
      icon: <MapPin className="h-8 w-8 text-green-600" />,
      status: "active",
      progress: 67,
      metrics: [
        { label: "Homes Visited", value: "670/1,000" },
        { label: "Conversations", value: "423" },
        { label: "Supporters", value: "312" }
      ],
      action: "View Canvassing Map"
    },
    {
      id: "phone-banking",
      name: "Phone Banking",
      description: "Coordinate volunteer calling campaigns",
      icon: <Phone className="h-8 w-8 text-purple-600" />,
      status: "setup",
      progress: 25,
      metrics: [
        { label: "Calls Made", value: "250/1,000" },
        { label: "Volunteers", value: "8" },
        { label: "Contact Rate", value: "34%" }
      ],
      action: "Setup Phone Bank"
    },
    {
      id: "social-media",
      name: "Social Media Hub",
      description: "Manage all social platforms in one place",
      icon: <Share2 className="h-8 w-8 text-orange-600" />,
      status: "active",
      progress: 89,
      metrics: [
        { label: "Followers", value: "12.5K" },
        { label: "Engagement", value: "8.7%" },
        { label: "Reach This Week", value: "45K" }
      ],
      action: "Manage Social"
    },
    {
      id: "email-campaigns",
      name: "Email Campaigns",
      description: "Send targeted email communications",
      icon: <Mail className="h-8 w-8 text-red-600" />,
      status: "active",
      progress: 92,
      metrics: [
        { label: "Subscribers", value: "3,421" },
        { label: "Open Rate", value: "28%" },
        { label: "Click Rate", value: "4.2%" }
      ],
      action: "Create Campaign"
    },
    {
      id: "events",
      name: "Event Management",
      description: "Organize rallies and campaign events",
      icon: <Calendar className="h-8 w-8 text-indigo-600" />,
      status: "active",
      progress: 45,
      metrics: [
        { label: "Upcoming Events", value: "3" },
        { label: "RSVPs", value: "695" },
        { label: "Venues Booked", value: "2/3" }
      ],
      action: "Schedule Event"
    },
    {
      id: "fundraising",
      name: "Fundraising Tools",
      description: "Track donations and fundraising progress",
      icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
      status: "upgrade",
      progress: 45,
      metrics: [
        { label: "Raised", value: "KES 45K" },
        { label: "Goal", value: "KES 100K" },
        { label: "Donors", value: "127" }
      ],
      action: "Upgrade for Pro Tools"
    },
    {
      id: "media-center",
      name: "Media Center",
      description: "Manage press releases and media contacts",
      icon: <Video className="h-8 w-8 text-cyan-600" />,
      status: "setup",
      progress: 15,
      metrics: [
        { label: "Press Releases", value: "2" },
        { label: "Media Mentions", value: "8" },
        { label: "Interviews", value: "1" }
      ],
      action: "Setup Media Kit"
    }
  ]

  const getStatusColor = (status: CampaignTool["status"]) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800"
      case "setup": return "bg-yellow-100 text-yellow-800"
      case "upgrade": return "bg-blue-100 text-blue-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: CampaignTool["status"]) => {
    switch (status) {
      case "active": return <CheckCircle className="h-4 w-4" />
      case "setup": return <AlertCircle className="h-4 w-4" />
      case "upgrade": return <Zap className="h-4 w-4" />
      default: return null
    }
  }

  return (
    <div className="space-y-8">
      {/* Campaign Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border-green-200">
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">3.2K</div>
            <p className="text-sm text-gray-600">Total Supporters</p>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardContent className="p-4 text-center">
            <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">670</div>
            <p className="text-sm text-gray-600">Doors Knocked</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">3</div>
            <p className="text-sm text-gray-600">Upcoming Events</p>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-600">45%</div>
            <p className="text-sm text-gray-600">Fundraising Goal</p>
          </CardContent>
        </Card>
      </div>

      {/* Campaign Tools Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Card 
            key={tool.id} 
            className={`hover:shadow-lg transition-all cursor-pointer ${
              selectedTool === tool.id ? "ring-2 ring-orange-500" : ""
            }`}
            onClick={() => setSelectedTool(selectedTool === tool.id ? null : tool.id)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {tool.icon}
                  <div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <CardDescription className="mt-1">{tool.description}</CardDescription>
                  </div>
                </div>
                <Badge className={getStatusColor(tool.status)}>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(tool.status)}
                    {tool.status}
                  </div>
                </Badge>
              </div>
            </CardHeader>
            
            {tool.progress !== undefined && (
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Setup Progress</span>
                    <span>{tool.progress}%</span>
                  </div>
                  <Progress value={tool.progress} />
                  
                  {tool.metrics && (
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {tool.metrics.map((metric, index) => (
                        <div key={index} className="text-center p-2 bg-gray-50 rounded">
                          <div className="font-semibold text-sm">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {tool.action && (
                    <Button 
                      className="w-full mt-4" 
                      onClick={(e) => {
                        e.stopPropagation()
                        console.log(`Action: ${tool.action}`)
                      }}
                    >
                      {tool.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used campaign tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <Users className="h-6 w-6" />
              <span>Add Volunteer</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <Calendar className="h-6 w-6" />
              <span>Schedule Event</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <Mail className="h-6 w-6" />
              <span>Send Update</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <BarChart3 className="h-6 w-6" />
              <span>View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}