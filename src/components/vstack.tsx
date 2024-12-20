import { cn } from "@/lib/utils";

interface VStackProps {
  children: React.ReactNode;
  justify?: "start" | "center" | "end";
  heightFull?: boolean;
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
  paddingXDesktop?:
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
  gap?:
    | 0
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
  gapDesktop?:
    | 0
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
  className?: string;
  items?: "start" | "center" | "end";
  ref?: React.Ref<HTMLDivElement>;
}

export const VStack: React.FC<VStackProps> = ({
  children,
  justify,
  gap,
  gapDesktop,
  paddingX,
  paddingXDesktop,
  heightFull,
  className,
  items,
  ref,
}) => {
  return (
    <>
      <div
        ref={ref}
        className={cn(
          className,
          "flex flex-col dynamic-gap justify-start gap-4",
          {
            "justify-start": justify === "start",
            "justify-center": justify === "center",
            "justify-end": justify === "end",
          },
          {
            "items-center": items === "center",
            "items-start": items === "start",
            "items-end": items === "end",
          },
          {
            "gap-0": gap === 0,
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
            "md:gap-0": gapDesktop === 0,
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
            "md:px-[4px]": paddingXDesktop === 1,
            "md:px-[8px]": paddingXDesktop === 2,
            "md:px-[12px]": paddingXDesktop === 3,
            "md:px-[16px]": paddingXDesktop === 4,
            "md:px-[20px]": paddingXDesktop === 5,
            "md:px-[24px]": paddingXDesktop === 6,
            "md:px-[28px]": paddingXDesktop === 7,
            "md:px-[32px]": paddingXDesktop === 8,
            "md:px-[36px]": paddingXDesktop === 9,
            "md:px-[40px]": paddingXDesktop === 10,
            "md:px-[44px]": paddingXDesktop === 11,
            "md:px-[48px]": paddingXDesktop === 12,
            "md:px-[52px]": paddingXDesktop === 13,
            "md:px-[56px]": paddingXDesktop === 14,
            "md:px-[60px]": paddingXDesktop === 15,
            "md:px-[64px]": paddingXDesktop === 16,
          },
          {
            "h-full": !!heightFull,
          }
        )}
      >
        {children}
      </div>
    </>
  );
};
