"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, MessageSquare, Share2, Clock, Users } from "lucide-react"

interface PollOption {
  id: string
  text: string
  votes: number
  percentage: number
}

interface Poll {
  id: string
  question: string
  description: string
  options: PollOption[]
  totalVotes: number
  category: string
  isActive: boolean
  timeLeft?: string
  userVoted?: boolean
  selectedOption?: string
}

export function CivicPolls() {
  const [polls, setPolls] = useState<Poll[]>([
    {
      id: "1",
      question: "What's the most important issue for Kenyan youth in 2027?",
      description: "Help us understand what matters most to young Kenyans",
      category: "Youth Issues",
      isActive: true,
      timeLeft: "2 days left",
      options: [
        { id: "1", text: "Employment opportunities", votes: 234, percentage: 45 },
        { id: "2", text: "Education reform", votes: 156, percentage: 30 },
        { id: "3", text: "Healthcare access", votes: 89, percentage: 17 },
        { id: "4", text: "Climate action", votes: 41, percentage: 8 }
      ],
      totalVotes: 520
    },
    {
      id: "2", 
      question: "Should voting age be lowered to 16 in Kenya?",
      description: "Debate on youth participation in democracy",
      category: "Constitutional Reform",
      isActive: true,
      timeLeft: "5 days left",
      options: [
        { id: "1", text: "Yes, include youth earlier", votes: 189, percentage: 62 },
        { id: "2", text: "No, keep at 18", votes: 98, percentage: 32 },
        { id: "3", text: "Unsure/Need more info", votes: 18, percentage: 6 }
      ],
      totalVotes: 305
    },
    {
      id: "3",
      question: "How can we improve voter turnout among young Kenyans?",
      description: "Share your ideas for better engagement",
      category: "Civic Engagement",
      isActive: false,
      options: [
        { id: "1", text: "Mobile voting apps", votes: 412, percentage: 38 },
        { id: "2", text: "Better civic education", votes: 345, percentage: 32 },
        { id: "3", text: "Incentives for voting", votes: 198, percentage: 18 },
        { id: "4", text: "More youth candidates", votes: 125, percentage: 12 }
      ],
      totalVotes: 1080
    }
  ])

  const [selectedPoll, setSelectedPoll] = useState<string | null>(null)
  const [votedPolls, setVotedPolls] = useState<Set<string>>(new Set())

  const handleVote = (pollId: string, optionId: string) => {
    if (votedPolls.has(pollId)) return

    setPolls(polls.map(poll => {
      if (poll.id === pollId) {
        const updatedOptions = poll.options.map(option => {
          if (option.id === optionId) {
            return {
              ...option,
              votes: option.votes + 1,
              percentage: ((option.votes + 1) / (poll.totalVotes + 1)) * 100
            }
          }
          return {
            ...option,
            percentage: (option.votes / (poll.totalVotes + 1)) * 100
          }
        })
        
        return {
          ...poll,
          options: updatedOptions,
          totalVotes: poll.totalVotes + 1,
          userVoted: true,
          selectedOption: optionId
        }
      }
      return poll
    }))

    setVotedPolls(new Set([...votedPolls, pollId]))
  }

  const handleShare = (poll: Poll) => {
    const message = encodeURIComponent(
      `Vote in this poll: "${poll.question}" Join the discussion on VotizenKE! 🇰🇪`
    )
    window.open(`https://wa.me/?text=${message}`, "_blank")
  }

  const categories = ["All", "Youth Issues", "Constitutional Reform", "Civic Engagement", "Policy", "Events"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPolls = selectedCategory === "All" 
    ? polls 
    : polls.filter(poll => poll.category === selectedCategory)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-6 rounded-2xl border border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <BarChart3 className="h-6 w-6 text-green-400" />
              Civic Polls & Surveys
            </h2>
            <p className="text-gray-300">Make your voice heard on issues that matter</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg shadow-green-500/30">
            Create New Poll
          </Button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category 
                  ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/30 border-0' 
                  : 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 border-gray-600 hover:border-green-500/50'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Polls Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredPolls.map((poll) => (
          <Card key={poll.id} className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl border-gray-700 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
            <CardHeader className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2 text-white font-bold">{poll.question}</CardTitle>
                  <CardDescription className="text-gray-300">{poll.description}</CardDescription>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className={`${
                    poll.isActive 
                      ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/30' 
                      : 'bg-gray-600 hover:bg-gray-700 text-gray-300'
                  }`}>
                    {poll.isActive ? "Active" : "Closed"}
                  </Badge>
                  {poll.timeLeft && (
                    <div className="flex items-center gap-1 text-xs text-gray-300 bg-black/30 px-2 py-1 rounded-full">
                      <Clock className="h-3 w-3" />
                      {poll.timeLeft}
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4 relative z-10">
              {/* Poll Options */}
              <div className="space-y-3">
                {poll.options.map((option) => {
                  const hasVoted = votedPolls.has(poll.id)
                  const isSelected = poll.selectedOption === option.id
                  
                  return (
                    <div key={option.id} className="space-y-2">
                      {hasVoted ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-medium ${
                              isSelected ? "text-green-400 font-bold" : "text-white"
                            }`}>
                              {option.text}
                            </span>
                            <span className="text-sm text-gray-300">
                              {option.percentage.toFixed(1)}% ({option.votes})
                            </span>
                          </div>
                          <Progress value={option.percentage} className="h-2 bg-green-600" />
                        </div>
                      ) : (
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left h-auto p-3 bg-gray-800/50 hover:bg-gray-700/50 text-white border-gray-600 hover:border-green-500/50"
                          onClick={() => handleVote(poll.id, option.id)}
                        >
                          {option.text}
                        </Button>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Poll Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-full">
                    <Users className="h-4 w-4 text-green-400" />
                    {poll.totalVotes} votes
                  </div>
                  <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-full">
                    <MessageSquare className="h-4 w-4 text-blue-400" />
                    23 comments
                  </div>
                </div>
                <Button
                  size="sm"
                  onClick={() => handleShare(poll)}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg shadow-green-500/30"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Poll CTA */}
      <Card className="bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl border-gray-700 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
        <CardContent className="p-8 text-center relative z-10">
          <div className="max-w-md mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-white mb-2">Have a question for the community?</h3>
            <p className="text-gray-300 mb-6 text-lg">Create polls to understand what Kenyan youth really think about important issues</p>
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg shadow-green-500/30 px-8 py-3 text-lg">
              Create Your First Poll
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}