import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { WebSiteData, websiteSchema } from "./schema";
import { VStack } from "@/components/vstack";
import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { isUrl } from "@/lib/utils";
import Text from "@/components/text";
import { Gap } from "@/components/gap";
import { TextInput } from "@/components/text-input";
import {
  useGenerateBusinessSummaries,
  useSitemap,
} from "@/api/business-details/requests";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EnterUrl = () => {
  const { data: sitemapData, isLoading: isSitemapLoading } = useSitemap();
  const navigate = useNavigate();

  const { mutate: generateBusinessSummaries, isPending } =
    useGenerateBusinessSummaries();
  const methods = useForm<WebSiteData>({
    resolver: zodResolver(websiteSchema),
  });
  const {
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (!isSitemapLoading && !!sitemapData?.urls?.length) {
      navigate("/onboarding/business-summaries");
    }
  }, [sitemapData, isSitemapLoading]);

  if (sitemapData?.urls?.length === 0)
    return (
      <Form
        methods={methods}
        handleSubmit={() =>
          handleSubmit(async (data) => {
            const url = isUrl(data.website);
            if (!url) {
              setError("website", {
                message: "Invalid URL",
              });
              return;
            }

            generateBusinessSummaries(url);
          })
        }
      >
        <VStack gap={6}>
          <VStack gap={1}>
            <Text size="h3" variant="bold">
              Enter your website
            </Text>
            <Text color="text-grayscaleText-subtitle">
              It's time for some magic.
            </Text>
          </VStack>
          <TextInput label="www.website.com" name="website" widthFull />
          <Gap />
          <Button
            size={"xl"}
            loading={isSubmitting || isPending}
            disabled={isSubmitting || isPending}
          >
            Continue
          </Button>
        </VStack>
      </Form>
    );
};

export default EnterUrl;
