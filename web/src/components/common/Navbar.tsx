"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, LayoutDashboard, LinkIcon, Package, Tags, Settings } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith("/admin")

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center w-1/4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="bg-gradient-to-tr from-blue-600 to-indigo-500 p-2 rounded-xl text-white shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-105 transition-all duration-300">
                <Activity className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 tracking-tight">
                AffiliateCompare
              </span>
            </Link>
          </div>

          {/* Navigation - Center */}
          <div className="hidden sm:flex flex-grow justify-center w-2/4">
            <div className="flex space-x-1 p-1 bg-gray-50/80 rounded-full border border-gray-100">
              <Link
                href="/"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  pathname === "/" 
                    ? "bg-white text-blue-600 shadow-sm ring-1 ring-gray-200/50" 
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
                }`}
              >
                Home
              </Link>
              
              {isAdmin && (
                <>
                  <Link
                    href="/admin/dashboard"
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      pathname === "/admin/dashboard" 
                        ? "bg-white text-blue-600 shadow-sm ring-1 ring-gray-200/50" 
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
                    }`}
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <Link
                    href="/admin/products"
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      pathname === "/admin/products" 
                        ? "bg-white text-blue-600 shadow-sm ring-1 ring-gray-200/50" 
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
                    }`}
                  >
                    <Package className="h-4 w-4" />
                    Products
                  </Link>
                  <Link
                    href="/admin/campaigns"
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      pathname === "/admin/campaigns" 
                        ? "bg-white text-blue-600 shadow-sm ring-1 ring-gray-200/50" 
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
                    }`}
                  >
                    <Tags className="h-4 w-4" />
                    Campaigns
                  </Link>
                  <Link
                    href="/admin/links"
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      pathname === "/admin/links" 
                        ? "bg-white text-blue-600 shadow-sm ring-1 ring-gray-200/50" 
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
                    }`}
                  >
                    <LinkIcon className="h-4 w-4" />
                    Links
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Action - Right */}
          <div className="w-1/4 hidden sm:flex justify-end">
            {!isAdmin && (
              <Link
                href="/admin/dashboard"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
              >
                <Settings className="h-4 w-4" />
                Admin Panel
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
