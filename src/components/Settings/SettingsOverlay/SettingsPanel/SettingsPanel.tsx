import chroma from 'chroma-js';

import PanelTitle from '@/components/Settings/SettingsOverlay/SettingsPanel/PanelTitle';
import SettingsItem from '@/components/Settings/SettingsOverlay/SettingsPanel/SettingsItem';
import useConfigProfileContext from '@/hooks/useConfigProfileContext';

import ClosePanelButton from './ClosePanelButton';
import ThemeColorPickerButton from './ThemeColorPickerButton';

export default function SettingsPanel() {
  const { themeColor } = useConfigProfileContext();

  const borderColor = chroma(themeColor).darken(0.5).hex('rgb');
  const backgroundColor = chroma(themeColor).darken(0.25).hex('rgb');

  return (
    <div
      className="relative flex size-4/5 max-w-screen-lg flex-col gap-4 rounded-2xl border-4 p-10 text-neutral-100"
      style={{ backgroundColor, borderColor }}
    >
      <ClosePanelButton className="absolute right-4 top-4" />

      <PanelTitle />

      <div className="flex flex-col gap-2">
        <SettingsItem>
          <div>
            Theme Color
            <p className="text-sm font-light">Adjust your UI color.</p>
          </div>
          <ThemeColorPickerButton />
        </SettingsItem>

        <SettingsItem>
          <div>Theme Color</div>
          <div className="bg-black text-center">wao</div>
        </SettingsItem>
      </div>
    </div>
  );
}
