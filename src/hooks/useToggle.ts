import React, { useCallback, useState } from 'react';

export default function useToggle(
  initialState: boolean = false,
): [
  boolean,
  () => void,
  () => void,
  () => void,
  React.Dispatch<React.SetStateAction<boolean>>,
] {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setState((s) => !s);
  }, []);

  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);

  return [state, toggle, setTrue, setFalse, setState];
}
