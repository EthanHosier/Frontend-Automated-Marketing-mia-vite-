import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { VStack } from "./vstack";
import Text from "./text";
import { Skeleton } from "./skeleton";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  widthFull?: boolean;
  name: string;
  isLoading?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  type = "text",
  widthFull,
  name,
  isLoading,
  ...props
}) => {
  const formContext = useFormContext();
  const {
    register,
    formState: { errors },
  } = formContext ?? { register: () => {}, formState: { errors: {} } };

  const error = errors[name];

  if (isLoading) {
    return <Skeleton className="w-[342px] h-[52px]" widthFull={widthFull} />;
  }

  return (
    <VStack gap={1}>
      <div
        className={cn(
          "relative bg-grayscaleSurface-default rounded-lg w-[342px] h-[52px] hover:bg-gray-200 transition-colors duration-200 ease-in",
          {
            "w-full": widthFull,
          }
        )}
      >
        <div className="group relative z-0 mb-0 w-full flex items-center h-full">
          <input
            type={type}
            className="peer block w-full appearance-none bg-transparent text-grayscaleText-body focus:border-blue-600 focus:outline-none focus:ring-0 h-full px-4 rounded-lg pt-1 !text-base"
            placeholder=" "
            {...register(name)}
            {...props}
          />
          <label
            htmlFor="floating-input"
            className="ml-4 absolute -z-10 origin-[0] -translate-y-[14px] scale-75 transform text-sm text-grayscaleText-subtitle duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[14px] peer-focus:scale-75 "
          >
            {label}
          </label>
        </div>
      </div>
      {error && (
        <Text
          variant="light"
          color="text-red-700"
          size="subtitle"
          className="ml-4"
        >
          {" "}
          {error.message?.toString()}
        </Text>
      )}
    </VStack>
  );
};
