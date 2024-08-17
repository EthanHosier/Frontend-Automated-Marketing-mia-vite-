import MiaLogo from "@/components/mia-logo";
import Text from "@/components/text";
import { VStack } from "@/components/vstack";
import SignInForm from "./components/signInForm/signInForm";

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
    </VStack>
  );
};

export default SignIn;
