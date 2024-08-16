import { cn } from "@/lib/utils";
import React from "react";

interface BlobProps {
  children: React.ReactNode;
  widthFull?: boolean;
  color?: "white" | "gray";
  padding?: number;
  paddingDesktop?: number;
}

const Blob: React.FC<BlobProps> = ({
  children,
  widthFull,
  color,
  padding,
  paddingDesktop,
}) => {
  const style = `
  .dynamic-padding {
    padding: ${(padding ?? 1) * 4}px;
  }
  @media (min-width: 1024px) {
    .dynamic-padding {
      padding: ${(paddingDesktop ?? 1) * 4}px;
    }
  }
`;
  return (
    <>
      <style>{style}</style>
      <div
        className={cn(
          "bg-white dynamic-padding rounded-xl",
          {
            "bg-grayscaleSurface-default": color === "gray",
            "bg-white": color === "white",
          },
          {
            "w-full": widthFull,
          }
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Blob;
