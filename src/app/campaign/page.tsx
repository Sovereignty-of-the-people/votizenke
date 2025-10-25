"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  Users2
} from "lucide-react"
import { CampaignTools } from "@/components/campaign-tools"

export default function CampaignPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="px-6 py-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Megaphone className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Campaign Tools</h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl">
            Professional organizing tools to mobilize supporters, coordinate events, and win your campaign
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="mobilization">Mobilization</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <CampaignTools />
          </TabsContent>

          <TabsContent value="mobilization">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-orange-600" />
                    Supporter Mobilization
                  </CardTitle>
                  <CardDescription>
                    Tools to organize and activate your supporter base
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Volunteer Management</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-medium">Volunteer Network</p>
                              <p className="text-sm text-gray-600">234 active volunteers</p>
                            </div>
                          </div>
                          <Button size="sm">Manage</Button>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <Target className="h-5 w-5 text-green-600" />
                            <div>
                              <p className="font-medium">Canvassing Teams</p>
                              <p className="text-sm text-gray-600">12 teams deployed</p>
                            </div>
                          </div>
                          <Button size="sm">View</Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Outreach Campaigns</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">Door-to-Door Campaign</span>
                            <Badge>Active</Badge>
                          </div>
                          <Progress value={67} className="mb-2" />
                          <p className="text-sm text-gray-600">670 of 1,000 homes visited</p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">Phone Banking</span>
                            <Badge variant="secondary">Planning</Badge>
                          </div>
                          <Progress value={25} className="mb-2" />
                          <p className="text-sm text-gray-600">250 of 1,000 calls made</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="communication">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-orange-600" />
                    Communication Hub
                  </CardTitle>
                  <CardDescription>
                    Coordinate messaging across all channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-blue-200">
                      <CardHeader className="pb-3">
                        <Mail className="h-8 w-8 text-blue-600 mb-2" />
                        <CardTitle className="text-lg">Email Campaigns</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-3">Send targeted email messages</p>
                        <Button size="sm" className="w-full">Create Campaign</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200">
                      <CardHeader className="pb-3">
                        <Phone className="h-8 w-8 text-green-600 mb-2" />
                        <CardTitle className="text-lg">SMS Outreach</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-3">Bulk SMS messaging</p>
                        <Button size="sm" className="w-full">Send SMS</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200">
                      <CardHeader className="pb-3">
                        <Share2 className="h-8 w-8 text-purple-600 mb-2" />
                        <CardTitle className="text-lg">Social Media</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-3">Manage social platforms</p>
                        <Button size="sm" className="w-full">Connect</Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Message Templates</h4>
                    <div className="grid gap-3">
                      {[
                        { type: "Volunteer Recruitment", subject: "Join Our Movement!", status: "Active" },
                        { type: "Event Invitation", subject: "Rally This Saturday!", status: "Draft" },
                        { type: "Fundraising Appeal", subject: "Support Our Campaign", status: "Active" },
                        { type: "Update", subject: "Campaign Progress Report", status: "Scheduled" }
                      ].map((template, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{template.type}</p>
                            <p className="text-sm text-gray-600">{template.subject}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={template.status === "Active" ? "default" : "secondary"}>
                              {template.status}
                            </Badge>
                            <Button size="sm" variant="outline">Edit</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-orange-600" />
                    Event Management
                  </CardTitle>
                  <CardDescription>
                    Organize rallies, meetings, and campaign events
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Upcoming Events</h4>
                      <div className="space-y-3">
                        {[
                          {
                            title: "Youth Rally - Nairobi",
                            date: "Dec 15, 2024",
                            location: "Uhuru Park",
                            attendees: 500,
                            capacity: 1000
                          },
                          {
                            title: "Community Meeting - Mombasa",
                            date: "Dec 18, 2024",
                            location: "Town Hall",
                            attendees: 150,
                            capacity: 200
                          },
                          {
                            title: "Volunteer Training",
                            date: "Dec 20, 2024",
                            location: "Campaign Office",
                            attendees: 45,
                            capacity: 50
                          }
                        ].map((event, index) => (
                          <Card key={index} className="border-l-4 border-l-orange-600">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-2">
                                <h5 className="font-semibold">{event.title}</h5>
                                <Badge variant="outline">Upcoming</Badge>
                              </div>
                              <div className="space-y-1 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  {event.date}
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  {event.location}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="h-4 w-4" />
                                  {event.attendees}/{event.capacity} attending
                                </div>
                              </div>
                              <Progress value={(event.attendees / event.capacity) * 100} className="mt-3" />
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Event Tools</h4>
                      <div className="space-y-3">
                        <Button className="w-full justify-start" variant="outline">
                          <Calendar className="mr-2 h-4 w-4" />
                          Schedule New Event
                        </Button>
                        <Button className="w-full justify-start" variant="outline">
                          <Users className="mr-2 h-4 w-4" />
                          Manage Attendees
                        </Button>
                        <Button className="w-full justify-start" variant="outline">
                          <MapPin className="mr-2 h-4 w-4" />
                          Venue Management
                        </Button>
                        <Button className="w-full justify-start" variant="outline">
                          <FileText className="mr-2 h-4 w-4" />
                          Event Permits & Forms
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                    Campaign Analytics
                  </CardTitle>
                  <CardDescription>
                    Track performance and optimize your strategy
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <Card className="border-green-200">
                      <CardContent className="p-4 text-center">
                        <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-600">+24%</div>
                        <p className="text-sm text-gray-600">Supporter Growth</p>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200">
                      <CardContent className="p-4 text-center">
                        <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-600">3.2K</div>
                        <p className="text-sm text-gray-600">Active Volunteers</p>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200">
                      <CardContent className="p-4 text-center">
                        <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-purple-600">47</div>
                        <p className="text-sm text-gray-600">Locations Covered</p>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardContent className="p-4 text-center">
                        <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-orange-600">89%</div>
                        <p className="text-sm text-gray-600">Engagement Rate</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Performance Metrics</h4>
                    <div className="grid gap-4">
                      {[
                        { metric: "Door-to-Door Visits", current: 670, target: 1000, progress: 67 },
                        { metric: "Phone Calls Made", current: 450, target: 2000, progress: 23 },
                        { metric: "Social Media Reach", current: 12500, target: 15000, progress: 83 },
                        { metric: "Fundraising Goal", current: 45000, target: 100000, progress: 45 }
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{item.metric}</span>
                            <span>{item.current.toLocaleString()} / {item.target.toLocaleString()}</span>
                          </div>
                          <Progress value={item.progress} />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}