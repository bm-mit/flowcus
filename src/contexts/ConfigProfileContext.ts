import { createContext } from 'react';

import { ConfigProfile, defaultConfigProfile } from '@/types/config.types';

const ConfigProfileContext = createContext<ConfigProfile>(defaultConfigProfile);

export default ConfigProfileContext;
