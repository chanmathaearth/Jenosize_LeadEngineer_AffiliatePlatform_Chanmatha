import { apiClient } from "@/lib/api-client"
import { Product } from "./types"

export const getProducts = () => apiClient<Product[]>("/api/products")

export const createProduct = (source_url: string) =>
  apiClient<Product>("/api/products", {
    method: "POST",
    body: JSON.stringify({ source_url }),
  })

export const deleteProduct = (id: string | number) =>
  apiClient<void>(`/api/products/${id}`, {
    method: "DELETE",
  })
