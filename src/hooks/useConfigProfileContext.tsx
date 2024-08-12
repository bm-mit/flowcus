'use client';

import React, { useContext, useEffect, useMemo, useState } from 'react';

import ConfigProfileContext from '@/contexts/ConfigProfileContext';
import ProviderProps from '@/hooks/ProviderProps';
import { ConfigProfile, defaultConfigProfile } from '@/types/config.types';
import config from '@/utils/config';

export default function useConfigProfileContext() {
  return useContext(ConfigProfileContext);
}

export function ConfigProfileProvider({ children }: ProviderProps) {
  const [configProfile, setConfigProfile] =
    useState<ConfigProfile>(defaultConfigProfile);

  useEffect(() => {
    (async () => {
      setConfigProfile(await config.getCurrentConfigProfile());
    })();
  }, []);

  const configProfileMemo = useMemo(() => configProfile, [configProfile]);
  return (
    <ConfigProfileContext.Provider value={configProfileMemo}>
      {children}
    </ConfigProfileContext.Provider>
  );
}
