import Blob from "@/components/blob";
import { Outlet } from "react-router-dom";

export const OnboardingLayout = () => {
  return (
    <div className=" px-[24px] py-[64px] md:bg-grayscaleSurface-default h-screen flex md:justify-center">
      <Blob className="w-[560px] hidden md:block" paddingX={16} paddingY={8}>
        <Outlet />
        <div className="h-8" />
      </Blob>
      <div className="bg-white md:hidden w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};
