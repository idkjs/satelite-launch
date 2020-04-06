/* TypeScript file generated from UseMessageToast.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const UseMessageToastBS = require('./UseMessageToast.bs');

// tslint:disable-next-line:interface-over-type-literal
export type message = { readonly expires: number; readonly text: string };

export const hook: () => [message[], (_1:string) => void] = UseMessageToastBS.hook;
