import { createContext, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import useToggle from '@/hooks/useToggle';

export interface ModalProps {
  children: React.ReactNode;
}

type ModalVisibilityContextType = [boolean, () => void];
export const ModalVisibilityContext = createContext<ModalVisibilityContextType>(
  [true, () => {}],
);

export default function Modal({ children }: ModalProps) {
  const [isOpen, toggleOpen, ,] = useToggle();
  const modalVisibilityMemo = useMemo<ModalVisibilityContextType>(
    () => [isOpen, toggleOpen],
    [isOpen, toggleOpen],
  );

  return (
    <section
      className={twMerge(
        'fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50',
        !isOpen && 'hidden',
      )}
    >
      <ModalVisibilityContext.Provider value={modalVisibilityMemo}>
        {children}
      </ModalVisibilityContext.Provider>
    </section>
  );
}
