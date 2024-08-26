import Blob from "@/components/blob";
import { HStack } from "@/components/hstack";
import { VStack } from "@/components/vstack";
import { initials } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/avatar";
import Text from "@/components/text";
import { Button } from "@/components/button";
import { EditIcon } from "lucide-react";
import SocialMediaConnect from "@/components/widgets/social-media-connect";
import { SocialMediaPlatform } from "@/types/socialMediaPlatforms";
import { TextInput } from "@/components/text-input";
import { Textarea } from "@/components/textarea";
import ColorPicker from "@/components/color-picker";

const Profile = () => {
  return (
    <VStack paddingX={6} gap={6}>
      <Blob widthFull paddingX={4} paddingY={4}>
        <HStack justify="between" items="center">
          <HStack gap={4} items="center">
            <Avatar className="size-[52px]">
              <AvatarFallback>{initials("Ethan Hosier")}</AvatarFallback>
            </Avatar>
            <VStack gap={0}>
              <Text variant="bold" size="headline" className="Poppins">
                Ethan Hosier
              </Text>
              <Text color="text-grayscaleText-subtitle" size="subtitle">
                Business Name
              </Text>
            </VStack>
          </HStack>
          <Button variant="outline" size="md" icon>
            <EditIcon className="size-4" />
          </Button>
        </HStack>
      </Blob>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["instagram", "linkedIn", "facebook", "twitter-x"].map((platform) => (
          <SocialMediaConnect
            platform={platform as SocialMediaPlatform}
            key={platform}
            className="w-full"
          />
        ))}
      </div>

      <VStack>
        <Text size="headline" variant="bold" className="Poppins">
          Your Business
        </Text>
        <Blob paddingX={4} paddingY={4} widthFull>
          <VStack gap={4}>
            <Textarea
              label="Business Snapshot"
              name="businessSnapshot"
              widthFull
            />
            <Textarea label="Business Voice" name="Business Voice" widthFull />
            <Textarea label="Target Audience" name="targetAudience" widthFull />
          </VStack>
        </Blob>
      </VStack>

      <VStack>
        <Text size="headline" variant="bold" className="Poppins">
          Your Branding
        </Text>
        <Blob paddingX={4} paddingY={4} widthFull>
          <HStack gap={4}>
            {["#ffffff", "#DB3185", "#F8D8E8", "#7500A3"].map((color) => (
              <ColorPicker key={color} color={color} onChange={() => {}} />
            ))}
          </HStack>
        </Blob>
      </VStack>
    </VStack>
  );
};

export default Profile;
