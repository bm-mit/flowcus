import { defaultConfigProfile } from '@/types/config.types';
import db from '@/utils/indexed-db/db';
import localStorage from '@/utils/local-storage';
import { CONFIG_PROFILE_ID } from '@/utils/local-storage/keys';

const config = {
  async getConfigProfile(id: number) {
    return (await db.configProfiles.get(id)) ?? defaultConfigProfile;
  },

  async getCurrentConfigProfile() {
    const configProfileId =
      await localStorage.getItem<number>(CONFIG_PROFILE_ID);

    return this.getConfigProfile(configProfileId);
  },

  async setThemeColor(color: string) {
    const configProfile = await this.getCurrentConfigProfile();

    configProfile.themeColor = color;
    await db.configProfiles.put(configProfile);
  },
};

export default config;
