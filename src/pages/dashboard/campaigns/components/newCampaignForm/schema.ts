import { z } from "zod";

export const NewCampaignFormSchema = z.object({
  instructions: z.string(),
  targetAudienceLocation: z.string(),
  campaignBacklink: z.string().url(),
});

export type NewCampaignFormData = z.infer<typeof NewCampaignFormSchema>;
