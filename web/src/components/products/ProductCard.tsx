import { Product } from "@/features/products/types"
import { OfferList } from "./OfferList"

export function ProductCard({ product, selectedCampaignId }: { product: Product, selectedCampaignId: number | null }) {

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={product.image_url} 
          alt={product.title}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 min-h-[3.5rem]">
          {product.title}
        </h3>
        
        <div className="mt-auto">
          <OfferList offers={product.offers} links={product.links} lowestPrice={product.best_price} selectedCampaignId={selectedCampaignId} />
        </div>
      </div>
    </div>
  )
}
