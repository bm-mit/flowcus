import clsx from 'clsx';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

import useConfigProfileContext from '@/hooks/useConfigProfileContext';
import useToggle from '@/hooks/useToggle';

export default function ThemeColorPicker() {
  const { themeColor } = useConfigProfileContext();
  const [currentColor, setCurrentColor] = useState<string>(themeColor);
  const [isColorPickerOpen, toggleIsColorPickerOpen] = useToggle(false);

  return (
    <div
      role="presentation"
      className="rounded-md p-1 text-center"
      style={{ backgroundColor: currentColor }}
      onClick={toggleIsColorPickerOpen}
    >
      {themeColor}

      <HexColorPicker
        className={clsx(!isColorPickerOpen && 'hidden')}
        onChange={(newColor) => {
          setCurrentColor(newColor);
        }}
      />
    </div>
  );
}
