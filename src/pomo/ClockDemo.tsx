import * as React from 'react';
import {useLambdadoro} from './Lambdadoro.gen';
import "./Clock.css";
// create a type defining our option string prop type coming in from UsePomodor.gen
type Props = {
  initialTime?: string;
};

const ClockDemo: React.FC<Props> = (props: Props) => {
  let [time, startPomodoro, stopPomodoro, resetPomodoro] = useLambdadoro(
    props.initialTime
  );

  return (
    <main className="app manager">
      <div className="timer-container">
        <h2 className="title">
          Lambdadoro in Typescript<a href="https://github/idkjs/lambdadoro"></a>
        </h2>
        <h1 id="lambdadoro-time" className="countdown">
          {time}
        </h1>
      </div>

      <div>
        <div className="options">
          <div className="option">
            <div className="button-groups">
              <button
                id="start-button"
                className="button button--primary"
                onClick={startPomodoro}
              >
                Start
              </button>
              <button
                id="stop-button"
                className="button button--danger"
                onClick={stopPomodoro}
              >
                Stop
              </button>
              <button
                id="reset-button"
                className="button button--reset"
                onClick={resetPomodoro}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClockDemo
