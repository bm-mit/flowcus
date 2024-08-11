import { defaultConfigProfile } from '@/types/config.types';
import db from '@/utils/indexed-db/db';

const config = {
  async getConfigProfile(id: number) {
    return (await db.configProfiles.get(id)) ?? defaultConfigProfile;
  },
};

export default config;
