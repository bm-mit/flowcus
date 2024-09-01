import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { useModalVisibilityContext } from '@/hooks/useModalVisibility';

export interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const [isOpen, , , close] = useModalVisibilityContext();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ref?.current?.addEventListener('keyup', (e) => {
      console.log(e);
    });
  }, []);

  return (
    <section
      role="presentation"
      ref={ref}
      className={twMerge(
        'fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50',
        !isOpen && 'hidden',
      )}
      onKeyUp={(e) => console.log(e)}
    >
      {children}
    </section>
  );
}
