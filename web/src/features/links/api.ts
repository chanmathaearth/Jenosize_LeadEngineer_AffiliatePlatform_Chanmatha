import { apiClient } from "@/lib/api-client"
import { Link, CreateLinkDto } from "./types"

export const getLinks = () => apiClient<Link[]>("/api/links")

export const createLinks = (data: CreateLinkDto) =>
  apiClient<Link[]>("/api/links", {
    method: "POST",
    body: JSON.stringify(data),
  })
