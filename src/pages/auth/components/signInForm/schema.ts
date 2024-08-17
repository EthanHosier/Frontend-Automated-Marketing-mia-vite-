import { z } from "zod";

export const SignInFormSchema = z.object({
  email: z.string().min(1, "Email required"),
  password: z.string().min(1, "Password required"),
});

export type SignInFormData = z.infer<typeof SignInFormSchema>;
