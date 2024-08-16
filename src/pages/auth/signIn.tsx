import { Button } from "@/components/button";
import MiaLogo from "@/components/mia-logo";
import RoundSocialMediaIcon from "@/components/round-social-media-icon";
import Text from "@/components/text";
import { VStack } from "@/components/vstack";
import SignInForm from "./components/signInForm";

const SignIn = () => {
  return (
    <VStack gap={6}>
      <MiaLogo className="w-[115px] h-[72px]" />
      <VStack gap={1}>
        <Text size="h3" variant="bold">
          Sign in
        </Text>
        <Text color="text-grayscaleText-subtitle">
          Please enter your details
        </Text>
      </VStack>
      <SignInForm />
      <Button variant="outline" size="md" className="gap-3">
        <img
          src="src/assets/google-round.png"
          alt="google"
          className="size-[24px] -ml-2"
        />
        Sign in with Google
      </Button>
      <Button variant="outline" size="md" className="gap-3">
        <RoundSocialMediaIcon
          platform="facebook"
          className="size-[24px] -ml-2"
        />
        Sign in with Facebook
      </Button>
    </VStack>
  );
};

export default SignIn;
