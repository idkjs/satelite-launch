/* TypeScript file generated from CountDown.re by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const CountDownBS = require('./CountDown.bs');

// tslint:disable-next-line:interface-over-type-literal
export type Props<T1> = {
  readonly interval: number; 
  readonly onFinished: () => T1; 
  readonly run: boolean
};

export const $$default: React.ComponentType<{
  readonly interval: number; 
  readonly onFinished: () => any; 
  readonly run: boolean
}> = CountDownBS.default;

export default $$default;
