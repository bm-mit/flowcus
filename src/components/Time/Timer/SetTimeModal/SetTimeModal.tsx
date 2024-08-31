import { useCallback, useState } from 'react';

import Modal from '@/components/Modal';
import TimeInput from '@/components/Time/Timer/SetTimeModal/TimeInput';
import useConfigProfileContext from '@/hooks/useConfigProfileContext';
import useTimerContext from '@/hooks/useTimerContext';
import colors from '@/utils/colors';
import time from '@/utils/time';

export default function SetTimeModal() {
  const [millis, setMillis] = useTimerContext();
  const { themeColor } = useConfigProfileContext();
  const textColor = colors.textColor(themeColor);
  const timeUnits = time.millisToUnits(millis);
  const [hours, setHours] = useState<string>(timeUnits.hours.toString());
  const [minutes, setMinutes] = useState<string>(timeUnits.minutes.toString());
  const [seconds, setSeconds] = useState<string>(timeUnits.seconds.toString());

  const validateNumber = useCallback((number: string, threshold?: number) => {
    const parsedNumber = parseInt(number, 10);
    if (threshold === undefined) return !Number.isNaN(parsedNumber);
    return !Number.isNaN(parsedNumber) && parsedNumber < threshold;
  }, []);

  const validateHours = useCallback(
    (number: string) => validateNumber(number),
    [validateNumber],
  );

  const validateMinutesAndSeconds = useCallback(
    (number: string) => validateNumber(number, 60),
    [validateNumber],
  );

  return (
    <Modal>
      <div
        className="rounded-2xl p-4"
        style={{ backgroundColor: themeColor, color: textColor }}
      >
        <h1 className="mb-2 text-center text-xl">Set Timer</h1>

        <div className="flex items-center font-mono text-3xl">
          <TimeInput
            value={hours}
            validate={validateHours}
            onValidated={(v) => {
              setHours(v);
              console.log('set', v);
            }}
          />
          :
          <TimeInput
            value={minutes}
            validate={validateMinutesAndSeconds}
            onValidated={setMinutes}
          />
          :
          <TimeInput
            value={seconds}
            validate={validateMinutesAndSeconds}
            onValidated={setSeconds}
          />
        </div>
      </div>
    </Modal>
  );
}
