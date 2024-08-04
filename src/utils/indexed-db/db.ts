'use client';

import Dexie, { type EntityTable } from 'dexie';
import type { ConfigProfile } from '@/types/config.types';

const db = new Dexie('UserConfigsH') as Dexie & {
  configProfiles: EntityTable<ConfigProfile, 'id'>;
};

db.version(1).stores({
  configProfiles: '++id, backgroundImage, overlayColor, overlayOpacity',
});

db.configProfiles.add({
  backgroundImage: 'https://images.unsplash.com/photo-1722648404090-2179fba1b4b0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  overlayOpacity: 0,
  overlayColor: 'black',
});

export default db;
