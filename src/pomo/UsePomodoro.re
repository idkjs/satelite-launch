[@bs.val] external document: Js.t({..}) = "document";

[@genType]
let default = () => {
  let initialTime = "25:00";
  let finishedTime = "00:00";

  let (timerId, setTimerId) = React.useState(() => None);

  let (time, setTime) = React.useState(() => initialTime);

  React.useEffect0(() => {
    setTime(_ => initialTime);
    None;
  });
  let isFinished = startTime => startTime === finishedTime;


  let stopPomodoro =
    () => {
      switch (timerId) {
      | Some(timerId) =>
        timerId->Js.Global.clearInterval;
        setTimerId(_ => None);

      | None => ()
      };
    };
  let finishTimer = () => {
    stopPomodoro();
    finishedTime;
  };
  let updateTime = () => {
    let elem = document##getElementById("time");
    let startTime = elem##textContent;
    let newTime =
      isFinished(startTime)
        ? finishTimer() : Timer.calculateNewTime(startTime);
    setTime(_ => newTime);
  };

  let startPomodoro =
    () => {
      let timerId = Js.Global.setInterval(updateTime, 1000);
      setTimerId(_ => Some(timerId));
    };

  let resetPomodoro =
    () => {
      stopPomodoro();
      setTime(_ => initialTime);
    };

  (time, startPomodoro, stopPomodoro, resetPomodoro);
};
