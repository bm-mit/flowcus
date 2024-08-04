import Timer from '@/components/Timer';
import meta from '@/components/Timer/Timer.stories';

export default function Home() {
  return (
    <div>
      <Timer mode="clock" background={meta!.args!.background!} />
    </div>
  );
}
