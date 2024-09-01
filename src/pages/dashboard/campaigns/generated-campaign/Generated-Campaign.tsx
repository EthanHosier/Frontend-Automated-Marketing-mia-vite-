import { Button } from "@/components/button";
import { HStack } from "@/components/hstack";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import Text from "@/components/text";
import { VStack } from "@/components/vstack";
import { CheckCircle } from "lucide-react";
import Posts from "./components/posts";
import { Popup } from "@/components/popup";
import ReviewAndPost from "./components/review-and-post";

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
        <Popup
          trigger={
            <Button className="gap-2">
              <CheckCircle size={16} />
              Review & Post
            </Button>
          }
          header={
            <VStack gap={0}>
              <Text size="h4" variant="bold" className="Poppins">
                Review & Post
              </Text>
              <Text size="subtitle" color="text-grayscaleText-subtitle">
                Nearly there! Confirm which platforms to post to
              </Text>
            </VStack>
          }
          content={<ReviewAndPost />}
          dismissable
        />
      </HStack>

      <Tabs defaultValue="posts" className="">
        <TabsList className="ml-4">
          <TabsTrigger value="posts">Account</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="mt-4">
          <Posts />
        </TabsContent>
        <TabsContent value="insights"></TabsContent>
      </Tabs>
    </VStack>
  );
};

export default GeneratedCampaign;
