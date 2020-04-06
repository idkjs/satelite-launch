/* TypeScript file generated from UseCountDown.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const UseCountDownBS = require('./UseCountDown.bs');

export const $$default: <T1>(interval:number, run:boolean, onFinished:(() => T1)) => number = function <T1>(Arg1: any, Arg2: any, Arg3: any) {
  const result = Curry._3(UseCountDownBS.default, Arg1, Arg2, Arg3);
  return result
};

export default $$default;
