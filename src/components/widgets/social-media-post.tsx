import React from "react";
import Blob from "../blob";
import { SocialMediaPlatform } from "@/types/socialMediaPlatforms";
import { AspectRatio } from "../aspect-ratio";
import { Skeleton } from "../skeleton";
import { VStack } from "../vstack";
import Text from "../text";
import RoundSocialMediaIcon from "../round-social-media-icon";
import { HStack } from "../hstack";
import { cn } from "@/lib/utils";

interface SocialMediaPostProps {
  image: string;
  caption: string;
  businessName: string;
  platform: SocialMediaPlatform;
  loading?: boolean;
  className?: string;
}

const SocialMediaPost: React.FC<SocialMediaPostProps> = ({
  image,
  caption,
  businessName,
  platform,
  loading,
  className,
}) => {
  return (
    <Blob
      className={cn("w-[336px] h-[448px] md:w-[432px] md:h-[576px]", className)}
      padding={1}
    >
      <VStack gap={6}>
        {loading ? (
          <AspectRatio ratio={1}>
            <Skeleton widthFull heightFull />
          </AspectRatio>
        ) : (
          <img
            src={image}
            alt="social media post"
            className="w-full aspect-square object-cover"
          />
        )}
        <HStack
          justify="end"
          padding={1}
          paddingDesktop={4}
          className="-mt-16 z-10 -mb-8"
        >
          <Blob rounded="full" padding={2}>
            <RoundSocialMediaIcon
              platform={platform}
              className="md:size-[60px] size-[48px]"
            />
          </Blob>
        </HStack>

        {loading ? (
          <>
            <VStack gap={2} paddingX={2}>
              <Skeleton className="h-[14px] w-[240px] md:w-[320px] md:h-[16px]" />
              <Skeleton className="h-[14px] w-[300px] md:w-[380px] md:h-[16px]" />
            </VStack>
          </>
        ) : (
          <Text className="px-2" variant="bold" size="subtitle">
            {businessName}{" "}
            <Text
              variant="light"
              size="subtitle"
              className="text-grayscaleText-body !font-normal"
            >
              {caption}
            </Text>
          </Text>
        )}
      </VStack>
    </Blob>
  );
};

export default SocialMediaPost;
