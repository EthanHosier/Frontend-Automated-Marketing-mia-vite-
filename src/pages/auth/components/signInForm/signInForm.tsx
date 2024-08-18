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
import { Link, useSearchParams } from "react-router-dom";
import { supabase } from "@/supabase/supabaseClient";

const SignInForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const confirmation = searchParams.get("confirmation");

  const methods = useForm<SignInFormData>({
    resolver: zodResolver(SignInFormSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    setError,
  } = methods;

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    const { error, data: authData } = await supabase.auth.signInWithOtp({
      email: data.email,
      options: {
        emailRedirectTo: "http://localhost:5173/onboarding", // Add 'confirmation' param
      },
    });

    console.log({ error, authData });

    if (error) {
      setError("email", {
        type: "manual",
        message: error.message,
      });
    } else {
      console.log(authData);
      setSearchParams({ confirmation: "true" }); // Update URL param after successful sign-up
    }
  };

  return (
    <Form handleSubmit={() => handleSubmit(onSubmit)} methods={methods}>
      <VStack gap={2}>
        <TextInput label="Email" type="email" name="email" widthFull />
        <HStack justify="end">
          <Text size="subtitle" color="text-grayscaleText-body">
            Haven't registed yet?{" "}
            <Text
              size="subtitle"
              variant="bold"
              color="text-primarySurface-default"
            >
              <Link to="/">Create account</Link>
            </Text>
          </Text>
        </HStack>
      </VStack>
      <Gap />
      <VStack gap={2}>
        {confirmation === "true" && ( // Conditionally render based on URL param
          <Text
            className="mx-4"
            variant="light"
            size="subtitle"
            color="text-success-text-label"
          >
            Please check your email for OTP
          </Text>
        )}
        <Button
          variant="primary"
          size="xl"
          loading={isSubmitting}
          disabled={isSubmitting || confirmation === "true"}
        >
          Sign in
        </Button>
      </VStack>
      <Button
        variant="outline"
        size="md"
        className="gap-3"
        disabled={isSubmitting || confirmation === "true"}
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
        disabled={isSubmitting || confirmation === "true"}
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
