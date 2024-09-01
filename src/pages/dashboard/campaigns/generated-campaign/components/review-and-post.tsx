import Blob from "@/components/blob";
import { Button } from "@/components/button";
import RoundSocialMediaIcon from "@/components/round-social-media-icon";
import { VStack } from "@/components/vstack";
import { SocialMediaPlatform } from "@/types/socialMediaPlatforms";
import { CheckCircle, CheckIcon } from "lucide-react";
import { useState } from "react";

const allSocialMedias: SocialMediaPlatform[] = [
  "instagram",
  "linkedIn",
  "facebook",
  "twitter-x",
  "whatsapp",
] as SocialMediaPlatform[];

const ReviewAndPost = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<
    Set<SocialMediaPlatform>
  >(new Set());

  const onSelect = (platform: SocialMediaPlatform) => {
    setSelectedPlatforms((prevSelectedPlatforms) => {
      const newSet = new Set(prevSelectedPlatforms);
      newSet.add(platform);
      return newSet;
    });
  };

  const onDeselect = (platform: SocialMediaPlatform) => {
    setSelectedPlatforms((prevSelectedPlatforms) => {
      const newSet = new Set(prevSelectedPlatforms);
      newSet.delete(platform);
      return newSet;
    });
  };

  return (
    <VStack>
      <Blob color="gray" widthFull>
        <div className="grid grid-cols-3 gap-3 p-3">
          {allSocialMedias.map((platform) => (
            <SocialMediaSelect
              key={platform}
              platform={platform}
              selected={selectedPlatforms.has(platform)}
              onSelect={onSelect}
              onDeselect={onDeselect}
            />
          ))}
        </div>
      </Blob>
      <Button className="gap-2" size={"xl"}>
        <CheckCircle className="size-4" /> Post to Social Media
      </Button>
    </VStack>
  );
};

export default ReviewAndPost;

interface SocialMediaSelectProps {
  platform: SocialMediaPlatform;
  onSelect: (platform: SocialMediaPlatform) => void;
  onDeselect: (platform: SocialMediaPlatform) => void;
  selected: boolean;
}

const SocialMediaSelect: React.FC<SocialMediaSelectProps> = ({
  platform,
  selected,
  onSelect,
  onDeselect,
}) => {
  return (
    <Blob
      widthFull
      className="flex items-center justify-center relative aspect-square w-full"
      onClick={() => (selected ? onDeselect(platform) : onSelect(platform))}
    >
      <RoundSocialMediaIcon platform={platform} className="size-[50px]" />
      {selected && (
        <div className="top-2 right-2 size-[24px] absolute bg-primary-surface-subtle rounded-full flex items-center justify-center">
          <CheckIcon className="size-[12px] text-primary-surface-darker" />
        </div>
      )}
    </Blob>
  );
};
