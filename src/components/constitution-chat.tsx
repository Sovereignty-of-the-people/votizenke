"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, BookOpen, Send, Bot, Search, Lightbulb } from "lucide-react"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
}

export function ConstitutionChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Jambo! I'm your AI constitutional assistant. I can help you understand Kenyan laws, constitutional rights, and civic procedures. What would you like to know?",
      timestamp: new Date()
    }
  ])
  
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const suggestedQuestions = [
    "What are my voting rights in Kenya?",
    "How do I register as a voter?",
    "What does Article 10 of the Constitution say?",
    "How can I contest election results?",
    "What are the functions of the IEBC?",
    "How does devolution work in Kenya?"
  ]

  const quickTopics = [
    { name: "Voting Rights", icon: "🗳️", color: "bg-green-100 text-green-800" },
    { name: "Bill of Rights", icon: "📜", color: "bg-blue-100 text-blue-800" },
    { name: "Devolution", icon: "🏛️", color: "bg-purple-100 text-purple-800" },
    { name: "Election Process", icon: "📊", color: "bg-orange-100 text-orange-800" },
    { name: "Public Finance", icon: "💰", color: "bg-yellow-100 text-yellow-800" },
    { name: "Judiciary", icon: "⚖️", color: "bg-red-100 text-red-800" }
  ]

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date()
    }

    setMessages([...messages, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: getAIResponse(input),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 2000)
  }

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()
    
    if (lowerQuestion.includes("voting") || lowerQuestion.includes("vote")) {
      return "According to Article 38 of the Kenyan Constitution, every citizen has the right to vote. To vote, you must: 1) Be a registered voter, 2) Be 18 years or older, 3) Have a valid ID or passport, 4) Be of sound mind. You can register at any IEBC office or designated registration center."
    }
    
    if (lowerQuestion.includes("register")) {
      return "To register as a voter in Kenya: 1) Visit your nearest IEBC office with your original ID/passport, 2) Fill out the registration form, 3) Your biometrics will be captured, 4) You'll receive a voter's card. Registration is free and takes about 10 minutes. Make sure to register in the constituency where you reside!"
    }
    
    if (lowerQuestion.includes("article 10")) {
      return "Article 10 of the Kenyan Constitution outlines the national values and principles of governance: 1) Patriotism, national unity, sharing and devolution of power, 2) The rule of law, democracy and participation of the people, 3) Human dignity, equity, social justice, inclusiveness, equality, human rights, non-discrimination and protection of the marginalized, 4) Good governance, integrity, transparency and accountability."
    }
    
    return "That's a great question about Kenyan civic law! Based on my knowledge of the Constitution and relevant statutes, I'd recommend checking the specific articles related to your query. For detailed legal advice, please consult with a qualified lawyer or visit the IEBC website for election-related matters."
  }

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
    handleSendMessage()
  }

  return (
    <div className="grid md:grid-cols-4 gap-6 h-[600px]">
      {/* Quick Topics Sidebar */}
      <Card className="md:col-span-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Quick Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {quickTopics.map((topic, index) => (
            <button
              key={index}
              className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{topic.icon}</span>
                <Badge className={topic.color} variant="secondary">
                  {topic.name}
                </Badge>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Chat Area */}
      <Card className="md:col-span-3 flex flex-col">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bot className="h-4 w-4 text-green-600" />
              Constitution AI Assistant
            </CardTitle>
            <Badge variant="outline" className="text-green-600">
              🇰🇪 Powered by Kenyan Law
            </Badge>
          </div>
          <CardDescription>
            Ask me anything about the Kenyan Constitution and civic rights
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.type === "user" ? "justify-end" : ""}`}>
                {message.type === "bot" && (
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-green-600" />
                  </div>
                )}
                <div className={`max-w-[80%] ${message.type === "user" ? "order-first" : ""}`}>
                  <div className={`rounded-lg p-3 ${
                    message.type === "user" 
                      ? "bg-green-600 text-white" 
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                {message.type === "user" && (
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-4 w-4 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-green-600" />
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                <Lightbulb className="h-4 w-4" />
                Try asking:
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs"
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Kenyan laws, rights, or procedures..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}