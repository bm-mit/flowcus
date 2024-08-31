import React, { useCallback, useState } from 'react';

export default function useToggle(
  initialState: boolean = false,
): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setState((s) => !s);
  }, []);

  return [state, toggle, setState];
}
