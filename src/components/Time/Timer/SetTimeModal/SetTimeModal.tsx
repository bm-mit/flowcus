import Modal from '@/components/Modal';
import TimeInput from '@/components/Time/Timer/SetTimeModal/TimeInput';
import useConfigProfileContext from '@/hooks/useConfigProfileContext';
import colors from '@/utils/colors';

export default function SetTimeModal() {
  const { themeColor } = useConfigProfileContext();
  const textColor = colors.textColor(themeColor);

  return (
    <Modal>
      <div
        className="rounded-2xl p-4"
        style={{ backgroundColor: themeColor, color: textColor }}
      >
        <h1 className="mb-2 text-center text-xl">Set Timer</h1>

        <div className="flex items-center font-mono text-3xl">
          <TimeInput>16</TimeInput>:<TimeInput>00</TimeInput>:
          <TimeInput>00</TimeInput>
        </div>
      </div>
    </Modal>
  );
}
