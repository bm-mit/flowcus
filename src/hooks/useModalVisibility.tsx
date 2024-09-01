import { useContext, useMemo } from 'react';

import {
  ModalVisibilityContext,
  ModalVisibilityContextType,
} from '@/contexts/ModalVisibilityContext';
import useToggle from '@/hooks/useToggle';

export default function useModalVisibility() {
  const [isOpen, toggleOpen, open, close] = useToggle();

  return useMemo<ModalVisibilityContextType>(
    () => [isOpen, toggleOpen, open, close],
    [isOpen, toggleOpen, open, close],
  );
}

export function useModalVisibilityContext() {
  return useContext(ModalVisibilityContext);
}

export function ModalVisibilityProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: ModalVisibilityContextType;
}) {
  return (
    <ModalVisibilityContext.Provider value={value}>
      {children}
    </ModalVisibilityContext.Provider>
  );
}
