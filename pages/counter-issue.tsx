import { useMemo, useRef, useState } from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";

interface CounterIssueProps {}

const CounterIssue: React.FC<CounterIssueProps> = () => {
  const [count, setCount] = useState(0);
  const countDownRef = useRef<Countdown>(null);
  const [value, SetValue] = useState("");

  const [date, setDate] = useState(Date.now() + 1000 * 60);

  const handleRestart = () => {
    setCount(Date.now() + 1000 * 60);
    if (countDownRef.current) {
      countDownRef.current.api?.start();
    }
  };
  const countDownRenderer: CountdownRendererFn = ({
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    if (completed) {
      // Render a completed state
      return <span onClick={handleRestart}>Restart</span>;
    } else {
      // Render a countdown
      return <span> Re-send in {seconds == 0 ? 60 : seconds} sec...</span>;
    }
  };
  return (
    <>
      <input
        value={value}
        onChange={(e) => SetValue(e.target.value)}
        className="mt-8  max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <br />
      <Countdown
        ref={countDownRef}
        key={count}
        date={date}
        renderer={countDownRenderer}
      />
    </>
  );
};

export default CounterIssue;
