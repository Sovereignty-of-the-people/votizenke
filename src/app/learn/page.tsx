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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50">
      {/* Navigation */}
      <Navigation />

      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Learning Hub
          </h1>
          <p className="text-xl text-gray-600">
            Master your civic rights and become an informed citizen
          </p>
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
            >
              <Card className={`h-full hover:shadow-lg transition-all duration-300 ${
                lesson.completed ? 'border-green-200 bg-green-50' : 
                lesson.locked ? 'border-gray-200 opacity-75' : 'border-gray-200'
              }`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-full ${
                      lesson.completed ? 'bg-green-100' : 
                      lesson.locked ? 'bg-gray-100' : 'bg-blue-100'
                    }`}>
                      {lesson.icon}
                    </div>
                    {lesson.completed && (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    )}
                    {lesson.locked && (
                      <Lock className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                  <CardTitle className="text-lg">{lesson.title}</CardTitle>
                  <CardDescription>{lesson.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Progress Bar */}
                  {!lesson.locked && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{lesson.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            lesson.completed ? 'bg-green-600' : 'bg-blue-600'
                          }`}
                          style={{ width: `${lesson.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Lesson Metadata */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {lesson.duration}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      lesson.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      lesson.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {lesson.difficulty}
                    </span>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className={`w-full ${
                      lesson.completed ? 'bg-green-600 hover:bg-green-700' :
                      lesson.locked ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    } text-white`}
                    disabled={lesson.locked}
                    onClick={() => handleStartLesson(lesson.id)}
                  >
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
                  </Button>
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
          <Card className="border-purple-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-purple-800">Next Achievement</CardTitle>
              <CardDescription>
                Complete 2 more lessons to unlock the "Civic Champion" badge
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-4">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Civic Champion - Complete 5 lessons and join the top 10% of informed citizens
              </p>
              <div className="w-full max-w-xs mx-auto bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}