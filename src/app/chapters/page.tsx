"use client"

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default function Chapters() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 text-sm px-4 py-2">
              Local Chapters
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your Local Chapter
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with like-minded youth in your area and organize for change.
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700">More information about local chapters coming soon!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
