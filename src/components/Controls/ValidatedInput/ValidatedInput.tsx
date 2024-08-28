import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface ValidatedInputProps {
  value: string;
  className?: string;
  invalidClassName?: string;
  validate: (value: string) => boolean;
  onValidated?: (value: string) => void;
  style?: React.CSSProperties;
}

const ValidatedInput = forwardRef(
  (
    {
      value,
      className = undefined,
      invalidClassName = undefined,
      validate,
      onValidated = undefined,
      style = undefined,
    }: ValidatedInputProps,
    forwardedRef,
  ) => {
    const [unvalidatedValue, setUnvalidatedValue] = useState<string>(value);

    const ref = useRef<HTMLInputElement>(null);
    useImperativeHandle(forwardedRef, () => ref.current as HTMLInputElement);

    useEffect(() => {
      if (ref.current)
        setUnvalidatedValue((ref.current as HTMLInputElement).value);
    }, [ref, onValidated, unvalidatedValue, validate]);

    return (
      <input
        ref={ref}
        className={twMerge('invalid:bg-black', className)}
        style={style}
        onInput={(event) => {
          setUnvalidatedValue((event.target as HTMLInputElement).value);
        }}
        aria-invalid="true"
      />
    );
  },
);

export default ValidatedInput;
