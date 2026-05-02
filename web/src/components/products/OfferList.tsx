import { Offer } from "@/features/products/types"
import { BestPriceBadge } from "./BestPriceBadge"
import { formatCurrency } from "@/lib/format"

export function OfferList({ offers, lowestPrice }: { offers: Offer[]; lowestPrice: number }) {
  return (
    <div className="space-y-3 mt-4">
      {offers.map((offer) => {
        const isBestPrice = offer.price === lowestPrice
        
        return (
          <div key={offer.id || offer.marketplace} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:border-blue-200 transition-colors bg-gray-50">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">{offer.marketplace}</span>
                {isBestPrice && <BestPriceBadge />}
              </div>
              <div className="text-sm text-gray-500 mt-1">{offer.store_name}</div>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="text-lg font-bold text-gray-900">
                {formatCurrency(offer.price)}
              </div>
              
              <a 
                href={offer.short_code ? `${process.env.NEXT_PUBLIC_API_URL}/api/go/${offer.short_code}` : "#"}
                target={offer.short_code ? "_blank" : "_self"}
                rel={offer.short_code ? "noopener noreferrer" : ""}
                className={`mt-2 inline-block px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  offer.short_code 
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                onClick={(e) => {
                  if (!offer.short_code) e.preventDefault()
                }}
              >
                {offer.short_code ? "Buy Now" : "Generate link first"}
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}
