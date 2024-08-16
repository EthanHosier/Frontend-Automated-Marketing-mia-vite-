import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  widthFull?: boolean;
  heightFull?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  widthFull,
  heightFull,
}) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-grayscaleSurface-disabled",
        className,
        {
          "w-full": widthFull,
          "h-full": heightFull,
        }
      )}
    />
  );
};
