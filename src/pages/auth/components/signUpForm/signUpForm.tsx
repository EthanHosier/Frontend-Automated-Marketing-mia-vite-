import { Button } from "@/components/button";
import { Gap } from "@/components/gap";
import { TextInput } from "@/components/text-input";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpFormData, signUpFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/form";
import RoundSocialMediaIcon from "@/components/round-social-media-icon";

const SignUpForm = () => {
  const methods = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <Form methods={methods} handleSubmit={() => handleSubmit(onSubmit)}>
      <TextInput name="name" label="Name" type="text" widthFull />
      <TextInput name="email" label="Email" type="email" widthFull />
      <TextInput name="password" label="Password" type="password" widthFull />
      <Gap />
      <Button variant="primary" size="xl" loading={isSubmitting}>
        Create Account
      </Button>
      <Button
        variant="outline"
        size="md"
        className="gap-3"
        disabled={isSubmitting}
        type="button"
      >
        <img
          src="src/assets/google-round.png"
          alt="google"
          className="size-[24px] -ml-2"
        />
        Sign in with Google
      </Button>
      <Button
        variant="outline"
        size="md"
        className="gap-3"
        disabled={isSubmitting}
        type="button"
      >
        <RoundSocialMediaIcon
          platform="facebook"
          className="size-[24px] -ml-2"
        />
        Sign in with Facebook
      </Button>
    </Form>
  );
};

export default SignUpForm;
