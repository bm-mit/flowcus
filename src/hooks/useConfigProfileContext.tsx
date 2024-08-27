'use client';

import { useLiveQuery } from 'dexie-react-hooks';
import { useContext } from 'react';

import ConfigProfileContext from '@/contexts/ConfigProfileContext';
import ProviderProps from '@/hooks/ProviderProps';
import { defaultConfigProfile } from '@/types/config.types';
import db from '@/utils/indexed-db/db';
import defaultLocalStorageValues from '@/utils/local-storage/default-values';

export default function useConfigProfileContext() {
  return useContext(ConfigProfileContext);
}

export function ConfigProfileProvider({ children }: ProviderProps) {
  const configProfile =
    useLiveQuery(
      () => db.configProfiles.get(defaultLocalStorageValues.configProfileId),
      [],
    ) ?? defaultConfigProfile;

  return (
    <ConfigProfileContext.Provider value={configProfile}>
      {children}
    </ConfigProfileContext.Provider>
  );
}
