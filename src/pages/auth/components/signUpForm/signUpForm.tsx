import { Link, useSearchParams } from "react-router-dom"; // Import useSearchParams
import { Button } from "@/components/button";
import { Gap } from "@/components/gap";
import { TextInput } from "@/components/text-input";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpFormData, signUpFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/form";
import RoundSocialMediaIcon from "@/components/round-social-media-icon";
import { supabase } from "@/supabase/supabaseClient";
import { VStack } from "@/components/vstack";
import Text from "@/components/text";
import { HStack } from "@/components/hstack";

const SignUpForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const confirmation = searchParams.get("confirmation");

  const methods = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });
  const {
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    const { error, data: authData } = await supabase.auth.signInWithOtp({
      email: data.email,
      options: {
        emailRedirectTo: "http://localhost:5173/onboarding", // Add 'confirmation' param
        data: { name: data.name },
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
    <Form methods={methods} handleSubmit={() => handleSubmit(onSubmit)}>
      <TextInput name="name" label="Name" type="text" widthFull />
      <VStack gap={2}>
        <TextInput name="email" label="Email" type="email" widthFull />
        <HStack justify="end">
          <Text size="subtitle" color="text-grayscaleText-body">
            Already have an account?{" "}
            <Text
              variant="bold"
              size="subtitle"
              color="text-primarySurface-default"
            >
              <Link to={"/signin"}>Sign in</Link>
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
          Create Account
        </Button>
      </VStack>
      <Button
        variant="outline"
        size="md"
        className="gap-3"
        disabled={isSubmitting || confirmation === "true"}
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
        disabled={isSubmitting || confirmation === "true"}
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
