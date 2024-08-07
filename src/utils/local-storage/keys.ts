import defaultLocalStorageValues from '@/utils/local-storage/default-values';

type KeyOfLocalStorage = keyof typeof defaultLocalStorageValues;

export const CONFIG_PROFILE_ID : KeyOfLocalStorage = 'configProfileId';
export const START_STOPWATCH_TIME : KeyOfLocalStorage = 'startStopwatchTime';
export const STOPWATCH_RECORDED_TIME: KeyOfLocalStorage = 'stopwatchTimeRecorded';
export const STOPWATCH_PAUSE_STATE: KeyOfLocalStorage = 'stopwatchPauseState';
