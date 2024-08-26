import { cn } from "@/lib/utils";

interface HStackProps {
  children: React.ReactNode;
  justify?: "start" | "center" | "end" | "between";
  items?: "start" | "center" | "end";
  className?: string;
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  gapDesktop?:
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
}

export const HStack: React.FC<HStackProps> = ({
  children,
  justify,
  gap,
  gapDesktop,
  padding,
  paddingDesktop,
  className,
  items,
}) => {
  return (
    <>
      <div
        className={cn(
          "flex justify-start w-full",
          {
            "justify-start": justify === "start",
            "justify-center": justify === "center",
            "justify-end": justify === "end",
            "justify-between": justify === "between",
          },
          {
            "items-start": items === "start",
            "items-center": items === "center",
            "items-end": items === "end",
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
          {
            "md:gap-[4px]": gapDesktop === 1,
            "md:gap-[8px]": gapDesktop === 2,
            "md:gap-[12px]": gapDesktop === 3,
            "md:gap-[16px]": gapDesktop === 4,
            "md:gap-[20px]": gapDesktop === 5,
            "md:gap-[24px]": gapDesktop === 6,
            "md:gap-[28px]": gapDesktop === 7,
            "md:gap-[32px]": gapDesktop === 8,
            "md:gap-[36px]": gapDesktop === 9,
            "md:gap-[40px]": gapDesktop === 10,
            "md:gap-[44px]": gapDesktop === 11,
            "md:gap-[48px]": gapDesktop === 12,
            "md:gap-[52px]": gapDesktop === 13,
            "md:gap-[56px]": gapDesktop === 14,
            "md:gap-[60px]": gapDesktop === 15,
            "md:gap-[64px]": gapDesktop === 16,
          },
          {
            "px-[4px]": padding === 1,
            "px-[8px]": padding === 2,
            "px-[12px]": padding === 3,
            "px-[16px]": padding === 4,
            "px-[20px]": padding === 5,
            "px-[24px]": padding === 6,
            "px-[28px]": padding === 7,
            "px-[32px]": padding === 8,
            "px-[36px]": padding === 9,
            "px-[40px]": padding === 10,
            "px-[44px]": padding === 11,
            "px-[48px]": padding === 12,
            "px-[52px]": padding === 13,
            "px-[56px]": padding === 14,
            "px-[60px]": padding === 15,
            "px-[64px]": padding === 16,
          },
          {
            "md:px-[4px]": paddingDesktop === 1,
            "md:px-[8px]": paddingDesktop === 2,
            "md:px-[12px]": paddingDesktop === 3,
            "md:px-[16px]": paddingDesktop === 4,
            "md:px-[20px]": paddingDesktop === 5,
            "md:px-[24px]": paddingDesktop === 6,
            "md:px-[28px]": paddingDesktop === 7,
            "md:px-[32px]": paddingDesktop === 8,
            "md:px-[36px]": paddingDesktop === 9,
            "md:px-[40px]": paddingDesktop === 10,
            "md:px-[44px]": paddingDesktop === 11,
            "md:px-[48px]": paddingDesktop === 12,
            "md:px-[52px]": paddingDesktop === 13,
            "md:px-[56px]": paddingDesktop === 14,
            "md:px-[60px]": paddingDesktop === 15,
            "md:px-[64px]": paddingDesktop === 16,
          },
          className
        )}
      >
        {children}
      </div>
    </>
  );
};
