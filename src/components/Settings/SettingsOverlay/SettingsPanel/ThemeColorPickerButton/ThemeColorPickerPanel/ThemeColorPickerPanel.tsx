import chroma from 'chroma-js';
import { useMemo, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { twMerge } from 'tailwind-merge';

import useConfigProfileContext from '@/hooks/useConfigProfileContext';

interface ThemeColorPickerPanelProps {
  className?: string;
}

export default function ThemeColorPickerPanel({
  className = undefined,
}: ThemeColorPickerPanelProps) {
  const { themeColor } = useConfigProfileContext();
  const [currentColor, setCurrentColor] = useState(themeColor);

  const overlayBgColor = useMemo(
    () => chroma(currentColor).alpha(0.3).hex(),
    [currentColor],
  );

  return (
    <div
      role="presentation"
      className={twMerge('bg-black/50', className)}
      style={{ backgroundColor: overlayBgColor }}
    >
      <div
        role="presentation"
        className="flex flex-col gap-4 rounded-2xl p-4"
        style={{ backgroundColor: currentColor }}
        onClick={(e) => e.stopPropagation()}
      >
        <HexColorPicker
          onChange={(newColor) => {
            setCurrentColor(newColor);
          }}
        />
        <div className="text-center" contentEditable>
          {currentColor}
        </div>
      </div>
    </div>
  );
}
