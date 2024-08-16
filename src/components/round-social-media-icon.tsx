import { SocialMediaPlatform } from "@/types/socialMediaPlatforms";
import React from "react";

interface RoundSocialMediaIconProps {
  className?: string;
  platform: SocialMediaPlatform;
}

const RoundSocialMediaIcon: React.FC<RoundSocialMediaIconProps> = ({
  className,
  platform,
}) => {
  return (
    <img src={getImageSource(platform)} alt={platform} className={className} />
  );
};

const getImageSource = (platform: SocialMediaPlatform) => {
  switch (platform) {
    case "facebook":
      return "src/assets/social-media-icons/facebook-round.png";
    case "instagram":
      return "src/assets/social-media-icons/instagram-round.png";
    case "twitter-x":
      return "src/assets/social-media-icons/twitter-x-round.png";
    case "whatsapp":
      return "src/assets/social-media-icons/whatsapp-round.png";
    case "linkedIn":
      return "src/assets/social-media-icons/linkedIn-round.png";
  }
};

export default RoundSocialMediaIcon;
