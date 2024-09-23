type HTTPMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

const API_ROUTE_PATH = "/api";

export const apiEndpoints = {
  generateBusinessSummaries: {
    method: "POST",
    path: `${API_ROUTE_PATH}/business-summaries`,
  },
  updateBusinessSummaries: {
    method: "PATCH",
    path: `${API_ROUTE_PATH}/business-summaries`,
  },
  getSitemap: {
    method: "GET",
    path: `${API_ROUTE_PATH}/sitemap`,
  },
  getBusinessSummaries: {
    method: "GET",
    path: `${API_ROUTE_PATH}/business-summaries`,
  },
  generateCampaign: {
    method: "POST",
    path: `${API_ROUTE_PATH}/campaigns`,
  },
} satisfies {
  [endpoint: string]: { method: HTTPMethod; path: string };
};
