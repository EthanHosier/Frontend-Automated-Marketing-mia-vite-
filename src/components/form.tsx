import React from "react";
import { FormProvider, UseFormReturn, FieldValues } from "react-hook-form";

interface FormProps<T extends FieldValues> {
  children: React.ReactNode;
  handleSubmit: (
    onValid: (data: T) => void,
    onInvalid?: (errors: any) => void
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  methods: UseFormReturn<T>;
}

export const Form = <T extends FieldValues>({
  children,
  handleSubmit,
  methods,
}: FormProps<T>) => {
  return (
    <FormProvider {...methods}>
      <form
        className="gap-inherit flex flex-col"
        onSubmit={handleSubmit((data) => console.log(data))} // Replace console.log with your submit handler
      >
        {children}
      </form>
    </FormProvider>
  );
};
