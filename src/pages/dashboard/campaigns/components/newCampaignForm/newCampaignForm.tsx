import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewCampaignFormData, NewCampaignFormSchema } from "./schema";
import { Form } from "@/components/form";
import { VStack } from "@/components/vstack";
import { Textarea } from "@/components/textarea";
import { TextInput } from "@/components/text-input";
import { FileInput } from "@/components/file-input";
import { Button } from "@/components/button";

const NewCampaignForm = () => {
  const methods = useForm<NewCampaignFormData>({
    resolver: zodResolver(NewCampaignFormSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: NewCampaignFormData) => {
    console.log(data);
  };

  return (
    <Form handleSubmit={() => handleSubmit(onSubmit)} methods={methods}>
      <VStack gap={6}>
        <Textarea label="Instructions to Mia" name="instructions" widthFull />
        <TextInput
          label="Target Audience Location"
          name="targetAudienceLocation"
          widthFull
        />
        <TextInput
          label="Campaign Backlink"
          name="campaignBacklink"
          widthFull
        />
        <FileInput
          label="Upload Images"
          name="campaignImage"
          onDrop={() => {}}
          widthFull
        />
        <Button size={"xl"}>Create Campaign</Button>
      </VStack>
    </Form>
  );
};

export default NewCampaignForm;
