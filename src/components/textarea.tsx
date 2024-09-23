import React, { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { VStack } from "./vstack";
import Text from "./text";
import { cn } from "@/lib/utils";

interface TextareaProps {
  label: string;
  name: string;
  widthFull?: boolean;
  defaultValue?: string;
  value?: string;
  setValue?: (value: string) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  widthFull,
  defaultValue,
  value,
  setValue,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight();
    }
  }, [defaultValue, value]);

  const adjustHeight = () => {
    if (textareaRef.current) {
      // Reset height to auto to shrink if needed
      textareaRef.current.style.height = "78px";
      // Set height to scrollHeight to expand to fit content
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const formContext = useFormContext();
  const {
    formState: { errors },
  } = formContext ?? { register: () => {}, formState: { errors: {} } };

  const error = errors[name];

  return (
    <VStack gap={1}>
      <div
        className={cn(
          "relative bg-grayscaleSurface-default rounded-lg w-[342px] hover:bg-gray-200 transition-colors duration-200 ease-in pb-2",
          {
            "w-full": widthFull,
          }
        )}
      >
        <div className="group relative z-0 mb-0 w-full flex pt-4 px-4">
          <textarea
            id="floating-textarea"
            ref={textareaRef}
            onInput={adjustHeight}
            className="peer block w-full resize-none appearance-none bg-transparent px-0 text-sm text-grayscaleText-body focus:border-blue-600 focus:outline-none focus:ring-0 mt-1 overflow-hidden max-h-[200px]"
            placeholder=" "
            rows={1} // Set initial rows to 1 to avoid extra space
            defaultValue={defaultValue}
            value={value}
            onChange={(e) => setValue?.(e.target.value)}
          />
          <label
            htmlFor="floating-textarea"
            className="absolute -z-10 origin-[0] -translate-y-[14px] scale-75 transform text-sm text-grayscaleText-subtitle duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[14px] peer-focus:scale-75"
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
