'use client';

import Dexie, { type EntityTable } from 'dexie';
import type { ConfigProfile } from '@/types/config.types';
import { populate } from '@/utils/indexed-db/events';

export type Db = Dexie & {
  configProfiles: EntityTable<ConfigProfile, 'id'>;
};

const db = new Dexie('UserConfigs') as Db;

db.version(1).stores({
  configProfiles: '++id, backgroundImageUrl, overlayColor, overlayOpacity, timerColor',
});

db.on('populate', populate);

db.open();

export default db;
