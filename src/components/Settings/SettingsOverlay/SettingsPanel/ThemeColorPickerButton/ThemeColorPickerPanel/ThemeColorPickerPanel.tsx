import chroma from 'chroma-js';
import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { twMerge } from 'tailwind-merge';

import ValidatedInput from '@/components/Controls/ValidatedInput';
import useConfigProfileContext from '@/hooks/useConfigProfileContext';
import colors from '@/utils/colors';
import ignoreParentMouseEvent from '@/utils/handlers/ignoreParentMouseEvent';

interface ThemeColorPickerPanelProps {
  className?: string;
}

export default function ThemeColorPickerPanel({
  className = undefined,
}: ThemeColorPickerPanelProps) {
  const { themeColor } = useConfigProfileContext();
  const [currentColor, setCurrentColor] = useState(themeColor);

  const textColor = colors.textColor(currentColor);
  const parsedCurrentColor = chroma(currentColor).hex();
  const overlayBgColor = chroma(currentColor).alpha(0.3).hex();

  return (
    <div
      role="presentation"
      className={twMerge('bg-black/50', className)}
      style={{ backgroundColor: overlayBgColor }}
    >
      <div
        role="presentation"
        className="flex flex-col gap-4 rounded-2xl p-4"
        style={{ backgroundColor: parsedCurrentColor }}
        onClick={ignoreParentMouseEvent}
      >
        <HexColorPicker
          color={themeColor}
          onChange={(newColor) => {
            setCurrentColor(newColor);
          }}
        />

        <ValidatedInput
          className="rounded-md border-2 border-transparent bg-transparent text-center outline-0"
          invalidClassName="border-2 border-red-500"
          style={{ color: textColor }}
          validator={chroma.valid}
          validatedValue={currentColor}
          setValidatedValue={setCurrentColor}
        />
      </div>
    </div>
  );
}
