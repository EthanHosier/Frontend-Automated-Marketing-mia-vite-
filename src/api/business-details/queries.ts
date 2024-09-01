import { generatePath } from "react-router-dom";
import { apiClient } from "../apiClient";
import { GetBusinessSummariesResponse, GetSitemapResponse } from "./types";
import { apiEndpoints } from "../apiEndpoints";

export const getSitemap = () =>
  apiClient
    .get<GetSitemapResponse>(generatePath(apiEndpoints.getSitemap.path))
    .then(({ data }) => data);

export const getBusinessSummaries = () =>
  apiClient
    .get<GetBusinessSummariesResponse>(
      generatePath(apiEndpoints.getBusinessSummaries.path)
    )
    .then(({ data }) => data.businessSummaries);
