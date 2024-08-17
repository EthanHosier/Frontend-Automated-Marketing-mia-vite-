import { Button } from "@/components/button";
import { Gap } from "@/components/gap";
import { HStack } from "@/components/hstack";
import { TextInput } from "@/components/text-input";
import Text from "@/components/text";
import { VStack } from "@/components/vstack";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormData, SignInFormSchema } from "./schema";
import { Form } from "@/components/form";
import RoundSocialMediaIcon from "@/components/round-social-media-icon";

const SignInForm = () => {
  const methods = useForm<SignInFormData>({
    resolver: zodResolver(SignInFormSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <Form handleSubmit={() => handleSubmit(onSubmit)} methods={methods}>
      <TextInput label="Email" type="email" name="email" widthFull />
      <VStack gap={2}>
        <TextInput label="Password" type="password" name="password" widthFull />
        <HStack justify="end">
          <Text size="subtitle" variant="bold">
            <a href="#">Forgot password?</a>
          </Text>
        </HStack>
      </VStack>
      <Gap />
      <Button variant="primary" size="xl" loading={isSubmitting}>
        Sign in
      </Button>
      <Button
        variant="outline"
        size="md"
        className="gap-3"
        disabled={isSubmitting}
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

export default SignInForm;
