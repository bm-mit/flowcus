import { RefObject, useEffect, useRef, useState } from 'react';

export default function useHover(): [RefObject<HTMLDivElement>, boolean] {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
