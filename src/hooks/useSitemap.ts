import { apiClient } from "@/api/apiClient";
import { apiEndpoints } from "@/api/apiEndpoints";
import { generatePath } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "@/consts/queryKey";
import { useUser } from "./useUser";

export type GetSitemapResponse = {
  urls: string[];
};

const getSitemap = () =>
  apiClient
    .get<GetSitemapResponse>(generatePath(apiEndpoints.getSitemap.path))
    .then(({ data }) => data);

export const useSitemap = () => {
  const { user } = useUser();

  return useQuery({
    queryKey: [QueryKey.Sitemap, user?.id],
    queryFn: getSitemap,
    enabled: !!user,
  });
};
