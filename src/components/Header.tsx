import Button from './UI/Button.tsx';
import { useTimersContext } from '../store/timers-context.tsx';

export default function Header() {
  const timersCtx = useTimersContext();
  const isRunning = timersCtx.isRunning;
  return (
    <header>
      <h1>ReactTimer</h1>
      <Button onClick={isRunning ? timersCtx.stopTimers : timersCtx.startTimers}>{isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
