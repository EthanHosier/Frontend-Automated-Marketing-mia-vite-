import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKey } from "@/consts/queryKey";
import { useUser } from "@/hooks/useUser";
import {
  generateBusinessSummaries,
  getBusinessSummaries,
  getSitemap,
  updateBusinessSummaries,
} from "./queries";
import { useNavigate } from "react-router-dom";
import { UpdateBusinessSummariesData } from "./types";

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

export const useGenerateBusinessSummaries = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useUser();

  return useMutation({
    mutationFn: generateBusinessSummaries,
    onSuccess: async () => {
      navigate("/campaigns?updateBusinessSummaries=true");
      await queryClient.invalidateQueries({
        queryKey: [QueryKey.BusinessSummaries, user?.id],
      });
    },
  });
};

export const useUpdateBusinessSummaries = () => {
  const queryClient = useQueryClient();
  const { user } = useUser();

  return useMutation({
    mutationFn: (data: UpdateBusinessSummariesData) => {
      return updateBusinessSummaries(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QueryKey.BusinessSummaries, user?.id],
      });
    },
  });
};
