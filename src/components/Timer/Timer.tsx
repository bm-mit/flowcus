'use client';

import db from '@/utils/indexed-db/db';
import localStorage from '@/utils/local-storage';
import { CONFIG_PROFILE_ID } from '@/utils/local-storage/keys';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Clock from './Clock';

interface TimerProps {
  mode: 'clock';
}

export default function Timer({ mode }: TimerProps) {
  const [backgroundUrl, setBackgroundUrl] = useState<string>('');
  const [overlayOpacity, setOverlayOpacity] = useState<number>(1);
  const [overlayColor, setOverlayColor] = useState<string>('black');

  useEffect(() => {
    (async () => {
      const configProfileId = await localStorage.getItem<number>(CONFIG_PROFILE_ID);

      const configProfile = await db.configProfiles.get(configProfileId);

      if (configProfile) {
        setBackgroundUrl(configProfile.backgroundImageUrl);
        setOverlayOpacity(configProfile.overlayOpacity);
        setOverlayColor(configProfile.overlayColor);
      }
    })();
  });

  return (
    <div
      className="flex items-center justify-center w-screen h-screen relative"
    >
      <Image src={backgroundUrl} layout="fill" objectFit="cover" alt="background image" />
      {mode === 'clock' ? <Clock /> : null}
      <div className="absolute w-full h-full" style={{ opacity: overlayOpacity, backgroundColor: overlayColor }} />
    </div>
  );
}
