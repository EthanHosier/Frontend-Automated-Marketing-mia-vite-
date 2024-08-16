import { cn } from "@/lib/utils";

interface TextInputProps {
  label: string;
  type?: string;
  widthFull?: boolean;
  required?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  type = "text",
  widthFull,
  required,
}) => {
  return (
    <div
      className={cn(
        "relative bg-grayscaleSurface-default rounded-lg w-[342px] h-[52px] hover:bg-gray-200 transition-colors duration-200 ease-in",
        {
          "w-full": widthFull,
        }
      )}
    >
      <div className="group relative z-0 mb-0 w-full flex items-center h-full px-4">
        <input
          type={type}
          id="floating-input"
          className="peer block w-full appearance-none bg-transparent px-0 text-sm text-grayscaleText-body focus:border-blue-600 focus:outline-none focus:ring-0 mt-1"
          placeholder=" "
          required={!!required}
        />
        <label
          htmlFor="floating-input"
          className="absolute -z-10 origin-[0] -translate-y-[14px] scale-75 transform text-sm text-grayscaleText-subtitle duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[14px] peer-focus:scale-75 "
        >
          {label}
        </label>
      </div>
    </div>
  );
};
