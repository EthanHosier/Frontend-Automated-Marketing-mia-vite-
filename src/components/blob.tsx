import { cn } from "@/lib/utils";
import React from "react";

interface BlobProps {
  children: React.ReactNode;
  widthFull?: boolean;
  color?: "white" | "gray";
  className?: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  paddingX?:
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
  paddingY?:
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
  onClick?: () => void;
}

const Blob: React.FC<BlobProps> = ({
  children,
  widthFull,
  color,
  padding,
  paddingDesktop,
  className,
  rounded,
  paddingX,
  paddingY,
  gap,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl w-fit h-fit",
        {
          "bg-grayscaleSurface-default": color === "gray",
          "bg-white": color === "white",
        },
        {
          "w-full": !!widthFull,
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
        },
        {
          "rounded-sm": rounded === "sm",
          "rounded-md": rounded === "md",
          "rounded-lg": rounded === "lg",
          "rounded-xl": rounded === "xl",
          "rounded-full": rounded === "full",
        },
        {
          "px-[4px]": paddingX === 1,
          "px-[8px]": paddingX === 2,
          "px-[12px]": paddingX === 3,
          "px-[16px]": paddingX === 4,
          "px-[20px]": paddingX === 5,
          "px-[24px]": paddingX === 6,
          "px-[28px]": paddingX === 7,
          "px-[32px]": paddingX === 8,
          "px-[36px]": paddingX === 9,
          "px-[40px]": paddingX === 10,
          "px-[44px]": paddingX === 11,
          "px-[48px]": paddingX === 12,
          "px-[52px]": paddingX === 13,
          "px-[56px]": paddingX === 14,
          "px-[60px]": paddingX === 15,
          "px-[64px]": paddingX === 16,
        },
        {
          "py-[4px]": paddingY === 1,
          "py-[8px]": paddingY === 2,
          "py-[12px]": paddingY === 3,
          "py-[16px]": paddingY === 4,
          "py-[20px]": paddingY === 5,
          "py-[24px]": paddingY === 6,
          "py-[28px]": paddingY === 7,
          "py-[32px]": paddingY === 8,
          "py-[36px]": paddingY === 9,
          "py-[40px]": paddingY === 10,
          "py-[44px]": paddingY === 11,
          "py-[48px]": paddingY === 12,
          "py-[52px]": paddingY === 13,
          "py-[56px]": paddingY === 14,
          "py-[60px]": paddingY === 15,
          "py-[64px]": paddingY === 16,
        },
        {
          "gap-[4px]": gap === 1,
          "gap-[8px]": gap === 2,
          "gap-[12px]": gap === 3,
          "gap-[16px]": gap === 4,
          "gap-[20px]": gap === 5,
          "gap-[24px]": gap === 6,
          "gap-[28px]": gap === 7,
          "gap-[32px]": gap === 8,
          "gap-[36px]": gap === 9,
          "gap-[40px]": gap === 10,
          "gap-[44px]": gap === 11,
          "gap-[48px]": gap === 12,
          "gap-[52px]": gap === 13,
          "gap-[56px]": gap === 14,
          "gap-[60px]": gap === 15,
          "gap-[64px]": gap === 16,
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Blob;
