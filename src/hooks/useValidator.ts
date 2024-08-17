import { useMemo } from 'react';

export default function useValidator<T>(
  state: T,
  validator: (value: T) => boolean,
) {
  return useMemo(() => validator(state), [state, validator]);
}
