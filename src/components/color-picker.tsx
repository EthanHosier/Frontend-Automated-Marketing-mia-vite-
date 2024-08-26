import { cn } from "@/lib/utils";
import React from "react";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  className?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  onChange,
  className,
}) => {
  return (
    <div
      className={cn("rounded-full size-[56px] border", className)}
      style={{ backgroundColor: color }}
    />
  );
};

export default ColorPicker;
