"use client"

import { useState } from "react"
import { useCreateCampaign } from "@/features/campaigns/hooks"
import { showSuccess, showError } from "@/lib/alert"

export function CampaignForm() {
  const [name, setName] = useState("")
  const [utmCampaign, setUtmCampaign] = useState("")
  const [startAt, setStartAt] = useState("")
  const [endAt, setEndAt] = useState("")

  const createCampaign = useCreateCampaign()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    createCampaign.mutate(
      { name, utm_campaign: utmCampaign, start_at: startAt, end_at: endAt },
      {
        onSuccess: () => {
          showSuccess("Campaign Created", "Your campaign has been successfully created.")
          setName("")
          setUtmCampaign("")
          setStartAt("")
          setEndAt("")
        },
        onError: (error: any) => {
          showError("Error", error.message || "Failed to create campaign")
        }
      }
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Create New Campaign</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            placeholder="e.g., Summer Sale 2026"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">UTM Campaign</label>
          <input
            type="text"
            required
            value={utmCampaign}
            onChange={(e) => setUtmCampaign(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            placeholder="e.g., summer_sale_26"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
          <input
            type="datetime-local"
            required
            value={startAt}
            onChange={(e) => setStartAt(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
          <input
            type="datetime-local"
            required
            value={endAt}
            onChange={(e) => setEndAt(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
          />
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          disabled={createCampaign.isPending}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {createCampaign.isPending ? "Creating..." : "Create Campaign"}
        </button>
      </div>
    </form>
  )
}
