import { QueryKey } from "@/consts/queryKey";
import { useUser } from "@/hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import { generateCampaign } from "./queries";

export const useGenerateCampaign = (id: string) => {
  const { user } = useUser();

  return useQuery({
    queryKey: [QueryKey.Campaigns, id],
    queryFn: generateCampaign,
    enabled: !!user && !!id,
    staleTime: 1000 * 60 * 100000, // 10 minutes (adjust as needed)
  });
};
