/* TypeScript file generated from Timer.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const TimerBS = require('./Timer.bs');

export const addPrefixDigit: (numberText:string) => string = TimerBS.addPrefixDigit;

export const nextMinuteNumber: (number:number) => number = TimerBS.nextMinuteNumber;

export const nextMinute: (number:number) => string = TimerBS.nextMinute;

export const getNewTime: (hours:string, minutes:string) => [string, string] = function (Arg1: any, Arg2: any) {
  const result = Curry._2(TimerBS.getNewTime, Arg1, Arg2);
  return result
};

export const Timer: (startTime:string) => string = TimerBS.calculateNewTime;
