import { useContext } from 'react';

import ConfigProfileContext from '@/contexts/ConfigProfileContext';

export default function useConfigProfileContext() {
  return useContext(ConfigProfileContext);
}
