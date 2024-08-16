import { Button } from "@/components/button";
import { Gap } from "@/components/gap";
import { HStack } from "@/components/hstack";
import { TextInput } from "@/components/text-input";
import Text from "@/components/text";
import { VStack } from "@/components/vstack";

const SignInForm = () => {
  return (
    <>
      <TextInput label="Email" type="email" widthFull required />
      <VStack gap={2}>
        <TextInput label="Password" type="password" widthFull required />
        <HStack justify="end">
          <Text size="subtitle" variant="bold">
            <a href="#">Forgot password?</a>
          </Text>
        </HStack>
      </VStack>
      <Gap />
      <Button variant="primary" size="xl">
        Sign in
      </Button>
    </>
  );
};

export default SignInForm;
