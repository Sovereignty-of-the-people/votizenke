"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">VotizenKE Demo Navigation</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/">
            <Button className="h-20 text-lg">🏠 Landing Page</Button>
          </Link>
          
          <Link href="/dashboard">
            <Button className="h-20 text-lg" variant="outline">📊 Dashboard</Button>
          </Link>
          
          <Link href="/discuss">
            <Button className="h-20 text-lg" variant="outline">💬 Discussions</Button>
          </Link>
          
          <Link href="/learn">
            <Button className="h-20 text-lg" variant="outline">📚 Learning Hub</Button>
          </Link>
          
          <Link href="/impact">
            <Button className="h-20 text-lg" variant="outline">🌐 Network Impact</Button>
          </Link>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Features to Test:</h2>
          <ul className="space-y-2 text-lg">
            <li>✅ Kenya-themed landing page with animations</li>
            <li>✅ User dashboard with invite functionality</li>
            <li>✅ Discussion forum with posts and comments</li>
            <li>✅ Learning hub with progress tracking</li>
            <li>✅ Network visualization for civic impact</li>
            <li>✅ Mobile-responsive design</li>
            <li>✅ Smooth animations and transitions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}