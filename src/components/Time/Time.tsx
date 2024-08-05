'use client';

import db from '@/utils/indexed-db/db';
import localStorage from '@/utils/local-storage';
import { CONFIG_PROFILE_ID } from '@/utils/local-storage/keys';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import TimerModeSelector from '@/components/Time/TimerModeSelector';
import TimerMode from '@/types/timer-mode.types';
import Clock from './Clock';

export interface TimerProps {
  mode: TimerMode
}

export default function Time({ mode }: TimerProps) {
  const [backgroundUrl, setBackgroundUrl] = useState<string>('/');
  const [overlayOpacity, setOverlayOpacity] = useState<number>(1);
  const [overlayColor, setOverlayColor] = useState<string>('black');
  const [timerColor, setTimerColor] = useState<string>('white');

  useEffect(() => {
    (async () => {
      const configProfileId = await localStorage.getItem<number>(CONFIG_PROFILE_ID);

      const configProfile = await db.configProfiles.get(configProfileId);

      if (configProfile) {
        setBackgroundUrl(configProfile.backgroundImageUrl);
        setOverlayOpacity(configProfile.overlayOpacity);
        setOverlayColor(configProfile.overlayColor);
        setTimerColor(configProfile.timerColor);
      }
    })();
  });

  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <Image src={backgroundUrl} layout="fill" objectFit="cover" alt="background image" />

      <div className="z-10 flex flex-col items-center">
        {mode === TimerMode.clock ? <Clock timerColor={timerColor} /> : null}
        <TimerModeSelector />
      </div>

      <div className="absolute h-full w-full" style={{ opacity: overlayOpacity, backgroundColor: overlayColor }} />
    </div>
  );
}
