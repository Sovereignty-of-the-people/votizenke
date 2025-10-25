"use client"

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Award, Zap } from "lucide-react";

export default function LeadershipAcademy() {
  const courses = [
    {
      title: "Foundations of Civic Leadership",
      description: "Understand the core principles of leadership in a democratic society.",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Community Organizing and Mobilization",
      description: "Learn how to build and mobilize a community for a cause.",
      icon: Zap,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Public Speaking and Advocacy",
      description: "Master the art of public speaking and effective advocacy.",
      icon: Award,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 text-sm px-4 py-2">
              Leadership Academy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Become a Leader for Change
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Leadership Academy provides you with the skills and knowledge to become an effective civic leader.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${course.color} mb-4`}>
                    <course.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
