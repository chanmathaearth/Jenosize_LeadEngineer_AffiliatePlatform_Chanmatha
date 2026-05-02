import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getProducts, createProduct, deleteProduct } from "./api"

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  })
}

export const useCreateProduct = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
    },
  })
}

export const useDeleteProduct = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
    },
  })
}
