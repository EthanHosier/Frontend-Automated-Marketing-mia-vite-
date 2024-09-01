export type GetSitemapResponse = {
  urls: string[];
};

export type GetBusinessSummariesResponse = {
  businessSummaries: {
    businessName: string;
    businessSummary: string;
    brandVoice: string;
    targetRegion: string;
    targetAudience: string;
    colors: string[];
  };
};
