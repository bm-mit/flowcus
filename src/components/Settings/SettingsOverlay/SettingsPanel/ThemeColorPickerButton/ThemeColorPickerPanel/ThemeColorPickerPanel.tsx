import chroma from 'chroma-js';
import { MouseEventHandler, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { twMerge } from 'tailwind-merge';

import ValidatedInput from '@/components/Controls/ValidatedInput';
import useConfigProfileContext from '@/hooks/useConfigProfileContext';
import colors from '@/utils/colors';
import config from '@/utils/config';

interface ThemeColorPickerPanelProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function ThemeColorPickerPanel({
  className = undefined,
  onClick = undefined,
}: ThemeColorPickerPanelProps) {
  const { themeColor } = useConfigProfileContext();
  const [currentColor, setCurrentColor] = useState(themeColor);

  const textColor = colors.textColor(currentColor);
  const bgColor = chroma(currentColor).hex();
  const overlayBgColor = chroma(currentColor).alpha(0.3).hex();

  const saveColor = () => {
    (async () => {
      await config.setThemeColor(currentColor);
    })();
  };

  return (
    <div
      role="presentation"
      className={twMerge('bg-black/50', className)}
      style={{ backgroundColor: overlayBgColor }}
      onClick={(e) => {
        if (onClick) onClick(e);
        saveColor();
      }}
    >
      <div
        role="presentation"
        className="flex flex-col gap-4 rounded-2xl p-4"
        style={{ backgroundColor: bgColor }}
      >
        <HexColorPicker
          color={themeColor}
          onChange={setCurrentColor}
          onClick={(e) => e.stopPropagation()}
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
