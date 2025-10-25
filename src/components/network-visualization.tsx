"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface NetworkNode {
  id: string
  name: string
  x: number
  y: number
  vx: number
  vy: number
  level: number
  isUser?: boolean
}

interface NetworkLink {
  source: string
  target: string
}

export function NetworkVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)

  // Mock network data
  const nodes: NetworkNode[] = [
    { id: "user", name: "You", x: 400, y: 300, vx: 0, vy: 0, level: 0, isUser: true },
    { id: "friend1", name: "Sarah M.", x: 300, y: 200, vx: 0, vy: 0, level: 1 },
    { id: "friend2", name: "John K.", x: 500, y: 200, vx: 0, vy: 0, level: 1 },
    { id: "friend3", name: "Grace W.", x: 350, y: 400, vx: 0, vy: 0, level: 1 },
    { id: "friend4", name: "David O.", x: 450, y: 400, vx: 0, vy: 0, level: 1 },
    { id: "friend5", name: "Alice N.", x: 200, y: 300, vx: 0, vy: 0, level: 2 },
    { id: "friend6", name: "Bob M.", x: 600, y: 300, vx: 0, vy: 0, level: 2 },
    { id: "friend7", name: "Carol K.", x: 250, y: 150, vx: 0, vy: 0, level: 2 },
    { id: "friend8", name: "Peter W.", x: 550, y: 150, vx: 0, vy: 0, level: 2 },
  ]

  const links: NetworkLink[] = [
    { source: "user", target: "friend1" },
    { source: "user", target: "friend2" },
    { source: "user", target: "friend3" },
    { source: "user", target: "friend4" },
    { source: "friend1", target: "friend5" },
    { source: "friend1", target: "friend7" },
    { source: "friend2", target: "friend6" },
    { source: "friend2", target: "friend8" },
    { source: "friend3", target: "friend5" },
    { source: "friend4", target: "friend6" },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 800
    canvas.height = 600

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw links
      ctx.strokeStyle = "rgba(34, 197, 94, 0.3)"
      ctx.lineWidth = 2
      links.forEach(link => {
        const sourceNode = nodes.find(n => n.id === link.source)
        const targetNode = nodes.find(n => n.id === link.target)
        if (sourceNode && targetNode) {
          ctx.beginPath()
          ctx.moveTo(sourceNode.x, sourceNode.y)
          ctx.lineTo(targetNode.x, targetNode.y)
          ctx.stroke()
        }
      })

      // Draw nodes
      nodes.forEach(node => {
        const distance = Math.sqrt(
          Math.pow(mouseX - node.x, 2) + Math.pow(mouseY - node.y, 2)
        )
        const isHovered = distance < 30
        const radius = node.isUser ? 25 : (isHovered ? 20 : 15)

        // Node shadow
        ctx.shadowColor = "rgba(0, 0, 0, 0.2)"
        ctx.shadowBlur = 10
        ctx.shadowOffsetX = 2
        ctx.shadowOffsetY = 2

        // Node circle
        ctx.beginPath()
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
        
        if (node.isUser) {
          ctx.fillStyle = "#059669" // Green for user
        } else if (node.level === 1) {
          ctx.fillStyle = "#3b82f6" // Blue for direct friends
        } else {
          ctx.fillStyle = "#8b5cf6" // Purple for second level
        }
        
        ctx.fill()
        
        // Reset shadow
        ctx.shadowColor = "transparent"
        ctx.shadowBlur = 0
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0

        // Node border
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 3
        ctx.stroke()

        // Node label
        ctx.fillStyle = "#1f2937"
        ctx.font = node.isUser ? "bold 14px Inter" : "12px Inter"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        
        if (isHovered || node.isUser) {
          ctx.fillText(node.name, node.x, node.y + radius + 15)
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-green-600">🌐</span>
          Your Civic Network
        </CardTitle>
        <CardDescription>
          Visualize your impact - see how your invitations are spreading voter awareness
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <canvas
            ref={canvasRef}
            className="w-full h-auto border border-gray-200 rounded-lg"
            style={{ maxWidth: "800px" }}
          />
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              <span>You</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span>Direct Invites</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span>Second Level</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">4</div>
            <div className="text-sm text-gray-600">Direct Invites</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">4</div>
            <div className="text-sm text-gray-600">Second Level</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">8</div>
            <div className="text-sm text-gray-600">Total Reach</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}