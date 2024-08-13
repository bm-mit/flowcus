import { ContainerProps } from '@/types/props.types';

export default function SettingsItem({ children }: ContainerProps) {
  return <div className="grid grid-cols-[2fr_1fr]">{children}</div>;
}
