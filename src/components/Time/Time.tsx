'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Timer from '@/components/Time/Timer';
import TimerModeContext from '@/contexts/TimerModeContext';
import TimerMode from '@/types/timer-mode.types';
import db from '@/utils/indexed-db/db';
import localStorage from '@/utils/local-storage';
import { CONFIG_PROFILE_ID } from '@/utils/local-storage/keys';

import Clock from './Clock';
import TimeModeSelector from './TimeModeSelector';

export default function Time() {
  const { timerMode } = useContext(TimerModeContext);
  const [backgroundUrl, setBackgroundUrl] = useState<string>('/');
  const [overlayOpacity, setOverlayOpacity] = useState<number>(1);
  const [overlayColor, setOverlayColor] = useState<string>('black');

  ReactDOM.preconnect('https://www.images.unsplash.com');

  useEffect(() => {
    (async () => {
      const configProfileId =
        await localStorage.getItem<number>(CONFIG_PROFILE_ID);

      const configProfile = await db.configProfiles.get(configProfileId);

      if (configProfile) {
        setBackgroundUrl(configProfile.backgroundImageUrl);
        setOverlayOpacity(configProfile.overlayOpacity);
        setOverlayColor(configProfile.overlayColor);
      }
    })();
  });

  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <Image
        src={backgroundUrl}
        fill
        priority
        style={{ objectFit: 'cover' }}
        alt="background image"
      />

      <div className="z-10 flex flex-col items-center">
        <Clock className={clsx(timerMode !== TimerMode.clock && 'hidden')} />

        <Timer
          className={clsx(timerMode !== TimerMode.stopwatch && 'hidden')}
        />

        <Timer
          delay={1000000}
          className={clsx(timerMode !== TimerMode.timer && 'hidden')}
        />

        <TimeModeSelector />
      </div>

      <div
        className="absolute size-full"
        style={{ opacity: overlayOpacity, backgroundColor: overlayColor }}
      />
    </div>
  );
}
