"use client"

import { useLinks } from "@/features/links/hooks"
import { showCopied } from "@/lib/alert"
import { Copy } from "lucide-react"

export function GeneratedLinkList() {
  const { data: links, isLoading } = useLinks()

  if (isLoading) return <div className="p-8 text-center text-gray-500">Loading links...</div>
  if (!links || links.length === 0) return <div className="p-8 text-center text-gray-500 bg-white rounded-xl border border-gray-200">No generated links yet.</div>

  const handleCopy = (shortCode: string) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/go/${shortCode}`
    navigator.clipboard.writeText(url)
    showCopied()
  }
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mt-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500">
              <th className="p-4 font-medium">Product ID</th>
              <th className="p-4 font-medium">Campaign ID</th>
              <th className="p-4 font-medium">Marketplace</th>
              <th className="p-4 font-medium">Short Link</th>
              <th className="p-4 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {links.map((link) => (
              <tr key={link.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4 text-sm text-gray-900 truncate max-w-[150px]">{link.product_id}</td>
                <td className="p-4 text-sm text-gray-900 truncate max-w-[150px]">{link.campaign_id}</td>
                <td className="p-4 text-sm font-medium text-gray-900">
                  <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-xs">{link.marketplace}</span>
                </td>
                <td className="p-4 text-sm text-gray-500 font-mono">/api/go/{link.short_code}</td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => handleCopy(link.short_code)}
                    className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-medium bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Copy className="h-4 w-4" /> Copy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
