import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import useSyncStateWithProp from '@/hooks/useSyncStateWithProp';
import useValidator from '@/hooks/useValidator';

interface ValidatedInputProps {
  className?: string;
  invalidClassName?: string;
  validator: (value: string) => boolean;
  validatedValue?: string;
  setValidatedValue: (value: string) => void;
  style?: React.CSSProperties;
}

export default function ValidatedInput({
  className = undefined,
  invalidClassName = undefined,
  validator,
  validatedValue = '',
  setValidatedValue,
  style = undefined,
}: ValidatedInputProps) {
  const [unvalidatedValue, setUnvalidatedValue] =
    useState<string>(validatedValue);
  const isUnvalidatedValueValid = validator(unvalidatedValue);

  useSyncStateWithProp(validatedValue, setUnvalidatedValue);
  useEffect(() => {
    if (isUnvalidatedValueValid) {
      setValidatedValue(unvalidatedValue);
      setUnvalidatedValue(unvalidatedValue);
    }
  }, [unvalidatedValue, isUnvalidatedValueValid, setValidatedValue]);

  return (
    <input
      className={twMerge(
        className,
        !isUnvalidatedValueValid && invalidClassName,
      )}
      style={style}
      onInput={(event) => {
        setUnvalidatedValue((event.target as HTMLInputElement).value);
      }}
      value={unvalidatedValue}
    />
  );
}
