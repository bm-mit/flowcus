import { useCallback, useEffect } from 'react';

export default function useHandleKey(
  key: string,
  event_type: keyof DocumentEventMap,
  callback: () => void,
  preventDefault = false,
) {
  const handleKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key) {
        if (preventDefault) event.preventDefault();
        callback();
      }

      console.log('handle');
    },
    [key, callback, preventDefault],
  );

  useEffect(() => {
    document.addEventListener(event_type, handleKey, false);

    return () => {
      document.removeEventListener(event_type, handleKey, false);
    };
  });

  return handleKey;
}
