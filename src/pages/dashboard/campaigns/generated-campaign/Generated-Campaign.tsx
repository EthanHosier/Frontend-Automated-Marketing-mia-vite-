import { Button } from "@/components/button";
import { HStack } from "@/components/hstack";
import { Tabs, TabsList, TabsTrigger } from "@/components/tabs";
import Text from "@/components/text";
import { VStack } from "@/components/vstack";
import { CheckCircle } from "lucide-react";

const GeneratedCampaign = () => {
  return (
    <VStack gap={6}>
      <HStack padding={4} items="end">
        <VStack gap={0}>
          <Text color="text-grayscaleText-subtitle">Green Living</Text>
          <Text size="headline" variant="bold" className="Poppins">
            Empowering Sustainability
          </Text>
        </VStack>
        <Button className="gap-2">
          <CheckCircle size={16} />
          Review & Post
        </Button>
      </HStack>

      <Tabs defaultValue="posts" className="ml-4">
        <TabsList>
          <TabsTrigger value="posts">Account</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
      </Tabs>
    </VStack>
  );
};

export default GeneratedCampaign;
