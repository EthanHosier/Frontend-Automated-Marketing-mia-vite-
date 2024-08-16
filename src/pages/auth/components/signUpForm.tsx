import { Button } from "@/components/button";
import { Gap } from "@/components/gap";
import { TextInput } from "@/components/text-input";

const SignUpForm = () => {
  return (
    <>
      <TextInput label="Name" type="text" widthFull required />
      <TextInput label="Email" type="email" widthFull required />
      <TextInput label="Password" type="password" widthFull required />
      <Gap />
      <Button variant="primary" size="xl">
        Create Account
      </Button>
    </>
  );
};

export default SignUpForm;
