export type GetSitemapResponse = {
  urls: string[];
};

export type GetBusinessSummariesResponse = {
  businessName: string;
  businessSummary: string;
  brandVoice: string;
  targetRegion: string;
  targetAudience: string;
  colors: string[];
};

export type GenerateBusinessSummariesResponse = {
  businessName: string;
  businessSummary: string;
  brandVoice: string;
  targetRegion: string;
  targetAudience: string;
  colors: string[];
};

export type UpdateBusinessSummariesData = Partial<{
  [key in keyof GenerateBusinessSummariesResponse]: any;
}>;
