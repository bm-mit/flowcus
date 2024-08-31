import { twMerge } from 'tailwind-merge';

import { useModalVisibilityContext } from '@/hooks/useModalVisibility';

export interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const [isOpen] = useModalVisibilityContext();

  return (
    <section
      className={twMerge(
        'fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50',
        !isOpen && 'hidden',
      )}
    >
      {children}
    </section>
  );
}
