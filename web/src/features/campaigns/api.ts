import { apiClient } from "@/lib/api-client"
import { Campaign } from "./types"

export const getCampaigns = () => apiClient<Campaign[]>("/api/campaigns")

export const createCampaign = (data: Omit<Campaign, "id">) =>
  apiClient<Campaign>("/api/campaigns", {
    method: "POST",
    body: JSON.stringify(data),
  })
