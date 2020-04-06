/* TypeScript file generated from Payload.re by genType. */
/* eslint-disable import/first */


import {default as makeNotChecked} from './TSPayload';

import * as React from 'react';

// In case of type error, check the type of 'make' in 'Payload.re' and './TSPayload'.
export const makeTypeChecked: React.ComponentType<{}> = makeNotChecked;

// Export 'make' early to allow circular import from the '.bs.js' file.
export const make: unknown = makeTypeChecked as React.ComponentType<{}>;

// tslint:disable-next-line:no-var-requires
const PayloadBS = require('./Payload.bs');

// tslint:disable-next-line:interface-over-type-literal
export type Props = {};

export const $$default: React.ComponentType<{}> = PayloadBS.default;

export default $$default;
