import { z } from "zod";

export const SignInFormSchema = z.object({
  email: z.string().email(),
});

export type SignInFormData = z.infer<typeof SignInFormSchema>;
