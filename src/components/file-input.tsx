import { cn } from "@/lib/utils";
import { useDropzone } from "react-dropzone";

interface FileUploaderProps extends React.HTMLProps<HTMLDivElement> {
  onDrop: (acceptedFiles: any) => void;
}
export const FileUploader: React.FC<FileUploaderProps> = ({
  onDrop,
  className,
  ...props
}) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "bg-grayscaleSurface-default h-[104px] rounded-xl w-[342px] flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-200 ease-in",
        isDragActive &&
          "border-2 border-dashed  border-grayscaleBorder-default",
        className
      )}
      {...props}
    >
      <input {...getInputProps()} />
      <p className="text-wrap w-24 text-center">
        Drag & drop or{" "}
        <span className="text-primary-surface-default font-bold">browse</span>
      </p>
    </div>
  );
};
