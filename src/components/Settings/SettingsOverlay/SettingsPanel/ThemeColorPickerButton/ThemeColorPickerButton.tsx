import ThemeColorPickerPanel from '@/components/Settings/SettingsOverlay/SettingsPanel/ThemeColorPickerButton/ThemeColorPickerPanel';
import useConfigProfileContext from '@/hooks/useConfigProfileContext';
import useToggle from '@/hooks/useToggle';

export default function ThemeColorPickerButton() {
  const { themeColor } = useConfigProfileContext();
  const [isColorPickerOpen, toggleIsColorPickerOpen] = useToggle(false);

  return (
    <div
      role="presentation"
      className="flex items-center justify-center rounded-md p-1"
      style={{ backgroundColor: themeColor }}
      onClick={toggleIsColorPickerOpen}
    >
      {themeColor}

      {isColorPickerOpen && (
        <ThemeColorPickerPanel className="!fixed inset-0 flex items-center justify-center" />
      )}
    </div>
  );
}
