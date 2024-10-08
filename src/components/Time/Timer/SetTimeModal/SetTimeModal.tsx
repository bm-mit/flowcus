import { Dispatch, SetStateAction, useCallback, useState } from 'react';

import Modal from '@/components/Modal';
import TimeInput from '@/components/Time/Timer/SetTimeModal/TimeInput';
import useConfigProfileContext from '@/hooks/useConfigProfileContext';
import { useModalVisibilityContext } from '@/hooks/useModalVisibility';
import useTimerContext from '@/hooks/useTimerContext';
import colors from '@/utils/colors';
import time from '@/utils/time';

import CloseModalButton from './CloseModalButton';

export default function SetTimeModal() {
  const [millis, setMillis] = useTimerContext();
  const { themeColor } = useConfigProfileContext();
  const textColor = colors.textColor(themeColor);
  const timeUnits = time.millisToUnits(millis);
  const [hours, setHours] = useState<string>(timeUnits.hours.toString());
  const [minutes, setMinutes] = useState<string>(timeUnits.minutes.toString());
  const [seconds, setSeconds] = useState<string>(timeUnits.seconds.toString());
  const [, toggleModal] = useModalVisibilityContext();

  const closeModal = useCallback(() => {
    setMillis(
      time.unitsToMillis({
        hours: parseInt(hours, 10),
        minutes: parseInt(minutes, 10),
        seconds: parseInt(seconds, 10),
      }),
    );

    toggleModal();
  }, [hours, minutes, seconds, setMillis, toggleModal]);

  const isNumber = useCallback(
    (number: string) =>
      !Number.isNaN(parseFloat(number)) && Number.isFinite(Number(number)),
    [],
  );

  const validateNumber = useCallback(
    (number: string, threshold?: number) => {
      const parsedNumber = parseInt(number, 10);
      if (threshold === undefined) return isNumber(number);
      return isNumber(number) && parsedNumber < threshold;
    },
    [isNumber],
  );

  const validateHours = useCallback(
    (number: string) => validateNumber(number, 100),
    [validateNumber],
  );

  const validateMinutesAndSeconds = useCallback(
    (number: string) => validateNumber(number, 60),
    [validateNumber],
  );

  const onBlur = (
    e: React.FocusEvent<HTMLInputElement>,
    validate: (v: string) => boolean,
    setState: Dispatch<SetStateAction<string>>,
  ) => {
    const currentValue = e.currentTarget.value;
    const parsedValue = parseInt(currentValue, 10);

    if (validate(currentValue)) {
      setState(parsedValue.toString());
    } else {
      setState('0');
    }
  };

  const onBlurHours = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur(e, validateHours, setHours);
  };

  const onBlurMinutes = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur(e, validateMinutesAndSeconds, setMinutes);
  };

  const onBlurSeconds = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur(e, validateMinutesAndSeconds, setSeconds);
  };

  return (
    <Modal>
      <div
        className="relative rounded-2xl p-4"
        style={{ backgroundColor: themeColor, color: textColor }}
      >
        <CloseModalButton
          className="absolute right-2 top-2"
          onClick={closeModal}
        />

        <h1 className="mb-2 text-center text-xl">Set Timer</h1>

        <div className="flex items-center font-mono text-3xl">
          <TimeInput
            value={hours}
            validate={validateHours}
            onValidated={setHours}
            onBlur={onBlurHours}
          />
          :
          <TimeInput
            value={minutes}
            validate={validateMinutesAndSeconds}
            onValidated={setMinutes}
            onBlur={onBlurMinutes}
          />
          :
          <TimeInput
            value={seconds}
            validate={validateMinutesAndSeconds}
            onValidated={setSeconds}
            onBlur={onBlurSeconds}
          />
        </div>
      </div>
    </Modal>
  );
}
