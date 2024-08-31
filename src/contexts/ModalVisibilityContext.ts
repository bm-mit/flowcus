import { createContext } from 'react';

export type ModalVisibilityContextType = [boolean, () => void];
export const ModalVisibilityContext = createContext<ModalVisibilityContextType>(
  [true, () => {}],
);

export default ModalVisibilityContext;
