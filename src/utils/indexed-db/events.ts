import { Transaction } from 'dexie';

import { defaultConfigProfile } from '@/types/config.types';

export function populate(transaction: Transaction) {
  transaction.table('configProfiles').add(defaultConfigProfile);
}
