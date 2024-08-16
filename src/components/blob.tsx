import { cn } from "@/lib/utils";
import React from "react";

interface BlobProps {
  children: React.ReactNode;
  widthFull?: boolean;
  color?: "white" | "gray";
  padding?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16;
  paddingDesktop?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16;
}

const Blob: React.FC<BlobProps> = ({
  children,
  widthFull,
  color,
  padding,
  paddingDesktop,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl",
        {
          "bg-grayscaleSurface-default": color === "gray",
          "bg-white": color === "white",
        },
        {
          "w-full": widthFull,
        },
        {
          "p-[4px]": padding === 1,
          "p-[8px]": padding === 2,
          "p-[12px]": padding === 3,
          "p-[16px]": padding === 4,
          "p-[20px]": padding === 5,
          "p-[24px]": padding === 6,
          "p-[28px]": padding === 7,
          "p-[32px]": padding === 8,
          "p-[36px]": padding === 9,
          "p-[40px]": padding === 10,
          "p-[44px]": padding === 11,
          "p-[48px]": padding === 12,
          "p-[52px]": padding === 13,
          "p-[56px]": padding === 14,
          "p-[60px]": padding === 15,
          "p-[64px]": padding === 16,
        },
        {
          "md:p-[4px]": paddingDesktop === 1,
          "md:p-[8px]": paddingDesktop === 2,
          "md:p-[12px]": paddingDesktop === 3,
          "md:p-[16px]": paddingDesktop === 4,
          "md:p-[20px]": paddingDesktop === 5,
          "md:p-[24px]": paddingDesktop === 6,
          "md:p-[28px]": paddingDesktop === 7,
          "md:p-[32px]": paddingDesktop === 8,
          "md:p-[36px]": paddingDesktop === 9,
          "md:p-[40px]": paddingDesktop === 10,
          "md:p-[44px]": paddingDesktop === 11,
          "md:p-[48px]": paddingDesktop === 12,
          "md:p-[52px]": paddingDesktop === 13,
          "md:p-[56px]": paddingDesktop === 14,
          "md:p-[60px]": paddingDesktop === 15,
          "md:p-[64px]": paddingDesktop === 16,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Blob;
