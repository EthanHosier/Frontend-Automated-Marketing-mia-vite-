import { z } from "zod";

export const signUpFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email(),
});

export type SignUpFormData = z.infer<typeof signUpFormSchema>;
