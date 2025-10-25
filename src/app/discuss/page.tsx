"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MessageSquare, ThumbsUp, MessageCircle, Plus, Search, Filter, TrendingUp, Clock, Heart } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

interface Post {
  id: number
  title: string
  author: string
  category: string
  content: string
  likes: number
  comments: number
  timestamp: string
  trending?: boolean
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: "How can we increase youth voter registration in rural areas?",
    author: "Sarah M.",
    category: "Voter Registration",
    content: "I've been thinking about the challenges many young people face in rural Kenya when trying to register as voters. What strategies have worked in your communities?",
    likes: 45,
    comments: 23,
    timestamp: "2 hours ago",
    trending: true
  },
  {
    id: 2,
    title: "Understanding our constitutional rights as citizens",
    author: "John K.",
    category: "Constitutional Rights",
    content: "Let's discuss Article 38 of the Kenyan Constitution - our right to vote. What does this really mean for us as young Kenyans?",
    likes: 32,
    comments: 18,
    timestamp: "5 hours ago"
  },
  {
    id: 3,
    title: "The role of social media in civic engagement",
    author: "Grace W.",
    category: "Digital Activism",
    content: "Social media has changed how we engage with politics. How can we use these platforms responsibly to promote civic education?",
    likes: 28,
    comments: 15,
    timestamp: "1 day ago"
  },
  {
    id: 4,
    title: "Youth representation in county governments",
    author: "David O.",
    category: "Governance",
    content: "Are young people adequately represented in our county governments? What changes would you like to see?",
    likes: 21,
    comments: 12,
    timestamp: "2 days ago"
  }
]

const categories = ["All", "Voter Registration", "Constitutional Rights", "Digital Activism", "Governance", "Youth Empowerment"]

export default function DiscussPage() {
  const [posts, setPosts] = useState<Post[]>(mockPosts)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("latest")

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "trending") {
      return (b.likes + b.comments) - (a.likes + a.comments)
    }
    return 0 // For "latest", we'll keep the original order
  })

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ))
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
            Civic Discussions
          </h1>
          <p className="text-xl text-gray-600">
            Engage with fellow citizens on topics that matter to Kenya's future
          </p>
        </motion.div>

        {/* Create Post Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Plus className="mr-2 h-4 w-4" />
            Start New Discussion
          </Button>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Category and Sort Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Category:</span>
            </div>
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

            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="latest">Latest</option>
                <option value="trending">Trending</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Posts Grid */}
        <div className="space-y-6">
          {sortedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {post.trending && (
                          <span className="flex items-center gap-1 text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                            <TrendingUp className="h-3 w-3" />
                            Trending
                          </span>
                        )}
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2 hover:text-green-600 cursor-pointer">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mb-3">
                        {post.content}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>By {post.author}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(post.id)}
                      className="flex items-center gap-2 text-gray-600 hover:text-green-600"
                    >
                      <ThumbsUp className="h-4 w-4" />
                      {post.likes}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 text-gray-600 hover:text-green-600"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {post.comments} Comments
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 text-gray-600 hover:text-green-600"
                    >
                      <Heart className="h-4 w-4" />
                      Save
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 text-gray-600 hover:text-green-600 ml-auto"
                    >
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            Load More Discussions
          </Button>
        </motion.div>
      </div>
    </div>
  )
}