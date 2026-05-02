import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getCampaigns, createCampaign } from "./api"

export const useCampaigns = () => {
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: getCampaigns,
  })
}

export const useCreateCampaign = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createCampaign,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["campaigns"] })
    },
  })
}
