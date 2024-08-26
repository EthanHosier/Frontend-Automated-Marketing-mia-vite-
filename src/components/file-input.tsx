import { cn } from "@/lib/utils";
import { useDropzone } from "react-dropzone";
import { VStack } from "./vstack";
import Text from "./text";

interface FileInputProps extends React.HTMLProps<HTMLDivElement> {
  onDrop: (acceptedFiles: unknown) => void;
  widthFull?: boolean;
  label?: string;
}
export const FileInput: React.FC<FileInputProps> = ({
  onDrop,
  className,
  widthFull,
  label,
  ...props
}) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <VStack gap={1}>
      {label && <Text>{label}</Text>}
      <div
        {...getRootProps()}
        className={cn(
          "bg-grayscaleSurface-default h-[104px] rounded-xl w-[342px] flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-200 ease-in",
          isDragActive &&
            "border-2 border-dashed  border-grayscaleBorder-default",
          className,
          { "w-full": !!widthFull }
        )}
        {...props}
      >
        <input {...getInputProps()} />
        <p className="text-wrap w-24 text-center">
          Drag & drop or{" "}
          <span className="text-primary-surface-default font-bold">browse</span>
        </p>
      </div>
    </VStack>
  );
};
