import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import SettingsIcon from '@/icons/settings-black.svg';

interface SettingsButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export default function SettingsButton({
  className,
  onClick,
}: SettingsButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        'hover:bg-teal-900 transition-all rounded-full size-12',
        className,
      )}
      onClick={onClick}
      aria-label="Settings"
    >
      <SettingsIcon width="32px" height="32px" className="m-auto text-white" />
    </button>
  );
}
