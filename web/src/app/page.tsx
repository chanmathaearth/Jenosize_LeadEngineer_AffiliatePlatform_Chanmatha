"use client"

import { useState } from "react"
import { useProducts } from "@/features/products/hooks"
import { useCampaigns } from "@/features/campaigns/hooks"
import { ProductCard } from "@/components/products/ProductCard"
import { Loading } from "@/components/common/Loading"
import { ErrorMessage } from "@/components/common/ErrorMessage"
import { Tags } from "lucide-react"

export default function HomePage() {
  const { data: products, isLoading: isLoadingProducts, error: errorProducts } = useProducts()
  const { data: campaigns, isLoading: isLoadingCampaigns } = useCampaigns()
  
  const [selectedCampaignId, setSelectedCampaignId] = useState<number | null>(null)

  const isLoading = isLoadingProducts || isLoadingCampaigns

  const filteredProducts = products?.filter(product => {
    if (!selectedCampaignId) return true; // Default shows all products if no campaign selected
    return product.links?.some(link => link.campaign_id === selectedCampaignId);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Compare & Save
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          Find the best deals across multiple marketplaces. We track prices so you don't have to.
        </p>
      </div>

      {campaigns && campaigns.length > 0 && (
        <div className="mb-12 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4 text-gray-600 font-medium">
            <Tags className="h-4 w-4" />
            <span>Select Campaign:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
            <button
              onClick={() => setSelectedCampaignId(null)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCampaignId === null
                  ? "bg-blue-600 text-white shadow-md ring-2 ring-blue-600 ring-offset-2 border border-blue-600"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              Default (All Campaigns)
            </button>
            {campaigns
              .filter(campaign => campaign.utm_campaign !== 'organic' && !campaign.name.toLowerCase().includes('organic'))
              .map((campaign) => (
              <button
                key={campaign.id}
                onClick={() => setSelectedCampaignId(Number(campaign.id))}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCampaignId === Number(campaign.id)
                    ? "bg-blue-600 text-white shadow-md ring-2 ring-blue-600 ring-offset-2 border border-blue-600"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                {campaign.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {isLoading && <Loading />}
      
      {errorProducts && (
        <div className="max-w-2xl mx-auto">
          <ErrorMessage message="Failed to load products. Please try again later." />
        </div>
      )}

      {filteredProducts && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              selectedCampaignId={selectedCampaignId} 
            />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500 bg-white rounded-xl border border-gray-200">
              No products found for the selected campaign.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
