/// <reference path="./weapp.d.ts" />

export type ArgsType<T> = T extends (...args: infer P) => any ? P : any[];
export type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any;
export type WeappEventFunction<T> = (detail: T) => any;
