/* TypeScript file generated from Rocket.re by genType. */
/* eslint-disable import/first */


import {default as makeNotChecked} from './TSRocket';

import * as React from 'react';

// In case of type error, check the type of 'make' in 'Rocket.re' and './TSRocket'.
export const makeTypeChecked: React.ComponentType<{}> = makeNotChecked;

// Export 'make' early to allow circular import from the '.bs.js' file.
export const make: unknown = makeTypeChecked as React.ComponentType<{}>;

// tslint:disable-next-line:no-var-requires
const RocketBS = require('./Rocket.bs');

// tslint:disable-next-line:interface-over-type-literal
export type Props = {};

export const $$default: React.ComponentType<{}> = RocketBS.default;

export default $$default;
