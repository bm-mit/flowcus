import defaultLocalStorageValues from '@/utils/local-storage/default-values';

type KeyOfLocalStorage = keyof typeof defaultLocalStorageValues;

export const CONFIG_PROFILE_ID: KeyOfLocalStorage = 'configProfileId';
