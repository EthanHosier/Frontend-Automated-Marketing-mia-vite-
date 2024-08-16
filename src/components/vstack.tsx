import { cn } from "@/lib/utils";

interface VStackProps {
  children: React.ReactNode;
  justify?: "start" | "center" | "end";

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
}

export const VStack: React.FC<VStackProps> = ({
  children,
  justify,
  gap,
  gapDesktop,
}) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col dynamic-gap justify-start h-full",
          {
            "justify-start": justify === "start",
            "justify-center": justify === "center",
            "justify-end": justify === "end",
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
          }
        )}
      >
        {children}
      </div>
    </>
  );
};
