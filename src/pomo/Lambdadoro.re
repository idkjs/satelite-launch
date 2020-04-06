[@bs.val] external document: Js.t({..}) = "document";

[@genType]
let useLambdadoro = (initialTime:option(string)) => {

// provide a default time if no initialTime is set.
let initialTime = 
  Belt.Option.(initialTime->(mapWithDefault("25:00", n => n)));

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
// if useing in reason call `useLambdadoro` if in ts/js call default or {useLambdadoro}
let default = useLambdadoro