import { apiClient } from "@/lib/api-client"
import { DashboardStats } from "./types"

export const getDashboardStats = () => apiClient<DashboardStats>("/api/dashboard")
