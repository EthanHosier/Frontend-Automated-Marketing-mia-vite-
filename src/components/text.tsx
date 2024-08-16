import React from "react";
import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  color?: string;
  size?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "headline"
    | "body"
    | "subtitle"
    | "caption"
    | "footnote";
  variant?: "light" | "regular" | "bold";
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  color,
  size = "body",
  variant = "regular",
  className,
}) => {
  const validColor = color && color.startsWith("text-") ? color : undefined;

  const textClass = cn({
    "text-h1-bold": size === "h1" && variant === "bold",
    "text-h1-light": size === "h1" && variant === "light",
    "text-h1-regular": size === "h1" && variant === "regular",
    "text-h2-bold": size === "h2" && variant === "bold",
    "text-h2-light": size === "h2" && variant === "light",
    "text-h2-regular": size === "h2" && variant === "regular",
    "text-h3-bold": size === "h3" && variant === "bold",
    "text-h3-light": size === "h3" && variant === "light",
    "text-h3-regular": size === "h3" && variant === "regular",
    "text-h4-bold": size === "h4" && variant === "bold",
    "text-h4-light": size === "h4" && variant === "light",
    "text-h4-regular": size === "h4" && variant === "regular",
    "text-headline-bold": size === "headline" && variant === "bold",
    "text-headline-light": size === "headline" && variant === "light",
    "text-headline-regular": size === "headline" && variant === "regular",
    "text-body-bold": size === "body" && variant === "bold",
    "text-body-regular": size === "body" && variant === "regular",
    "text-body-light": size === "body" && variant === "light",
    "text-subtitle-bold": size === "subtitle" && variant === "bold",
    "text-subtitle-light": size === "subtitle" && variant === "light",
    "text-subtitle-regular": size === "subtitle" && variant === "regular",
    "text-caption-bold": size === "caption" && variant === "bold",
    "text-caption-light": size === "caption" && variant === "light",
    "text-caption-regular": size === "caption" && variant === "regular",
    "text-footnote-bold": size === "footnote" && variant === "bold",
    "text-footnote-light": size === "footnote" && variant === "light",
    "text-footnote-regular": size === "footnote" && variant === "regular",
  });

  return (
    <span className={cn(textClass, className, validColor)}>{children}</span>
  );
};

export default Text;
