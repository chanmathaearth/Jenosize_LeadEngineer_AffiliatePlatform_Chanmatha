import { Sparkles } from "lucide-react"

export function BestPriceBadge() {
  return (
    <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-semibold">
      <Sparkles className="h-3 w-3" />
      Best Price
    </div>
  )
}
