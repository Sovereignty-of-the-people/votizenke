"use client"

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default function Partners() {
  const partners = [
    { name: "Kenya Youth Network", logo: "/partners/kyn.png" },
    { name: "Sauti Zetu", logo: "/partners/sauti-zetu.png" },
    { name: "Democracy Watch", logo: "/partners/dw.png" },
    { name: "Youth for Change", logo: "/partners/yfc.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 text-sm px-4 py-2">
              Our Partners
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              United for a Better Kenya
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are proud to partner with these organizations to empower Kenyan youth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center items-center p-8 bg-gray-50 rounded-lg">
                {/* Placeholder for partner logo */}
                <div className="w-32 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-gray-500 text-sm">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
