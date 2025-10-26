"use client"

import { useState } from "react"
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
  User
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

export function LeadershipAcademyNew() {
  const [activeTab, setActiveTab] = useState<"courses" | "mentorship" | "certifications">("courses")

  const courses: Course[] = [
    {
      id: "civic-leadership-101",
      title: "Civic Leadership Fundamentals",
      description: "Master core principles of democratic leadership and community organizing",
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
    },
    {
      id: "constitutional-law",
      title: "Constitutional Law & Governance",
      description: "Deep dive into Kenya's constitutional framework and democratic governance principles",
      duration: "10 weeks",
      level: "Advanced",
      progress: 0,
      enrolled: false,
      instructor: "Prof. James Muriuki",
      rating: 4.9,
      modules: 12,
      certificate: true,
      topics: ["Constitutional History", "Bill of Rights", "Separation of Powers", "Judicial Review"]
    },
    {
      id: "public-speaking",
      title: "Public Speaking & Oratory Mastery",
      description: "Develop powerful communication skills to inspire and mobilize communities",
      duration: "4 weeks",
      level: "Beginner",
      progress: 0,
      enrolled: false,
      instructor: "Grace Njeri",
      rating: 4.7,
      modules: 6,
      certificate: true,
      topics: ["Speech Writing", "Body Language", "Voice Modulation", "Audience Engagement"]
    },
    {
      id: "conflict-resolution",
      title: "Conflict Resolution & Peacebuilding",
      description: "Learn mediation techniques and strategies for peaceful conflict resolution",
      duration: "6 weeks",
      level: "Intermediate",
      progress: 0,
      enrolled: false,
      instructor: "Dr. Samuel Kiprop",
      rating: 4.8,
      modules: 8,
      certificate: true,
      topics: ["Mediation Skills", "Cultural Sensitivity", "Negotiation Tactics", "Community Dialogue"]
    },
    {
      id: "financial-literacy",
      title: "Financial Literacy for Leaders",
      description: "Essential financial management skills for community organizations and campaigns",
      duration: "5 weeks",
      level: "Beginner",
      progress: 0,
      enrolled: false,
      instructor: "David Kamau",
      rating: 4.5,
      modules: 7,
      certificate: true,
      topics: ["Budget Planning", "Fundraising", "Financial Reporting", "Resource Management"]
    },
    {
      id: "media-relations",
      title: "Media Relations & Strategic Communications",
      description: "Master media engagement and strategic communication for maximum impact",
      duration: "7 weeks",
      level: "Intermediate",
      progress: 0,
      enrolled: false,
      instructor: "Esther Wanjiru",
      rating: 4.8,
      modules: 9,
      certificate: true,
      topics: ["Press Relations", "Crisis Communication", "Brand Building", "Digital Storytelling"]
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-600/20 text-green-400 border-green-500/30"
      case "Intermediate":
        return "bg-blue-600/20 text-blue-400 border-blue-500/30"
      case "Advanced":
        return "bg-purple-600/20 text-purple-400 border-purple-500/30"
      default:
        return "bg-gray-600/20 text-gray-400 border-gray-500/30"
    }
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
        
        <motion.div 
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div 
            className="relative"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-4 rounded-xl bg-gradient-to-br from-green-600/20 to-red-600/20 border border-green-500/30 backdrop-blur-sm">
              <motion.div 
                className="text-green-400"
                animate={{ 
                  textShadow: ["0 0 10px rgba(34, 197, 94, 0.8)", "0 0 20px rgba(34, 197, 94, 0.4)", "0 0 10px rgba(34, 197, 94, 0.8)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Award className="h-12 w-12" />
              </motion.div>
            </div>
            <motion.div 
              className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-500 to-red-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-black text-white"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Leadership <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-red-400"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Academy
            </motion.span>
          </motion.h1>
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Transform your passion into revolutionary action with cutting-edge courses, elite mentorship, 
          and industry-recognized certifications designed for Kenyan youth leaders.
        </motion.p>
        
        {/* Status Badge */}
        <motion.div 
          className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-green-900/50 to-red-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ 
                boxShadow: ["0 0 10px rgba(34, 197, 94, 0.8)", "0 0 20px rgba(34, 197, 94, 0.4)", "0 0 10px rgba(34, 197, 94, 0.8)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <span className="text-green-400 font-bold">ACADEMY ONLINE</span>
          </div>
          <span className="text-gray-400">•</span>
          <motion.span 
            className="text-white font-medium"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            3,847 ACTIVE LEADERS
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-4 gap-6"
      >
        {[
          { value: "9", label: "ACTIVE COURSES", delay: 0.1 },
          { value: "3,847", label: "STUDENTS ENROLLED", delay: 0.2 },
          { value: "24", label: "EXPERT MENTORS", delay: 0.3 },
          { value: "892", label: "CERTIFICATIONS ISSUED", delay: 0.4 }
        ].map((stat, index) => (
          <motion.div 
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: stat.delay, duration: 0.6 }}
            whileHover={{ 
              y: -5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50 hover:border-green-500/70 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 overflow-hidden">
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 rounded-2xl opacity-10">
                <div className="h-full w-full rounded-2xl" style={{
                  backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(0, 255, 0, 0.1) 50%, transparent 60%)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              <motion.div 
                className="text-4xl font-black text-white mb-2 relative z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: stat.delay + 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  textShadow: "0 0 20px rgba(34, 197, 94, 0.8)",
                  scale: 1.1
                }}
              >
                <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-red-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </motion.div>
              
              <div className="text-sm text-gray-400 font-medium relative z-10">{stat.label}</div>
              
              {/* Enhanced Corner Tech Brackets */}
              <motion.div 
                className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-500 rounded-tl-lg"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              ></motion.div>
              <motion.div 
                className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-500 rounded-tr-lg"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 + 0.5 }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-500 rounded-bl-lg"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 + 1 }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-green-500 rounded-br-lg"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 + 1.5 }}
              ></motion.div>
              
              {/* Hover Glow Effect */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/10 to-red-500/10 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Courses Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent">
              Course Catalog
            </span>
          </h2>
          <p className="text-gray-300">
            Choose from our comprehensive selection of leadership development programs
          </p>
        </div>

        {/* Course Grid with Enhanced Futuristic Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={course.id} 
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated Background Grid */}
              <div className="absolute inset-0 rounded-2xl opacity-10">
                <div className="h-full w-full rounded-2xl" style={{
                  backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, 0.1) 25%, rgba(0, 255, 0, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.1) 75%, rgba(255, 0, 0, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, 0.1) 25%, rgba(0, 255, 0, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.1) 75%, rgba(255, 0, 0, 0.1) 76%, transparent 77%, transparent)`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              <div className="relative bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-green-500/70 transition-all duration-700 hover:shadow-2xl hover:shadow-green-500/30 overflow-hidden">
                
                {/* Animated Corner Tech Brackets */}
                <motion.div 
                  className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-green-500"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                ></motion.div>
                <motion.div 
                  className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-red-500"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 + 0.5 }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-red-500"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 + 1 }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-green-500"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 + 1.5 }}
                ></motion.div>
                
                {/* Course Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-black text-white mb-3 leading-tight"
                      whileHover={{ 
                        textShadow: "0 0 20px rgba(34, 197, 94, 0.8)",
                        scale: 1.02
                      }}
                    >
                      <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-red-400 bg-clip-text text-transparent">
                        {course.title}
                      </span>
                    </motion.h3>
                     <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                       {course.description}
                     </p>
                     <div className="flex items-center gap-4 text-xs text-gray-200">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-green-400" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3 text-blue-400" />
                        <span className="truncate">{course.instructor}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                  </div>
                  <motion.span 
                    className={`px-3 py-1 rounded-full text-xs font-bold ${getLevelColor(course.level)} border border-current/30 flex-shrink-0`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {course.level}
                  </motion.span>
                </div>
                
                {/* Progress Bar for Enrolled Courses */}
                {course.enrolled && (
                  <motion.div 
                    className="mb-6"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                     <div className="flex justify-between text-xs mb-2">
                       <span className="text-gray-200 font-medium">PROGRESS</span>
                       <motion.span 
                         className="text-green-400 font-bold"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ delay: 1 + index * 0.1 }}
                       >
                         {course.progress}%
                       </motion.span>
                     </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-green-500 via-cyan-500 to-green-600 h-2 rounded-full shadow-lg shadow-green-500/50"
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 1.5 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                )}
                
                {/* Course Topics */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-green-400 mb-3 tracking-wider">MASTERY SKILLS:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {course.topics.map((topic, idx) => (
                      <motion.span 
                        key={idx}
                         className="px-2 py-1 bg-gradient-to-r from-green-600/20 to-red-600/20 border border-green-500/40 text-gray-200 text-xs rounded-full font-medium"
                         whileHover={{ 
                           scale: 1.05,
                           backgroundColor: "rgba(34, 197, 94, 0.3)",
                           borderColor: "rgba(34, 197, 94, 0.6)"
                         }}
                         transition={{ delay: idx * 0.05 }}
                      >
                        {topic}
                      </motion.span>
                    ))}
                  </div>
                </div>

                 {/* Course Footer */}
                 <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                   <div className="flex items-center gap-3 text-xs text-gray-200">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3 text-purple-400" />
                      <span>{course.modules}</span>
                    </div>
                    {course.certificate && (
                      <div className="flex items-center gap-1">
                        <Award className="h-3 w-3 text-yellow-400" />
                        <span>Cert</span>
                      </div>
                    )}
                  </div>
                  
                  {course.enrolled ? (
                    <motion.button 
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-lg font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 flex items-center gap-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-3 w-3" />
                      CONTINUE
                    </motion.button>
                  ) : (
                    <motion.button 
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-lg font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ENROLL NOW
                    </motion.button>
                  )}
                </div>
                
                {/* Enhanced Scanning Line Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-green-500/20 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="h-full w-1 bg-gradient-to-b from-transparent via-green-400 to-transparent"
                    animate={{ x: [-10, "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}