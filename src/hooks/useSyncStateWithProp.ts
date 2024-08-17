import React, { useEffect } from 'react';

export default function useSyncStateWithProp<T>(
  prop: T,
  setState: React.Dispatch<React.SetStateAction<T>>,
) {
  useEffect(() => {
    setState((prevState) => {
      if (prevState !== prop) {
        return prop;
      }
      return prevState;
    });
  }, [prop, setState]);
}
