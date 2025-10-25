"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <div className="w-6 h-6 bg-red-600 rounded-full"></div>
              <div className="w-6 h-6 bg-green-600 rounded-full"></div>
              <span className="ml-2 text-lg font-bold">VotizenKE</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Empowering Kenyan youth to register, learn, and mobilize for democracy.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Mail className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/learn" className="text-gray-300 hover:text-white text-sm">
                  Learning Center
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-white text-sm">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-gray-300 hover:text-white text-sm">
                  Leadership Academy
                </Link>
              </li>
              <li>
                <Link href="/predictive" className="text-gray-300 hover:text-white text-sm">
                  Predictive Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/learn" className="text-gray-300 hover:text-white text-sm">
                  Voter Education
                </Link>
              </li>
              <li>
                <Link href="/campaign" className="text-gray-300 hover:text-white text-sm">
                  Campaign Tools
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="text-gray-300 hover:text-white text-sm">
                  Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link href="/chapters" className="text-gray-300 hover:text-white text-sm">
                  Local Chapters
                </Link>
              </li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Organization</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-white text-sm">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-300 hover:text-white text-sm">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 VotizenKE. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}