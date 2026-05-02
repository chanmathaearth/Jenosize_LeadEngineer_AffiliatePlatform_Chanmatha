"use client"

import { useDashboard } from "@/features/dashboard/hooks"
import { StatCard } from "@/components/dashboard/StatCard"
import { DashboardTable } from "@/components/dashboard/DashboardTable"
import { Loading } from "@/components/common/Loading"
import { ErrorMessage } from "@/components/common/ErrorMessage"
import { MousePointerClick } from "lucide-react"

export default function AdminDashboardPage() {
  const { data: stats, isLoading, error } = useDashboard()

  if (isLoading) return <Loading />
  if (error) return <ErrorMessage message="Failed to load dashboard data." />
  if (!stats) return null

  console.log(stats)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Performance metrics for your affiliate links.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Clicks" 
          value={stats.total_clicks.toLocaleString()} 
          icon={<MousePointerClick className="h-6 w-6" />} 
        />
        {/* Additional stat cards can go here */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <DashboardTable 
          title="Clicks by Product"
          data={stats.clicks_by_product}
          columns={[
            { key: "product_title", label: "Product" },
            { key: "clicks", label: "Clicks" }
          ]}
        />
        
        <DashboardTable 
          title="Clicks by Campaign"
          data={stats.clicks_by_campaign}
          columns={[
            { key: "campaign_name", label: "Campaign" },
            { key: "clicks", label: "Clicks" }
          ]}
        />

        <div className="lg:col-span-2">
          <DashboardTable 
            title="Clicks by Marketplace"
            data={stats.clicks_by_marketplace}
            columns={[
              { key: "marketplace", label: "Marketplace" },
              { key: "clicks", label: "Clicks" }
            ]}
          />
        </div>
      </div>
    </div>
  )
}
