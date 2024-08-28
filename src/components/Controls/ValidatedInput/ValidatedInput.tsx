import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface ValidatedInputProps {
  value: string;
  className?: string;
  invalidClassName?: string;
  validate: (value: string) => boolean;
  onValidated?: (value: string) => void;
  style?: React.CSSProperties;
}

export default function ValidatedInput({
  value,
  className = undefined,
  invalidClassName = undefined,
  validate,
  onValidated = undefined,
  style = undefined,
}: ValidatedInputProps) {
  const [unvalidatedValue, setUnvalidatedValue] = useState<string>(value);

  useEffect(() => {
    setUnvalidatedValue(value);
  }, [value]);

  return (
    <input
      className={twMerge(
        'invalid:bg-black',
        className,
        !validate(unvalidatedValue) && invalidClassName,
      )}
      style={style}
      onInput={(event) => {
        const inputString = (event.target as HTMLInputElement).value;
        setUnvalidatedValue(inputString);

        if (validate(inputString)) {
          onValidated?.(inputString);
        }
      }}
      value={unvalidatedValue}
    />
  );
}
