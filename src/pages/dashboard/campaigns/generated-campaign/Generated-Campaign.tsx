import { Button } from "@/components/button";
import { HStack } from "@/components/hstack";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import Text from "@/components/text";
import { VStack } from "@/components/vstack";
import { CheckCircle } from "lucide-react";
import Posts from "./components/posts";
import { Popup } from "@/components/popup";
import ReviewAndPost from "./components/review-and-post";
import { useParams } from "react-router-dom";
import { useGenerateCampaign } from "@/api/campaigns/requests";
import Blob from "@/components/blob";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Skeleton } from "@/components/skeleton";
import { toTitleCase } from "@/lib/utils";
import { useEffect } from "react";
import { toast } from "sonner";
import { useBusinessSummaries } from "@/api/business-details/requests";

const GeneratedCampaign = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useGenerateCampaign(id ?? "");
  const { data: businessDetails } = useBusinessSummaries();

  useEffect(() => {
    if (error == undefined) return;
    toast.error(error?.message);
  }, [error]);

  return (
    <VStack gap={6}>
      <HStack padding={4} items="end">
        <VStack gap={0} className="w-full flex-1">
          {isLoading ? (
            <Skeleton className="h-4 w-32 mb-4" />
          ) : (
            <Text color="text-grayscaleText-subtitle">
              {toTitleCase(data?.primary_keyword ?? "")}
            </Text>
          )}

          {isLoading ? (
            <VStack gap={2}>
              <Skeleton className="h-6 w-44" />
              <Skeleton className="h-6 w-40" />
            </VStack>
          ) : (
            <Text size="headline" variant="bold" className="Poppins">
              {toTitleCase(data?.theme ?? "")}
            </Text>
          )}
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
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="mt-4">
          <Posts
            isLoading={isLoading}
            posts={data?.posts}
            businessName={businessDetails?.businessName ?? "businessName"}
          />
        </TabsContent>
        <TabsContent value="insights">
          <VStack paddingX={4} className="mt-4">
            <Blob widthFull paddingX={2} paddingY={2}>
              <HStack>
                {isLoading ? (
                  <VStack gap={2} className="w-full">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-52" />

                    <Skeleton className="h-6 w-full mt-4" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-3/4" />

                    <Skeleton className="h-6 w-full mt-4" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-3/4" />
                  </VStack>
                ) : (
                  <MarkdownPreview
                    source={data?.research_report ?? ""}
                    style={{ padding: 16 }}
                  />
                )}
              </HStack>
            </Blob>
          </VStack>
        </TabsContent>
      </Tabs>
    </VStack>
  );
};

export default GeneratedCampaign;
