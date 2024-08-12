import useConfigProfileContext from '@/hooks/useConfigProfileContext';

import ClosePanelButton from './ClosePanelButton';

export default function SettingsPanel() {
  const { themeColor } = useConfigProfileContext();

  return (
    <div
      className="relative size-4/5 rounded-2xl p-10"
      style={{ backgroundColor: themeColor }}
    >
      <h2 className="text-3xl text-neutral-100">Settings</h2>
      <p className="text-neutral-100">Tweak your Flocus</p>
      <ClosePanelButton className="absolute right-4 top-4" />
    </div>
  );
}
