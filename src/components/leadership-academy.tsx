"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { 
  BookOpen, 
  Award, 
  Users, 
  Play, 
  CheckCircle, 
  Clock, 
  Star, 
  TrendingUp,
  Target,
  Lightbulb,
  MessageSquare,
  Calendar,
  User,
  Video,
  FileText,
  Download
} from "lucide-react"

interface Course {
  id: string
  title: string
  description: string
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced"
  progress: number
  enrolled: boolean
  instructor: string
  rating: number
  modules: number
  certificate: boolean
  topics: string[]
}

interface Mentorship {
  id: string
  mentor: string
  role: string
  expertise: string[]
  availability: string
  rating: number
  sessions: number
  price: string
  image: string
}

interface Certification {
  id: string
  title: string
  description: string
  requirements: string[]
  benefits: string[]
  duration: string
  difficulty: "Foundation" | "Professional" | "Expert"
  icon: string
}

export function LeadershipAcademy() {
  const [activeTab, setActiveTab] = useState<"courses" | "mentorship" | "certifications">("courses")
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const courses: Course[] = [
    {
      id: "civic-leadership-101",
      title: "Civic Leadership Fundamentals",
      description: "Master the core principles of democratic leadership and community organizing",
      duration: "6 weeks",
      level: "Beginner",
      progress: 75,
      enrolled: true,
      instructor: "Dr. Amina Hassan",
      rating: 4.8,
      modules: 8,
      certificate: true,
      topics: ["Democratic Principles", "Community Organizing", "Public Speaking", "Policy Advocacy"]
    },
    {
      id: "digital-campaigning",
      title: "Digital Campaigning & Social Media",
      description: "Learn to leverage digital platforms for effective civic engagement and mobilization",
      duration: "4 weeks",
      level: "Intermediate",
      progress: 30,
      enrolled: true,
      instructor: "Michael Kamau",
      rating: 4.9,
      modules: 6,
      certificate: true,
      topics: ["Social Media Strategy", "Content Creation", "Data Analytics", "Online Mobilization"]
    },
    {
      id: "policy-analysis",
      title: "Policy Analysis & Advocacy",
      description: "Develop skills to analyze policies and advocate for meaningful change",
      duration: "8 weeks",
      level: "Advanced",
      progress: 0,
      enrolled: false,
      instructor: "Prof. Grace Wanjiku",
      rating: 4.7,
      modules: 10,
      certificate: true,
      topics: ["Policy Research", "Legislative Process", "Advocacy Strategies", "Stakeholder Engagement"]
    },
    {
      id: "youth-mobilization",
      title: "Youth Mobilization Strategies",
      description: "Specialized training in engaging and mobilizing young people for civic action",
      duration: "5 weeks",
      level: "Intermediate",
      progress: 0,
      enrolled: false,
      instructor: "Sarah Otieno",
      rating: 4.6,
      modules: 7,
      certificate: true,
      topics: ["Youth Psychology", "Grassroots Organizing", "Event Planning", "Leadership Development"]
    }
  ]

  const mentorships: Mentorship[] = [
    {
      id: "mentor-1",
      mentor: "Hon. Martha Karua",
      role: "Former Minister & Political Leader",
      expertise: ["Constitutional Law", "Women's Leadership", "Policy Making"],
      availability: "Weekends",
      rating: 4.9,
      sessions: 12,
      price: "Free",
      image: "👩‍💼"
    },
    {
      id: "mentor-2",
      mentor: "Dr. Willy Mutunga",
      role: "Former Chief Justice",
      expertise: ["Judicial Reform", "Rule of Law", "Human Rights"],
      availability: "Weekdays",
      rating: 4.8,
      sessions: 8,
      price: "KES 2,000/session",
      image: "👨‍⚖️"
    },
    {
      id: "mentor-3",
      mentor: "Lina Jebet",
      role: "Youth Activist & Organizer",
      expertise: ["Grassroots Mobilization", "Digital Activism", "Community Building"],
      availability: "Flexible",
      rating: 4.7,
      sessions: 6,
      price: "KES 1,500/session",
      image: "👩‍🎓"
    },
    {
      id: "mentor-4",
      mentor: "John Mwangi",
      role: "Political Strategist",
      expertise: ["Campaign Strategy", "Public Relations", "Media Management"],
      availability: "Evenings",
      rating: 4.6,
      sessions: 10,
      price: "KES 3,000/session",
      image: "👨‍💼"
    }
  ]

  const certifications: Certification[] = [
    {
      id: "cert-civic-leader",
      title: "Certified Civic Leader (CCL)",
      description: "Professional certification for community leaders and civic organizers",
      requirements: [
        "Complete 3 foundation courses",
        "100 hours of community service",
        "Pass comprehensive exam",
        "Submit leadership project"
      ],
      benefits: [
        "Industry-recognized credential",
        "Access to exclusive network",
        "Priority for funding opportunities",
        "Mentorship opportunities"
      ],
      duration: "6-12 months",
      difficulty: "Foundation",
      icon: "🏆"
    },
    {
      id: "cert-policy-advocate",
      title: "Certified Policy Advocate (CPA)",
      description: "Advanced certification for policy analysis and advocacy professionals",
      requirements: [
        "Complete 5 advanced courses",
        "200 hours of advocacy work",
        "Policy analysis portfolio",
        "Oral defense"
      ],
      benefits: [
        "Policy consulting opportunities",
        "Government recognition",
        "International networking",
        "Speaking engagements"
      ],
      duration: "12-18 months",
      difficulty: "Professional",
      icon: "📜"
    },
    {
      id: "cert-youth-leadership",
      title: "Certified Youth Leadership Coach (CYLC)",
      description: "Specialized certification for youth leadership development and mentoring",
      requirements: [
        "Complete youth leadership track",
        "Mentor 10 young leaders",
        "Develop coaching methodology",
        "Complete practicum"
      ],
      benefits: [
        "Youth development career paths",
        "NGO partnership opportunities",
        "Training curriculum license",
        "International recognition"
      ],
      duration: "9-15 months",
      difficulty: "Expert",
      icon: "🌟"
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
      case "Foundation":
        return "bg-green-600/20 text-green-400 border-green-500/30"
      case "Intermediate":
      case "Professional":
        return "bg-blue-600/20 text-blue-400 border-blue-500/30"
      case "Advanced":
      case "Expert":
        return "bg-purple-600/20 text-purple-400 border-purple-500/30"
      default:
        return "bg-gray-600/20 text-gray-400 border-gray-500/30"
    }
  }

  const handleEnroll = (courseId: string) => {
    setSelectedCourse(courseId)
    // In a real app, this would handle enrollment logic
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative"
      >
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, 0.05) 25%, rgba(0, 255, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.05) 75%, rgba(255, 0, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, 0.05) 25%, rgba(0, 255, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.05) 75%, rgba(255, 0, 0, 0.05) 76%, transparent 77%, transparent)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="relative">
            <div className="p-4 rounded-xl bg-gradient-to-br from-green-600/20 to-red-600/20 border border-green-500/30">
              <Award className="h-12 w-12 text-green-400" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-500 to-red-500 rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white">
            Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-400">Academy</span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Transform your passion into revolutionary action with cutting-edge courses, elite mentorship, 
          and industry-recognized certifications designed for Kenyan youth leaders.
        </p>
        
        {/* Status Badge */}
        <div className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-green-900/50 to-red-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-bold">ACADEMY ONLINE</span>
          </div>
          <span className="text-gray-400">•</span>
          <span className="text-white font-medium">3,847 ACTIVE LEADERS</span>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-4 gap-6"
      >
        <div className="relative group">
          <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
            <div className="text-4xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-red-400 transition-all duration-300">12</div>
            <div className="text-sm text-gray-400 font-medium">ACTIVE COURSES</div>
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500 rounded-tl-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500 rounded-br-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
            <div className="text-4xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-red-400 transition-all duration-300">3,847</div>
            <div className="text-sm text-gray-400 font-medium">STUDENTS ENROLLED</div>
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500 rounded-tl-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500 rounded-br-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
            <div className="text-4xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-red-400 transition-all duration-300">24</div>
            <div className="text-sm text-gray-400 font-medium">EXPERT MENTORS</div>
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500 rounded-tl-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500 rounded-br-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
            <div className="text-4xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-red-400 transition-all duration-300">892</div>
            <div className="text-sm text-gray-400 font-medium">CERTIFICATIONS ISSUED</div>
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500 rounded-tl-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500 rounded-br-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl rounded-2xl border border-gray-700 p-2 inline-flex">
          <Button
            variant={activeTab === "courses" ? "default" : "ghost"}
            onClick={() => setActiveTab("courses")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
              activeTab === "courses" 
                ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-500/30" 
                : "text-gray-300 hover:text-green-400 hover:bg-gray-800/50"
            }`}
          >
            <BookOpen className="h-5 w-5" />
            <span className="font-bold">COURSES</span>
          </Button>
          <Button
            variant={activeTab === "mentorship" ? "default" : "ghost"}
            onClick={() => setActiveTab("mentorship")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
              activeTab === "mentorship" 
                ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-500/30" 
                : "text-gray-300 hover:text-green-400 hover:bg-gray-800/50"
            }`}
          >
            <Users className="h-5 w-5" />
            <span className="font-bold">MENTORSHIP</span>
          </Button>
          <Button
            variant={activeTab === "certifications" ? "default" : "ghost"}
            onClick={() => setActiveTab("certifications")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
              activeTab === "certifications" 
                ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-500/30" 
                : "text-gray-300 hover:text-green-400 hover:bg-gray-800/50"
            }`}
          >
            <Award className="h-5 w-5" />
            <span className="font-bold">CERTIFICATIONS</span>
          </Button>
        </div>
      </motion.div>

      {/* Courses Tab */}
      {activeTab === "courses" && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={course.id} className="relative group">
                <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
                  {/* Corner Tech Brackets */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-red-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-red-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-red-400 transition-all duration-300">
                        {course.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {course.description}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-green-400" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-blue-400" />
                          <span>{course.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getLevelColor(course.level)} border border-current/20`}>
                      {course.level}
                    </span>
                  </div>
                  
                  {course.enrolled && (
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-green-400 font-bold">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 shadow-lg shadow-green-500/30"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <p className="text-sm font-bold text-green-400 mb-3">WHAT YOU'LL MASTER:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-green-600/20 to-red-600/20 border border-green-500/30 text-gray-300 text-xs rounded-full font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-purple-400" />
                        <span>{course.modules} modules</span>
                      </div>
                      {course.certificate && (
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-yellow-400" />
                          <span>Certificate</span>
                        </div>
                      )}
                    </div>
                    
                    {course.enrolled ? (
                      <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300">
                        <Play className="mr-2 h-4 w-4" />
                        CONTINUE
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => handleEnroll(course.id)}
                        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
                      >
                        ENROLL NOW
                      </Button>
                    )}
                  </div>
                  
                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Mentorship Tab */}
      {activeTab === "mentorship" && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {mentorships.map((mentorship, index) => (
              <div key={mentorship.id} className="relative group">
                <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
                  {/* Corner Tech Brackets */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-red-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-red-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-5xl">{mentorship.image}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-red-400 transition-all duration-300">
                        {mentorship.mentor}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">{mentorship.role}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span>{mentorship.rating}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-blue-400" />
                          <span>{mentorship.availability}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm font-bold text-green-400 mb-3">EXPERTISE AREAS:</p>
                    <div className="flex flex-wrap gap-2">
                      {mentorship.expertise.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-gray-300 text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">
                        {mentorship.sessions} sessions available
                      </div>
                      <div className="font-bold text-green-400 text-lg">
                        {mentorship.price}
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      BOOK SESSION
                    </Button>
                  </div>
                  
                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Certifications Tab */}
      {activeTab === "certifications" && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-1 gap-8">
            {certifications.map((cert, index) => (
              <div key={cert.id} className="relative group">
                <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-10 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
                  {/* Corner Tech Brackets */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-red-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-red-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-green-500 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-start gap-6 mb-8">
                    <div className="text-6xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-red-400 transition-all duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-gray-300 text-base mt-3 leading-relaxed">
                        {cert.description}
                      </p>
                      <div className="flex items-center gap-6 mt-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold ${getLevelColor(cert.difficulty)} border border-current/20`}>
                          {cert.difficulty}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span>{cert.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-green-400 mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        REQUIREMENTS
                      </h4>
                      <ul className="space-y-3">
                        {cert.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-yellow-400 mb-4 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        BENEFITS
                      </h4>
                      <ul className="space-y-3">
                        {cert.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                            <TrendingUp className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-center pt-6 border-t border-gray-700">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300">
                      <Download className="mr-3 h-5 w-5" />
                      DOWNLOAD PROGRAM DETAILS
                    </Button>
                  </div>
                  
                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}