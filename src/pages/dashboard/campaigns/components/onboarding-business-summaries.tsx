import { useBusinessSummaries } from "@/api/business-details/requests";
import { Button } from "@/components/button";
import ColorPicker from "@/components/color-picker";
import { HStack } from "@/components/hstack";
import { Popup } from "@/components/popup";
import { TransitionPanel } from "@/components/primitives/TransitionPanel";
import Text from "@/components/text";
import { Textarea } from "@/components/textarea";
import { VStack } from "@/components/vstack";
import { forwardRef, useEffect, useState } from "react";
import useMeasure from "react-use-measure";

const OnboardingBusinessSummaries = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref, bounds] = useMeasure();

  const { data: businessSummaryData } = useBusinessSummaries();

  const handleSetActiveIndex = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (activeIndex < 0) setActiveIndex(0);
  }, [activeIndex]);

  return (
    <Popup
      dismissable={false}
      open
      content={
        <VStack gap={6}>
          <TransitionPanel
            variants={{
              enter: (direction) => ({
                x: direction > 0 ? 364 : -364,
                opacity: 0,
                height: bounds.height > 0 ? bounds.height : "auto",
                position: "initial",
              }),
              center: {
                zIndex: 1,
                x: 0,
                opacity: 1,
                height: bounds.height > 0 ? bounds.height : "auto",
              },
              exit: (direction) => ({
                zIndex: 0,
                x: direction < 0 ? 364 : -364,
                opacity: 0,
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
            {[
              <TextSnapshot
                defaultValue={businessSummaryData?.businessSummary ?? ""}
                title="Business Snapshot"
              />,
              <TextSnapshot
                title="Target Audience"
                defaultValue={businessSummaryData?.targetAudience ?? ""}
              />,
              <TextSnapshot
                title="Brand Voice"
                defaultValue={businessSummaryData?.brandVoice ?? ""}
              />,
              <ColorsSnapshot
                title="Brand Colors"
                colors={businessSummaryData?.colors ?? []}
              />,
            ]}
          </TransitionPanel>
          <Button
            onClick={
              activeIndex < 3
                ? () => handleSetActiveIndex(activeIndex + 1)
                : () => console.log("Confirm")
            }
            size={"xl"}
          >
            Begin
          </Button>
        </VStack>
      }
    />
  );
};

export default OnboardingBusinessSummaries;

interface TextSnapshot {
  title: string;
  defaultValue: string;
  ref: (element: HTMLOrSVGElement | null) => void;
}

const TextSnapshot = forwardRef<HTMLDivElement, TextSnapshot>(
  ({ defaultValue, title }, ref) => {
    return (
      <VStack gap={6} ref={ref}>
        <VStack gap={1}>
          <HStack justify="between">
            <Text
              size="h4"
              variant="bold"
              color="text-grayscaleText-title"
              className="Poppins"
            >
              {title}
            </Text>
            <Button size="sm" variant="secondary">
              Reset
            </Button>
          </HStack>
          <Text size="subtitle" color="text-grayscaleText-subtitle">
            We've done some research to understand you better. This is what
            we've found.
          </Text>
        </VStack>

        <Textarea
          label="Business Snapshot"
          name="Business Snapshot"
          defaultValue={defaultValue}
          widthFull
        />
      </VStack>
    );
  }
);

interface ColorsSnapshotProps {
  title: string;
  colors: string[];
  ref: (element: HTMLOrSVGElement | null) => void;
}

const ColorsSnapshot = forwardRef<HTMLDivElement, ColorsSnapshotProps>(
  ({ title, colors }, ref) => {
    const [cols, setCols] = useState<string[]>(colors);

    return (
      <VStack gap={6} ref={ref}>
        <VStack gap={2}>
          <HStack justify="between">
            <Text
              size="h4"
              variant="bold"
              color="text-grayscaleText-title"
              className="Poppins"
            >
              {title}
            </Text>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setCols(colors)}
            >
              Reset
            </Button>
          </HStack>
          <Text size="subtitle" color="text-grayscaleText-subtitle">
            We've done some research to understand you better. This is what
            we've found.
          </Text>
        </VStack>
        <HStack gap={2}>
          {colors.map((color, i) => (
            <ColorPicker
              key={color}
              color={cols[i]}
              onChange={(col) => {
                console.log(col);
                setCols((cols) => {
                  const newCols = [...cols];
                  newCols[i] = col;
                  return newCols;
                });
              }}
            />
          ))}
        </HStack>
      </VStack>
    );
  }
);
