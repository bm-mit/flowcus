import React, { useEffect, useState } from 'react';

import ThemeColorPickerPanel from '@/components/Settings/SettingsOverlay/SettingsPanel/ThemeColorPickerButton/ThemeColorPickerPanel';
import useConfigProfileContext from '@/hooks/useConfigProfileContext';

export default function ThemeColorPickerButton() {
  const { themeColor } = useConfigProfileContext();
  const [isColorPickerOpen, setIsColorPickerOpen] = useState<boolean>(false);

  const closePickerPanel = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.currentTarget === e.target) {
      setIsColorPickerOpen(false);
    }
  };

  return (
    <div
      role="presentation"
      className="flex items-center justify-center rounded-md p-1"
      style={{ backgroundColor: themeColor }}
      onClick={(e) => {
        if (e.currentTarget === e.target) setIsColorPickerOpen(true);
      }}
    >
      {themeColor}

      {isColorPickerOpen && (
        <ThemeColorPickerPanel
          className="!fixed inset-0 flex items-center justify-center"
          onClick={closePickerPanel}
        />
      )}
    </div>
  );
}
