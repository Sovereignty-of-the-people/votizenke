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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-green-600" />
            Civic Polls & Surveys
          </h2>
          <p className="text-gray-600">Make your voice heard on issues that matter</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          Create New Poll
        </Button>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "bg-green-600" : ""}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Polls Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredPolls.map((poll) => (
          <Card key={poll.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{poll.question}</CardTitle>
                  <CardDescription>{poll.description}</CardDescription>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge variant={poll.isActive ? "default" : "secondary"}>
                    {poll.isActive ? "Active" : "Closed"}
                  </Badge>
                  {poll.timeLeft && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      {poll.timeLeft}
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
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
                            <span className={`text-sm ${isSelected ? "font-semibold text-green-600" : ""}`}>
                              {option.text}
                            </span>
                            <span className="text-sm text-gray-600">
                              {option.percentage.toFixed(1)}% ({option.votes})
                            </span>
                          </div>
                          <Progress value={option.percentage} className="h-2" />
                        </div>
                      ) : (
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left h-auto p-3"
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
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {poll.totalVotes} votes
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    23 comments
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleShare(poll)}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Poll CTA */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Have a question for the community?</h3>
          <p className="text-gray-600 mb-4">Create polls to understand what Kenyan youth really think</p>
          <Button className="bg-green-600 hover:bg-green-700">
            Create Your First Poll
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}