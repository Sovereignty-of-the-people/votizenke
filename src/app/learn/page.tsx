"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BookOpen, CheckCircle, Lock, Play, Award, Target, Clock, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

interface Lesson {
  id: number
  title: string
  description: string
  duration: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: string
  completed: boolean
  locked: boolean
  progress: number
  icon: React.ReactNode
}

const mockLessons: Lesson[] = [
  {
    id: 1,
    title: "Introduction to Kenyan Democracy",
    description: "Learn the fundamentals of Kenya's democratic system and why your vote matters.",
    duration: "15 min",
    difficulty: "Beginner",
    category: "Foundations",
    completed: true,
    locked: false,
    progress: 100,
    icon: <Target className="h-6 w-6 text-green-600" />
  },
  {
    id: 2,
    title: "Voter Registration Process",
    description: "Step-by-step guide to registering as a voter in Kenya and common pitfalls to avoid.",
    duration: "20 min",
    difficulty: "Beginner",
    category: "Registration",
    completed: true,
    locked: false,
    progress: 100,
    icon: <Users className="h-6 w-6 text-blue-600" />
  },
  {
    id: 3,
    title: "Understanding Constitutional Rights",
    description: "Explore Article 38 and other key constitutional provisions that protect your voting rights.",
    duration: "25 min",
    difficulty: "Intermediate",
    category: "Constitution",
    completed: false,
    locked: false,
    progress: 60,
    icon: <Award className="h-6 w-6 text-purple-600" />
  },
  {
    id: 4,
    title: "Civic Engagement Beyond Voting",
    description: "Discover other ways to participate in democracy beyond casting your vote.",
    duration: "18 min",
    difficulty: "Intermediate",
    category: "Engagement",
    completed: false,
    locked: false,
    progress: 30,
    icon: <TrendingUp className="h-6 w-6 text-orange-600" />
  },
  {
    id: 5,
    title: "Youth Leadership in Governance",
    description: "Learn how young Kenyans can take leadership roles in local and national governance.",
    duration: "30 min",
    difficulty: "Advanced",
    category: "Leadership",
    completed: false,
    locked: true,
    progress: 0,
    icon: <Lock className="h-6 w-6 text-gray-400" />
  },
  {
    id: 6,
    title: "Digital Civic Activism",
    description: "Master the art of using social media and digital tools for positive civic change.",
    duration: "22 min",
    difficulty: "Advanced",
    category: "Digital",
    completed: false,
    locked: true,
    progress: 0,
    icon: <Lock className="h-6 w-6 text-gray-400" />
  }
]

const categories = ["All", "Foundations", "Registration", "Constitution", "Engagement", "Leadership", "Digital"]

