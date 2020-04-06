open Belt;

let first = Array.get(_, 0);

let second = Array.get(_, 1);

let split = (separator, text) =>
  text->Js.String.trim |> Js.String.split(separator);

let splitByColon = split(":");

let toString = (number: int) => number->string_of_int;

let mod60 = number => number mod 60;
// let compose = (f, g, x) => f(g(x));
let compose = (func1, func2, value) => func1(func2(value));
let getMinute = compose(second, splitByColon);
let getHour = compose(first, splitByColon);

let isSingleDigit = numberText => numberText |> int_of_string < 10;

[@genType]
let addPrefixDigit = numberText =>
  isSingleDigit(numberText) ? "0" ++ numberText : numberText;

[@genType]
let nextMinuteNumber = number => mod60(number - 1);

[@genType]
let nextMinute = number =>
  compose(addPrefixDigit, toString, nextMinuteNumber(number));

[@genType]
let getNewTime = (hours, minutes) =>
  switch (hours, minutes) {
  | (hours, "00") => (hours->int_of_string->nextMinute, "59")
  | (hours, "59") => (hours, minutes->int_of_string->nextMinute)
  | (hours, minutes) => (hours, minutes->int_of_string->nextMinute)
  };

[@genType "Timer"]
let calculateNewTime = (startTime: string) => {
  let hour = getHour(startTime) |> Option.getExn;
  let minute = getMinute(startTime) |> Option.getExn;

  let getNewTime = getNewTime(hour, minute);

  let newTime = getNewTime->fst ++ ":" ++ getNewTime->snd;

  Js.log2("newTime", newTime);
  newTime;
};
