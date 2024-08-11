import { useContext } from 'react';

import ConfigProfileContext from '@/contexts/ConfigProfile';

export default function useConfigProfile() {
  return useContext(ConfigProfileContext);
}
