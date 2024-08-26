import { Button } from "@/components/button";
import { HStack } from "@/components/hstack";
import Text from "@/components/text";
import { VStack } from "@/components/vstack";
import { Plus } from "lucide-react";

const Campaigns = () => {
  return (
    <>
      <HStack
        items="center"
        justify="between"
        className="w-full overflow-hidden pr-4"
      >
        <VStack gap={0}>
          <Text size="h4" variant="bold" className="Poppins">
            Mia's top picks
          </Text>
          <Text className="Poppins" color="text-grayscaleText-body">
            Generated daily. Just for you.
          </Text>
        </VStack>
        <Button size={"sm"} className="md:hidden">
          <Plus className="size-4 mr-2" />
          Campaign
        </Button>
        <Button size={"lg"} className="hidden md:flex gap-2">
          <Plus className="size-4" />
          New Campaign
        </Button>
      </HStack>
    </>
  );
};

export default Campaigns;
