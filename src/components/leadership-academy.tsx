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
        return "bg-green-100 text-green-800"
      case "Intermediate":
      case "Professional":
        return "bg-blue-100 text-blue-800"
      case "Advanced":
      case "Expert":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleEnroll = (courseId: string) => {
    setSelectedCourse(courseId)
    // In a real app, this would handle enrollment logic
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
          <Award className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900">Leadership Academy</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your passion into action with comprehensive courses, mentorship, and certifications
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-4 gap-6"
      >
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-sm text-gray-600">Active Courses</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">3,847</div>
            <div className="text-sm text-gray-600">Students Enrolled</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24</div>
            <div className="text-sm text-gray-600">Expert Mentors</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">892</div>
            <div className="text-sm text-gray-600">Certifications Issued</div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="bg-white rounded-lg shadow-sm border p-1 inline-flex">
          <Button
            variant={activeTab === "courses" ? "default" : "ghost"}
            onClick={() => setActiveTab("courses")}
            className="flex items-center gap-2"
          >
            <BookOpen className="h-4 w-4" />
            Courses
          </Button>
          <Button
            variant={activeTab === "mentorship" ? "default" : "ghost"}
            onClick={() => setActiveTab("mentorship")}
            className="flex items-center gap-2"
          >
            <Users className="h-4 w-4" />
            Mentorship
          </Button>
            <Button
              variant={activeTab === "certifications" ? "default" : "ghost"}
              onClick={() => setActiveTab("certifications")}
              className="flex items-center gap-2"
            >
              <Award className="h-4 w-4" />
              Certifications
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
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                      <CardDescription className="text-sm mb-3">
                        {course.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {course.instructor}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          {course.rating}
                        </div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {course.enrolled && (
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <p className="text-sm font-medium mb-2">What you'll learn:</p>
                    <div className="flex flex-wrap gap-1">
                      {course.topics.map((topic, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.modules} modules
                      </div>
                        {course.certificate && (
                          <div className="flex items-center gap-1">
                            <Award className="h-4 w-4" />
                            Certificate
                          </div>
                        )}
                    </div>
                    
                    {course.enrolled ? (
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Play className="mr-2 h-4 w-4" />
                        Continue Learning
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => handleEnroll(course.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Enroll Now
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
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
          <div className="grid md:grid-cols-2 gap-6">
            {mentorships.map((mentorship, index) => (
              <Card key={mentorship.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{mentorship.image}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{mentorship.mentor}</CardTitle>
                      <CardDescription>{mentorship.role}</CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          {mentorship.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {mentorship.availability}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-1">
                      {mentorship.expertise.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <div className="text-sm text-gray-600">
                        {mentorship.sessions} sessions available
                      </div>
                      <div className="font-medium text-green-600">
                        {mentorship.price}
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Book Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
          <div className="grid md:grid-cols-1 gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{cert.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {cert.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 mt-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(cert.difficulty)}`}>
                          {cert.difficulty}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          {cert.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-blue-600" />
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {cert.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-yellow-600" />
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {cert.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <TrendingUp className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download Program Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}