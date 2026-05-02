"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, LayoutDashboard, LinkIcon, Package, Tags } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith("/admin")

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600 flex items-center gap-2">
                <BarChart3 className="h-6 w-6" />
                AffiliateCompare
              </span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === "/" ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Home
              </Link>
              
              {isAdmin && (
                <>
                  <Link
                    href="/admin/dashboard"
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium gap-2 ${
                      pathname === "/admin/dashboard" ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <Link
                    href="/admin/products"
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium gap-2 ${
                      pathname === "/admin/products" ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    <Package className="h-4 w-4" />
                    Products
                  </Link>
                  <Link
                    href="/admin/campaigns"
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium gap-2 ${
                      pathname === "/admin/campaigns" ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    <Tags className="h-4 w-4" />
                    Campaigns
                  </Link>
                  <Link
                    href="/admin/links"
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium gap-2 ${
                      pathname === "/admin/links" ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    <LinkIcon className="h-4 w-4" />
                    Links
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

