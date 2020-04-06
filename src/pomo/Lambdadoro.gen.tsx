/* TypeScript file generated from Lambdadoro.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const LambdadoroBS = require('./Lambdadoro.bs');

export const useLambdadoro: (initialTime:(null | undefined | string)) => [string, () => void, () => void, () => void] = function (Arg1: any) {
  const result = LambdadoroBS.useLambdadoro((Arg1 == null ? undefined : Arg1));
  return result
};
