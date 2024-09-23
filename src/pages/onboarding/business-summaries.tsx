import { Button } from "@/components/button";
import { FileInput } from "@/components/file-input";
import { Form } from "@/components/form";
import { Gap } from "@/components/gap";
import Text from "@/components/text";
import { TextInput } from "@/components/text-input";
import { VStack } from "@/components/vstack";
import { useForm } from "react-hook-form";
import { BusinessDetailsData, businessDetailsSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useBusinessSummaries,
  useUpdateBusinessSummaries,
} from "@/api/business-details/requests";
import { useNavigate } from "react-router-dom";

const BusinessSummaries = () => {
  const { data: businessSummaryData } = useBusinessSummaries();

  const { mutate: updateBusinessSummaries } = useUpdateBusinessSummaries();

  const methods = useForm<BusinessDetailsData>({
    resolver: zodResolver(businessDetailsSchema),
  });

  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  if (businessSummaryData) {
    return (
      <Form
        methods={methods}
        handleSubmit={() =>
          handleSubmit((data) => {
            updateBusinessSummaries({
              businessName: data.businessName,
              targetRegion: data.primaryLocation,
            });
            navigate("/campaigns?updateBusinessSummaries=true");
          })
        }
      >
        <VStack gap={6}>
          <VStack gap={1}>
            <Text size="h3" variant="bold">
              Tell us about your business
            </Text>
            <Text color="text-grayscaleText-subtitle">
              We don't need much. Mia is pretty smart!
            </Text>
          </VStack>
          <TextInput
            label="Business Name"
            name="businessName"
            widthFull
            defaultValue={businessSummaryData.businessName}
          />
          <VStack gap={2}>
            <Text size="subtitle">Upload logo</Text>
            <FileInput onDrop={() => {}} widthFull />
          </VStack>
          <TextInput
            label="Primary Location"
            name="primaryLocation"
            widthFull
            defaultValue={businessSummaryData.targetRegion}
          />
          <Gap />
          <Button size={"xl"} disabled={isSubmitting} loading={isSubmitting}>
            Continue
          </Button>
        </VStack>
      </Form>
    );
  }
};

export default BusinessSummaries;
