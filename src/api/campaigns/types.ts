type Thumbnail = {
  url: string;
};

type DesignUrls = {
  edit_url: string;
  view_url: string;
};

type Design = {
  created_at: number;
  id: string;
  title: string;
  updated_at: number;
  thumbnail: Thumbnail;
  url: string;
  urls: DesignUrls;
};

export type Post = {
  platform: string;
  caption: string;
  design: Design;
};

export type CampaignResponse = {
  research_report: string;
  posts: Post[];
  theme: string;
  primary_keyword: string;
};
