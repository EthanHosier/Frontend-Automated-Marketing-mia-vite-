import React from "react";

interface MiaLogoProps {
  className?: string;
  version?: "white" | "black";
}

const MiaLogo: React.FC<MiaLogoProps> = ({ className, version = "black" }) => {
  return <img src={miaLogoUrl(version)} alt="Mia Logo" className={className} />;
};

const miaLogoUrl = (version: string) => {
  return version === "white"
    ? "src/assets/mia-logos/mia-white.svg"
    : "src/assets/mia-logos/mia-black.svg";
};

export default MiaLogo;
