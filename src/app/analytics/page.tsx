"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { motion } from "framer-motion"
import { 
  Users, 
  TrendingUp, 
  MapPin, 
  Calendar, 
  Target, 
  Award,
  BarChart3,
  PieChart,
  Activity,
  ArrowUp,
  ArrowDown,
  Filter,
  Download
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function Analytics() {
  const [selectedCounty, setSelectedCounty] = useState("all")
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("all")
  const [timeRange, setTimeRange] = useState("6months")
  const [isLoading, setIsLoading] = useState(false)

  // Mock data - in real app this would come from API
  const counties = [
    "all", "nairobi", "mombasa", "kisumu", "nakuru", "kiambu", "kakamega", "bungoma",
    "meru", "kajiado", "machakos", "kitui", "garissa", "wajir", "mandera", "marsabit",
    "isiolo", "samburu", "trans-nzoia", "uasin-gishu", "elgeyo-marakwet", "nandi",
    "kericho", "bomet", "narok", "baringo", "west-pokot", "turkana", "siaya", "homabay",
    "migori", "nyamira", "nyandarua", "laikipia", "nyeri", "kirinyaga", "muranga", "tharaka-nithi",
    "embu", "kitui", "makueni", "kwale", "kilifi", "tana-river", "lamu", "taita-taveta"
  ]

  const ageGroups = [
    { value: "all", label: "All Ages" },
    { value: "18-24", label: "18-24 Years" },
    { value: "25-30", label: "25-30 Years" },
    { value: "31-35", label: "31-35 Years" }
  ]

  const timeRanges = [
    { value: "1month", label: "Last Month" },
    { value: "3months", label: "Last 3 Months" },
    { value: "6months", label: "Last 6 Months" },
    { value: "1year", label: "Last Year" }
  ]

  // Mock statistics
  const stats = [
    {
      title: "Total Voters Registered",
      value: "47,892",
      change: "+23.5%",
      trend: "up",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100",
      description: "Through VotizenKE platform"
    },
    {
      title: "Active Counties",
      value: "42/47",
      change: "+6 counties",
      trend: "up",
      icon: MapPin,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      description: "Nationwide coverage"
    },
    {
      title: "Youth Participation Rate",
      value: "68%",
      change: "+15.2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      description: "Ages 18-35"
    },
    {
      title: "Monthly Growth Rate",
      value: "12.4%",
      change: "+3.1%",
      trend: "up",
      icon: Activity,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      description: "Average monthly increase"
    }
  ]

  // County performance data
  const countyPerformance = [
    { name: "Nairobi", registered: 8234, target: 10000, percentage: 82.3, growth: "+28%" },
    { name: "Kiambu", registered: 5621, target: 7000, percentage: 80.3, growth: "+22%" },
    { name: "Nakuru", registered: 4892, target: 6000, percentage: 81.5, growth: "+19%" },
    { name: "Mombasa", registered: 4123, target: 5500, percentage: 75.0, growth: "+25%" },
    { name: "Kisumu", registered: 3847, target: 5000, percentage: 76.9, growth: "+31%" },
    { name: "Uasin Gishu", registered: 3456, target: 4500, percentage: 76.8, growth: "+18%" },
    { name: "Kakamega", registered: 3234, target: 4200, percentage: 77.0, growth: "+24%" },
    { name: "Kericho", registered: 2891, target: 3500, percentage: 82.6, growth: "+21%" }
  ]

  // Age demographics
  const ageDemographics = [
    { group: "18-24", count: 18432, percentage: 38.5, color: "bg-green-500" },
    { group: "25-30", count: 16789, percentage: 35.1, color: "bg-blue-500" },
    { group: "31-35", count: 12671, percentage: 26.4, color: "bg-purple-500" }
  ]

  // Monthly registration trend
  const monthlyTrend = [
    { month: "Jan", registrations: 3245, target: 3000 },
    { month: "Feb", registrations: 4123, target: 3500 },
    { month: "Mar", registrations: 5892, target: 4000 },
    { month: "Apr", registrations: 7234, target: 5000 },
    { month: "May", registrations: 8921, target: 6000 },
    { month: "Jun", registrations: 10477, target: 7000 }
  ]

  const handleExportData = () => {
    // Mock export functionality
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert("Data exported successfully!")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <Navigation />

      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <Badge className="mb-4 bg-red-600 text-white">Campaign Impact Dashboard</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Voter Registration Revolution
              </h1>
              <p className="text-xl text-gray-600">
                Real-time metrics driving Kenya's democratic transformation
              </p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button 
                variant="outline" 
                className="border-green-600 text-green-600 hover:bg-green-50"
                onClick={handleExportData}
                disabled={isLoading}
              >
                <Download className="mr-2 h-4 w-4" />
                {isLoading ? "Exporting..." : "Export Report"}
              </Button>
              <Link href="/auth/signin">
                <Button className="bg-green-600 hover:bg-green-700">
                  Join Movement
                </Button>
              </Link>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filters:</span>
            </div>
            <select 
              value={selectedCounty} 
              onChange={(e) => setSelectedCounty(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Counties</option>
              {counties.slice(1).map((county) => (
                <option key={county} value={county}>
                  {county.charAt(0).toUpperCase() + county.slice(1).replace('-', ' ')}
                </option>
              ))}
            </select>
            <select 
              value={selectedAgeGroup} 
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {ageGroups.map((group) => (
                <option key={group.value} value={group.value}>
                  {group.label}
                </option>
              ))}
            </select>
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {timeRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUp className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDown className="h-4 w-4 mr-1" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.title}</h3>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* County Performance */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Top Performing Counties
                </CardTitle>
                <CardDescription>
                  Voter registration progress by county
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {countyPerformance.map((county, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-gray-900 w-24">
                            {county.name}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {county.growth}
                          </Badge>
                        </div>
                        <span className="text-sm text-gray-600">
                          {county.registered.toLocaleString()} / {county.target.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${county.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Age Demographics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-purple-600" />
                  Age Demographics
                </CardTitle>
                <CardDescription>
                  Youth voter registration by age group
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ageDemographics.map((age, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">
                          {age.group} Years
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">
                            {age.count.toLocaleString()} voters
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {age.percentage}%
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`${age.color} h-3 rounded-full transition-all duration-300`}
                          style={{ width: `${age.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Monthly Trend */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-green-600" />
                Monthly Registration Trend
              </CardTitle>
              <CardDescription>
                Voter registration growth over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyTrend.map((month, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900 w-12">
                        {month.month}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">
                          Target: {month.target.toLocaleString()}
                        </span>
                        <span className="text-sm font-medium text-green-600">
                          {month.registrations.toLocaleString()}
                        </span>
                        <Badge className={
                          month.registrations >= month.target 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }>
                          {Math.round((month.registrations / month.target) * 100)}%
                        </Badge>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="w-full bg-gray-300 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min((month.registrations / month.target) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">
                  The People's Revolution is Working
                </h2>
                <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
                  We are no longer letting partisan media and political elites drive the narrative. 
                  Through VotizenKE, Kenyan youth are taking control of their democratic destiny. 
                  Every registration is a step toward corrupt-free leadership and accountable governance.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">47,892</div>
                    <div className="text-green-100">New Youth Voters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">42/47</div>
                    <div className="text-green-100">Counties Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">68%</div>
                    <div className="text-green-100">Youth Participation</div>
                  </div>
                </div>
                <Link href="/auth/signin">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                    Be Part of This Revolution
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}