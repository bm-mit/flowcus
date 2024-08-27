import { RefObject, useEffect, useRef, useState } from 'react';

export default function useHover<T extends HTMLElement = HTMLDivElement>(): [
  RefObject<T>,
  boolean,
] {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    node?.addEventListener('mouseenter', handleMouseEnter);
    node?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      node?.removeEventListener('mouseenter', handleMouseEnter);
      node?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);

  return [ref, isHovered];
}
