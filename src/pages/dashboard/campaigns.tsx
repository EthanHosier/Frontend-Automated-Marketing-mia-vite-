import { Button } from "@/components/button";
import { HStack } from "@/components/hstack";
import { Popup } from "@/components/popup";
import Text from "@/components/text";
import { VStack } from "@/components/vstack";
import CampaignPreview from "@/components/widgets/campaign-preview";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Plus } from "lucide-react";

const Campaigns = () => {
  return (
    <>
      <VStack gap={4}>
        <HStack
          items="center"
          justify="between"
          className="w-full overflow-hidden pr-4"
        >
          <VStack gap={0} className="ml-4">
            <Text size="h4" variant="bold" className="Poppins">
              Mia's top picks
            </Text>
            <Text className="Poppins" color="text-grayscaleText-body">
              Generated daily. Just for you.
            </Text>
          </VStack>

          <Popup
            trigger={
              <>
                <Button size={"sm"} className="md:hidden">
                  <Plus className="size-4 mr-2" />
                  Campaign
                </Button>
                <Button size={"lg"} className="hidden md:flex gap-2">
                  <Plus className="size-4" />
                  New Campaign
                </Button>
              </>
            }
            content={<>yeah</>}
          />
        </HStack>

        <ScrollArea className="flex gap-4 md:gap-6 overflow-x-auto px-4 no-scrollbar ">
          {[...Array(5)].map((_, idx) => (
            <CampaignPreview
              key={idx}
              image="https://images.unsplash.com/photo-1723744895444-e94a0e1dd378?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%"
              title="Title"
              subtitle="Subtitle"
            />
          ))}
        </ScrollArea>
      </VStack>
      <VStack gap={4}>
        <HStack>
          <VStack gap={0} className="ml-4">
            <Text size="headline" variant="bold" className="Poppins">
              Not quite finished?
            </Text>
            <Text
              className="Poppins"
              size="subtitle"
              color="text-grayscaleText-body"
            >
              Pick up from where you left off
            </Text>
          </VStack>
        </HStack>
        <ScrollArea className="flex gap-2 md:gap-4 overflow-x-auto px-4 scrollbar-hide no-scrollbar">
          {[...Array(5)].map((_, idx) => (
            <CampaignPreview
              key={idx}
              image="https://images.unsplash.com/photo-1723744895444-e94a0e1dd378?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Title"
              subtitle="Subtitle"
              size="sm"
            />
          ))}
        </ScrollArea>
      </VStack>
    </>
  );
};

export default Campaigns;
