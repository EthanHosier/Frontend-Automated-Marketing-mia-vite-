"use client";
import { useEffect, useState } from "react";
import { TransitionPanel } from "@/components/primitives/TransitionPanel";
import useMeasure from "react-use-measure";
import { Button } from "./button";

export function TransitionPanelCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref, bounds] = useMeasure();

  const FEATURES = [
    {
      title: "Brand",
      description:
        "Develop a distinctive brand identity with tailored logos and guidelines to ensure consistent messaging across all platforms.",
    },
    {
      title: "Product",
      description:
        "Design and refine products that excel in user experience, meeting needs effectively and creating memorable interactions. We specialize in web applications.",
    },
    {
      title: "Website",
      description:
        "Create impactful websites that combine beautiful aesthetics with functional design, ensuring a superior online presence.",
    },
    {
      title: "Design System",
      description:
        "Develop a design system that unifies your brand identity, ensuring consistency across all platforms and products.",
    },
  ];

  const handleSetActiveIndex = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (activeIndex < 0) setActiveIndex(0);
    if (activeIndex >= FEATURES.length) setActiveIndex(FEATURES.length - 1);
  }, [activeIndex, FEATURES.length]);

  return (
    <div className="w-[364px] overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:bg-zinc-700">
      <TransitionPanel
        activeIndex={activeIndex}
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
          opacity: { duration: 0.2 },
        }}
        custom={direction}
      >
        {FEATURES.map((feature, index) => (
          <div key={index} className="px-4 pt-4" ref={ref}>
            <h3 className="mb-0.5 font-medium text-zinc-800 dark:text-zinc-100">
              {feature.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </TransitionPanel>
      <div className="flex justify-between p-4">
        {activeIndex > 0 ? (
          <Button onClick={() => handleSetActiveIndex(activeIndex - 1)}>
            Previous
          </Button>
        ) : (
          <div />
        )}
        <Button
          onClick={() =>
            activeIndex === FEATURES.length - 1
              ? null
              : handleSetActiveIndex(activeIndex + 1)
          }
        >
          {activeIndex === FEATURES.length - 1 ? "Close" : "Next"}
        </Button>
      </div>
    </div>
  );
}
