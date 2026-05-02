import { CampaignForm } from "@/components/campaigns/CampaignForm"

export default function AdminCampaignsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Manage Campaigns</h1>
        <p className="text-gray-500 mt-1">Create marketing campaigns to group and track your generated short links.</p>
      </div>

      <CampaignForm />
      
      {/* 
        In a real application, you would also fetch and list the campaigns here.
        Based on requirements: "Create campaign: name, utm_campaign, start_at, end_at... Show campaign context clearly".
      */}
    </div>
  )
}
