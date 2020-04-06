import {hot} from 'react-hot-loader/root';
import './App.css';

import * as React from 'react';
import TSCheckList from './TSCheckList';
import TSCountDown from './TSCountDown';
import TSPomodoro from './pomo/Clock';
import TSPomodoroOpt from './pomo/ClockOpt';
import ClockDemo from './pomo/ClockDemo';
import Falcon9 from './Falcon9.gen';

const {useState, useCallback} = React;

const TSApp = () => {
  const [checkListComplete, setCheckListComplete] = useState(false);
  const [countDownComplete, setCountDownComplete] = useState(false);
  const launch = useCallback(() => {
    setCountDownComplete(true);
  }, []);

  return (
    <div className="container">
      <div className="left">
        <Falcon9 launch={countDownComplete} />
      </div>
      <div className="right">
        <TSCheckList onChange={setCheckListComplete} />
        <TSPomodoro/>
        <TSPomodoroOpt initialTime="15:00" />
        <TSPomodoroOpt  />
        <h1>ClockDemo</h1>
        <ClockDemo  />
        <h1>ClockDemo</h1>
        <ClockDemo  initialTime="15:00" />
        <TSCountDown
          onFinished={launch}
          run={checkListComplete}
          interval={10}
        />
      </div>
    </div>
  );
};

export default hot(TSApp);
