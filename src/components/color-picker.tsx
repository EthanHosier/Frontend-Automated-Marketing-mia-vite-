import React, { useRef, useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

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
  const [visible, setVisible] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide color picker when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <div
        className={`rounded-xl size-[64px] border ${className}`}
        style={{ backgroundColor: color }}
        onClick={() => setVisible(true)}
      >
        {/* Color preview */}
      </div>
      {visible && (
        <div
          ref={pickerRef}
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            zIndex: 10,
          }}
        >
          <HexColorPicker
            color={color}
            onChange={onChange}
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
