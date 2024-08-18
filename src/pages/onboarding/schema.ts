import { z } from "zod";

export const businessDetailsSchema = z.object({
  businessName: z.string().min(1),
  primaryLocation: z.string().min(1),
});

export type BusinessDetailsData = z.infer<typeof businessDetailsSchema>;

export const websiteSchema = z.object({
  website: z.string(),
});

export type WebSiteData = z.infer<typeof websiteSchema>;