export default function LearnPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lessons, setLessons] = useState(mockLessons)

  const filteredLessons = lessons.filter(lesson => 
    selectedCategory === "All" || lesson.category === selectedCategory
  )

  const completedLessons = lessons.filter(lesson => lesson.completed).length
  const totalLessons = lessons.length
  const overallProgress = Math.round((completedLessons / totalLessons) * 100)

  const handleStartLesson = (lessonId: number) => {
    // In a real app, this would navigate to the lesson
    console.log(`Starting lesson ${lessonId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      <div className="pt-8 p-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 relative"
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
          
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30">
                <BookOpen className="h-12 w-12 text-blue-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white">
              Civic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Education</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white max-w-4xl leading-relaxed">
            Master your revolutionary rights, responsibilities, and the power of your vote through comprehensive lessons designed for Kenyan youth
          </p>
          
          {/* Status Badge */}
          <div className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 font-bold">EDUCATION ACTIVE</span>
            </div>
            <span className="text-white">•</span>
            <span className="text-white font-medium">12 LESSONS AVAILABLE</span>
          </div>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Your Learning Progress</h2>
                  <p className="text-green-100 mb-4">
                    You've completed {completedLessons} out of {totalLessons} lessons
                  </p>
                  <div className="w-full max-w-md bg-white/20 rounded-full h-3">
                    <div 
                      className="bg-white h-3 rounded-full transition-all duration-500"
                      style={{ width: `${overallProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-green-100 mt-2">{overallProgress}% Complete</p>
                </div>
                <div className="text-center">
                  <Award className="h-16 w-16 mx-auto mb-2" />
                  <p className="text-lg font-semibold">Civic Scholar</p>
                  <p className="text-sm text-green-100">Keep learning to unlock new achievements!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Lessons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="group"
            >
              <Card className={`h-full transition-all duration-500 relative overflow-hidden ${
                lesson.completed ? 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-300' : 
                lesson.locked ? 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300 opacity-75' : 
                'bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-300'
              }`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`absolute inset-0 ${
                    lesson.completed ? 'bg-gradient-to-br from-green-400 to-emerald-600' :
                    lesson.locked ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                    'bg-gradient-to-br from-blue-400 to-indigo-600'
                  }`}></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 group-hover:scale-125 transition-transform duration-700"></div>
                </div>

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`p-3 rounded-full ${
                        lesson.completed ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30' : 
                        lesson.locked ? 'bg-gradient-to-br from-gray-400 to-gray-600 shadow-lg shadow-gray-400/30' : 
                        'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30'
                      }`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: lesson.completed ? 360 : 0,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <div className="text-white">
                        {lesson.icon}
                      </div>
                    </motion.div>
                    <div className="flex items-center gap-2">
                      {lesson.completed && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </motion.div>
                      )}
                      {lesson.locked && (
                        <Lock className="h-6 w-6 text-gray-500" />
                      )}
                    </div>
                  </div>
                  <CardTitle className={`text-lg font-bold ${
                    lesson.completed ? 'text-green-800' : 
                    lesson.locked ? 'text-gray-700' : 
                    'text-blue-800'
                  } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300`}>
                    {lesson.title}
                  </CardTitle>
                  <CardDescription className={`${
                    lesson.completed ? 'text-green-700' : 
                    lesson.locked ? 'text-gray-600' : 
                    'text-blue-700'
                  }`}>
                    {lesson.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  {/* Progress Bar */}
                  {!lesson.locked && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span className={lesson.completed ? 'text-green-700' : 'text-blue-700'}>Progress</span>
                        <span className={`font-bold ${
                          lesson.completed ? 'text-green-800' : 'text-blue-800'
                        }`}>{lesson.progress}%</span>
                      </div>
                      <div className="w-full bg-white/70 rounded-full h-3 overflow-hidden">
                        <motion.div 
                          className={`h-3 rounded-full transition-all duration-700 ${
                            lesson.completed ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${lesson.progress}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                        ></motion.div>
                      </div>
                    </div>
                  )}

                  {/* Lesson Metadata */}
                  <div className="flex items-center justify-between text-sm">
                    <div className={`flex items-center gap-1 font-medium ${
                      lesson.completed ? 'text-green-700' : 
                      lesson.locked ? 'text-gray-600' : 
                      'text-blue-700'
                    }`}>
                      <Clock className="h-4 w-4" />
                      {lesson.duration}
                    </div>
                    <motion.span 
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        lesson.difficulty === 'Beginner' ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' :
                        lesson.difficulty === 'Intermediate' ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white' :
                        'bg-gradient-to-r from-red-500 to-pink-600 text-white'
                      } shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {lesson.difficulty}
                    </motion.span>
                  </div>

                  {/* Action Button */}
                  <div className="relative overflow-hidden rounded-lg">
                    <motion.div
                      whileHover={!lesson.locked ? { scale: 1.02 } : {}}
                      whileTap={!lesson.locked ? { scale: 0.98 } : {}}
                    >
                      <Button 
                        className={`w-full font-bold relative overflow-hidden group ${
                          lesson.completed ? 'bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 shadow-lg shadow-green-500/30' :
                          lesson.locked ? 'bg-gradient-to-r from-gray-400 to-gray-600 cursor-not-allowed' : 
                          'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg shadow-blue-500/30'
                        } text-white border-2 border-white/20`}
                        disabled={lesson.locked}
                        onClick={() => handleStartLesson(lesson.id)}
                      >
                        <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                        <div className="relative flex items-center justify-center">
                          {lesson.completed ? (
                            <>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Review Lesson
                            </>
                          ) : lesson.locked ? (
                            <>
                              <Lock className="mr-2 h-4 w-4" />
                              Locked
                            </>
                          ) : lesson.progress > 0 ? (
                            <>
                              <Play className="mr-2 h-4 w-4" />
                              Continue
                            </>
                          ) : (
                            <>
                              <Play className="mr-2 h-4 w-4" />
                              Start Lesson
                            </>
                          )}
                        </div>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 border-purple-500/30 shadow-2xl shadow-purple-500/20">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 animate-pulse delay-1000"></div>
            </div>

            <CardHeader className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.9 }}
              >
                <CardTitle className="text-3xl font-black text-white mb-2">
                  Next Achievement
                </CardTitle>
              </motion.div>
              <CardDescription className="text-lg text-purple-200 font-medium">
                Complete 2 more lessons to unlock the <span className="text-yellow-400 font-bold">"Civic Champion"</span> badge
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 text-center space-y-6">
              <motion.div 
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4 shadow-lg shadow-yellow-500/30"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                <Award className="h-12 w-12 text-white" />
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <p className="text-white font-bold text-lg mb-2">
                  🏆 Civic Champion
                </p>
                <p className="text-purple-200 text-sm leading-relaxed">
                  Complete 5 lessons and join the top 10% of informed citizens leading Kenya's democratic revolution
                </p>
              </motion.div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm font-medium text-purple-200">
                  <span>Progress to Champion</span>
                  <span className="text-yellow-400 font-bold">60%</span>
                </div>
                <div className="w-full max-w-xs mx-auto bg-black/30 rounded-full h-4 overflow-hidden border border-purple-400/20">
                  <motion.div 
                    className="h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg shadow-yellow-500/30"
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ delay: 1.1, duration: 1.5 }}
                  ></motion.div>
                </div>
                <p className="text-xs text-purple-300 font-medium">
                  3 of 5 lessons completed • 2 more to go!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}