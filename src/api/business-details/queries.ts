import { generatePath } from "react-router-dom";
import { apiClient } from "../apiClient";
import {
  GetBusinessSummariesResponse,
  GetSitemapResponse,
  UpdateBusinessSummariesData,
} from "./types";
import { apiEndpoints } from "../apiEndpoints";

export const generateBusinessSummaries = (url: string) =>
  apiClient.post<any>(
    generatePath(apiEndpoints.generateBusinessSummaries.path),
    { url }
  );

export const getBusinessSummaries = () =>
  apiClient
    .get<GetBusinessSummariesResponse>(
      generatePath(apiEndpoints.getBusinessSummaries.path)
    )
    .then(({ data }) => data.businessSummaries);

export const updateBusinessSummaries = (data: UpdateBusinessSummariesData) =>
  apiClient.patch<any>(
    generatePath(apiEndpoints.updateBusinessSummaries.path),
    { ...data }
  );

export const getSitemap = () =>
  apiClient
    .get<GetSitemapResponse>(generatePath(apiEndpoints.getSitemap.path))
    .then(({ data }) => data);
