import React from "react";
import { Link } from "react-router-dom";

interface MiaLogoProps {
  className?: string;
  version?: "white" | "black";
}

const MiaLogo: React.FC<MiaLogoProps> = ({ className, version = "black" }) => {
  return (
    <Link to={"campaigns"}>
      <img src={miaLogoUrl(version)} alt="Mia Logo" className={className} />
    </Link>
  );
};

const miaLogoUrl = (version: string) => {
  return version === "white"
    ? "/assets/mia-logos/mia-white.svg"
    : "/assets/mia-logos/mia-black.svg";
};

export default MiaLogo;
