import {
  useBusinessSummaries,
  useUpdateBusinessSummaries,
} from "@/api/business-details/requests";
import { UpdateBusinessSummariesData } from "@/api/business-details/types";
import { Button } from "@/components/button";
import ColorPicker from "@/components/color-picker";
import { HStack } from "@/components/hstack";
import { Popup } from "@/components/popup";
import { TransitionPanel } from "@/components/primitives/TransitionPanel";
import { Skeleton } from "@/components/skeleton";
import Text from "@/components/text";
import { Textarea } from "@/components/textarea";
import { VStack } from "@/components/vstack";
import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMeasure from "react-use-measure";

const OnboardingBusinessSummaries = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref, bounds] = useMeasure();
  const [open, setOpen] = useState(true);

  const [updatedBusinessSummary, setUpdatedBusinessSummary] =
    useState<UpdateBusinessSummariesData>();

  const { data: businessSummaryData, isLoading } = useBusinessSummaries();
  const { mutate: updateBusinessSummaries } = useUpdateBusinessSummaries();

  useEffect(() => {
    if (activeIndex < 0) setActiveIndex(0);
  }, [activeIndex]);

  const navigate = useNavigate();

  return (
    <Popup
      dismissable={false}
      open={open}
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
                defaultValue={businessSummaryData?.businessName ?? ""}
                loading={isLoading}
                onChangeValue={(value) => {
                  setUpdatedBusinessSummary((prev) => ({
                    ...prev,
                    businessName: value,
                  }));
                }}
                title="Business Name"
              />,
              <TextSnapshot
                defaultValue={businessSummaryData?.businessSummary ?? ""}
                loading={isLoading}
                onChangeValue={(value) => {
                  setUpdatedBusinessSummary((prev) => ({
                    ...prev,
                    businessSummary: value,
                  }));
                }}
                title="Business Snapshot"
              />,
              <TextSnapshot
                defaultValue={businessSummaryData?.targetRegion ?? ""}
                loading={isLoading}
                onChangeValue={(value) => {
                  setUpdatedBusinessSummary((prev) => ({
                    ...prev,
                    targetRegion: value,
                  }));
                }}
                title="Target Location"
              />,
              <TextSnapshot
                title="Target Audience"
                defaultValue={businessSummaryData?.targetAudience ?? ""}
                onChangeValue={(value) => {
                  setUpdatedBusinessSummary((prev) => ({
                    ...prev,
                    targetAudience: value,
                  }));
                }}
              />,
              <TextSnapshot
                title="Brand Voice"
                defaultValue={businessSummaryData?.brandVoice ?? ""}
                onChangeValue={(value) => {
                  setUpdatedBusinessSummary((prev) => ({
                    ...prev,
                    brandVoice: value,
                  }));
                }}
              />,
              <ColorsSnapshot
                title="Brand Colors"
                colors={businessSummaryData?.colors ?? []}
                onChangeColors={(colors) => {
                  setUpdatedBusinessSummary((prev) => ({
                    ...prev,
                    colors,
                  }));
                }}
              />,
            ]}
          </TransitionPanel>
          <Button
            disabled={isLoading}
            onClick={
              activeIndex < 5
                ? () => setActiveIndex((activeIndex) => activeIndex + 1)
                : async () => {
                    if (!!updatedBusinessSummary) {
                      updateBusinessSummaries(updatedBusinessSummary);
                    }
                    setOpen(false);
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    navigate("/campaigns");
                  }
            }
            size={"xl"}
          >
            {activeIndex < 5 ? "Next" : "Begin"}
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
  loading?: boolean;
  ref: (element: HTMLOrSVGElement | null) => void;
  onChangeValue: (value: string) => void;
}

const TextSnapshot = forwardRef<HTMLDivElement, TextSnapshot>(
  ({ defaultValue, title, onChangeValue, loading }, ref) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
      if (loading) return;

      setValue(defaultValue);
    }, [loading, defaultValue]);

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
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                setValue(defaultValue);
                onChangeValue(defaultValue);
              }}
            >
              Reset
            </Button>
          </HStack>
          <Text size="subtitle" color="text-grayscaleText-subtitle">
            We've done some research to understand you better. This is what
            we've found.
          </Text>
        </VStack>

        {loading ? (
          <Skeleton widthFull className="h-[200px]" />
        ) : (
          <Textarea
            label="Business Snapshot"
            name="Business Snapshot"
            defaultValue={defaultValue}
            value={value}
            setValue={(value: string) => {
              setValue(value);
              onChangeValue(value);
            }}
            widthFull
          />
        )}
      </VStack>
    );
  }
);

interface ColorsSnapshotProps {
  title: string;
  colors: string[];
  ref: (element: HTMLOrSVGElement | null) => void;
  onChangeColors: (colors: string[]) => void;
}

const ColorsSnapshot = forwardRef<HTMLDivElement, ColorsSnapshotProps>(
  ({ title, colors, onChangeColors }, ref) => {
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
              onClick={() => {
                setCols(colors);
                onChangeColors(colors);
              }}
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
                setCols((cols) => {
                  const newCols = [...cols];
                  newCols[i] = col;

                  onChangeColors(newCols);

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
