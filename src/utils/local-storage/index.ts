'use client';

import localForage from 'localforage';

import defaultLocalStorageValues from '@/utils/local-storage/default-values';

localForage.config({
  name: 'flowcus',
  driver: localForage.LOCALSTORAGE,
  version: 1.0,
});

const localStorage = {
  getItem: async <T>(
    key: keyof typeof defaultLocalStorageValues,
  ): Promise<T> => {
    const existingItem = await localForage.getItem(key);

    if (existingItem) {
      return existingItem as T;
    }
    await localForage.setItem(key, defaultLocalStorageValues[key]);
    return defaultLocalStorageValues[key] as T;
  },

  setItem: async <T>(key: keyof typeof defaultLocalStorageValues, value?: T) =>
    localForage.setItem(key, value),
};

export default localStorage;
