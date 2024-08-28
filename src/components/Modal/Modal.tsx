export interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <section className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50">
      {children}
    </section>
  );
}
