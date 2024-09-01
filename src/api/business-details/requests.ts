import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/consts/queryKey";
import { useUser } from "@/hooks/useUser";
import { getBusinessSummaries, getSitemap } from "./queries";

export const useSitemap = () => {
  const { user } = useUser();

  return useQuery({
    queryKey: [QueryKey.Sitemap, user?.id],
    queryFn: getSitemap,
    enabled: !!user,
  });
};

export const useBusinessSummaries = () => {
  const { user } = useUser();

  return useQuery({
    queryKey: [QueryKey.BusinessSummaries, user?.id],
    queryFn: getBusinessSummaries,
    enabled: !!user,
  });
};
