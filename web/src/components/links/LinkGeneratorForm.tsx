"use client"

import { useState } from "react"
import { useCreateLinks } from "@/features/links/hooks"
import { useProducts } from "@/features/products/hooks"
import { useCampaigns } from "@/features/campaigns/hooks"
import { showSuccess, showError } from "@/lib/alert"

export function LinkGeneratorForm() {
  const [productId, setProductId] = useState("")
  const [campaignId, setCampaignId] = useState("")

  const { data: products } = useProducts()
  const { data: campaigns } = useCampaigns()
  const createLinks = useCreateLinks()

  const isLinkAlreadyGenerated = Boolean(
    productId && 
    campaignId && 
    products?.find(p => p.id.toString() === productId)
      ?.links?.some(link => link.campaign_id.toString() === campaignId)
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!productId || !campaignId) {
      showError("Validation Error", "Please select both a product and a campaign.")
      return
    }

    createLinks.mutate(
      { product_id: Number(productId), campaign_id: Number(campaignId) },
      {
        onSuccess: () => {
          showSuccess("Links Generated", "Short links have been successfully generated for all offers.")
          setProductId("")
          setCampaignId("")
        },
        onError: (error: any) => {
          showError("Error", error.message || "Failed to generate links")
        }
      }
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Generate Short Links</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Product</label>
          <select
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
            required
          >
            <option value="">-- Choose a product --</option>
            {products?.map((p) => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Campaign</label>
          <select
            value={campaignId}
            onChange={(e) => setCampaignId(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
            required
          >
            <option value="">-- Choose a campaign --</option>
            {campaigns?.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end items-center gap-4">
        {isLinkAlreadyGenerated && (
          <span className="text-sm text-red-500 font-medium">
            This product already has links for the selected campaign.
          </span>
        )}
        <button
          type="submit"
          disabled={createLinks.isPending || isLinkAlreadyGenerated || !productId || !campaignId}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {createLinks.isPending ? "Generating..." : isLinkAlreadyGenerated ? "Already Generated" : "Generate Links"}
        </button>
      </div>
    </form>
  )
}
