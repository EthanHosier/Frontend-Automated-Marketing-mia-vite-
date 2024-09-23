import { TextInput } from "@/components/text-input";
import Text from "@/components/text";
import { VStack } from "@/components/vstack";
import { FileInput } from "@/components/file-input";
import { Button } from "@/components/button";
import { Gap } from "@/components/gap";
import { ArrowLeft } from "lucide-react";
import { HStack } from "@/components/hstack";
import { TransitionPanel } from "@/components/primitives/transition-panel";
import React, { useEffect, useState } from "react";
import { Form } from "@/components/form";
import { useForm } from "react-hook-form";
import {
  BusinessDetailsData,
  businessDetailsSchema,
  WebSiteData,
  websiteSchema,
} from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { isUrl } from "@/lib/utils";

const Onboarding = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const [businessData, setBusinessData] = useState<BusinessDetailsData>();

  const handleSetActiveIndex = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (activeIndex < 0) setActiveIndex(0);
    if (activeIndex >= 2) setActiveIndex(1);
  }, [activeIndex]);

  const Page1 = React.forwardRef<HTMLFormElement, any>(() => {
    const methods = useForm<BusinessDetailsData>({
      resolver: zodResolver(businessDetailsSchema),
    });
    const {
      handleSubmit,

      formState: { isSubmitting },
    } = methods;

    return (
      <Form
        methods={methods}
        handleSubmit={() =>
          handleSubmit((data) => {
            setBusinessData(data);
            console.log(data);
            handleSetActiveIndex(activeIndex + 1);
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
            defaultValue={businessData?.businessName}
            widthFull
          />
          <VStack gap={2}>
            <Text size="subtitle">Upload logo</Text>
            <FileInput onDrop={() => {}} widthFull />
          </VStack>
          <TextInput
            label="Primary Location"
            name="primaryLocation"
            defaultValue={businessData?.primaryLocation}
            widthFull
          />
          <Gap />
          <Button size={"xl"} disabled={isSubmitting}>
            Continue
          </Button>
        </VStack>
      </Form>
    );
  });

  Page1.displayName = "Page1";

  const Page2 = React.forwardRef<HTMLDivElement, any>(() => {
    const methods = useForm<WebSiteData>({
      resolver: zodResolver(websiteSchema),
    });
    const {
      handleSubmit,
      setError,
      formState: { isSubmitting },
    } = methods;

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

            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log({ ...businessData, url });
          })
        }
      >
        <VStack gap={6}>
          <HStack>
            <Button
              size="md"
              icon
              variant={"outline"}
              onClick={() => handleSetActiveIndex(activeIndex - 1)}
              type="button"
              disabled={isSubmitting}
            >
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
          <TextInput label="www.website.com" name="website" widthFull />
          <Gap />
          <Button size={"xl"} loading={isSubmitting} disabled={isSubmitting}>
            Continue
          </Button>
        </VStack>
      </Form>
    );
  });

  Page2.displayName = "Page2";

  return (
    <TransitionPanel
      variants={{
        enter: (direction) => ({
          x: direction > 0 ? 150 : -150,
          height: activeIndex === 0 ? 300 : 480,
          opacity: 0,
          position: "initial",
        }),
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1,
          height: activeIndex === 0 ? 480 : 300,
        },
        exit: (direction) => ({
          zIndex: 0,
          x: direction < 0 ? 100 : -100,
          opacity: 0,
          height: activeIndex === 0 ? 300 : 480,
          position: "absolute",
          top: 0,
          width: "100%",
        }),
      }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.1 },
      }}
      custom={direction}
      activeIndex={activeIndex}
    >
      {[<Page1 />, <Page2 />]}
    </TransitionPanel>
  );
};

export default Onboarding;
