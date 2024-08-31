import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ValidatedInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  invalidClassName?: string;
  validate: (value: string) => boolean;
  onValidated?: (value: string) => void;
}

export default function ValidatedInput({
  value,
  className = undefined,
  invalidClassName = undefined,
  validate,
  onValidated = undefined,
  onBlur = undefined,
  style = undefined,
  placeholder = undefined,
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
      ref={(node) => {
        console.log('ref');
        if (node) setUnvalidatedValue(node.value);
      }}
      style={style}
      onInput={(event) => {
        const inputString = (event.target as HTMLInputElement).value;
        setUnvalidatedValue(inputString);

        if (validate(inputString)) {
          onValidated?.(inputString);
        }
      }}
      onBlur={onBlur}
      placeholder={placeholder}
      value={unvalidatedValue}
    />
  );
}
