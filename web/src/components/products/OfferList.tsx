import { Offer } from "@/features/products/types"
import { BestPriceBadge } from "./BestPriceBadge"
import { formatCurrency } from "@/lib/format"

export function OfferList({ offers, links = [], lowestPrice, selectedCampaignId }: { offers: Offer[]; links?: { marketplace: string; short_code: string; campaign_id: number }[]; lowestPrice: number; selectedCampaignId: number | null }) {
  return (
    <div className="space-y-3 mt-4">
      {offers.map((offer) => {
        const isBestPrice = offer.price === lowestPrice
        const matchedLink = selectedCampaignId
          ? links.find(link => link.marketplace === offer.marketplace && link.campaign_id === selectedCampaignId)
          : links.find(link => link.marketplace === offer.marketplace)
        const shortCode = matchedLink?.short_code

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
                href={shortCode ? `/go/${shortCode}` : "#"}
                target={shortCode ? "_blank" : "_self"}
                rel={shortCode ? "noopener noreferrer" : undefined}
                className={`mt-2 inline-block px-4 py-2 text-sm font-medium rounded-md transition-colors ${shortCode
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                onClick={(e) => {
                  if (!shortCode) e.preventDefault()
                }}
              >
                {shortCode ? "Buy Now" : "Generate link first"}
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}
