import { SocialMediaPlatform } from "@/types/socialMediaPlatforms";
import React from "react";
import Blob from "../blob";
import { VStack } from "../vstack";
import { socialMediaIcon } from "@/lib/utils";
import { Button } from "../button";

interface SocialMediaConnectProps {
  className?: string;
  platform: SocialMediaPlatform;
}

const SocialMediaConnect: React.FC<SocialMediaConnectProps> = ({
  platform,
  className,
}) => {
  return (
    <Blob className={className} paddingX={8} paddingY={8}>
      <VStack gap={4} items="center">
        <img
          src={socialMediaIcon(platform)}
          alt={platform}
          className="size-[64px]"
        />
        <Button variant={"secondary"} size={"sm"}>
          Connect
        </Button>
      </VStack>
    </Blob>
  );
};

export default SocialMediaConnect;
