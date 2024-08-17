import { Button } from "@/components/button";
import MiaLogo from "@/components/mia-logo";
import RoundSocialMediaIcon from "@/components/round-social-media-icon";
import Text from "@/components/text";
import { VStack } from "@/components/vstack";
import SignUpForm from "./components/signUpForm/signUpForm";

const SignUp = () => {
  return (
    <VStack gap={6}>
      <MiaLogo className="w-[115px] h-[72px]" />
      <VStack gap={1}>
        <Text size="h3" variant="bold">
          Sign up
        </Text>
        <Text color="text-grayscaleText-subtitle">
          Please enter your details
        </Text>
      </VStack>
      <SignUpForm />
    </VStack>
  );
};

export default SignUp;
