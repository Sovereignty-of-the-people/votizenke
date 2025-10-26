"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, Users, MessageCircle, TrendingUp, Hash } from "lucide-react"

interface Message {
  id: string
  user: string
  content: string
  timestamp: Date
  channel: string
}

interface Channel {
  id: string
  name: string
  description: string
  activeUsers: number
  trending?: boolean
}

export function CommunityChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      user: "Aisha K.",
      content: "Just registered to vote! Who else is excited for 2027? 🇰🇪",
      timestamp: new Date(Date.now() - 300000),
      channel: "general"
    },
    {
      id: "2", 
      user: "David M.",
      content: "Anyone attending the youth forum in Nairobi this weekend?",
      timestamp: new Date(Date.now() - 180000),
      channel: "events"
    },
    {
      id: "3",
      user: "Grace W.",
      content: "Check out this amazing civic education resource I found!",
      timestamp: new Date(Date.now() - 60000),
      channel: "resources"
    }
  ])

  const [channels] = useState<Channel[]>([
    { id: "general", name: "general", description: "General civic discussions", activeUsers: 234, trending: true },
    { id: "events", name: "events", description: "Upcoming civic events", activeUsers: 89 },
    { id: "resources", name: "resources", description: "Share learning materials", activeUsers: 156 },
    { id: "voter-registration", name: "voter-registration", description: "Registration help & tips", activeUsers: 178, trending: true },
    { id: "policy-talk", name: "policy-talk", description: "Discuss current policies", activeUsers: 67 }
  ])

  const [selectedChannel, setSelectedChannel] = useState("general")
  const [newMessage, setNewMessage] = useState("")
  const [isOnline, setIsOnline] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        user: "You",
        content: newMessage,
        timestamp: new Date(),
        channel: selectedChannel
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

  const filteredMessages = messages.filter(msg => msg.channel === selectedChannel)

  return (
    <div className="grid md:grid-cols-4 gap-6 h-[600px]">
      {/* Channels Sidebar */}
      <Card className="md:col-span-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Hash className="h-4 w-4" />
            Channels
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {channels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => setSelectedChannel(channel.id)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                selectedChannel === channel.id
                  ? "bg-green-100 text-green-800"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">#{channel.name}</span>
                    {channel.trending && (
                      <Badge variant="secondary" className="text-xs">
                        <TrendingUp className="h-3 w-3" />
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-300 mt-1">{channel.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-300">{channel.activeUsers} online</span>
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
              <MessageCircle className="h-4 w-4" />
              #{selectedChannel}
            </CardTitle>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${isOnline ? "bg-green-500" : "bg-gray-400"}`}></div>
                <span className="text-sm text-gray-300">
                  {channels.find(c => c.id === selectedChannel)?.activeUsers} online
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {filteredMessages.map((message) => (
              <div key={message.id} className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{message.user}</span>
                    <span className="text-xs text-gray-300">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-sm text-white">{message.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
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