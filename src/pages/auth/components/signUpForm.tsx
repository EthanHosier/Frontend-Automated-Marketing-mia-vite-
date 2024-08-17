import { Button } from "@/components/button";
import { Gap } from "@/components/gap";
import { TextInput } from "@/components/text-input";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SignUpFormData, signUpFormSchema } from "./signUpForm/types";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpForm = () => {
  const methods = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });
  const { register, handleSubmit, setError } = methods;

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="gap-inherit flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput name="name" label="Name" type="text" widthFull />
        <TextInput name="email" label="Email" type="email" widthFull />
        <TextInput name="password" label="Password" type="password" widthFull />
        <Gap />
        <Button variant="primary" size="xl">
          Create Account
        </Button>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
