import { cn } from "@/lib/utils";
import { VStack } from "../vstack";
import Text from "../text";
import { Skeleton } from "../skeleton";
import { HStack } from "../hstack";
import { Heart } from "lucide-react";

interface CampaignPreviewProps {
  image: string;
  title: string;
  subtitle: string;
  liked?: boolean;
  size?: "default" | "sm";
  loading?: boolean;
  onLike?: () => void;
  className?: string;
}

const CampaignPreview: React.FC<CampaignPreviewProps> = ({
  image,
  size = "default",
  loading,
  className,
}) => {
  const containerClassnames = cn({
    "size-[320px] md:size-[360px]": size === "default",
    "size-[200px] md:size-[280px]": size === "sm",
  });

  return (
    <div
      className={cn(
        containerClassnames,
        "rounded-xl relative flex-shrink-0",
        className
      )}
      style={{
        backgroundImage: !loading && image ? `url(${image})` : undefined, // Set background image if available
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!loading && (
        <div className="absolute inset-0 bg-black bg-opacity-[29%] rounded-xl" />
      )}
      {!loading && (
        <div className="absolute inset-0 text-white rounded-xl p-3">
          <HStack justify="between" className="max-w-full">
            <VStack gap={0}>
              <Text size="caption" color="text-grayscaleText-negative" truncate>
                Green Living
              </Text>
              <Text size="subtitle" variant="bold" truncate>
                Empowering Sustainability
              </Text>
            </VStack>
            <Heart className="size-5" />
          </HStack>
        </div>
      )}
      {loading && (
        <Skeleton className="absolute inset-0 text-white rounded-xl p-3" />
      )}
    </div>
  );
};

export default CampaignPreview;
