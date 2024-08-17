import { TextInput } from "@/components/text-input";
import Text from "@/components/text";
import { VStack } from "@/components/vstack";
import { FileInput } from "@/components/file-input";
import { Button } from "@/components/button";
import { Gap } from "@/components/gap";
import { ArrowLeft } from "lucide-react";
import { HStack } from "@/components/hstack";

const Onboarding = () => {
  return Page2();
};

const Page1 = () => (
  <VStack gap={6}>
    <VStack gap={1}>
      <Text size="h3" variant="bold">
        Tell us about your business
      </Text>
      <Text color="text-grayscaleText-subtitle">
        We don't need much. Mia is pretty smart!
      </Text>
    </VStack>
    <TextInput label="Business Name" required widthFull />

    <VStack gap={2}>
      <Text size="subtitle">Upload logo</Text>
      <FileInput onDrop={() => {}} widthFull />
    </VStack>

    <TextInput label="Primary Location" required type="email" widthFull />
    <Gap />
    <Button size={"xl"}>Continue</Button>
  </VStack>
);

const Page2 = () => (
  <VStack gap={6}>
    <HStack>
      <Button size="md" icon variant={"outline"}>
        <ArrowLeft size={16} />
      </Button>
    </HStack>
    <VStack gap={1}>
      <Text size="h3" variant="bold">
        Enter your website
      </Text>
      <Text color="text-grayscaleText-subtitle">
        Now it's time for some magic.
      </Text>
    </VStack>
    <TextInput label="Business Name" required widthFull />
    <Gap />
    <Button size={"xl"}>Continue</Button>
  </VStack>
);

export default Onboarding;
