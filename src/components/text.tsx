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
    "txt-h1-bold": size === "h1" && variant === "bold",
    "txt-h1-light": size === "h1" && variant === "light",
    "txt-h1-regular": size === "h1" && variant === "regular",
    "txt-h2-bold": size === "h2" && variant === "bold",
    "txt-h2-light": size === "h2" && variant === "light",
    "txt-h2-regular": size === "h2" && variant === "regular",
    "txt-h3-bold": size === "h3" && variant === "bold",
    "txt-h3-light": size === "h3" && variant === "light",
    "txt-h3-regular": size === "h3" && variant === "regular",
    "txt-h4-bold": size === "h4" && variant === "bold",
    "txt-h4-light": size === "h4" && variant === "light",
    "txt-h4-regular": size === "h4" && variant === "regular",
    "txt-headline-bold": size === "headline" && variant === "bold",
    "txt-headline-light": size === "headline" && variant === "light",
    "txt-headline-regular": size === "headline" && variant === "regular",
    "txt-body-bold": size === "body" && variant === "bold",
    "txt-body-regular": size === "body" && variant === "regular",
    "txt-body-light": size === "body" && variant === "light",
    "txt-subtitle-bold": size === "subtitle" && variant === "bold",
    "txt-subtitle-light": size === "subtitle" && variant === "light",
    "txt-subtitle-regular": size === "subtitle" && variant === "regular",
    "txt-caption-bold": size === "caption" && variant === "bold",
    "txt-caption-light": size === "caption" && variant === "light",
    "txt-caption-regular": size === "caption" && variant === "regular",
    "txt-footnote-bold": size === "footnote" && variant === "bold",
    "txt-footnote-light": size === "footnote" && variant === "light",
    "txt-footnote-regular": size === "footnote" && variant === "regular",
  });

  return (
    <span className={cn(textClass, validColor, className)}>{children}</span>
  );
};

export default Text;
