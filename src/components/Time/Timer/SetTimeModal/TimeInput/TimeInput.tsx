import chroma from 'chroma-js';

import ValidatedInput from '@/components/Controls/ValidatedInput';
import { ValidatedInputProps } from '@/components/Controls/ValidatedInput/ValidatedInput';
import useConfigProfileContext from '@/hooks/useConfigProfileContext';

export interface TimeInputProps extends ValidatedInputProps {}

export default function TimeInput({
  value,
  placeholder,
  validate,
  onValidated,
  onBlur,
}: TimeInputProps) {
  const { themeColor } = useConfigProfileContext();
  const dimmedColor = chroma(themeColor).darken(0.25).hex();

  return (
    <ValidatedInput
      className="size-16 rounded border-2 border-transparent p-4 text-center outline-none"
      invalidClassName="border-red-500"
      style={{ backgroundColor: dimmedColor }}
      placeholder={placeholder}
      value={value}
      validate={validate}
      onValidated={onValidated}
      onBlur={onBlur}
    />
  );
}
