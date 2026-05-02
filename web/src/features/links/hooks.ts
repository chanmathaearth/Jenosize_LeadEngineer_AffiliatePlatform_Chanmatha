import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getLinks, createLinks } from "./api"

export const useLinks = () => {
  return useQuery({
    queryKey: ["links"],
    queryFn: getLinks,
  })
}

export const useCreateLinks = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createLinks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] })
    },
  })
}
